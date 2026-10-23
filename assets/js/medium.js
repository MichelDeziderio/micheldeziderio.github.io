// Integracao Medium: RSS XML -> artigos, com cache local para indisponibilidade.
(() => {
const articlesGrid = document.getElementById('articlesGrid');

function getThumbnail(content) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');
  const firstImage = doc.querySelector('img');
  const firstImageUrl = firstImage ? firstImage.src : null;
  return firstImageUrl;
}


// O navegador nao pode ler o RSS do Medium diretamente por CORS.
// Consultamos via proxy.cors.dev e interpretamos o XML com DOMParser.
const MEDIUM_FEED_URL = 'https://medium.com/feed/@micheldeziderio';
const MEDIUM_CACHE_KEY = 'medium-posts-v1';
const MEDIUM_CACHE_TTL = 6 * 60 * 60 * 1000;

function parseMediumRSS(xml) {
  const rss = new DOMParser().parseFromString(xml, 'application/xml');

  if (rss.querySelector('parsererror') || !rss.querySelector('rss > channel')) {
    throw new Error('Resposta recebida nao e um feed RSS valido.');
  }

  const items = [...rss.querySelectorAll('channel > item')];

  if (!items.length) {
    throw new Error('O feed do Medium nao retornou artigos.');
  }

  return items.slice(0, 8).map(item => {
    const getValue = tag => item.getElementsByTagName(tag)[0]?.textContent?.trim() || '';
    const content = getValue('content:encoded') || getValue('description');

    return {
      title: getValue('title'),
      link: getValue('link'),
      pubDate: getValue('pubDate'),
      content,
      description: getValue('description') || content
    };
  });
}

function readMediumCache() {
  try {
    const cache = JSON.parse(localStorage.getItem(MEDIUM_CACHE_KEY));
    return Array.isArray(cache?.items) && cache.items.length ? cache : null;
  } catch {
    return null;
  }
}

async function getMediumPosts() {
  const cached = readMediumCache();

  if (cached && Date.now() - cached.savedAt < MEDIUM_CACHE_TTL) {
    return cached.items;
  }

  try {
    // O proxy libera a leitura do XML no navegador; o DOMParser faz a conversao.
    const response = await fetch(`https://proxy.cors.dev/${MEDIUM_FEED_URL}`, {
      signal: AbortSignal.timeout(12000)
    });

    if (!response.ok) {
      throw new Error(`Medium RSS: HTTP ${response.status}`);
    }

    const posts = parseMediumRSS(await response.text());

    try {
      localStorage.setItem(MEDIUM_CACHE_KEY, JSON.stringify({
        savedAt: Date.now(),
        items: posts
      }));
    } catch {
      // A pagina continua funcionando se o localStorage estiver indisponivel.
    }

    return posts;
  } catch (error) {
    console.warn('Falha ao consultar feed do Medium:', error);

    if (cached) {
      return cached.items;
    }

    throw error;
  }
}

function escapeMediumHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

function safeMediumURL(value) {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) ? escapeMediumHTML(url.href) : '';
  } catch {
    return '';
  }
}

async function fetchMediumPosts() {
  try {
    const data = { items: await getMediumPosts() };

    articlesGrid.innerHTML = data.items.slice(0, 8).map(post => {
      const image = safeMediumURL(getThumbnail(post.content)) || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop';
      const link = safeMediumURL(post.link) || 'https://medium.com/@micheldeziderio';
      const title = escapeMediumHTML(post.title);
      const descriptionDoc = new DOMParser().parseFromString(post.description, 'text/html');
      const cleanDescription = (descriptionDoc.body.textContent || '').replace(/\s+/g, ' ').trim();
      const date = new Date(post.pubDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });

      return `
        <article class="article-card reveal">
          <a href="${link}" target="_blank" rel="noopener noreferrer">
            <div class="article-cover">
              <img src="${image}" alt="${title}" loading="lazy">
            </div>
            <div class="card-body">
              <h3>${title}</h3>
              <p>${escapeMediumHTML(cleanDescription.slice(0, 95))}${cleanDescription.length > 95 ? '...' : ''}</p>
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

fetchMediumPosts();
})();
