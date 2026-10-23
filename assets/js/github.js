// Integracao GitHub: lista e renderiza os repositorios no portfolio.
(() => {
const projectsGrid = document.getElementById('projectsGrid');

async function fetchGithubRepos() {
  try {
    const response = await fetch('https://api.github.com/users/MichelDeziderio/repos?sort=updated&per_page=12');
    const repos = await response.json();

    const filtered = repos
      .filter(repo => !repo.fork)
      .slice(0, 8);

    projectsGrid.innerHTML = filtered.map(repo => {
      const language = repo.language || 'Projeto';
      const description = repo.description || 'Projeto público desenvolvido por Michel Deziderio.';
      const homepage = repo.homepage ? `<a href="${repo.homepage}" target="_blank" aria-label="Abrir demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : '';

      return `
        <article class="project-card reveal">
          <div class="project-cover">
            <img src="https://opengraph.githubassets.com/michel-portfolio/${repo.full_name}" alt="${repo.name}">
            <div class="badges">
              <span><i class="fa-solid fa-star"></i> ${repo.stargazers_count}</span>
              <span>${language}</span>
            </div>
          </div>
          <div class="card-body">
            <h3>${formatRepoName(repo.name)}</h3>
            <p>${description.slice(0, 120)}${description.length > 120 ? '...' : ''}</p>
            <div class="card-actions">
              <a href="${repo.html_url}" target="_blank" aria-label="Abrir código"><i class="fa-brands fa-github"></i></a>
              ${homepage}
            </div>
          </div>
        </article>
      `;
    }).join('');

    observeReveals();
  } catch (error) {
    projectsGrid.innerHTML = '<div class="loading-card">Não foi possível carregar os projetos do GitHub.</div>';
  }
}

function formatRepoName(name) {
  return name
    .replaceAll('-', ' ')
    .replaceAll('_', ' ')
    .replace(/\b\w/g, letter => letter.toUpperCase());
}

fetchGithubRepos();
})();
