(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);
  if (document.readyState !== 'loading') init();

  function init() {

    /* ───────────────────────────────────────────────
       SCROLL REVEAL — IntersectionObserver
       ─────────────────────────────────────────────── */
    function initScrollReveal() {
      var els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger');
      if (!els.length) return;
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      els.forEach(function (el) { observer.observe(el); });
    }
    initScrollReveal();

    /* ───────────────────────────────────────────────
       COUNTER ANIMATION
       ─────────────────────────────────────────────── */
    function initCounters() {
      var counters = document.querySelectorAll('.counter');
      if (!counters.length) return;
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var target = parseInt(el.getAttribute('data-target'));
            animateCounter(el, target);
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) { observer.observe(el); });
    }

    function animateCounter(el, target) {
      var current = 0;
      var step = Math.ceil(target / 40);
      var duration = 1500;
      var increment = target / (duration / 30);
      var timer = setInterval(function () {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current);
      }, 30);
    }
    initCounters();

    /* ───────────────────────────────────────────────
       PROGRESSIVE DISCLOSURE (stagger animation class)
       ─────────────────────────────────────────────── */
    function initStagger() {
      document.querySelectorAll('.reveal-stagger').forEach(function (container) {
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });
        observer.observe(container);
      });
    }
    initStagger();

    /* ───────────────────────────────────────────────
       HEADER SCROLL
       ─────────────────────────────────────────────── */
    function initHeaderScroll() {
      var header = document.querySelector('.public-header');
      if (!header) return;
      function check() { header.classList.toggle('scrolled', window.scrollY > 20); }
      window.addEventListener('scroll', check, { passive: true });
      check();
    }
    initHeaderScroll();

    /* ───────────────────────────────────────────────
       MOBILE NAV
       ─────────────────────────────────────────────── */
    var hamburger = document.querySelector('.hamburger');
    var nav = document.querySelector('.nav');
    if (hamburger) {
      hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
      });
      nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () { nav.classList.remove('open'); });
      });
    }

    /* ───────────────────────────────────────────────
       FAQ ACCORDION
       ─────────────────────────────────────────────── */
    document.querySelectorAll('.faq-question').forEach(function (q) {
      q.addEventListener('click', function () {
        var item = q.closest('.faq-item');
        var wasActive = item.classList.contains('active');
        var parent = item.closest('.faq-list');
        if (parent) {
          parent.querySelectorAll('.faq-item.active').forEach(function (i) {
            i.classList.remove('active');
          });
        }
        if (!wasActive) item.classList.add('active');
      });
    });

    /* ───────────────────────────────────────────────
       DASHBOARD SIDEBAR TOGGLE
       ─────────────────────────────────────────────── */
    var sidebarToggle = document.querySelector('.sidebar-toggle');
    var sidebar = document.querySelector('.dashboard-sidebar');
    var sidebarOverlay = document.querySelector('.sidebar-overlay');
    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener('click', function () { sidebar.classList.toggle('open'); });
      if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function () { sidebar.classList.remove('open'); });
      }
    }

    /* ───────────────────────────────────────────────
       DROPDOWN
       ─────────────────────────────────────────────── */
    document.querySelectorAll('.dropdown').forEach(function (d) {
      var trigger = d.querySelector('.dropdown-trigger');
      if (trigger) {
        trigger.addEventListener('click', function (e) {
          e.stopPropagation();
          d.classList.toggle('active');
        });
      }
      d.addEventListener('mouseenter', function () { d.classList.add('active'); });
      d.addEventListener('mouseleave', function () { d.classList.remove('active'); });
    });
    document.addEventListener('click', function () {
      document.querySelectorAll('.dropdown.active').forEach(function (d) { d.classList.remove('active'); });
    });

    /* ───────────────────────────────────────────────
       MODALS
       ─────────────────────────────────────────────── */
    window.openModal = function (id) {
      var el = document.getElementById(id);
      if (el) { el.classList.add('active'); document.body.style.overflow = 'hidden'; }
    };
    window.closeModal = function (id) {
      var el = document.getElementById(id);
      if (el) { el.classList.remove('active'); document.body.style.overflow = ''; }
    };
    document.querySelectorAll('.modal-overlay').forEach(function (o) {
      o.addEventListener('click', function (e) {
        if (e.target === o) { o.classList.remove('active'); document.body.style.overflow = ''; }
      });
    });
    document.querySelectorAll('.modal-close').forEach(function (b) {
      b.addEventListener('click', function () {
        var o = b.closest('.modal-overlay');
        if (o) { o.classList.remove('active'); document.body.style.overflow = ''; }
      });
    });

    /* ───────────────────────────────────────────────
       TABS
       ─────────────────────────────────────────────── */
    document.querySelectorAll('.tabs').forEach(function (g) {
      var tabs = g.querySelectorAll('.tab');
      tabs.forEach(function (t) {
        t.addEventListener('click', function () {
          var target = t.dataset.tab;
          tabs.forEach(function (x) { x.classList.remove('active'); });
          t.classList.add('active');
          var parent = t.closest('.tabs-container') || g.parentElement;
          parent.querySelectorAll('.tab-content').forEach(function (c) { c.classList.remove('active'); });
          var tc = parent.querySelector('[data-tab-content="' + target + '"]');
          if (tc) tc.classList.add('active');
        });
      });
    });

    /* ───────────────────────────────────────────────
       ALERT DISMISS
       ─────────────────────────────────────────────── */
    document.querySelectorAll('.alert-dismissible').forEach(function (a) {
      var b = a.querySelector('.alert-close');
      if (b) b.addEventListener('click', function () { a.style.display = 'none'; });
    });

    /* ───────────────────────────────────────────────
       FILTER BUTTONS (with card filtering)
       ─────────────────────────────────────────────── */
    document.querySelectorAll('.filters-bar .filter-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        var parent = b.closest('.filters-bar');
        parent.querySelectorAll('.filter-btn').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        var filter = b.getAttribute('data-filter');
        var grid = b.closest('.section').querySelector('.stagger-children, .grid-3');
        if (grid) {
          grid.querySelectorAll('.program-card').forEach(function (card) {
            if (!filter || filter === 'all') { card.style.display = ''; return; }
            var cats = (card.getAttribute('data-category') || '').split(' ');
            card.style.display = cats.indexOf(filter) !== -1 ? '' : 'none';
          });
        }
      });
    });

    /* ───────────────────────────────────────────────
       PROGRAM DETAIL LOADER (from URL param)
       ─────────────────────────────────────────────── */
    var programData = {
      'tcf-quebec-intensif': {
        title: 'Préparation Intensive TCF Québec',
        subtitle: 'Programme complet pour maîtriser toutes les épreuves du TCF Québec. Simulations hebdomadaires et correction personnalisée.',
        badges: ['badge-emerald', 'badge-blue', 'badge-gray'],
        badgeLabels: ['TCF Québec', 'Intensif', 'B1-C2'],
        duration: '12 semaines', rythme: '3 séances / semaine', seance: '2h / séance', effectif: '8 élèves max',
        price: '450€', priceLabel: '/ mois', priceTotal: '1 350€ pour l\'ensemble du programme',
        nextSession: '5 Sept 2026',
        description: ['Notre préparation intensive au TCF Québec est conçue pour vous permettre d\'atteindre le niveau requis pour vos objectifs linguistiques.', 'Encadré par des enseignants certifiés FLE, vous bénéficierez d\'une formation complète couvrant les 4 compétences évaluées : compréhension orale, compréhension écrite, expression orale et expression écrite.'],
        objectives: ['Compréhension orale : analyser des documents audio variés (actualités, débats, conférences)', 'Compréhension écrite : maîtriser la lecture de textes académiques et administratifs', 'Expression orale : s\'exprimer avec aisance, clarté et argumentation structurée', 'Expression écrite : produire des textes argumentés et synthétiques', 'Stratégies d\'examen : gestion du temps et techniques de passation'],
        tableRows: [
          ['1-2', 'Diagnostic', 'Test de niveau complet et introduction aux épreuves du TCF'],
          ['3-5', 'Compréhension', 'Stratégies de compréhension orale et écrite - exercices progressifs'],
          ['6-8', 'Expression', 'Techniques d\'expression orale et écrite - production guidée'],
          ['9-10', 'Simulations', 'Examens blancs complets dans les conditions réelles'],
          ['11-12', 'Perfectionnement', 'Révisions ciblées et préparation finale personnalisée'],
          ['12+', 'Bilan', 'Évaluation finale et conseils pour le jour J']
        ]
      },
      'tcf-quebec-regulier': {
        title: 'Préparation Régulière TCF Québec',
        subtitle: 'Programme équilibré pour les apprenants qui souhaitent progresser à leur rythme avec un accompagnement constant.',
        badges: ['badge-emerald', 'badge-gray'],
        badgeLabels: ['TCF Québec', 'Régulier'],
        duration: '16 semaines', rythme: '2 séances / semaine', seance: '1h30 / séance', effectif: '10 élèves max',
        price: '290€', priceLabel: '/ mois', priceTotal: '1 160€ pour l\'ensemble du programme',
        nextSession: '12 Sept 2026'
      },
      'tcf-canada-intensif': {
        title: 'Préparation Intensive TCF Canada',
        subtitle: 'Formation intensive axée sur les spécificités du TCF Canada. Focus sur l\'expression écrite et orale.',
        badges: ['badge-blue', 'badge-gold', 'badge-gray'],
        badgeLabels: ['TCF Canada', 'Intensif', 'Niveau C'],
        duration: '16 semaines', rythme: '3 séances / semaine', seance: '2h30 / séance', effectif: '6 élèves max',
        price: '520€', priceLabel: '/ mois', priceTotal: '2 080€ pour l\'ensemble du programme',
        nextSession: '5 Sept 2026'
      },
      'tcf-canada-regulier': {
        title: 'Préparation Régulière TCF Canada',
        subtitle: 'Formation progressive pour le TCF Canada avec un rythme adapté aux apprenants en activité.',
        badges: ['badge-blue', 'badge-gray'],
        badgeLabels: ['TCF Canada', 'Régulier'],
        duration: '24 semaines', rythme: '2 séances / semaine', seance: '1h30 / séance', effectif: '10 élèves max',
        price: '310€', priceLabel: '/ mois', priceTotal: '1 860€ pour l\'ensemble du programme',
        nextSession: '19 Sept 2026'
      },
      'oral-bc-intensif': {
        title: 'Préparation Orale B & C',
        subtitle: 'Ateliers intensifs d\'expression orale avec coaching personnalisé et mises en situation réalistes.',
        badges: ['badge-red', 'badge-gold', 'badge-gray'],
        badgeLabels: ['Oral B/C', 'Intensif', 'B1-C2'],
        duration: '8 semaines', rythme: '2 séances / semaine', seance: '1h30 / séance', effectif: '4 élèves max',
        price: '320€', priceLabel: '/ mois', priceTotal: '640€ pour l\'ensemble du programme',
        nextSession: '12 Sept 2026'
      },
      'cours-particuliers': {
        title: 'Cours Particuliers 1-to-1',
        subtitle: 'Accompagnement 100% personnalisé avec un enseignant dédié. Programme adapté à vos besoins spécifiques.',
        badges: ['badge-gold', 'badge-gray'],
        badgeLabels: ['Cours solo', 'Personnalisé'],
        duration: 'Flexible', rythme: 'À votre rythme', seance: '1h / séance', effectif: '1 élève',
        price: '45€', priceLabel: '/ heure', priceTotal: 'Forfaits 5h, 10h, 15h ou 20h disponibles',
        nextSession: 'À définir'
      },
      'cours-groupe': {
        title: 'Cours en Groupe',
        subtitle: 'Apprenez en groupe dans une ambiance dynamique et collaborative. Idéal pour pratiquer l\'oral.',
        badges: ['badge-green', 'badge-gray'],
        badgeLabels: ['Groupe', 'Régulier'],
        duration: '12 semaines', rythme: '1 séance / semaine', seance: '1h30 / séance', effectif: '15 élèves max',
        price: '120€', priceLabel: '/ mois', priceTotal: '360€ pour l\'ensemble du programme',
        nextSession: '5 Sept 2026'
      },
      'samedi': {
        title: 'Programme du Samedi',
        subtitle: 'Des sessions intensives le samedi pour ceux qui ont un emploi du temps chargé en semaine.',
        badges: ['badge-blue', 'badge-gray'],
        badgeLabels: ['Samedi', 'Intensif'],
        duration: '10 semaines', rythme: 'Samedi', seance: '3h / session', effectif: '12 élèves max',
        price: '180€', priceLabel: '/ mois', priceTotal: '450€ pour l\'ensemble du programme',
        nextSession: '6 Sept 2026'
      },
      'intensif-general': {
        title: 'Programme Intensif Général',
        subtitle: 'Immersion totale en français avec un rythme soutenu pour des progrès rapides.',
        badges: ['badge-gold', 'badge-emerald'],
        badgeLabels: ['Intensif', 'Général'],
        duration: '8 semaines', rythme: '4 séances / semaine', seance: '2h / séance', effectif: '10 élèves max',
        price: '380€', priceLabel: '/ mois', priceTotal: '760€ pour l\'ensemble du programme',
        nextSession: '5 Sept 2026'
      },

      'test-placement': {
        title: 'Test de Placement',
        subtitle: 'Évaluez votre niveau de français avec notre test complet couvrant toutes les compétences.',
        badges: ['badge-gray', 'badge-emerald'],
        badgeLabels: ['Évaluation', 'Individuel'],
        duration: '1 séance', rythme: 'Unique', seance: '2h', effectif: 'Individuel',
        price: '60€', priceLabel: '', priceTotal: 'Résultats sous 48h',
        nextSession: 'Tous les jours'
      },
      'evaluation-orale': {
        title: 'Évaluation Orale',
        subtitle: 'Une évaluation personnalisée de votre expression orale avec feedback détaillé.',
        badges: ['badge-gray', 'badge-red'],
        badgeLabels: ['Évaluation', 'Oral'],
        duration: '1 séance', rythme: 'Unique', seance: '45min', effectif: 'Individuel',
        price: '40€', priceLabel: '', priceTotal: 'Résultats immédiats',
        nextSession: 'Tous les jours'
      }
    };

    function loadProgramDetail() {
      var params = new URLSearchParams(window.location.search);
      var id = params.get('id') || 'tcf-quebec-intensif';
      var data = programData[id];
      if (!data) return;
      document.querySelectorAll('[data-detail-field]').forEach(function (el) {
        var field = el.getAttribute('data-detail-field');
        if (data[field]) {
          if (el.tagName === 'IMG' || el.tagName === 'INPUT') el.value = data[field];
          else el.textContent = data[field];
        }
      });
      document.querySelectorAll('[data-detail-badge]').forEach(function (el, i) {
        if (data.badges && data.badges[i]) {
          el.className = 'badge ' + data.badges[i];
          el.textContent = data.badgeLabels[i] || '';
        }
      });
      document.querySelectorAll('[data-detail-table]').forEach(function (tbody) {
        if (data.tableRows) {
          tbody.innerHTML = '';
          data.tableRows.forEach(function (row) {
            var tr = document.createElement('tr');
            row.forEach(function (cell) {
              var td = document.createElement('td');
              td.textContent = cell;
              tr.appendChild(td);
            });
            tbody.appendChild(tr);
          });
        }
      });
      if (data.objectives) {
        document.querySelectorAll('[data-detail-objectives]').forEach(function (ul) {
          ul.innerHTML = '';
          data.objectives.forEach(function (obj) {
            var li = document.createElement('li');
            li.textContent = obj;
            li.style.cssText = 'margin-bottom:var(--space-sm);color:var(--color-text-secondary)';
            ul.appendChild(li);
          });
        });
      }
      document.title = data.title + ' — Cultulangues';
    }
    if (window.location.pathname.includes('program-detail')) loadProgramDetail();

    /* ───────────────────────────────────────────────
       SIDEBAR NAVIGATION
       ─────────────────────────────────────────────── */
    document.querySelectorAll('.sidebar-item').forEach(function (i) {
      i.addEventListener('click', function () {
        var href = i.getAttribute('data-href');
        if (href) window.location.href = href;
      });
    });

    /* ───────────────────────────────────────────────
       PASSWORD TOGGLE
       ─────────────────────────────────────────────── */
    document.querySelectorAll('.password-toggle').forEach(function (b) {
      b.addEventListener('click', function () {
        var input = b.parentElement.querySelector('input');
        if (input) {
          input.type = input.type === 'password' ? 'text' : 'password';
          b.textContent = input.type === 'password' ? '🔒' : '👁';
        }
      });
    });



    /* ───────────────────────────────────────────────
       LEVEL TEST
       ─────────────────────────────────────────────── */
    document.querySelectorAll('.test-option').forEach(function (o) {
      o.addEventListener('click', function () {
        var q = o.closest('.test-question');
        q.querySelectorAll('.test-option').forEach(function (x) { x.classList.remove('selected'); });
        o.classList.add('selected');
        var r = o.querySelector('input[type="radio"]');
        if (r) r.checked = true;
      });
    });

    /* ───────────────────────────────────────────────
       SCHEDULE CELLS
       ─────────────────────────────────────────────── */
    document.querySelectorAll('.schedule-cell').forEach(function (c) {
      c.addEventListener('click', function () {
        document.querySelectorAll('.schedule-cell.selected').forEach(function (x) { x.classList.remove('selected'); });
        c.classList.add('selected');
      });
    });

    /* ───────────────────────────────────────────────
       TOAST
       ─────────────────────────────────────────────── */
    window.showToast = function (message, type) {
      type = type || 'success';
      var t = document.createElement('div');
      t.className = 'toast toast-' + type;
      t.innerHTML = '<span>' + message + '</span>';
      document.body.appendChild(t);
      requestAnimationFrame(function () { t.classList.add('toast-show'); });
      setTimeout(function () {
        t.classList.remove('toast-show');
        setTimeout(function () { t.remove(); }, 300);
      }, 3500);
    };

    /* ───────────────────────────────────────────────
       INVOICE DOWNLOAD
       ─────────────────────────────────────────────── */
    document.querySelectorAll('.btn-download-invoice').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.preventDefault();
        showToast('Facture téléchargée avec succès ✓', 'success');
      });
    });

    /* ───────────────────────────────────────────────
       SIDEBAR ACTIVE STATE
       ─────────────────────────────────────────────── */
    var path = window.location.pathname;
    document.querySelectorAll('.sidebar-item').forEach(function (i) {
      var href = i.getAttribute('data-href');
      if (href && path.includes(href)) i.classList.add('active');
    });

    /* ───────────────────────────────────────────────
       NOTIFICATION BELL
       ─────────────────────────────────────────────── */
    document.querySelectorAll('.topbar-notification').forEach(function (b) {
      b.addEventListener('click', function () {
        showToast('Aucune nouvelle notification', 'info');
      });
    });

    /* ───────────────────────────────────────────────
       CALENDAR NAVIGATION
       ─────────────────────────────────────────────── */
    var calPrev = document.querySelector('.calendar-prev');
    var calNext = document.querySelector('.calendar-next');
    var calTitle = document.querySelector('.calendar-nav h3');
    if (calPrev && calNext && calTitle) {
      var months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
      var month = new Date().getMonth();
      var year = new Date().getFullYear();
      function updateTitle() { calTitle.textContent = months[month] + ' ' + year; }
      calPrev.addEventListener('click', function () {
        month--; if (month < 0) { month = 11; year--; } updateTitle();
      });
      calNext.addEventListener('click', function () {
        month++; if (month > 11) { month = 0; year++; } updateTitle();
      });
    }

    /* ───────────────────────────────────────────────
       BOOKING CALENDAR RENDER
       ─────────────────────────────────────────────── */
    window.renderBookingCalendar = function (containerId, onSelectDay) {
      var container = document.getElementById(containerId);
      if (!container) return;
      var months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
      var daysShort = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
      var today = new Date();
      var calMonth = today.getMonth();
      var calYear = today.getFullYear();
      var selectedDay = null;
      var selectedDateStr = null;

      // Simulated availability: random days have available hours
      var availability = {};
      function generateAvailability(m, y) {
        var daysInMonth = new Date(y, m + 1, 0).getDate();
        for (var d = 1; d <= daysInMonth; d++) {
          var date = new Date(y, m, d);
          if (date >= new Date(y, m, today.getDate()) && Math.random() > 0.4) {
            var key = y + '-' + m + '-' + d;
            availability[key] = true;
          }
        }
      }
      generateAvailability(calMonth, calYear);

      function render() {
        var firstDay = new Date(calYear, calMonth, 1).getDay();
        var daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
        var daysInPrev = new Date(calYear, calMonth, 0).getDate();
        var html = '<div class="month-nav mb-md">';
        html += '<button class="btn-icon btn-ghost" onclick="window.prevCalMonth()">←</button>';
        html += '<span class="month-nav-title">' + months[calMonth] + ' ' + calYear + '</span>';
        html += '<button class="btn-icon btn-ghost" onclick="window.nextCalMonth()">→</button>';
        html += '</div>';
        html += '<div class="month-grid">';
        for (var i = 0; i < 7; i++) { html += '<div class="month-day-header">' + daysShort[i] + '</div>'; }
        var startOffset = firstDay === 0 ? 6 : firstDay - 1;
        for (var p = startOffset - 1; p >= 0; p--) {
          html += '<div class="month-day other-month">' + (daysInPrev - p) + '</div>';
        }
        for (var d = 1; d <= daysInMonth; d++) {
          var date = new Date(calYear, calMonth, d);
          var key = calYear + '-' + calMonth + '-' + d;
          var classes = ['month-day'];
          if (date < new Date(calYear, calMonth, today.getDate())) classes.push('disabled');
          if (date.toDateString() === today.toDateString()) classes.push('today');
          if (selectedDateStr === key) classes.push('selected');
          if (availability[key] && date >= new Date(calYear, calMonth, today.getDate())) classes.push('has-hours');
          html += '<div class="' + classes.join(' ') + '" data-date="' + key + '" data-day="' + d + '">' + d + '</div>';
        }
        var totalCells = startOffset + daysInMonth;
        var remaining = (7 - (totalCells % 7)) % 7;
        for (var r = 1; r <= remaining; r++) {
          html += '<div class="month-day other-month">' + r + '</div>';
        }
        html += '</div>';
        container.innerHTML = html;

        container.querySelectorAll('.month-day:not(.other-month):not(.disabled)').forEach(function (el) {
          el.addEventListener('click', function () {
            var key = el.getAttribute('data-date');
            var day = parseInt(el.getAttribute('data-day'));
            if (selectedDateStr === key) {
              el.classList.remove('selected');
              selectedDateStr = null;
              selectedDay = null;
            } else {
              container.querySelectorAll('.month-day.selected').forEach(function (x) { x.classList.remove('selected'); });
              el.classList.add('selected');
              selectedDateStr = key;
              selectedDay = day;
            }
            if (onSelectDay) onSelectDay(selectedDateStr, selectedDay);
          });
        });
      }

      window.prevCalMonth = function () {
        calMonth--; if (calMonth < 0) { calMonth = 11; calYear--; }
        generateAvailability(calMonth, calYear);
        render();
      };
      window.nextCalMonth = function () {
        calMonth++; if (calMonth > 11) { calMonth = 0; calYear++; }
        generateAvailability(calMonth, calYear);
        render();
      };

      render();
      return { getSelected: function () { return selectedDateStr; }, getMonth: function () { return calMonth; }, getYear: function () { return calYear; } };
    };

    /* ───────────────────────────────────────────────
       HOUR GRID RENDER
       ─────────────────────────────────────────────── */
    window.renderHourGrid = function (containerId, dateKey, onSelectHour) {
      var container = document.getElementById(containerId);
      if (!container) return;
      var hours = [
        { time: '09:00', label: '09h00 - 10h00' },
        { time: '10:00', label: '10h00 - 11h00' },
        { time: '11:00', label: '11h00 - 12h00' },
        { time: '14:00', label: '14h00 - 15h00' },
        { time: '15:00', label: '15h00 - 16h00' },
        { time: '16:00', label: '16h00 - 17h00' },
        { time: '17:00', label: '17h00 - 18h00' },
        { time: '18:00', label: '18h00 - 19h00' }
      ];
      var selectedHour = null;

      function getState(time) {
        var r = (parseInt(time.split(':')[0]) * 7 + parseInt(time.split(':')[1])) % 11;
        if (r < 3) return 'available';
        if (r < 5) return 'booked';
        if (r < 7) return 'unavailable';
        return 'available';
      }

      function render() {
        var html = '<div class="flex justify-between items-center mb-md"><h4 class="text-sm font-semibold">Créneaux disponibles</h4><span class="text-xs text-muted">Fuseau: Europe/Paris</span></div>';
        html += '<div class="availability-legend">';
        html += '<span><span class="availability-dot green"></span> Disponible</span>';
        html += '<span><span class="availability-dot red"></span> Réservé</span>';
        html += '<span><span class="availability-dot gray"></span> Indisponible</span>';
        html += '</div>';
        html += '<div class="hour-grid">';
        hours.forEach(function (h) {
          var state = getState(h.time);
          var classes = ['hour-card', 'hour-' + state];
          if (selectedHour === h.time) classes.push('selected');
          html += '<div class="' + classes.join(' ') + '" data-time="' + h.time + '">';
          if (state === 'available') html += '<span class="availability-dot green"></span>';
          else if (state === 'booked') html += '<span class="availability-dot red"></span>';
          else html += '<span class="availability-dot gray"></span>';
          html += '<div class="hour-time">' + h.time + '</div>';
          html += '<div class="hour-label">' + (state === 'available' ? 'Disponible' : state === 'booked' ? 'Réservé' : 'Indisponible') + '</div>';
          html += '</div>';
        });
        html += '</div>';
        container.innerHTML = html;

        container.querySelectorAll('.hour-card.hour-available').forEach(function (el) {
          el.addEventListener('click', function () {
            var time = el.getAttribute('data-time');
            container.querySelectorAll('.hour-card.selected').forEach(function (x) { x.classList.remove('selected'); });
            el.classList.add('selected');
            selectedHour = time;
            if (onSelectHour) onSelectHour(time);
          });
        });
      }

      render();
      return { getSelected: function () { return selectedHour; } };
    };

    /* ───────────────────────────────────────────────
       TEACHER SELECTION
       ─────────────────────────────────────────────── */
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-teacher-select]');
      if (btn) {
        var card = btn.closest('.teacher-card');
        if (card) {
          document.querySelectorAll('.teacher-card.selected').forEach(function (c) { c.classList.remove('selected'); });
          card.classList.add('selected');
          document.querySelectorAll('[data-teacher-select]').forEach(function (b) {
            b.textContent = 'Sélectionner';
            b.className = 'btn-select selecting';
          });
          btn.textContent = '✓ Sélectionné';
          btn.className = 'btn-select selected-teacher';
          var teacherId = btn.getAttribute('data-teacher-select');
          var teacherName = card.querySelector('.teacher-card-name')?.textContent;
          if (window.onTeacherSelected) window.onTeacherSelected(teacherId, teacherName);
        }
      }
    });

    /* ───────────────────────────────────────────────
       FORM VALIDATION
       ─────────────────────────────────────────────── */
    document.querySelectorAll('.needs-validation').forEach(function (f) {
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        var valid = true;
        f.querySelectorAll('[required]').forEach(function (field) {
          if (!field.value.trim()) { field.classList.add('error'); valid = false; }
          else { field.classList.remove('error'); }
        });
        if (valid) showToast('Formulaire soumis avec succès ✓', 'success');
        else showToast('Veuillez remplir tous les champs obligatoires', 'error');
      });
    });

    /* ───────────────────────────────────────────────
       BOOKING FLOW CONFIG
       ─────────────────────────────────────────────── */
    var flowConfigs = {
      'private-lesson':  { label: 'Cours Particuliers', flow: 'private', steps: ['package','info','schedule','confirm','test','results','meeting'], hasTest: true },
      'group-intensif':  { label: 'Programme Intensif', flow: 'group', steps: ['schedules','info','confirm','test','results','meeting'], hasTest: true },
      'group-samedi':  { label: 'Programme du Samedi', flow: 'group', steps: ['schedules','info','confirm','test','results','meeting'], hasTest: true },
      'group-tcf-quebec':  { label: 'TCF Québec', flow: 'group', steps: ['schedules','info','confirm','test','results','meeting'], hasTest: true },
      'group-tcf-canada':  { label: 'TCF Canada', flow: 'group', steps: ['schedules','info','confirm','test','results','meeting'], hasTest: true },
      'group-oral-bc':  { label: 'Oral B/C', flow: 'group', steps: ['schedules','info','confirm','test','results','meeting'], hasTest: true },
      'group-groupe':  { label: 'Cours en Groupe', flow: 'group', steps: ['schedules','info','confirm','test','results','meeting'], hasTest: true },
      'workshop-conversation':  { label: 'Atelier Conversation', flow: 'workshop', steps: ['info','confirm','meeting'], hasTest: false },
      'workshop-culture':  { label: 'Atelier Culture', flow: 'workshop', steps: ['info','confirm','meeting'], hasTest: false },
      'workshop-maintenance':  { label: 'Atelier Maintien', flow: 'workshop', steps: ['info','confirm','meeting'], hasTest: false }
    };
    var stepLabels = { package:'Forfait', info:'Inscription', schedules:'Horaire', schedule:'Horaire', confirm:'Confirmation', test:'Test', results:'Résultats', meeting:'Rendez-vous' };

    /* ── Static group schedule data ── */
    var groupSchedules = {
      'group-intensif': [
        { day:'Lundi', time:'09:00-12:00', sessions:'3 séances/sem', label:'Matin — Intensif', desc:'Lundi, Mercredi, Vendredi' },
        { day:'Lundi', time:'14:00-17:00', sessions:'3 séances/sem', label:'Après-midi — Intensif', desc:'Lundi, Mercredi, Vendredi' },
        { day:'Mardi', time:'18:00-21:00', sessions:'3 séances/sem', label:'Soir — Intensif', desc:'Mardi, Jeudi, Samedi' }
      ],
      'group-samedi': [
        { day:'Samedi', time:'09:00-13:00', sessions:'1 séance/sem', label:'Matin — Samedi', desc:'4 samedis par mois' },
        { day:'Samedi', time:'14:00-18:00', sessions:'1 séance/sem', label:'Après-midi — Samedi', desc:'4 samedis par mois' }
      ],
      'group-tcf-quebec': [
        { day:'Lundi', time:'18:00-20:00', sessions:'2 séances/sem', label:'Soir — TCF Québec', desc:'Lundi & Mercredi' },
        { day:'Mardi', time:'18:00-20:00', sessions:'2 séances/sem', label:'Soir — TCF Québec', desc:'Mardi & Jeudi' }
      ],
      'group-tcf-canada': [
        { day:'Lundi', time:'18:00-20:30', sessions:'2 séances/sem', label:'Soir — TCF Canada', desc:'Lundi & Mercredi' },
        { day:'Mardi', time:'18:00-20:30', sessions:'2 séances/sem', label:'Soir — TCF Canada', desc:'Mardi & Jeudi' }
      ],
      'group-oral-bc': [
        { day:'Mercredi', time:'18:00-19:30', sessions:'1 séance/sem', label:'Soir — Oral B/C', desc:'Mercredi soir' },
        { day:'Samedi', time:'10:00-11:30', sessions:'1 séance/sem', label:'Matin — Oral B/C', desc:'Samedi matin' }
      ],
      'group-groupe': [
        { day:'Lundi', time:'10:00-12:00', sessions:'2 séances/sem', label:'Matin — Groupe', desc:'Lundi & Mercredi' },
        { day:'Mardi', time:'14:00-16:00', sessions:'2 séances/sem', label:'Après-midi — Groupe', desc:'Mardi & Jeudi' },
        { day:'Mercredi', time:'18:00-20:00', sessions:'2 séances/sem', label:'Soir — Groupe', desc:'Mercredi & Vendredi' }
      ]
    };

    /* ───────────────────────────────────────────────
       BOOKING WIZARD (dual-flow with state management)
       ─────────────────────────────────────────────── */
    var bookingWizard = {
      flowType: null,
      flow: null,
      steps: [],
      currentStepIdx: 0,
      selectedPackage: null,
      selectedSchedule: null,
      selectedSlots: [],
      studentInfo: {},
      program: null,

      init: function (flowType) {
        var params = new URLSearchParams(window.location.search);
        this.flowType = flowType || params.get('course') || null;
        this.program = params.get('program') || null;

        if (!this.flowType || !flowConfigs[this.flowType]) {
          document.getElementById('service-selector').style.display = '';
          document.getElementById('wizard-header').style.display = 'none';
          document.querySelector('#wizard-steps').style.display = 'none';
          document.querySelectorAll('.wizard-panel').forEach(function (p) { p.classList.remove('active'); });
          return;
        }

        var cfg = flowConfigs[this.flowType];
        this.flow = cfg.flow;
        this.steps = cfg.steps.slice();
        this.currentStepIdx = 0;
        this.selectedPackage = null;
        this.selectedSchedule = null;
        this.selectedSlots = [];
        this.studentInfo = {};

        document.getElementById('service-selector').style.display = 'none';
        document.getElementById('wizard-header').style.display = '';

        this.renderStepper();
        document.querySelector('#wizard-steps').style.display = this.steps.length > 1 ? 'flex' : 'none';
        this.showPanel(this.steps[0]);
        this.updateHeader();
        this.bindPackageSelection();
        this.bindFormValidation();
      },

      backToSelector: function () {
        this.flowType = null; this.flow = null; this.steps = []; this.currentStepIdx = 0;
        this.selectedPackage = null; this.selectedSchedule = null; this.selectedSlots = []; this.studentInfo = {};
        this.program = null;
        document.getElementById('service-selector').style.display = '';
        document.getElementById('wizard-header').style.display = 'none';
        document.querySelector('#wizard-steps').style.display = 'none';
        document.querySelectorAll('.wizard-panel').forEach(function (p) { p.classList.remove('active'); });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },

      copyMeetingLink: function () {
        var link = 'https://meet.cultulangues.ca/demo';
        navigator.clipboard.writeText(link).then(function () {
          var btn = document.querySelector('.meeting-actions .btn-outline');
          if (btn) { btn.textContent = '✅ Copié!'; setTimeout(function () { btn.textContent = '📋 Copier le lien'; }, 2000); }
        }).catch(function () { prompt('Copiez le lien:', link); });
      },

      updateHeader: function () {
        var cfg = flowConfigs[this.flowType];
        if (!cfg) return;
        var title = document.getElementById('wizard-title');
        var desc = document.getElementById('wizard-desc');
        var badge = document.getElementById('wizard-service-badge');
        if (title) title.textContent = 'Réservez votre ' + cfg.label;
        if (badge) badge.textContent = cfg.label;
        if (desc) {
          var texts = {
            'private-lesson': 'Choisissez votre forfait, puis sélectionnez vos créneaux horaires'
          };
          desc.textContent = texts[this.flowType] || 'Complétez votre inscription en quelques étapes';
        }
      },

      renderStepper: function () {
        var container = document.querySelector('#wizard-steps');
        if (!container) return;
        var html = '';
        this.steps.forEach(function (s, i) {
          if (i > 0) html += '<div class="wizard-step-line"></div>';
          html += '<div class="wizard-step' + (i === 0 ? ' active' : '') + '"><div class="wizard-step-number"><span>' + (i + 1) + '</span></div><span class="wizard-step-label">' + (stepLabels[s] || s) + '</span></div>';
        });
        container.innerHTML = html;
      },

      updateStepper: function () {
        document.querySelectorAll('.wizard-step').forEach(function (s, i) {
          s.classList.remove('active', 'completed');
          if (i < bookingWizard.currentStepIdx) s.classList.add('completed');
          else if (i === bookingWizard.currentStepIdx) s.classList.add('active');
        });
        document.querySelectorAll('.wizard-step-line').forEach(function (l, i) {
          l.classList.toggle('completed', i < bookingWizard.currentStepIdx);
        });
      },

      showPanel: function (name) {
        document.querySelectorAll('.wizard-panel').forEach(function (p) { p.classList.remove('active'); });
        var panel = document.querySelector('.wizard-panel-' + name);
        if (panel) panel.classList.add('active');
        if (name === 'schedules' && this.flow === 'group') this.renderGroupSchedules();
        if (name === 'schedule' && this.flow === 'private') this.initMultiCalendar();
        if (name === 'confirm') this.buildSummary();
        if (name === 'test') this.startTest();
      },

      goToStep: function (idx) {
        if (idx < 0 || idx >= this.steps.length) return;
        this.currentStepIdx = idx;
        this.showPanel(this.steps[idx]);
        this.updateStepper();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },

      next: function () {
        var stepName = this.steps[this.currentStepIdx];
        if (stepName === 'package' && !this.selectedPackage) {
          showToast('Veuillez sélectionner un forfait', 'error'); return;
        }
        if (stepName === 'schedules' && !this.selectedSchedule) {
          showToast('Veuillez sélectionner un horaire', 'error'); return;
        }
        if (stepName === 'schedule' && this.flow === 'private') {
          if (this.selectedSlots.length === 0) {
            showToast('Veuillez sélectionner au moins un créneau', 'error'); return;
          }
          var needed = parseInt((this.selectedPackage || {}).hours) || 0;
          if (this.selectedSlots.length < needed) {
            showToast('Veuillez sélectionner ' + needed + ' créneaux (actuellement: ' + this.selectedSlots.length + ')', 'error'); return;
          }
        }
        this.goToStep(this.currentStepIdx + 1);
      },

      prev: function () { this.goToStep(this.currentStepIdx - 1); },

      bindPackageSelection: function () {
        document.querySelectorAll('[data-package-select]').forEach(function (el) {
          el.addEventListener('click', function () {
            document.querySelectorAll('[data-package-select]').forEach(function (c) { c.classList.remove('selected'); });
            el.classList.add('selected');
            bookingWizard.selectedPackage = {
              hours: el.getAttribute('data-hours'),
              price: el.getAttribute('data-price'),
              label: el.getAttribute('data-label') || el.getAttribute('data-hours') + ' heures'
            };
          });
        });
      },

      bindFormValidation: function () {
        var form = document.getElementById('student-form');
        if (!form) return;
        form.querySelectorAll('input').forEach(function (input) {
          input.addEventListener('input', function () {
            this.classList.remove('error');
            var err = this.parentElement.querySelector('.form-error');
            if (err) err.style.display = 'none';
          });
        });
      },

      validateStudentInfo: function () {
        var name = document.getElementById('student-name');
        var email = document.getElementById('student-email');
        var phone = document.getElementById('student-phone');
        var valid = true;
        [name, email, phone].forEach(function (f) {
          if (!f || !f.value.trim()) { if (f) { f.classList.add('error'); } valid = false; }
        });
        if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
          email.classList.add('error'); valid = false;
        }
        if (valid) {
          bookingWizard.studentInfo = { name: name.value.trim(), email: email.value.trim(), phone: phone.value.trim() };
          bookingWizard.next();
        } else {
          showToast('Veuillez remplir tous les champs correctement', 'error');
        }
      },

      /* ─── GROUP SCHEDULE CARDS ─── */
      renderGroupSchedules: function () {
        var container = document.getElementById('group-schedules');
        if (!container) return;
        var schedules = groupSchedules[this.flowType] || [];
        if (schedules.length === 0) { container.innerHTML = '<p class="text-secondary">Aucun horaire disponible pour ce programme.</p>'; return; }
        var html = '<div class="schedule-grid">';
        schedules.forEach(function (s, i) {
          html += '<div class="schedule-card" data-schedule="' + i + '"><div class="schedule-card-header"><h4>' + s.label + '</h4><span class="schedule-badge">' + s.sessions + '</span></div><div class="schedule-card-body"><div class="schedule-detail"><span class="schedule-detail-icon">📅</span><span>' + s.day + '</span></div><div class="schedule-detail"><span class="schedule-detail-icon">⏰</span><span>' + s.time + '</span></div><div class="schedule-detail"><span class="schedule-detail-icon">📋</span><span>' + s.desc + '</span></div></div><div class="schedule-card-footer"><button class="btn-select" onclick="window.bookingWizard.selectGroupSchedule(' + i + ')">Sélectionner</button></div></div>';
        });
        html += '</div>';
        container.innerHTML = html;
      },

      selectGroupSchedule: function (idx) {
        var schedules = groupSchedules[this.flowType] || [];
        var sched = schedules[idx];
        if (!sched) return;
        document.querySelectorAll('.schedule-card').forEach(function (c) { c.classList.remove('selected'); });
        var card = document.querySelector('.schedule-card[data-schedule="' + idx + '"]');
        if (card) {
          card.classList.add('selected');
          card.querySelector('.btn-select').textContent = '✓ Sélectionné';
          card.querySelector('.btn-select').className = 'btn-select selected-teacher';
        }
        this.selectedSchedule = sched;
        this.selectedSchedule.label = sched.label;
      },

      /* ─── PRIVATE MULTI-DATE CALENDAR + HOUR PICKER ─── */
      initMultiCalendar: function () {
        var container = document.getElementById('multi-calendar');
        if (!container) return;
        var months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
        var daysShort = ['Di','Lu','Ma','Me','Je','Ve','Sa'];
        var today = new Date();
        var calMonthIdx = 0; // 0 = current month displayed
        var calMonth = today.getMonth();
        var calYear = today.getFullYear();
        var that = this;
        var slots = ['09:00','10:00','11:00','14:00','15:00','16:00','17:00','18:00'];
        var pendingDate = null;

        function getDateKey(d, m, y) { return d + '/' + (m + 1) + '/' + y; }
        function slotKey(d, m, y, h) { return getDateKey(d, m, y) + '|' + h; }
        function isSlotSelected(d, m, y, h) { return that.selectedSlots.some(function (s) { return s.dateKey === getDateKey(d, m, y) && s.hour === h; }); }
        function removeSlot(d, m, y, h) { var k = slotKey(d, m, y, h); that.selectedSlots = that.selectedSlots.filter(function (s) { return slotKey(s.day, s.month - 1, s.year, s.hour) !== k; }); }
        function addSlot(d, m, y, h) { that.selectedSlots.push({ dateKey: getDateKey(d, m, y), day: d, month: m + 1, year: y, hour: h }); }
        function toggleSlot(d, m, y, h) { if (isSlotSelected(d, m, y, h)) removeSlot(d, m, y, h); else addSlot(d, m, y, h); }

        function updateLessonTracker() {
          var tracker = document.getElementById('lesson-tracker');
          if (!tracker) return;
          var pkg = that.selectedPackage || { hours: '—' };
          var needed = parseInt(pkg.hours) || 0;
          var count = that.selectedSlots.length;
          var pct = needed > 0 ? Math.min(100, (count / needed) * 100) : 0;
          var cls = 'lesson-tracker-count';
          if (count >= needed) cls += ' complete';
          else if (count > 0) cls += ' partial';
          tracker.innerHTML = '<div class="lesson-tracker"><div class="lesson-tracker-header"><span class="' + cls + '">' + count + ' / ' + needed + ' séances</span></div><div class="lesson-tracker-bar"><div class="lesson-tracker-fill" style="width:' + pct + '%"></div></div></div>';
        }

        function renderHours(dateEl) {
          var hourContainer = document.getElementById('multi-hour-picker');
          if (!hourContainer || !dateEl) { if (hourContainer) hourContainer.innerHTML = ''; return; }
          var d = parseInt(dateEl.getAttribute('data-day'));
          var m = parseInt(dateEl.getAttribute('data-month')) - 1;
          var y = parseInt(dateEl.getAttribute('data-year'));
          pendingDate = { day: d, month: m, year: y };
          var html = '<div class="day-hour-grid">';
          var selCount = 0;
          slots.forEach(function (h) {
            var selected = isSlotSelected(d, m, y, h);
            if (selected) selCount++;
            html += '<div class="day-hour-card' + (selected ? ' selected' : '') + '" data-slot-hour="' + h + '"><span class="hour-time">' + h + '</span>' + (selected ? '<span class="hour-check">✓</span>' : '') + '</div>';
          });
          html += '</div>';
          hourContainer.innerHTML = html;
          hourContainer.querySelectorAll('.day-hour-card').forEach(function (el) {
            el.addEventListener('click', function () {
              var h = el.getAttribute('data-slot-hour');
              toggleSlot(d, m, y, h);
              renderHours(dateEl);
              updateLessonTracker();
              // mark calendar day
              var dayEl = container.querySelector('.month-day[data-day="' + d + '"][data-month="' + (m + 1) + '"][data-year="' + y + '"]');
              if (dayEl) {
                var count = that.selectedSlots.filter(function (s) { return s.day === d && s.month === m + 1 && s.year === y; }).length;
                dayEl.classList.toggle('has-slots', count > 0);
                dayEl.setAttribute('data-slot-count', count);
              }
            });
          });
        }

        function renderCal() {
          var firstDay = new Date(calYear, calMonth, 1).getDay();
          var daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
          var html = '<div class="month-nav mb-md">';
          html += '<button class="btn-icon btn-ghost" id="cal-prev-btn">←</button>';
          html += '<span class="month-nav-title">' + months[calMonth] + ' ' + calYear + '</span>';
          html += '<button class="btn-icon btn-ghost" id="cal-next-btn">→</button>';
          html += '</div><div class="month-grid">';
          for (var i = 0; i < 7; i++) html += '<div class="month-day-header">' + daysShort[i] + '</div>';
          var startOffset = firstDay === 0 ? 6 : firstDay - 1;
          var prevMonthDays = new Date(calYear, calMonth, 0).getDate();
          for (var p = startOffset - 1; p >= 0; p--) html += '<div class="month-day other-month">' + (prevMonthDays - p) + '</div>';
          for (var d = 1; d <= daysInMonth; d++) {
            var date = new Date(calYear, calMonth, d);
            var cls = 'month-day';
            if (date < new Date(today.getFullYear(), today.getMonth(), today.getDate())) cls += ' disabled';
            if (d === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear()) cls += ' today';
            var slotsOnDay = that.selectedSlots.filter(function (s) { return s.day === d && s.month === calMonth + 1 && s.year === calYear; });
            if (slotsOnDay.length > 0) { cls += ' has-slots'; cls += ' slot-count-' + Math.min(slotsOnDay.length, 4); }
            html += '<div class="' + cls + '" data-day="' + d + '" data-month="' + (calMonth + 1) + '" data-year="' + calYear + '" data-slot-count="' + slotsOnDay.length + '">' + d + '</div>';
          }
          var remaining = (7 - ((startOffset + daysInMonth) % 7)) % 7;
          for (var r = 1; r <= remaining; r++) html += '<div class="month-day other-month">' + r + '</div>';
          html += '</div>';
          container.innerHTML = html;
          container.querySelectorAll('.month-day:not(.other-month):not(.disabled)').forEach(function (el) {
            el.addEventListener('click', function () {
              container.querySelectorAll('.month-day.active-day').forEach(function (x) { x.classList.remove('active-day'); });
              el.classList.add('active-day');
              renderHours(el);
            });
          });
          var prevBtn = document.getElementById('cal-prev-btn');
          var nextBtn = document.getElementById('cal-next-btn');
          if (prevBtn) prevBtn.addEventListener('click', function () { calMonth--; if (calMonth < 0) { calMonth = 11; calYear--; } renderCal(); });
          if (nextBtn) nextBtn.addEventListener('click', function () { calMonth++; if (calMonth > 11) { calMonth = 0; calYear++; } renderCal(); });
          updateLessonTracker();
        }
        renderCal();
      },

      startTest: function () {
        if (window.placementTest) window.placementTest.init();
      },

      buildSummary: function () {
        var container = document.getElementById('booking-summary');
        if (!container) return;
        var cfg = flowConfigs[this.flowType];
        var info = this.studentInfo || { name: '—', email: '—', phone: '—' };
        var html = '<div class="booking-summary-card">';
        html += '<div class="summary-row"><span class="label">Service</span><span>' + (cfg ? cfg.label : this.flowType) + '</span></div>';
        if (this.program) {
          html += '<div class="summary-row"><span class="label">Programme</span><span>' + this.program + '</span></div>';
        }
        if (this.flow === 'private') {
          var pkg = this.selectedPackage || { hours: '—', price: '—', label: '—' };
          html += '<div class="summary-row"><span class="label">Forfait</span><span>' + pkg.label + ' (' + pkg.price + '€)</span></div>';
          html += '<div class="summary-row"><span class="label">Séances</span><span>' + this.selectedSlots.length + ' créneaux</span></div>';
          html += '<div class="summary-row"><span class="label">Détails</span><span>';
          this.selectedSlots.forEach(function (s) {
            html += '<div style="font-size:0.85rem;opacity:0.8">' + s.dateKey + ' à ' + s.hour + '</div>';
          });
          html += '</span></div>';
          var total = parseInt((this.selectedPackage || {}).price) || 0;
          html += '<div class="summary-row" style="font-weight:700;font-size:1rem;padding-top:var(--space-md);color:var(--color-emerald)"><span class="label">Total</span><span>' + total + '€</span></div>';
        } else if (this.flow === 'group') {
          var sched = this.selectedSchedule || { label: '—', day: '—', time: '—' };
          html += '<div class="summary-row"><span class="label">Horaire</span><span>' + sched.label + '</span></div>';
          html += '<div class="summary-row"><span class="label">Jour</span><span>' + sched.day + '</span></div>';
          html += '<div class="summary-row"><span class="label">Heure</span><span>' + sched.time + '</span></div>';
        }
        html += '<div class="summary-row"><span class="label">Élève</span><span>' + info.name + '</span></div>';
        html += '<div class="summary-row"><span class="label">Email</span><span>' + info.email + '</span></div>';
        html += '<div class="summary-row"><span class="label">Téléphone</span><span>' + info.phone + '</span></div>';
        html += '</div>';
        container.innerHTML = html;
      },

      buildFinalSummary: function () {
        var container = document.getElementById('final-summary');
        if (!container) return;
        var cfg = flowConfigs[this.flowType];
        var info = this.studentInfo || {};
        var html = '';
        if (this.flow === 'private') {
          var pkg = this.selectedPackage || {};
          html += '<div class="success-step-item"><div class="success-step-icon done">✓</div><div class="success-step-content"><h4>Réservation confirmée</h4><p>Forfait <strong>' + (pkg.label || '—') + '</strong> — <strong>' + (pkg.price || '—') + '€</strong> · ' + this.selectedSlots.length + ' séances</p></div></div>';
        }
        if (this.flow === 'group') {
          var sched = this.selectedSchedule || {};
          html += '<div class="success-step-item"><div class="success-step-icon done">✓</div><div class="success-step-content"><h4>Horaire réservé</h4><p><strong>' + (sched.label || '—') + '</strong> · ' + (sched.day || '—') + ' ' + (sched.time || '—') + '</p></div></div>';
        }
        html += '<div class="success-step-item"><div class="success-step-icon done">✓</div><div class="success-step-content"><h4>Inscription confirmée</h4><p>' + (cfg ? cfg.label : '') + ' · ' + (info.name || '—') + '</p></div></div>';
        if (cfg && cfg.hasTest) {
          html += '<div class="success-step-item"><div class="success-step-icon done">✓</div><div class="success-step-content"><h4>Test de niveau complété</h4><p>Votre niveau a été évalué avec précision</p></div></div>';
          var lvl = document.querySelector('.results-level-badge');
          html += '<div class="success-step-item"><div class="success-step-icon done">✓</div><div class="success-step-content"><h4>Niveau déterminé</h4><p>' + (lvl ? lvl.textContent.trim() : 'À définir lors du rendez-vous') + '</p></div></div>';
        }
        var mtgDate = document.getElementById('meeting-date');
        html += '<div class="success-step-item"><div class="success-step-icon pending">⏳</div><div class="success-step-content"><h4>Rendez-vous coordinatrice</h4><p>' + (mtgDate ? mtgDate.textContent : 'Planifiez votre entretien') + '</p></div></div>';
        container.innerHTML = html;
      },

      showSuccessPanel: function () {
        document.querySelectorAll('.wizard-panel').forEach(function (p) { p.classList.remove('active'); });
        var successPanel = document.querySelector('.wizard-panel-success');
        if (successPanel) successPanel.classList.add('active');
        this.buildFinalSummary();
        document.querySelectorAll('.wizard-step').forEach(function (s) { s.classList.add('completed'); s.classList.remove('active'); });
        document.querySelectorAll('.wizard-step-line').forEach(function (l) { l.classList.add('completed'); });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(window.startConfetti, 300);
        setTimeout(window.stopConfetti, 7000);
      }
    };
    window.bookingWizard = bookingWizard;

    /* ───────────────────────────────────────────────
       PLACEMENT TEST ENGINE (32 questions)
       ─────────────────────────────────────────────── */
    var placementTest = {
      currentQ: 0, answers: {}, questions: [], sections: {}, completed: false,

      questionsData: [
        { id:0, section:'Grammaire', text:'Complétez : "Si j\'___ le temps, je voyagerais plus."', options:[{l:'A',t:'ai'},{l:'B',t:'avais'},{l:'C',t:'aurai'},{l:'D',t:'aurais'}], correct:1 },
        { id:1, section:'Grammaire', text:'Choisissez la forme correcte : "Il faut que tu ___ tes devoirs."', options:[{l:'A',t:'fais'},{l:'B',t:'fasses'},{l:'C',t:'fait'},{l:'D',t:'feras'}], correct:1 },
        { id:2, section:'Grammaire', text:'Complétez : "C\'est le livre ___ j\'ai parlé."', options:[{l:'A',t:'que'},{l:'B',t:'qui'},{l:'C',t:'dont'},{l:'D',t:'auquel'}], correct:2 },
        { id:3, section:'Grammaire', text:'Quelle phrase est correcte ?', options:[{l:'A',t:'Je suis allé au cinéma hier'},{l:'B',t:'Je suis allé au cinéma hier soir'},{l:'C',t:'Je suis allé au cinéma la hier'},{l:'D',t:'Je suis allé au cinéma le hier'}], correct:1 },
        { id:4, section:'Grammaire', text:'Complétez : "Nous ___ depuis deux heures quand il est arrivé."', options:[{l:'A',t:'travaillons'},{l:'B',t:'travaillions'},{l:'C',t:'avons travaillé'},{l:'D',t:'travaillerons'}], correct:1 },
        { id:5, section:'Grammaire', text:'Complétez : "Il ___ mieux de partir tôt."', options:[{l:'A',t:'faut'},{l:'B',t:'vaut'},{l:'C',t:'veut'},{l:'D',t:'peut'}], correct:1 },
        { id:6, section:'Grammaire', text:'Choisissez la bonne préposition : "Je suis intéressé ___ la linguistique."', options:[{l:'A',t:'à'},{l:'B',t:'de'},{l:'C',t:'par'},{l:'D',t:'pour'}], correct:2 },
        { id:7, section:'Grammaire', text:'Complétez : "Elle est la personne ___ m\'a le plus aidé."', options:[{l:'A',t:'que'},{l:'B',t:'dont'},{l:'C',t:'qui'},{l:'D',t:'où'}], correct:2 },
        { id:8, section:'Grammaire', text:'Quel est le pluriel correct de "un travail" ?', options:[{l:'A',t:'des travails'},{l:'B',t:'des travaux'},{l:'C',t:'des travaille'},{l:'D',t:'des travailles'}], correct:1 },
        { id:9, section:'Grammaire', text:'Complétez : "Avant de ___, réfléchissez."', options:[{l:'A',t:'parler'},{l:'B',t:'parlé'},{l:'C',t:'parlant'},{l:'D',t:'parle'}], correct:0 },
        { id:10, section:'Vocabulaire', text:'Choisissez le synonyme du mot "cependant" :', options:[{l:'A',t:'Donc'},{l:'B',t:'Néanmoins'},{l:'C',t:'Parce que'},{l:'D',t:'Alors'}], correct:1 },
        { id:11, section:'Vocabulaire', text:'Que signifie "un enjeu" ?', options:[{l:'A',t:'Un jeu de société'},{l:'B',t:'Un défi important'},{l:'C',t:'Une interdiction'},{l:'D',t:'Une récompense'}], correct:1 },
        { id:12, section:'Vocabulaire', text:'Choisissez l\'antonyme du mot "abondant" :', options:[{l:'A',t:'Rare'},{l:'B',t:'Nombreux'},{l:'C',t:'Suffisant'},{l:'D',t:'Plentitude'}], correct:0 },
        { id:13, section:'Vocabulaire', text:'Complétez : "Il a obtenu un ___ résultat à l\'examen."', options:[{l:'A',t:'excellent'},{l:'B',t:'excellente'},{l:'C',t:'excellents'},{l:'D',t:'excellentes'}], correct:0 },
        { id:14, section:'Vocabulaire', text:'Que signifie "une aubaine" ?', options:[{l:'A',t:'Une difficulté'},{l:'B',t:'Une bonne affaire'},{l:'C',t:'Une obligation'},{l:'D',t:'Une interdiction'}], correct:1 },
        { id:15, section:'Vocabulaire', text:'Choisissez le bon mot : "Un discours ___ est un discours sans préparation."', options:[{l:'A',t:'improvisé'},{l:'B',t:'prémédité'},{l:'C',t:'organisé'},{l:'D',t:'structuré'}], correct:0 },
        { id:16, section:'Vocabulaire', text:'Que signifie "se dépêcher" ?', options:[{l:'A',t:'Se reposer'},{l:'B',t:'Se hâter'},{l:'C',t:'Se préparer'},{l:'D',t:'Se détendre'}], correct:1 },
        { id:17, section:'Vocabulaire', text:'Complétez : "C\'est un ___ en la matière."', options:[{l:'A',t:'débutant'},{l:'B',t:'expert'},{l:'C',t:'amateur'},{l:'D',t:'novice'}], correct:1 },
        { id:18, section:'Vocabulaire', text:'Choisissez le synonyme de "cependant" :', options:[{l:'A',t:'Donc'},{l:'B',t:'Néanmoins'},{l:'C',t:'Parce que'},{l:'D',t:'Alors'}], correct:1 },
        { id:19, section:'Vocabulaire', text:'Que signifie "périlleux" ?', options:[{l:'A',t:'Facile'},{l:'B',t:'Dangereux'},{l:'C',t:'Rapide'},{l:'D',t:'Agréable'}], correct:1 },
        { id:20, section:'Lecture', text:'Selon le texte, quel est le principal avantage du bilinguisme ?', passage:'De nombreuses études montrent que le bilinguisme améliore les capacités cognitives, retarde le déclin mental et facilite l\'apprentissage d\'autres langues.', options:[{l:'A',t:'Améliore les capacités cognitives'},{l:'B',t:'Permet de voyager'},{l:'C',t:'Augmente le salaire'},{l:'D',t:'Réduit le temps d\'étude'}], correct:0 },
        { id:21, section:'Lecture', text:'Que signifie "mettre les points sur les i" ?', passage:'Cette expression signifie clarifier une situation, préciser les choses pour éviter toute ambiguïté.', options:[{l:'A',t:'Terminer un travail'},{l:'B',t:'Clarifier une situation'},{l:'C',t:'Commencer un projet'},{l:'D',t:'Corriger une erreur'}], correct:1 },
        { id:22, section:'Lecture', text:'D\'après le texte, quel est le rôle des examens officiels ?', passage:'Les examens officiels de langue évaluent les compétences selon des standards internationaux, reconnus par les institutions académiques et les autorités officielles.', options:[{l:'A',t:'Ils certifient un niveau standardisé'},{l:'B',t:'Ils remplacent les diplômes'},{l:'C',t:'Ils sont valables seulement en France'},{l:'D',t:'Ils ne sont pas reconnus au Canada'}], correct:0 },
        { id:23, section:'Lecture', text:'Quelle est l\'idée principale du texte ?', passage:'Apprendre une langue demande du temps, de la régularité et une exposition authentique. Les meilleurs résultats combinent cours structurés et pratique quotidienne.', options:[{l:'A',t:'Suivre uniquement des cours'},{l:'B',t:'Cours + pratique régulière'},{l:'C',t:'Pratique seule suffit'},{l:'D',t:'Le temps est le même pour tous'}], correct:1 },
        { id:24, section:'Lecture', text:'Que suggère le texte sur l\'apprentissage en groupe ?', passage:'L\'apprentissage en groupe favorise les échanges et la pratique orale. Il permet également de développer des compétences collaboratives essentielles dans le monde professionnel.', options:[{l:'A',t:'C\'est moins efficace'},{l:'B',t:'Favorise les échanges et l\'oral'},{l:'C',t:'Uniquement pour les débutants'},{l:'D',t:'Remplace les cours individuels'}], correct:1 },
        { id:25, section:'Complétion', text:'Complétez : "Bien qu\'il ___ fatigué, il a terminé son travail."', options:[{l:'A',t:'est'},{l:'B',t:'soit'},{l:'C',t:'était'},{l:'D',t:'serait'}], correct:1 },
        { id:26, section:'Complétion', text:'Complétez : "Après ___ terminé ses études, il a trouvé un emploi."', options:[{l:'A',t:'avoir'},{l:'B',t:'être'},{l:'C',t:'ayant'},{l:'D',t:'a'}], correct:0 },
        { id:27, section:'Complétion', text:'Complétez : "Elle est la personne ___ je parle souvent."', options:[{l:'A',t:'que'},{l:'B',t:'dont'},{l:'C',t:'à qui'},{l:'D',t:'laquelle'}], correct:2 },
        { id:28, section:'Complétion', text:'Complétez : "___ la pluie, nous sommes sortis."', options:[{l:'A',t:'Malgré'},{l:'B',t:'Pendant'},{l:'C',t:'Depuis'},{l:'D',t:'Sans'}], correct:0 },
        { id:29, section:'Complétion', text:'Complétez : "Plus il étudie, ___ il comprend."', options:[{l:'A',t:'plus'},{l:'B',t:'moins'},{l:'C',t:'mieux'},{l:'D',t:'meilleur'}], correct:2 },
        { id:30, section:'Compréhension Orale', text:'Écoutez le message. Quel est le sujet principal ?', options:[{l:'A',t:'Invitation à un événement culturel'},{l:'B',t:'Rendez-vous médical'},{l:'C',t:'Confirmation de réservation'},{l:'D',t:'Annulation de cours'}], correct:0 },
        { id:31, section:'Compréhension Orale', text:'Que doit faire le destinataire ?', options:[{l:'A',t:'Appeler pour confirmer'},{l:'B',t:'Envoyer un email'},{l:'C',t:'Se présenter à l\'adresse'},{l:'D',t:'Rien, automatique'}], correct:2 }
      ],

      init: function () {
        this.currentQ = 0; this.answers = {}; this.completed = false;
        this.questions = this.questionsData;
        this.renderQuestion();
        this.renderProgress();
      },

      renderProgress: function () {
        var fill = document.querySelector('.test-progress-fill');
        if (fill) { fill.style.width = ((this.currentQ + 1) / this.questions.length * 100) + '%'; }
        var counter = document.querySelector('.test-question-counter');
        if (counter) { counter.innerHTML = '<strong>' + (this.currentQ + 1) + '</strong> / ' + this.questions.length; }
        var sectionLabel = document.querySelector('.test-section-label');
        if (sectionLabel && this.questions[this.currentQ]) { sectionLabel.textContent = '📖 ' + this.questions[this.currentQ].section; }
      },

      renderQuestion: function () {
        var container = document.getElementById('test-question-container');
        if (!container) return;
        var q = this.questions[this.currentQ];
        if (!q) return;
        var selected = this.answers[this.currentQ];
        var html = '<div class="test-question-card">';
        if (q.passage) html += '<div class="test-question-passage">' + q.passage + '</div>';
        html += '<div class="test-question-text">' + q.text + '</div>';
        if (q.section === 'Compréhension Orale') {
          html += '<div class="test-listening-placeholder"><div class="play-btn" onclick="this.style.transform=\'scale(1.2)\'">▶</div><p>Cliquez pour écouter le message audio (simulation)</p></div>';
        }
        html += '<div class="test-options">';
        q.options.forEach(function (opt, i) {
          html += '<div class="test-option' + (selected === i ? ' selected' : '') + '" data-opt="' + i + '"><div class="option-letter">' + opt.l + '</div><span class="option-text">' + opt.t + '</span></div>';
        });
        html += '</div></div>';
        container.innerHTML = html;
        container.querySelectorAll('.test-option').forEach(function (el) {
          el.addEventListener('click', function () { window.placementTest.selectAnswer(parseInt(el.getAttribute('data-opt'))); });
        });
        this.renderProgress();
        this.renderNav();
      },

      selectAnswer: function (optIdx) {
        this.answers[this.currentQ] = optIdx;
        var container = document.getElementById('test-question-container');
        if (container) {
          container.querySelectorAll('.test-option').forEach(function (el) {
            el.classList.toggle('selected', parseInt(el.getAttribute('data-opt')) === optIdx);
          });
        }
      },

      renderNav: function () {
        var nav = document.querySelector('.test-nav');
        if (!nav) return;
        var isLast = this.currentQ === this.questions.length - 1;
        nav.innerHTML = '<button class="btn btn-ghost" onclick="window.placementTest.prevQuestion()"' + (this.currentQ === 0 ? ' disabled' : '') + '>← Précédent</button>' + (isLast ? '<button class="btn btn-primary" onclick="window.placementTest.submitTest()">Soumettre le test</button>' : '<button class="btn btn-primary" onclick="window.placementTest.nextQuestion()">Suivant →</button>');
      },

      nextQuestion: function () { if (this.currentQ < this.questions.length - 1) { this.currentQ++; this.renderQuestion(); } },
      prevQuestion: function () { if (this.currentQ > 0) { this.currentQ--; this.renderQuestion(); } },

      submitTest: function () {
        var that = this;
        var container = document.querySelector('.wizard-panel-test .test-container');
        if (container) {
          container.innerHTML = '<div style="text-align:center;padding:var(--space-4xl)"><div style="font-size:3rem;margin-bottom:var(--space-lg);animation:pulseGlow 1.5s ease-in-out infinite">🧠</div><h3>Analyse de vos réponses...</h3><p style="color:var(--color-text-secondary)">Notre système évalue vos compétences linguistiques</p><div class="progress" style="max-width:320px;margin:var(--space-lg) auto"><div class="progress-bar" style="width:0%" id="grading-bar"></div></div></div>';
        }
        var pct = 0;
        var gradeTimer = setInterval(function () {
          pct += Math.random() * 15 + 5;
          if (pct >= 100) { pct = 100; clearInterval(gradeTimer); }
          var bar = document.getElementById('grading-bar');
          if (bar) bar.style.width = pct + '%';
          if (pct >= 100) {
            setTimeout(function () {
              that.completed = true;
              that.showResults();
              // Navigate to results step
              var resultStepIdx = bookingWizard.steps.indexOf('results');
              if (resultStepIdx >= 0) bookingWizard.goToStep(resultStepIdx);
            }, 500);
          }
        }, 300);
      },

      calculateScore: function () {
        var total = this.questions.length;
        var correct = 0;
        var sectionResults = {}, sectionTotals = {};
        this.questions.forEach(function (q, i) {
          var ans = this.answers[i];
          if (!sectionResults[q.section]) { sectionResults[q.section] = 0; sectionTotals[q.section] = 0; }
          sectionTotals[q.section]++;
          if (ans !== undefined && ans === q.correct) { correct++; sectionResults[q.section]++; }
        }.bind(this));
        var sectionPcts = {};
        Object.keys(sectionResults).forEach(function (sec) { sectionPcts[sec] = Math.round((sectionResults[sec] / sectionTotals[sec]) * 100); });
        var overall = Math.round((correct / total) * 100);
        // CEFR: 0-30 A1, 31-45 A2, 46-60 B1, 61-80 B2, 81-100 C1
        var cefrLevel = 'A1';
        if (overall >= 81) cefrLevel = 'C1';
        else if (overall >= 61) cefrLevel = 'B2';
        else if (overall >= 46) cefrLevel = 'B1';
        else if (overall >= 31) cefrLevel = 'A2';
        var strengths = [], weaknesses = [];
        Object.keys(sectionPcts).forEach(function (sec) {
          if (sectionPcts[sec] >= 70) strengths.push(sec);
          else if (sectionPcts[sec] < 50) weaknesses.push(sec);
        });
        if (strengths.length === 0) strengths = ['Compréhension générale'];
        if (weaknesses.length === 0) weaknesses = ['Structures avancées', 'Expressions idiomatiques'];
        var progMap = { 'A1':'Programme Débutant (A1)','A2':'Programme Élémentaire (A2)','B1':'Programme Intermédiaire (B1)','B2':'Programme Avancé (B2)','C1':'Programme Maîtrise (C1)' };
        return { overall:overall, cefr:cefrLevel, sections:sectionPcts, correct:correct, total:total, strengths:strengths, weaknesses:weaknesses, recommendation:progMap[cefrLevel] || 'Programme sur mesure' };
      },

      showResults: function () {
        var results = this.calculateScore();
        var container = document.getElementById('test-results-container');
        if (!container) return;
        var emojis = {'A1':'🌱','A2':'🌿','B1':'🌳','B2':'🌲','C1':'🏆'};
        var secEmojis = {'Grammaire':'📐','Vocabulaire':'📝','Lecture':'📖','Complétion':'✍️','Compréhension Orale':'🎧'};
        var html = '<div class="results-container"><div class="results-header"><h1>📊 Vos Résultats</h1><p>Évaluation de votre niveau de français</p></div>';
        html += '<div style="text-align:center"><div class="results-level-badge">' + (emojis[results.cefr]||'📘') + ' Niveau ' + results.cefr + '</div></div>';
        html += '<div class="results-score-grid">';
        Object.keys(results.sections).forEach(function (sec) {
          var pct = results.sections[sec];
          var offset = 339.292 - (pct/100)*339.292;
          var color = pct>=80?'var(--color-emerald)':pct>=60?'var(--color-gold)':'var(--color-warning)';
          html += '<div class="results-score-card"><h4>'+(secEmojis[sec]||'📘')+' '+sec+'</h4><div class="results-ring-container"><svg class="results-ring" viewBox="0 0 120 120"><circle class="results-ring-bg" cx="60" cy="60" r="54"/><circle class="results-ring-fill" cx="60" cy="60" r="54" style="stroke:'+color+';stroke-dashoffset:'+offset+'" data-offset="'+offset+'"/></svg><div class="results-ring-text"><span class="score-value">'+pct+'%</span><span class="score-label">'+sec+'</span></div></div></div>';
        });
        html += '</div>';
        html += '<div class="results-level-overall"><div class="level-badge">'+results.cefr+'</div><div class="level-info"><h3>Niveau Global '+results.cefr+'</h3><p>Score global : '+results.overall+'% · '+results.correct+'/'+results.total+' réponses correctes</p></div></div>';
        html += '<div class="results-detail-grid"><div class="results-detail-card"><h4>💪 Points forts</h4><ul>';
        results.strengths.forEach(function(s){html+='<li><span class="icon">✅</span>'+s+'</li>';});
        html += '</ul></div><div class="results-detail-card"><h4>🎯 Axes d\'amélioration</h4><ul>';
        results.weaknesses.forEach(function(w){html+='<li><span class="icon">📌</span>'+w+'</li>';});
        html += '</ul></div></div>';
        html += '<div class="results-detail-card mb-xl"><h4>🎓 Recommandation</h4><p style="color:var(--color-text-secondary);line-height:1.7">Basé sur vos résultats, nous vous recommandons : <strong>'+results.recommendation+'</strong>. Notre coordinatrice pédagogique vous accompagnera dans le choix du programme adapté à vos objectifs.</p></div>';
        html += '<div class="results-cta"><button class="btn btn-primary btn-lg" onclick="window.bookingWizard.goToStep(window.bookingWizard.steps.indexOf(\'meeting\'))">Continuer vers votre suivi personnalisé →</button></div></div>';
        container.innerHTML = html;
        setTimeout(function () {
          document.querySelectorAll('.results-ring-fill').forEach(function (ring) {
            var offset = ring.getAttribute('data-offset');
            if (offset) { ring.style.strokeDasharray = '339.292'; ring.style.strokeDashoffset = offset; }
          });
        }, 100);
        if (window.startConfetti) { setTimeout(window.startConfetti, 800); setTimeout(window.stopConfetti, 5000); }
      }
    };
    window.placementTest = placementTest;

    /* ───────────────────────────────────────────────
       CONFETTI ANIMATION
       ─────────────────────────────────────────────── */
    var confettiParticles = [];
    var confettiInterval = null;
    var confettiCanvas = null;

    window.startConfetti = function () {
      var existing = document.querySelector('.confetti-canvas');
      if (existing) existing.remove();
      var canvas = document.createElement('canvas');
      canvas.className = 'confetti-canvas';
      document.body.appendChild(canvas);
      confettiCanvas = canvas;
      var ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var colors = ['#ED2D61', '#FA4E30', '#FBBD26', '#73CE65', '#2367D0', '#F63B42', '#42BDFA', '#FC9705'];
      confettiParticles = [];
      for (var i = 0; i < 80; i++) {
        confettiParticles.push({
          x: Math.random() * canvas.width, y: Math.random() * canvas.height - canvas.height,
          w: Math.random() * 8 + 4, h: Math.random() * 6 + 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: Math.random() * 2 - 1, vy: Math.random() * 2 + 1,
          rot: Math.random() * 360, rotV: Math.random() * 6 - 3, opacity: Math.random() * 0.5 + 0.5
        });
      }
      function animate() {
        if (!confettiCanvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiParticles.forEach(function (p) {
          p.x += p.vx; p.y += p.vy; p.rot += p.rotV;
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate((p.rot * Math.PI) / 180);
          ctx.globalAlpha = p.opacity; ctx.fillStyle = p.color;
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
          if (p.y > canvas.height + 20) { p.y = -20; p.x = Math.random() * canvas.width; }
        });
        confettiInterval = requestAnimationFrame(animate);
      }
      animate();
      setTimeout(window.stopConfetti, 6000);
    };
    window.stopConfetti = function () {
      if (confettiInterval) { cancelAnimationFrame(confettiInterval); confettiInterval = null; }
      if (confettiCanvas) { confettiCanvas.remove(); confettiCanvas = null; }
      confettiParticles = [];
    };

    /* ───────────────────────────────────────────────
       INIT WIZARD & SERVICE SELECTOR
       ─────────────────────────────────────────────── */
    if (document.querySelector('#wizard-steps') && window.bookingWizard) {
      document.querySelectorAll('.service-selector-card').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var service = btn.getAttribute('data-service');
          if (service) window.bookingWizard.init(service);
        });
      });
      var params = new URLSearchParams(window.location.search);
      var course = params.get('course');
      if (course && flowConfigs[course]) {
        window.bookingWizard.init(course);
      }
    }

    console.log('🌿 Cultulangues UI initialized');
  }

})();
