/**
 * Cultulangues Content Loader
 * ============================
 * Fetches content from content/services.json and populates
 * the website dynamically. Replaces hardcoded HTML content.
 *
 * Usage:
 *   <script src="js/content-loader.js"></script>
 *   // Then use data-content attributes in HTML
 */

(function () {
  'use strict';

  const BASE = (function () {
    const scripts = document.querySelectorAll('script[src]');
    for (const s of scripts) {
      if (s.src.includes('content-loader.js')) {
        return s.src.replace(/js\/content-loader\.js.*$/, '');
      }
    }
    return document.baseURI.replace(/[^/]*$/, '');
  })();

  let _servicesData = null;
  let _pagesData = null;

  // ─── DATA FETCHING ───────────────────────────────────────────────────────

  async function loadServicesJSON() {
    if (_servicesData) return _servicesData;
    try {
      const resp = await fetch(BASE + 'content/services.json');
      if (!resp.ok) throw new Error('Failed to load services.json');
      _servicesData = await resp.json();
      return _servicesData;
    } catch (e) {
      console.warn('[ContentLoader] Could not load services.json:', e.message);
      return null;
    }
  }

  async function loadPagesJSON() {
    if (_pagesData) return _pagesData;
    try {
      const resp = await fetch(BASE + 'content/pages.json');
      if (!resp.ok) throw new Error('Failed to load pages.json');
      _pagesData = await resp.json();
      return _pagesData;
    } catch (e) {
      console.warn('[ContentLoader] Could not load pages.json:', e.message);
      return null;
    }
  }

  // ─── SERVICE HELPERS ─────────────────────────────────────────────────────

  function getServices(data) {
    return data ? data.services || [] : [];
  }

  function getCategories(data) {
    return data ? data.categories || [] : [];
  }

  function getServicesByCategory(data, categoryId) {
    return getServices(data).filter(s => s.category === categoryId);
  }

  function getServiceById(data, id) {
    return getServices(data).find(s => s.id === id) || null;
  }

  function getContact(data) {
    return data ? data.contact || {} : {};
  }

  function getSEO(data, serviceId) {
    if (!data || !data.seo) return {};
    return data.seo[serviceId] || {};
  }

  function getNavigation(data) {
    if (!data || !data.navigation) return {};
    return data.navigation;
  }

  function getSearchIndex(data) {
    if (!data || !data.searchIndex) return [];
    return data.searchIndex;
  }

  // ─── IMAGE HELPERS ───────────────────────────────────────────────────────

  function resolveImagePath(imgPath) {
    if (!imgPath) return '';
    if (imgPath.startsWith('http://') || imgPath.startsWith('https://') || imgPath.startsWith('//')) {
      return imgPath;
    }
    return BASE + imgPath;
  }

  function getImageForService(service) {
    if (service.images && service.images.length > 0) {
      const img = service.images[0];
      if (img.desktop) return resolveImagePath(img.desktop);
    }
    return resolveImagePath(service.image || '');
  }

  function getServiceImages(service) {
    if (service.images) {
      return service.images.map(img => ({
        desktop: resolveImagePath(img.desktop || ''),
        mobile: resolveImagePath(img.mobile || ''),
        thumbnail: resolveImagePath(img.thumbnail || ''),
        alt: img.alt || '',
      }));
    }
    return [{ desktop: resolveImagePath(service.image || ''), mobile: '', thumbnail: '', alt: service.title || '' }];
  }

  // ─── CONTENT RENDERING ───────────────────────────────────────────────────

  function renderServiceCard(service, options = {}) {
    const {
      accent = 'purple',
      showPrice = true,
      showSchedule = true,
      showLanguage = true,
      compact = false,
    } = options;

    const priceObj = service.price || {};
    const priceAmount = priceObj.amount || '';
    const priceCurrency = priceObj.currency || '$';
    const duration = service.duration || '';
    const schedule = service.schedule || '';
    const groupSize = service.maxStudents || service.groupSize || '';
    const lang = service.language === 'en' ? 'English' : 'Francais';
    const imgSrc = getImageForService(service);

    const highlights = [];
    if (duration) highlights.push(duration);
    if (groupSize) highlights.push(groupSize + ' max');
    if (schedule) highlights.push(schedule);

    return `
      <a href="${resolveImagePath(service.pageUrl || '#')}" class="poc-card" data-accent="${accent}">
        <div class="poc-card-visual">
          <img src="${imgSrc}" alt="${service.title || ''}" loading="lazy">
          ${showLanguage ? `
          <span class="poc-speech-bubble">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            ${lang}
          </span>` : ''}
        </div>
        <div class="poc-card-body">
          <h4 class="poc-card-title">${service.title || ''}</h4>
          <p class="poc-card-desc">${service.subtitle || service.description || ''}</p>
          ${highlights.length ? `
          <div class="poc-card-highlights">
            ${highlights.map(h => `
            <span class="poc-highlight">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              ${h}
            </span>`).join('')}
          </div>` : ''}
          ${showPrice && priceAmount ? `
          <div class="poc-card-footer">
            <span class="poc-card-price">${priceAmount} ${priceCurrency}</span>
            <span class="poc-card-cta">Decouvrir <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
          </div>` : ''}
        </div>
      </a>`;
  }

  function renderServiceDetail(service) {
    const sections = [];

    if (service.description) {
      sections.push(`
        <div class="program-overview">
          <p>${service.description}</p>
        </div>`);
    }

    if (service.richSections && service.richSections.length > 0) {
      sections.push(renderRichSections(service.richSections));
    }

    if (service.included && service.included.length > 0) {
      sections.push(`
        <div style="margin-top: var(--space-xl)">
          <div class="section-header">
            <h2>Ce que <span class="text-gradient">vous obtenez</span></h2>
          </div>
          <div class="compact-inclusions">
            ${service.included.map(item => `
              <div class="compact-inclusion">
                <span class="ci-icon">&#x1F4CB;</span>
                <p class="ci-text">${item}</p>
              </div>`).join('')}
          </div>
        </div>`);
    }

    if (service.benefits && service.benefits.length > 0) {
      sections.push(`
        <div style="margin-top: var(--space-xl)">
          <div class="section-header">
            <h2>Pourquoi ca <span class="text-gradient">fonctionne</span></h2>
          </div>
          <div class="benefits-grid">
            ${service.benefits.map(item => `
              <div class="benefit-card">
                <div class="benefit-icon">&#x2714;</div>
                <p>${item}</p>
              </div>`).join('')}
          </div>
        </div>`);
    }

    if (service.objectives && service.objectives.length > 0) {
      sections.push(`
        <div style="margin-top: var(--space-xl)">
          <div class="section-header">
            <h2>Objectifs <span class="text-gradient">pedagogiques</span></h2>
          </div>
          <div class="compact-inclusions">
            ${service.objectives.map(item => `
              <div class="compact-inclusion">
                <span class="ci-icon">&#x1F3AF;</span>
                <p class="ci-text">${item}</p>
              </div>`).join('')}
          </div>
        </div>`);
    }

    if (service.structure && service.structure.length > 0) {
      sections.push(`
        <div style="margin-top: var(--space-xl)">
          <div class="section-header">
            <h2>Structure du <span class="text-gradient">programme</span></h2>
          </div>
          <div class="structure-grid">
            ${service.structure.map(item => `
              <div class="structure-item">
                <span class="si-label">${item.label || ''}</span>
                <span class="si-value">${item.value || ''}</span>
              </div>`).join('')}
          </div>
        </div>`);
    }

    return sections.join('\n');
  }

  function renderRichSections(sections) {
    if (!sections) return '';
    return sections.map(section => {
      switch (section.type) {
        case 'paragraph':
          return `<p>${section.content}</p>`;
        case 'bullet-list':
          return `<ul class="content-list">${(section.items || []).map(i => `<li>${i}</li>`).join('')}</ul>`;
        case 'warning':
          return `<div class="content-warning"><strong>Attention:</strong> ${section.content}</div>`;
        case 'quote':
          return `<blockquote class="content-quote">${section.content}</blockquote>`;
        case 'image':
          return `<figure class="content-image"><img src="${resolveImagePath(section.src || '')}" alt="${section.alt || ''}" loading="lazy"></figure>`;
        default:
          return '';
      }
    }).join('\n');
  }

  // ─── SEARCH ──────────────────────────────────────────────────────────────

  function searchServices(query, data) {
    if (!query || !data || !data.searchIndex) return [];
    const q = query.toLowerCase().trim();
    const results = [];
    for (const entry of data.searchIndex) {
      if (
        entry.title.toLowerCase().includes(q) ||
        entry.description.toLowerCase().includes(q) ||
        (entry.keywords || []).some(kw => kw.toLowerCase().includes(q))
      ) {
        results.push(entry);
      }
    }
    return results;
  }

  // ─── DOM POPULATION ──────────────────────────────────────────────────────

  function populateDataContentElements(data) {
    if (!data) return;

    document.querySelectorAll('[data-content]').forEach(el => {
      const path = el.getAttribute('data-content');
      const value = resolveJsonPath(data, path);
      if (value !== undefined && value !== null) {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-content-html]').forEach(el => {
      const path = el.getAttribute('data-content-html');
      const value = resolveJsonPath(data, path);
      if (value !== undefined && value !== null) {
        el.innerHTML = value;
      }
    });

    document.querySelectorAll('[data-content-src]').forEach(el => {
      const path = el.getAttribute('data-content-src');
      const value = resolveJsonPath(data, path);
      if (value) {
        el.src = resolveImagePath(value);
      }
    });

    document.querySelectorAll('[data-service-grid]').forEach(container => {
      const categoryId = container.getAttribute('data-service-grid');
      const services = categoryId
        ? getServicesByCategory(data, categoryId)
        : getServices(data);
      const accent = container.getAttribute('data-accent') || 'purple';
      container.innerHTML = services.map(s => renderServiceCard(s, { accent })).join('');
    });

    document.querySelectorAll('[data-service-detail]').forEach(container => {
      const serviceId = container.getAttribute('data-service-detail');
      const service = getServiceById(data, serviceId);
      if (service) {
        container.innerHTML = renderServiceDetail(service);
      }
    });
  }

  function resolveJsonPath(obj, path) {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : undefined;
    }, obj);
  }

  // ─── INITIALIZATION ──────────────────────────────────────────────────────

  async function init() {
    const [servicesData, pagesData] = await Promise.all([
      loadServicesJSON(),
      loadPagesJSON(),
    ]);

    if (servicesData) {
      populateDataContentElements(servicesData);
      window.cultulanguesData = servicesData;
      window.cultulanguesServices = servicesData.services || [];
      window.cultulanguesCategories = servicesData.categories || [];
    }

    if (pagesData) {
      window.cultulanguesPages = pagesData;
    }

    document.dispatchEvent(new CustomEvent('cultulangues:content-loaded', {
      detail: { services: servicesData, pages: pagesData },
    }));
  }

  // ─── PUBLIC API ──────────────────────────────────────────────────────────

  window.CultulanguesContent = {
    load: loadServicesJSON,
    loadPages: loadPagesJSON,
    getServices: getServices,
    getCategories: getCategories,
    getByCategory: getServicesByCategory,
    getById: getServiceById,
    getContact: getContact,
    getSEO: getSEO,
    getNavigation: getNavigation,
    getSearchIndex: getSearchIndex,
    resolveImage: resolveImagePath,
    getServiceImages: getServiceImages,
    renderCard: renderServiceCard,
    renderDetail: renderServiceDetail,
    search: searchServices,
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
