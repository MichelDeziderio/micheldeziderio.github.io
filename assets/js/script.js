
const experiences = [
  {
    role: 'Instrutor de Cursos',
    company: 'Alura',
    period: 'Janeiro 2026 - Atualmente',
    description: [
      'Instrutor de Desenvolvimento Front-End com Angular 21, focado em arquitetura escalável, Reactive Forms, tipagem forte e boas práticas. Ensino Angular do nível júnior ao sênior, abordando fundamentos e padrões avançados usados em projetos corporativos.'
    ],
    stack: [
      'Angular 21',
      'TypeScript',
      'RxJS',
      'Signals',
      'Reactive Forms',
      'Standalone Components',
      'Jest',
      'Arquitetura Front-End',
      'Design Patterns'
    ]
  },
  {
    role: 'Desenvolvedor Front-End Sênior',
    company: 'GFT Technologies SE',
    period: 'Agosto 2024 - Atualmente',
    description: [
      'Atuação em projetos do setor financeiro focados na modernização de portais corporativos e evolução da experiência digital do cliente.',
      'Desenvolvimento de aplicações escaláveis utilizando Angular 19+, arquitetura baseada em micro-frontends e serviços em nuvem na AWS.',
      'Participação na implementação de autenticação com AWS Cognito, padronização de componentes reutilizáveis e construção de aplicações com foco em performance, modularidade e alta disponibilidade.'
    ],
    stack: [
      'Angular 19+',
      'TypeScript',
      'Micro-frontends',
      'AWS',
      'Cognito',
      'RxJS',
      'Design Systems',
      'Arquitetura Escalável'
    ]
  },
  {
    role: 'Desenvolvedor Front-End Sênior',
    company: 'Rabbot',
    period: 'Outubro 2023 - Julho 2024',
    description: [
      'Atuação na modernização e evolução de aplicações voltadas ao setor de logística e inteligência operacional.',
      'Evolução da aplicação para Angular 16, adoção de micro-frontends e escalabilidade da arquitetura.',
      'Liderança na criação do Design System e implementação de endpoints BFF em NestJS com integração gRPC.'
    ],
    stack: [
      'Angular 16',
      'TypeScript',
      'Micro-frontends',
      'NestJS',
      'gRPC',
      'Design System',
      'BFF'
    ]
  },
  {
    role: 'Desenvolvedor Front-End Sênior',
    company: 'Conquest One - Especialista de Staffing em TI',
    period: 'Março 2023 - Agosto 2023',
    description: [
      'Atuação em projetos do mercado financeiro com foco em segurança e experiência do usuário.',
      'Contribuição na implementação de MFA e novas camadas de autenticação no Portal do Cliente da Guide Investimentos.',
      'Desenvolvimento de aplicações internas e BackOffice para gerenciamento de clientes com e sem MFA.'
    ],
    stack: [
      'Angular',
      'TypeScript',
      'MFA',
      'Segurança',
      'BackOffice',
      'APIs REST',
      'UX'
    ]
  },
  {
    role: 'Desenvolvedor Front-End Sênior',
    company: 'Conquest One - Especialista de Staffing em TI',
    period: 'Novembro 2022 - Fevereiro 2023',
    description: [
      'Atuação em projetos corporativos da Bayer voltados à integração e centralização de produtos após aquisição da Monsanto.',
      'Desenvolvimento de novos componentes em React e criação de bibliotecas de Design System.',
      'Melhorias contínuas na experiência do usuário utilizando pipelines e processos de entrega com Azure DevOps.'
    ],
    stack: [
      'React',
      'TypeScript',
      'Design System',
      'Azure DevOps',
      'Componentização',
      'UX'
    ]
  },
  {
    role: 'Desenvolvedor Front-End Sênior',
    company: 'Guide Investimentos',
    period: 'Janeiro 2022 - Novembro 2022',
    description: [
      'Liderança no desenvolvimento e evolução do Portal do Cliente da Guide Investimentos.',
      'Implementação de campanhas, central de notificações e melhorias de experiência do usuário.',
      'Atuação em ajustes e melhorias no aplicativo nativo iOS utilizando Swift.'
    ],
    stack: [
      'Angular',
      'TypeScript',
      'Swift',
      'RxJS',
      'Portal Financeiro',
      'UX',
      'APIs REST'
    ]
  },
  {
    role: 'Desenvolvedor Front-End Sênior',
    company: 'Conquest One - Especialista de Staffing em TI',
    period: 'Março 2020 - Dezembro 2021',
    description: [
      'Atuação na Guide Investimentos no desenvolvimento de aplicações Front-End com Angular.',
      'Desenvolvimento de serviços Back-End em Node.js e integrações com APIs REST.',
      'Participação em melhorias de usabilidade e ajustes no aplicativo nativo Swift.'
    ],
    stack: [
      'Angular',
      'Node.js',
      'TypeScript',
      'Swift',
      'APIs REST',
      'UX'
    ]
  },
  {
    role: 'Desenvolvedor Front-End Pleno',
    company: 'FCamara Consulting & Training',
    period: 'Junho 2019 - Março 2020',
    description: [
      'Atuação em projetos de Business Intelligence e dashboards analíticos de alta performance.',
      'Desenvolvimento de soluções para Leroy Merlin, Itaú Latam, Volkswagen, grupo FCA e IPSOS.',
      'Construção de interfaces voltadas à visualização de dados estratégicos e indicadores corporativos.'
    ],
    stack: [
      'Angular',
      'TypeScript',
      'Highcharts',
      'Chart.js',
      'Google Charts',
      'BI',
      'Dashboards',
      'Sass'
    ]
  },
  {
    role: 'Desenvolvedor Front-End',
    company: 'Degrau Publicidade e Internet',
    period: 'Dezembro 2017 - Maio 2019',
    description: [
      'Criação de sites institucionais, landing pages e plataformas de e-commerce.',
      'Atuação com WordPress, WooCommerce, Magento e aplicações web customizadas.',
      'Projetos voltados para SEO, performance, marketing digital e plataformas administrativas.'
    ],
    stack: [
      'WordPress',
      'WooCommerce',
      'Magento',
      'HTML5',
      'CSS3',
      'JavaScript',
      'SEO'
    ]
  },
  {
    role: 'Web Designer',
    company: 'S.B.D.T.F.P',
    period: 'Abril 2008 - Novembro 2016',
    description: [
      'Desenvolvimento de sites responsivos e landing pages.',
      'Atuação em SEO, mídias sociais e campanhas de e-mail marketing.',
      'Criação de interfaces focadas em usabilidade e comunicação visual.'
    ],
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'SEO',
      'Marketing Digital',
      'E-mail Marketing'
    ]
  }
];

const INITIAL_EXPERIENCES_LIMIT = 4;

let isExperienceExpanded = false;

const timeline = document.getElementById('timeline');

const experienceFooter = document.createElement('div');
experienceFooter.className = 'experience-footer';

const experienceToggleButton = document.createElement('button');
experienceToggleButton.type = 'button';
experienceToggleButton.className = 'experience-toggle';
experienceToggleButton.setAttribute('aria-expanded', 'false');

experienceFooter.appendChild(experienceToggleButton);
timeline.insertAdjacentElement('afterend', experienceFooter);

function renderTimeline() {
  timeline.innerHTML = '';

  const visibleExperiences = isExperienceExpanded
    ? experiences
    : experiences.slice(0, INITIAL_EXPERIENCES_LIMIT);

  visibleExperiences.forEach((item, index) => {
    const side = index % 2 === 0 ? 'left' : 'right';

    timeline.insertAdjacentHTML('beforeend', `
      <div class="timeline-item reveal">
        ${side === 'left' ? cardTemplate(item, side) : '<div></div>'}
        <div class="timeline-marker"><span></span></div>
        ${side === 'right' ? cardTemplate(item, side) : '<div></div>'}
      </div>
    `);
  });

  updateExperienceToggleButton();
  observeReveals();
}

function updateExperienceToggleButton() {
  const hasMoreExperiences = experiences.length > INITIAL_EXPERIENCES_LIMIT;

  experienceToggleButton.textContent = isExperienceExpanded
    ? 'Mostrar menos experiências'
    : 'Ver mais experiências';

  experienceToggleButton.classList.toggle('expanded', isExperienceExpanded);
  experienceToggleButton.setAttribute('aria-expanded', String(isExperienceExpanded));
}

experienceToggleButton.addEventListener('click', () => {
  isExperienceExpanded = !isExperienceExpanded;
  renderTimeline();

  if (!isExperienceExpanded) {
    timeline.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});

function cardTemplate(item, side) {
  return `
    <article class="timeline-card ${side} reveal">
      <h3>${item.role}</h3>
      <h4>${item.company}</h4>
      <small>${item.period}</small>

      <div class="timeline-description">
        ${item.description
      .map(text => `<p>${text}</p>`)
      .join('')}
      </div>

      <footer class="timeline-stack">
        ${item.stack
      .map(stack => `<span>${stack}</span>`)
      .join('')}
      </footer>
    </article>
  `;
}

renderTimeline();

const projectsGrid = document.getElementById('projectsGrid');
const articlesGrid = document.getElementById('articlesGrid');

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

function getThumbnail(content) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');
  const firstImage = doc.querySelector('img');
  const firstImageUrl = firstImage ? firstImage.src : null;
  return firstImageUrl;
}

async function fetchMediumPosts() {
  try {
    const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@micheldeziderio');
    const data = await response.json();

    articlesGrid.innerHTML = data.items.slice(0, 5).map(post => {
      const image = getThumbnail(post.content) || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop';
      const cleanDescription = post.description.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
      const date = new Date(post.pubDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });

      return `
        <article class="article-card reveal">
          <a href="${post.link}" target="_blank">
            <div class="article-cover">
              <img src="${image}" alt="${post.title}">
            </div>
            <div class="card-body">
              <h3>${post.title}</h3>
              <p>${cleanDescription.slice(0, 95)}...</p>
              <div class="article-meta">
                <span><i class="fa-regular fa-clock"></i> ${estimateReadingTime(post.content)} min de leitura</span>
                <span>${date}</span>
              </div>
            </div>
          </a>
        </article>
      `;
    }).join('');

    observeReveals();
  } catch (error) {
    articlesGrid.innerHTML = '<div class="loading-card">Não foi possível carregar os artigos do Medium.</div>';
  }
}

function estimateReadingTime(html) {
  const text = html.replace(/<[^>]*>/g, ' ');
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function observeReveals() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal:not(.visible)').forEach(element => observer.observe(element));
}

const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
});

const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

function filterStack(filter = "frontend", button = null) {
    const techFilters = document.querySelectorAll(".tech-filter");
    const techItems = document.querySelectorAll(".tech-item");

    techFilters.forEach((btn) => {
      btn.classList.remove("active");
    });

    button?.classList.add("active");

    techItems.forEach((item) => {
      const shouldShow =
        filter === "all" ||
        item.classList.contains(filter);

      item.classList.toggle("hidden", !shouldShow);
    });
  }

  window.addEventListener("load", () => {
    filterStack(
      "frontend",
      document.querySelector(".tech-filter")
    );
  });


const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('show', window.scrollY > 500);
});

scrollTop.addEventListener('click', () => {
  smoothScrollTo(0, 900);
});

function smoothScrollTo(targetY, duration = 900) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function animation(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const ease = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

const navLinks = document.querySelectorAll('.nav a[href^="#"]');
const sections = document.querySelectorAll("section[id]");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    navLinks.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");

    const headerOffset = 90;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    smoothScrollTo(targetPosition, 900);
  });
});

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

const educationItems = [
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Faculdade Impacta',
    description: 'Formação voltada para engenharia de software, arquitetura de sistemas, banco de dados, desenvolvimento web e boas práticas de programação.'
  },
  {
    icon: 'fa-brands fa-node-js',
    title: 'Node.js Microservices: NestJS, RabbitMQ and Cloud Services',
    institution: 'Udemy Academy',
    description: 'Arquitetura de microsserviços utilizando NestJS, mensageria com RabbitMQ e integração com serviços em nuvem.'
  },
  {
    icon: 'fa-brands fa-apple',
    title: 'Desenvolvimento iOS 11 Swift 4',
    institution: 'Udemy Academy',
    description: 'Desenvolvimento de aplicações nativas para iOS utilizando Swift, componentes reutilizáveis e navegação mobile.'
  },
  {
    icon: 'fa-brands fa-node-js',
    title: 'Iniciando com NodeJS',
    institution: 'Udemy Academy',
    description: 'Introdução ao ecossistema Node.js com MongoDB, Express, Nodemon e aplicações em tempo real.'
  },
  {
    icon: 'fa-brands fa-angular',
    title: 'Angular para Construção de Web Apps',
    institution: 'Caelum Ensino e Inovação',
    description: 'Construção de aplicações web modernas utilizando Angular, componentização, serviços e arquitetura Front-End.'
  },
  {
    icon: 'fa-brands fa-react',
    title: 'React.js Ninja',
    institution: 'Udemy Academy',
    description: 'Desenvolvimento de aplicações React com componentização, gerenciamento de estado e integração com Webpack.'
  },
  {
    icon: 'fa-brands fa-angular',
    title: 'Angular CLI 6 e GraphQL',
    institution: 'Udemy Academy',
    description: 'Criação de aplicações Angular integradas com GraphQL, arquitetura escalável e consumo eficiente de APIs.'
}];

const educationGrid = document.querySelector('.education-grid');
educationItems.forEach(item => {
  educationGrid.insertAdjacentHTML('beforeend', ` 
    <article class="education-card reveal"> 
      <div class="education-icon"> 
        <i class="${item.icon}"></i> 
      </div> 
      <div class="education-content"> 
        <h3>${item.title}</h3> 
        <h4>${item.institution}</h4> 
        <p>${item.description}</p> 
      </div> 
    </article> `);
});

observeReveals();
fetchGithubRepos();
fetchMediumPosts();
