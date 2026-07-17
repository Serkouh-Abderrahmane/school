(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════════
     TRANSLATIONS — FR / EN
     ══════════════════════════════════════════════════════════════ */
  window.translations = {
    fr: {
      /* Nav */
      'nav.home': 'Accueil',
      'nav.private': 'Cours Particuliers',
      'nav.tcf': 'Préparation TCF Québec',
      'nav.tcf_desc': 'Se préparer sereinement au test officiel',
      'nav.workshops': 'Ateliers',
      'nav.about': 'À propos',
      'nav.contact': 'Contact',
      'nav.programs': 'Programmes',
      'nav.parcours': 'Parcours linguistique',
      'nav.parcours_desc': 'Apprendre et progresser en petit groupe',
      'nav.oral': 'Cap sur l\'oral',
      'nav.oral_desc': 'Développer une expression orale fluide et stratégique',
      'nav.solo': 'Formation en solo',
      'nav.solo_desc': 'Un accompagnement 100 % personnalisé',
      'nav.login': 'Connexion',
      'nav.register': 'S\'inscrire',

      /* Footer */
      'footer.brand': 'Formation linguistique & Préparation aux examens.',
      'footer.courses': 'Cours',
      'footer.info': 'Informations',
      'footer.info.about': 'À propos',
      'footer.info.contact': 'Contact',
      'footer.info.terms': 'Mentions légales',
      'footer.info.privacy': 'Politique de confidentialité',
      'footer.contact.title': 'Contact',
      'footer.contact.email': 'contact@cultulangues.fr',
      'footer.contact.phone': '+33 1 23 45 67 89',
      'footer.contact.location': 'Paris, France',
      'footer.copyright': 'Cultulangues. Tous droits réservés.',
      'footer.made': 'Fait avec bienveillance',

      /* Lang switcher */
      'lang.fr': 'FR',
      'lang.en': 'EN',

      /* Hero */
      'hero.badge': 'École certifiée — +950 étudiants',
      'hero.h1': 'Chez CultuLangues, nous construisons<br>votre réussite et donnons un nouvel<br>élan à vos <span class="text-gradient">projets</span>.',
      'hero.intro': 'Vous souhaitez apprendre l\'une des langues officielles du Canada :',
      'hero.list.1': 'Faire évoluer votre carrière',
      'hero.list.2': 'Réussir votre projet d\'immigration',
      'hero.list.3': 'Gagner confiance et autonomie dans la vie quotidienne',
      'hero.btn.primary': 'Découvrez nos parcours d\'apprentissage →',
      'hero.btn.secondary': 'Choisissez le format qui vous ressemble',
      'hero.stat1.value': '98%',
      'hero.stat1.label': 'Taux de réussite',
      'hero.stat2.value': '4.9/5',
      'hero.stat2.label': 'Avis étudiants',
      'hero.stat3.value': '+950',
      'hero.stat3.label': 'Étudiants accompagnés',
      'hero.card1.text': 'Cours particuliers',
      'hero.card1.label': 'Accompagnement 1-to-1',
      'hero.card2.text': 'Préparation TCF',
      'hero.card2.label': 'Québec & Canada',
      'hero.card3.text': 'Objectif Réussite',
      'hero.card3.label': 'Accompagnement',
      'hero.card4.text': 'Native Teachers',
      'hero.card4.label': '100% certifiés FLE',
      'hero.card5.text': 'Certificat',
      'hero.card5.label': 'Reconnu',

      /* Stats */
      'stat1.value': '12',
      'stat1.label': 'Années d\'expérience',
      'stat2.value': '98',
      'stat2.label': '% de réussite aux examens',
      'stat3.value': '950',
      'stat3.label': 'Étudiants accompagnés',
      'stat4.value': '4.9★',
      'stat4.label': 'Avis Google',

      /* Services */
      'services.title': 'Nos parcours <span class="text-gradient">phares</span>',
      'services.subtitle': 'Des parcours pensés pour des objectifs concrets : progresser à l\'oral, préparer un test officiel, renforcer son français au quotidien ou bénéficier d\'un accompagnement 100 % personnalisé.',
      'services.private.title': 'Cours Particuliers',
      'services.private.desc': 'Accompagnement sur-mesure avec un enseignant dédié. Programme 100% adapté à vos objectifs, votre niveau et votre rythme. Forfaits flexibles de 5h à 20h.',
      'services.private.btn': 'Découvrir les programmes →',
      'services.tcf.title': 'Préparation TCF',
      'services.tcf.desc': 'Programmes intensifs et réguliers pour le TCF Québec et TCF Canada. Simulations d\'examen hebdomadaires, corrections personnalisées et suivi individuel.',
      'services.tcf.btn': 'Découvrir les programmes →',
      'services.atelier.title': 'Ateliers',
      'services.atelier.desc': 'Des ateliers thématiques pour pratiquer, échanger et perfectionner votre français. Conversation, culture canadienne, maintien du niveau et préparation orale TCF.',
      'services.atelier.btn': 'Découvrir les ateliers →',

      /* Flagship offers */
      'flagship.1.title': 'Parcours linguistique',
      'flagship.1.desc': 'Un programme structuré en petit groupe pour progresser en français avec confiance, dans un environnement motivant et stimulant.',
      'flagship.1.tag1': 'Groupes de 5 max',
      'flagship.1.tag2': 'Adultes',
      'flagship.1.tag3': 'Confiance',
      'flagship.1.tag4': 'Français',
      'flagship.1.cta': 'Découvrir le parcours →',
      'flagship.2.title': 'Cap sur l\'oral — Lingo Test',
      'flagship.2.desc': 'Deux parcours collaboratifs en petit groupe pour maîtriser l\'oral avec confiance et précision, spécialement conçus pour le TCO.',
      'flagship.2.tag1': 'Parcours B & C',
      'flagship.2.tag2': 'TCO',
      'flagship.2.tag3': 'Temps partiel/intensif',
      'flagship.2.tag4': 'Anglais',
      'flagship.2.cta': 'Découvrir le parcours →',
      'flagship.3.title': 'Préparation TCF Québec',
      'flagship.3.desc': 'Un accompagnement structuré et bienveillant pour réussir votre TCF Québec et avancer sereinement dans votre projet d\'immigration.',
      'flagship.3.tag1': 'Immigration',
      'flagship.3.tag2': 'Niveau B2',
      'flagship.3.tag3': 'Examens blancs',
      'flagship.3.tag4': 'TCF',
      'flagship.3.cta': 'Découvrir le parcours →',
      'flagship.4.title': 'Formation en solo',
      'flagship.4.desc': 'Des cours particuliers 100 % personnalisés, flexibles et adaptés à vos objectifs spécifiques. Forfaits de 5 h à 20 h.',
      'flagship.4.tag1': '1-to-1',
      'flagship.4.tag2': 'Flexible',
      'flagship.4.tag3': 'Forfaits 5h–20h',
      'flagship.4.tag4': 'Personnalisé',
      'flagship.4.cta': 'Découvrir le parcours →',

      /* Compare */
      'compare.title': 'Quel parcours vous <span class="text-gradient">correspond</span> ?',
      'compare.subtitle': 'Comparez nos 4 parcours phares pour trouver celui qui correspond à vos objectifs, votre rythme et vos besoins.',
      'compare.th.critere': 'Critère',
      'compare.th.pl': 'Parcours linguistique',
      'compare.th.oral': 'Cap sur l\'oral',
      'compare.th.tcf': 'Préparation TCF',
      'compare.th.solo': 'Formation solo',
      'compare.row.objectif': 'Objectif',
      'compare.row.format': 'Format',
      'compare.row.accompagnement': 'Accompagnement',
      'compare.row.ideal': 'Idéal pour',
      'compare.row.flexibilite': 'Flexibilité',
      'compare.pl.objectif': 'Progrès général en français',
      'compare.pl.format': 'Groupe (max 5)',
      'compare.pl.accomp': 'Structuré, collectif',
      'compare.pl.ideal': 'Adultes tous niveaux',
      'compare.pl.flex': 'Calendrier fixe',
      'compare.oral.objectif': 'Maîtrise orale & TCO',
      'compare.oral.format': 'Groupe (max 5), temps partiel ou intensif',
      'compare.oral.accomp': 'Expert oral, collaboratif',
      'compare.oral.ideal': 'Candidats TCO',
      'compare.oral.flex': 'Temps partiel ou intensif',
      'compare.tcf.objectif': 'TCF Québec & immigration',
      'compare.tcf.format': 'Parcours guidé, simulations',
      'compare.tcf.accomp': 'Étape par étape, bienveillant',
      'compare.tcf.ideal': 'Projets immigration Québec',
      'compare.tcf.flex': 'Parcours progressif',
      'compare.solo.objectif': 'Objectifs personnalisés',
      'compare.solo.format': '1-to-1, full flexible',
      'compare.solo.accomp': '100 % sur-mesure',
      'compare.solo.ideal': 'Profil flexible ou ciblé',
      'compare.solo.flex': 'Totale (5h–20h)',

      /* Why */
      'why.title': 'Pourquoi <span class="text-gradient">Cultulangues</span> ?',
      'why.subtitle': 'Nous croyons en une approche humaine et exigeante pour vous accompagner vers la réussite.',
      'why.card1.title': 'Enseignants certifiés',
      'why.card1.desc': 'Tous nos enseignants sont diplômés FLE et spécialisés dans la préparation aux examens TCF.',
      'why.card2.title': 'Suivi personnalisé',
      'why.card2.desc': 'Un parcours adapté à votre niveau, vos objectifs et votre rythme d\'apprentissage.',
      'why.card3.title': 'Approche bienveillante',
      'why.card3.desc': 'Nous plaçons l\'humain au cœur de notre pédagogie pour vous aider à donner le meilleur.',

      /* Testimonials Home */
      'testimonials.title': 'Ils nous font <span class="text-gradient">confiance</span>',
      'testimonials.subtitle': 'Découvrez les témoignages de nos étudiants.',
      'testimonial1.text': 'Grâce à Cultulangues, j\'ai obtenu mon TCF Québec avec mention B2. L\'accompagnement personnalisé et les simulations d\'examen m\'ont vraiment préparée.',
      'testimonial1.name': 'Maria S.',
      'testimonial1.info': 'TCF Québec — Niveau B2',
      'testimonial2.text': 'Une équipe formidable qui m\'a aidé à reprendre confiance en mon français oral. Les ateliers de conversation ont été une vraie révélation.',
      'testimonial2.name': 'Ahmed K.',
      'testimonial2.info': 'Préparation Orale — Niveau C1',
      'testimonial3.text': 'Je recommande sans hésiter. La plateforme est claire, les cours sont bien structurés et les professeurs sont à l\'écoute. Exactement ce qu\'il me fallait.',
      'testimonial3.name': 'Laura P.',
      'testimonial3.info': 'TCF Canada — Niveau C1',

      /* CTA */
      'cta.home.title': 'Prêt à commencer votre parcours ?',
      'cta.home.desc': 'Rejoignez plus de 950 étudiants qui nous font confiance pour leur préparation linguistique.',
      'cta.home.btn': 'Créer mon compte gratuit →',

      /* About Page */
      'about.title': 'À propos — Cultulangues',
      'about.mission.title': 'Notre mission',
      'about.mission.text': 'Chez Cultulangues, nous croyons que la maîtrise du français est la clé de la réussite linguistique et professionnelle. Notre mission est d\'accompagner chaque apprenant avec bienveillance, professionnalisme et exigence vers la réussite de ses projets.',
      'about.pedagogy.title': 'Notre approche pédagogique',
      'about.pedagogy.subtitle': 'Une méthode qui place l\'humain au centre de l\'apprentissage.',
      'about.value1.title': 'Bienveillance',
      'about.value1.desc': 'Nous créons un environnement sécurisant où chaque apprenant peut progresser à son rythme, sans jugement.',
      'about.value2.title': 'Exigence',
      'about.value2.desc': 'Nous fixons des objectifs clairs et accompagnons chaque élève avec rigueur pour les atteindre.',
      'about.value3.title': 'Proximité',
      'about.value3.desc': 'Un suivi personnalisé et une écoute attentive pour répondre aux besoins spécifiques de chacun.',
      'about.trust.title': 'Pourquoi nous faire confiance ?',
      'about.trust1.title': 'Enseignants certifiés',
      'about.trust1.desc': 'Tous nos enseignants sont diplômés FLE et justifient d\'une expérience significative dans la préparation aux examens TCF.',
      'about.trust2.title': '98% de réussite',
      'about.trust2.desc': 'Nos résultats parlent d\'eux-mêmes. 98% de nos étudiants obtiennent le niveau visé dès leur première tentative.',
      'about.trust3.title': 'Communauté internationale',
      'about.trust3.desc': 'Plus de 950 étudiants de 40 nationalités différentes nous ont déjà rejoints.',

      /* Contact Page */
      'contact.title': 'Contactez-nous',
      'contact.subtitle': 'Une question ? Un projet ? Nous sommes là pour vous accompagner.',
      'contact.form.firstname': 'Prénom',
      'contact.form.lastname': 'Nom',
      'contact.form.email': 'Email',
      'contact.form.subject': 'Sujet',
      'contact.form.subject.placeholder': 'Sélectionnez un sujet',
      'contact.form.subject.programs': 'Information sur les programmes',
      'contact.form.subject.registration': 'Inscription',
      'contact.form.subject.tcf': 'Question TCF / Examens',
      'contact.form.subject.workshops': 'Ateliers',
      'contact.form.subject.other': 'Autre',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Envoyer le message',
      'contact.info.title': 'Nos coordonnées',
      'contact.info.address.title': 'Adresse',
      'contact.info.address.value': '123 Rue de la Langue Française<br>75001 Paris, France',
      'contact.info.phone.title': 'Téléphone',
      'contact.info.phone.value': '+33 1 23 45 67 89',
      'contact.info.email.title': 'Email',
      'contact.info.email.value': 'contact@cultulangues.fr',
      'contact.info.hours.title': 'Horaires',
      'contact.info.hours.value': 'Lun - Ven : 9h00 - 19h00<br>Sam : 10h00 - 16h00',

      /* Private Lessons Page */
      'private.title': 'Cours Particuliers <span class="text-gradient">1-to-1</span>',
      'private.subtitle': 'Choisissez le programme qui correspond à vos objectifs. Accompagnement personnalisé avec un enseignant certifié FLE.',
      'private.section.title': 'Choisissez votre <span class="text-gradient">programme</span>',
      'private.section.subtitle': 'Chaque programme est adapté à vos besoins spécifiques. Forfaits flexibles de 5h à 20h.',
      'private.packages.title': 'Nos forfaits',
      'private.packages.subtitle': 'Choisissez le nombre d\'heures qui vous convient. Plus le forfait est grand, plus le tarif horaire est avantageux.',
      'private.how.title': 'Comment ça marche ?',
      'private.how.subtitle': 'Réservez votre cours particulier en toute simplicité.',
      'private.cta.title': 'Prêt à commencer votre parcours personnalisé ?',
      'private.cta.desc': 'Choisissez votre programme, réservez votre première séance et laissez-vous guider par nos enseignants experts.',
      'private.cta.btn': 'Réservez votre cours particulier',

      /* TCF Page */
      'tcf.breadcrumb': 'Préparation TCF',
      'tcf.title': 'Préparation <span class="text-gradient">TCF</span>',
      'tcf.subtitle': 'Des programmes intensifs et réguliers pour réussir le TCF Québec et le TCF Canada. Simulations d\'examen hebdomadaires et suivi personnalisé.',
      'tcf.section.title': 'Choisissez votre <span class="text-gradient">programme</span>',
      'tcf.section.subtitle': 'Des formations complètes pour chaque examen, avec un accompagnement adapté à votre rythme.',
      'tcf.how.title': 'Comment ça marche ?',
      'tcf.how.subtitle': 'Rejoignez nos programmes de préparation TCF en toute simplicité.',
      'tcf.cta.title': 'Prêt à réussir votre TCF ?',
      'tcf.cta.desc': 'Rejoignez nos programmes de préparation et maximisez vos chances de succès.',
      'tcf.cta.btn': 'S\'inscrire maintenant',

      /* Workshops Page */
      'workshops.breadcrumb': 'Ateliers',
      'workshops.title': 'Nos <span class="text-gradient">Ateliers</span>',
      'workshops.subtitle': 'Des ateliers thématiques pour pratiquer, échanger et perfectionner votre français dans une ambiance conviviale.',
      'workshops.section.title': 'Choisissez votre <span class="text-gradient">atelier</span>',
      'workshops.section.subtitle': 'Des formats variés pour tous les niveaux et tous les objectifs.',
      'workshops.cta.title': 'Vous ne trouvez pas l\'atelier qu\'il vous faut ?',
      'workshops.cta.desc': 'Contactez-nous pour un accompagnement personnalisé. Nous créons des ateliers sur mesure selon vos besoins.',
      'workshops.cta.btn': 'Nous contacter',

      /* Programs Page */
      'programs.title': 'Nos Programmes',
      'programs.subtitle': 'Des formations adaptées à chaque objectif, du niveau débutant à l\'expertise. Trouvez le programme qui vous correspond.',
      'programs.filter.all': 'Tous',
      'programs.cta.title': 'Prêt à commencer votre parcours ?',
      'programs.cta.desc': 'Contactez-nous pour un test de placement gratuit et trouvez le programme qui correspond à vos objectifs.',
      'programs.cta.btn': 'Nous contacter',

      /* Program Detail */
      'detail.back': '&larr; Retour aux programmes',
      'detail.description': 'Description du programme',
      'detail.structure': 'Structure du programme',
      'detail.objectives': 'Objectifs pédagogiques',
      'detail.detail': 'Programme détaillé',
      'detail.included': 'Ce qui est inclus',
      'detail.teachers': 'Nos enseignants',
      'detail.price.total': 'pour l\'ensemble du programme',
      'detail.faq.title': 'Questions fréquentes',
      'detail.faq.subtitle': 'Tout ce que vous devez savoir avant de rejoindre le programme.',
      'detail.testimonials.title': 'Ce que disent nos élèves',
      'detail.testimonials.subtitle': 'Des témoignages d\'apprenants qui ont suivi ce programme.',
      'detail.cta.title': 'Prêt à débuter votre préparation ?',
      'detail.cta.desc': 'Rejoignez notre programme intensif et mettez toutes les chances de votre côté pour réussir le TCF Québec.',

      /* Breadcrumbs */
      'breadcrumb.home': 'Accueil',

      /* Common */
      'common.details': 'Détails',
      'common.book': 'Réserver',
      'common.choose': 'Choisir',
      'common.register': 'S\'inscrire',
      'common.contact': 'Nous contacter',
      'common.see.details': 'Voir détails',
      'common.month': '/ mois',
      'common.hour': '/ h',
      'common.session': '/ séance',
      'common.week': 'sem',
      'common.popular': 'Populaire',

      /* Filter buttons */
      'filter.tcf-canada': 'TCF Canada',
      'filter.tcf-quebec': 'TCF Québec',
      'filter.oral': 'Oral',
      'filter.particuliers': 'Particuliers',
      'filter.groupe': 'Groupe',
      'filter.intensif': 'Intensif',
      'filter.evaluations': 'Évaluations',

      /* Admin Sidebar */
      'admin.sidebar.section.gestion': 'Gestion',
      'admin.sidebar.section.system': 'Syst\u00e8me',
      'admin.sidebar.overview': 'Vue d\'ensemble',
      'admin.sidebar.programs': 'Programmes',
      'admin.sidebar.teachers': 'Enseignants',
      'admin.sidebar.students': '\u00c9tudiants',
      'admin.sidebar.bookings': 'R\u00e9servations',
      'admin.sidebar.payments': 'Paiements',
      'admin.sidebar.calendar': 'Calendrier',
      'admin.sidebar.analytics': 'Analytiques',
      'admin.sidebar.settings': 'Param\u00e8tres',
      'admin.sidebar.logout': 'D\u00e9connexion',

      /* Admin Common */
      'admin.common.search': 'Rechercher...',
      'admin.common.seeAll': 'Voir tout',
      'admin.common.cancel': 'Annuler',
      'admin.common.add': 'Ajouter',
      'admin.common.save': 'Enregistrer',
      'admin.common.update': 'Mettre \u00e0 jour',
      'admin.common.create': 'Cr\u00e9er',

      /* Admin Table */
      'admin.table.date': 'Date',
      'admin.table.program': 'Programme',
      'admin.table.teacher': 'Professeur',
      'admin.table.students': '\u00c9tudiants',
      'admin.table.student': '\u00c9tudiant',
      'admin.table.amount': 'Montant',
      'admin.table.status': 'Statut',
      'admin.table.email': 'Email',
      'admin.table.level': 'Niveau',
      'admin.table.progress': 'Progression',
      'admin.table.booking': 'R\u00e9servation',
      'admin.table.service': 'Service',
      'admin.table.specialties': 'Sp\u00e9cialit\u00e9s',
      'admin.table.evaluation': '\u00c9valuation',
      'admin.table.transaction': 'Transaction',
      'admin.table.method': 'M\u00e9thode',
      'admin.table.type': 'Type',
      'admin.table.duration': 'Dur\u00e9e',
      'admin.table.price': 'Prix',

      /* Admin Form */
      'admin.form.firstName': 'Pr\u00e9nom',
      'admin.form.lastName': 'Nom',
      'admin.form.email': 'Email',
      'admin.form.specialties': 'Sp\u00e9cialit\u00e9s',
      'admin.form.title': 'Titre',
      'admin.form.date': 'Date',
      'admin.form.type': 'Type',
      'admin.form.startTime': 'D\u00e9but',
      'admin.form.endTime': 'Fin',
      'admin.form.professor': 'Professeur',
      'admin.form.programName': 'Nom du programme',
      'admin.form.level': 'Niveau',
      'admin.form.duration': 'Dur\u00e9e (semaines)',
      'admin.form.monthlyPrice': 'Prix mensuel (\u20ac)',
      'admin.form.description': 'Description',
      'admin.form.platformName': 'Nom de la plateforme',
      'admin.form.contactEmail': 'Email de contact',
      'admin.form.currency': 'Devise',
      'admin.form.timezone': 'Fuseau horaire',
      'admin.form.paymentMethods': 'Moyens de paiement accept\u00e9s',
      'admin.form.serviceFee': 'Frais de service (%)',
      'admin.form.adminEmail': 'Email administrateur',
      'admin.form.currentPassword': 'Mot de passe actuel',
      'admin.form.newPassword': 'Nouveau mot de passe',
      'admin.form.titlePlaceholder': 'Ex: TCF Qu\u00e9bec - Groupe A',
      'admin.form.programNamePlaceholder': 'Ex: TCF Qu\u00e9bec Intensif',
      'admin.form.descriptionPlaceholder': 'Description du programme...',
      'admin.form.passwordPlaceholder': 'Minimum 8 caract\u00e8res',

      /* Admin Form Options */
      'admin.form.option.tcfQuebec': 'TCF Qu\u00e9bec',
      'admin.form.option.tcfCanada': 'TCF Canada',
      'admin.form.option.oralBC': 'Oral B/C',
      'admin.form.option.oral': 'Oral',
      'admin.form.option.workshops': 'Ateliers',
      'admin.form.option.solo': 'Solo',
      'admin.form.option.class': 'Cours',
      'admin.form.option.workshop': 'Atelier',
      'admin.form.option.evaluation': '\u00c9valuation',
      'admin.form.option.eur': 'EUR (\u20ac)',
      'admin.form.option.cad': 'CAD ($)',

      /* Admin Modal */
      'admin.modal.addTeacher': 'Ajouter un enseignant',
      'admin.modal.newEvent': 'Nouvel \u00e9v\u00e9nement',
      'admin.modal.newProgram': 'Nouveau programme',

      /* Admin Dashboard */
      'admin.dashboard.title': 'Vue d\'ensemble',
      'admin.dashboard.students': '\u00c9tudiants',
      'admin.dashboard.activePrograms': 'Programmes actifs',
      'admin.dashboard.teachers': 'Enseignants',
      'admin.dashboard.monthlyRevenue': 'Revenus du mois',
      'admin.dashboard.upcomingSessions': 'Prochaines s\u00e9ances',
      'admin.dashboard.recentBookings': 'Derni\u00e8res r\u00e9servations',
      'admin.dashboard.monthlyRevenueChart': 'Revenus mensuels',

      /* Admin Bookings */
      'admin.bookings.title': 'R\u00e9servations',
      'admin.bookings.management': 'Gestion des r\u00e9servations',
      'admin.bookings.filter.all': 'Toutes les r\u00e9servations',
      'admin.bookings.filter.pending': 'En attente',
      'admin.bookings.filter.confirmed': 'Confirm\u00e9es',
      'admin.bookings.filter.cancelled': 'Annul\u00e9es',

      /* Admin Students */
      'admin.students.title': '\u00c9tudiants',

      /* Admin Teachers */
      'admin.teachers.title': 'Enseignants',
      'admin.teachers.management': 'Gestion des enseignants',
      'admin.teachers.addTeacher': '+ Ajouter un enseignant',

      /* Admin Payments */
      'admin.payments.title': 'Paiements',
      'admin.payments.monthlyRevenue': 'Revenus du mois',
      'admin.payments.transactions': 'Transactions',
      'admin.payments.pending': 'En attente',
      'admin.payments.successRate': 'Taux de succ\u00e8s',

      /* Admin Calendar */
      'admin.calendar.title': 'Calendrier',
      'admin.calendar.general': 'Calendrier g\u00e9n\u00e9ral',
      'admin.calendar.addEvent': '+ Ajouter un \u00e9v\u00e9nement',
      'admin.calendar.class': 'Cours',
      'admin.calendar.workshop': 'Atelier',
      'admin.calendar.evaluation': '\u00c9valuation',

      /* Admin Analytics */
      'admin.analytics.title': 'Analytiques & rapports',
      'admin.analytics.pageTitle': 'Analytiques',
      'admin.analytics.filter.thisYear': 'Cette ann\u00e9e',
      'admin.analytics.filter.thisMonth': 'Ce mois',
      'admin.analytics.filter.thisWeek': 'Cette semaine',
      'admin.analytics.enrollmentGrowth': '\u00c9volution des inscriptions',
      'admin.analytics.programDistribution': 'R\u00e9partition par programme',
      'admin.analytics.successRate': 'Taux de r\u00e9ussite',
      'admin.analytics.globalAverage': 'Moyenne globale',
      'admin.analytics.retention': 'R\u00e9tention',
      'admin.analytics.retentionRate': 'Taux de r\u00e9tention \u00e0 3 mois',
      'admin.analytics.satisfaction': 'Satisfaction',
      'admin.analytics.studentRating': 'Note moyenne des \u00e9tudiants',
      'admin.analytics.program.tcfQuebec': 'TCF Qu\u00e9bec',
      'admin.analytics.program.tcfCanada': 'TCF Canada',
      'admin.analytics.program.oralBC': 'Oral B & C',
      'admin.analytics.program.workshops': 'Ateliers',

      /* Admin Settings */
      'admin.settings.title': 'Param\u00e8tres',
      'admin.settings.tab.general': 'G\u00e9n\u00e9ral',
      'admin.settings.tab.payment': 'Paiement',
      'admin.settings.tab.email': 'Email',
      'admin.settings.tab.security': 'S\u00e9curit\u00e9',
      'admin.settings.generalInfo': 'Informations g\u00e9n\u00e9rales',
      'admin.settings.paymentConfig': 'Configuration des paiements',
      'admin.settings.emailNotifications': 'Notifications email',
      'admin.settings.security': 'S\u00e9curit\u00e9',
      'admin.settings.payment.card': 'Carte bancaire (Visa, Mastercard)',
      'admin.settings.payment.paypal': 'PayPal',
      'admin.settings.payment.bankTransfer': 'Virement bancaire',
      'admin.settings.notif.registration': 'Confirmation d\'inscription',
      'admin.settings.notif.sessionReminder': 'Rappel de s\u00e9ance (24h avant)',
      'admin.settings.notif.invoice': 'Facture disponible',
      'admin.settings.notif.testResult': 'R\u00e9sultat de test',
      'admin.settings.notif.newsletter': 'Newsletter',

      /* Admin Programs */
      'admin.programs.title': 'Programmes',
      'admin.programs.management': 'Gestion des programmes',
      'admin.programs.addProgram': '+ Nouveau programme',
      'admin.programs.createProgram': 'Cr\u00e9er le programme',

      /* Admin Index Sidebar */
      'admin.index.brand': 'SchoolAdmin',
      'admin.index.sidebar.section.main': 'Main',
      'admin.index.sidebar.section.tracking': 'Tracking',
      'admin.index.sidebar.section.management': 'Management',
      'admin.index.sidebar.dashboard': 'Dashboard',
      'admin.index.sidebar.students': 'Students',
      'admin.index.sidebar.teachers': 'Teachers',
      'admin.index.sidebar.courses': 'Courses',
      'admin.index.sidebar.lessons': 'Lessons',
      'admin.index.sidebar.schedules': 'Schedules',
      'admin.index.sidebar.testsResults': 'Tests & Results',
      'admin.index.sidebar.attendance': 'Attendance',
      'admin.index.sidebar.revenue': 'Revenue',
      'admin.index.sidebar.workHours': 'Work Hours',
      'admin.index.sidebar.reports': 'Reports',
      'admin.index.sidebar.settings': 'Settings',
      'admin.index.sidebar.logout': 'Log Out',

      /* Admin Index Header */
      'admin.index.dashboard.title': 'Dashboard',
      'admin.index.dashboard.subtitle': 'Complete overview of your institution',
      'admin.index.search.placeholder': 'Search students, teachers, courses...',
      'admin.index.search.student': 'Search student...',
      'admin.index.search.teacher': 'Search teacher...',

      /* Admin Index User */
      'admin.index.dropdown.profile': 'Profile',
      'admin.index.dropdown.preferences': 'Preferences',
      'admin.index.dropdown.logout': 'Log Out',

      /* Admin Index Dashboard */
      'admin.index.dashboard.enrollmentGrowth': 'Enrollment Growth',
      'admin.index.dashboard.enrollmentSub': 'Weekly student enrollment over the past 6 months',
      'admin.index.dashboard.overallAttendance': 'Overall Attendance',
      'admin.index.dashboard.attendanceSub': 'Average attendance rate across all courses',
      'admin.index.dashboard.present': 'present',
      'admin.index.dashboard.absent': 'Absent',
      'admin.index.add': 'Add',
      'admin.index.export': 'Export',

      /* Admin Index Filters */
      'admin.index.filter.allCourses': 'All Courses',
      'admin.index.filter.allLevels': 'All Levels',
      'admin.index.filter.allStatus': 'All Status',
      'admin.index.filter.active': 'Active',
      'admin.index.filter.suspended': 'Suspended',
      'admin.index.filter.completed': 'Completed',
      'admin.index.filter.allPrograms': 'Tous les programmes',
      'admin.index.filter.languages': 'Languages',
      'admin.index.filter.mathematics': 'Mathematics',
      'admin.index.filter.sciences': 'Sciences',
      'admin.index.filter.arts': 'Arts',
      'admin.index.filter.stem': 'STEM',
      'admin.index.filter.testPrep': 'Test Prep',
      'admin.index.filter.allCategories': 'All Categories',
      'admin.index.filter.allTests': 'All Tests',
      'admin.index.filter.placementTest': 'Placement Test',
      'admin.index.filter.midTerm': 'Mid-Term',
      'admin.index.filter.final': 'Final',
      'admin.index.filter.thisWeek': 'This Week',
      'admin.index.filter.thisMonth': 'This Month',
      'admin.index.filter.all': 'All',

      /* Admin Index Students */
      'admin.index.students.directory': 'Student Directory',
      'admin.index.backToStudents': 'Back to Students',
      'admin.index.attendanceOverview': 'Attendance Overview',
      'admin.index.testHistory': 'Test History',
      'admin.index.weeklySchedule': 'Weekly Schedule',
      'admin.index.enrolledClasses': 'Current enrolled classes',
      'admin.index.paymentHistory': 'Payment History',

      /* Admin Index Teachers */
      'admin.index.teachers.facultyDirectory': 'Faculty Directory',
      'admin.index.backToTeachers': 'Back to Teachers',
      'admin.index.assignedClasses': 'Assigned classes this week',
      'admin.index.performanceRating': 'Performance Rating',
      'admin.index.ratingSub': 'Based on student feedback and results',

      /* Admin Index Course */
      'admin.index.addCourse': 'Add Course',
      'admin.index.backToCourses': 'Back to Courses',
      'admin.index.course.lessons': 'Lessons',
      'admin.index.course.enrolledStudents': 'Enrolled Students',

      /* Admin Index Lesson */
      'admin.index.lesson.list': 'List',
      'admin.index.lesson.calendar': 'Calendar',
      'admin.index.lesson.schedule': 'Lesson Schedule',
      'admin.index.lesson.scheduleBtn': 'Schedule',

      /* Admin Index Schedules */
      'admin.index.schedules.title': 'Weekly Timetable',

      /* Admin Index Tests */
      'admin.index.tests.scoreDistribution': 'Score Distribution',
      'admin.index.tests.scoreSub': 'Latest test results by score range',
      'admin.index.tests.passRate': 'Pass Rate',
      'admin.index.tests.passSub': 'Pass / fail ratio this term',
      'admin.index.tests.passed': 'passed',
      'admin.index.tests.passedPercent': 'Passed (78%)',
      'admin.index.tests.inProgress': 'In Progress (22%)',
      'admin.index.tests.individualResults': 'Individual Results',

      /* Admin Index Attendance */
      'admin.index.attendance.monthlyTrend': 'Monthly Trend',
      'admin.index.attendance.trendSub': 'Attendance rate over the past 6 months',
      'admin.index.attendance.calendar': 'Attendance Calendar',
      'admin.index.attendance.calendarSub': 'June 2026',
      'admin.index.attendance.byCourse': 'Attendance by Course',

      /* Admin Index Revenue */
      'admin.index.revenue.monthly': 'Monthly Revenue',
      'admin.index.revenue.monthlySub': 'Income over the past 6 months',
      'admin.index.revenue.byCourse': 'Revenue by Course',
      'admin.index.revenue.byCourseSub': 'Income breakdown by course',
      'admin.index.revenue.recentPayments': 'Recent Payments',

      /* Admin Index Hours */
      'admin.index.hours.perTeacher': 'Hours per Teacher',
      'admin.index.hours.currentMonth': 'Current month',
      'admin.index.hours.detailed': 'Detailed Hours',

      /* Admin Index Reports */
      'admin.index.reports.title': 'Available Reports',
      'admin.index.reports.studentPerformance': 'Student Performance Report',
      'admin.index.reports.studentPerfDesc': 'Grades, progress tracking, and level distribution per student',
      'admin.index.reports.attendance': 'Attendance Report',
      'admin.index.reports.attendanceDesc': 'Attendance rates by course, month, and individual student',
      'admin.index.reports.revenue': 'Revenue Report',
      'admin.index.reports.revenueDesc': 'Income statements, payment tracking, and budget forecasts',
      'admin.index.reports.teacherWorkload': 'Teacher Workload Report',
      'admin.index.reports.teacherWorkloadDesc': 'Hourly distribution, overtime tracking, and workload balance',
      'admin.index.reports.topPerformers': 'Top Performers Report',
      'admin.index.reports.topPerformersDesc': 'Honor roll, highest achievers, and most improved students',
      'admin.index.reports.compliance': 'Compliance Report',
      'admin.index.reports.complianceDesc': 'Academic standards, attendance thresholds, and policy adherence',

      /* Admin Index Settings */
      'admin.index.settings.title': 'Settings',
      'admin.index.settings.schoolInfo': 'School Information',
      'admin.index.settings.institutionName': 'Institution Name',
      'admin.index.settings.institutionNameVal': 'International School of Languages',
      'admin.index.settings.academicYear': 'Academic Year',
      'admin.index.settings.timezone': 'Timezone',
      'admin.index.settings.academicTerm': 'Academic Term',
      'admin.index.settings.current': 'Current',
      'admin.index.settings.gradingSystem': 'Grading System',
      'admin.index.settings.scale': 'Scale',
      'admin.index.settings.scaleDesc': 'A\u2013F Letter Grading (A=90\u2013100, B=80\u201389, C=70\u201379, D=60\u201369, F<60)',
      'admin.index.settings.active': 'Active',
      'admin.index.settings.passThreshold': 'Pass Threshold',
      'admin.index.settings.passThresholdDesc': 'Minimum 65% to pass a course',
      'admin.index.settings.attendanceReq': 'Attendance Requirement',
      'admin.index.settings.attendanceReqDesc': 'Minimum 80% attendance to qualify for exams',
      'admin.index.settings.notifications': 'Notifications',
      'admin.index.settings.classReminders': 'Class Reminders',
      'admin.index.settings.classRemindersDesc': 'Send reminders 24h before class',
      'admin.index.settings.attendanceAlerts': 'Attendance Alerts',
      'admin.index.settings.attendanceAlertsDesc': 'Alert when student attendance < 80%',
      'admin.index.settings.weeklyReports': 'Weekly Reports',
      'admin.index.settings.weeklyReportsDesc': 'Email summary every Monday',
      'admin.index.settings.paymentNotifs': 'Payment Notifications',
      'admin.index.settings.paymentNotifsDesc': 'Alert on overdue payments',
      'admin.index.settings.rolesPermissions': 'Roles & Permissions',
      'admin.index.settings.roleAdmin': 'Administrator',
      'admin.index.settings.roleAdminDesc': 'Full access to all sections and settings',
      'admin.index.settings.roleTeacher': 'Teacher',
      'admin.index.settings.roleTeacherDesc': 'Courses, students, attendance, grades',
      'admin.index.settings.roleStudent': 'Student',
      'admin.index.settings.roleStudentDesc': 'Profile, grades, schedule only',
      'admin.index.settings.roleAccountant': 'Accountant',
      'admin.index.settings.roleAccountantDesc': 'Revenue, payments, financial reports',
      'admin.index.settings.full': 'Full',
      'admin.index.settings.limited': 'Limited',
      'admin.index.settings.restricted': 'Restricted',
      'admin.index.settings.financial': 'Financial',
      'admin.index.settings.system': 'System',
      'admin.index.settings.maintenanceMode': 'Maintenance Mode',
      'admin.index.settings.maintenanceModeDesc': 'Temporarily disable access for updates',
      'admin.index.settings.autoBackup': 'Auto Backup',
      'admin.index.settings.autoBackupDesc': 'Daily automated backup at 2:00 AM',

      /* Admin Index Table */
      'admin.index.table.student': 'Student',
      'admin.index.table.course': 'Course',
      'admin.index.table.level': 'Level',
      'admin.index.table.attendance': 'Attendance',
      'admin.index.table.testAvg': 'Test Avg',
      'admin.index.table.status': 'Status',
      'admin.index.table.test': 'Test',
      'admin.index.table.score': 'Score',
      'admin.index.table.grade': 'Grade',
      'admin.index.table.date': 'Date',
      'admin.index.table.teacher': 'Teacher',
      'admin.index.table.department': 'Department',
      'admin.index.table.courses': 'Courses',
      'admin.index.table.hoursPerWeek': 'Hours/Week',
      'admin.index.table.rating': 'Rating',
      'admin.index.table.lesson': 'Lesson',
      'admin.index.table.time': 'Time',
      'admin.index.table.rank': 'Rank',
      'admin.index.table.amount': 'Amount',
      'admin.index.table.method': 'Method',
      'admin.index.table.contractHours': 'Contract Hours',
      'admin.index.table.actualHours': 'Actual Hours',
      'admin.index.table.difference': 'Difference',
      'admin.index.table.overtime': 'Overtime',
      'admin.index.table.rate': 'Hourly Rate',
      'admin.index.table.montantDu': 'Amount Due',
      'admin.index.table.paymentStatus': 'Payment Status',
      'admin.index.table.hoursThisMonth': 'Hours/Month',

      /* Admin Index Tab */
      'admin.index.tab.overview': 'Overview',
      'admin.index.tab.attendance': 'Attendance',
      'admin.index.tab.testResults': 'Test Results',
      'admin.index.tab.schedule': 'Schedule',
      'admin.index.tab.payments': 'Payments',
      'admin.index.tab.classes': 'Classes',
      'admin.index.tab.hours': 'Schedule & Hours',
      'admin.index.tab.payroll': 'Payroll',
      'admin.index.tab.notes': 'Notes',

      /* Student Sidebar */
      'student.sidebar.navigation': 'Navigation',
      'student.sidebar.dashboard': 'Tableau de bord',
      'student.sidebar.my_programs': 'Mes programmes',
      'student.sidebar.calendar': 'Mon calendrier',
      'student.sidebar.payments': 'Paiements & factures',
      'student.sidebar.level_tests': 'Tests de niveau',
      'student.sidebar.settings': 'Param\u00e8tres',
      'student.sidebar.profile': 'Profil',
      'student.sidebar.support': 'Support',
      'student.sidebar.logout': 'D\u00e9connexion',

      /* Student Common */
      'student.common.search': 'Rechercher...',
      'student.common.close': 'Fermer',
      'student.common.view_calendar': 'Voir le calendrier',

      /* Student Dashboard */
      'student.dashboard.page_title': 'Tableau de bord \u2014 Cultulangues',
      'student.dashboard.title': 'Tableau de bord',
      'student.dashboard.active_programs': 'Programmes en cours',
      'student.dashboard.change_this_month': '+1 ce mois',
      'student.dashboard.upcoming_sessions': 'S\u00e9ances \u00e0 venir',
      'student.dashboard.next_session_label': 'Prochaine : demain',
      'student.dashboard.global_progress': 'Progression globale',
      'student.dashboard.progress_this_week': '+12% cette semaine',
      'student.dashboard.current_level': 'Niveau actuel',
      'student.dashboard.objective_label': 'Objectif : C1',
      'student.dashboard.next_session': 'Prochaine s\u00e9ance',
      'student.dashboard.view_calendar': 'Voir calendrier',
      'student.dashboard.join': 'Rejoindre',
      'student.dashboard.my_progress': 'Ma progression',
      'student.dashboard.listening': 'Compr\u00e9hension orale',
      'student.dashboard.reading': 'Compr\u00e9hension \u00e9crite',
      'student.dashboard.speaking': 'Expression orale',
      'student.dashboard.writing': 'Expression \u00e9crite',
      'student.dashboard.notifications': 'Notifications',
      'student.dashboard.notif_reminder_title': 'Rappel : test de compr\u00e9hension',
      'student.dashboard.notif_reminder_desc': 'Votre test est pr\u00e9vu dans 2 jours',
      'student.dashboard.notif_correction_title': 'Correction disponible',
      'student.dashboard.notif_correction_desc': 'Votre simulation a \u00e9t\u00e9 corrig\u00e9e',
      'student.dashboard.notif_workshop_title': 'Atelier de conversation',
      'student.dashboard.notif_workshop_desc': 'Nouvel atelier disponible \u00e0 la r\u00e9servation',
      'student.dashboard.notif_progress_title': 'Progression mise \u00e0 jour',
      'student.dashboard.notif_progress_desc': '+5% cette semaine, bravo !',
      'student.dashboard.quick_actions': 'Actions rapides',
      'student.dashboard.take_level_test': 'Passer un test de niveau',
      'student.dashboard.book_program': 'R\u00e9server un programme',
      'student.dashboard.view_invoices': 'Voir mes factures',
      'student.dashboard.contact_support': 'Contacter le support',

      /* Student Calendar */
      'student.calendar.page_title': 'Mon Calendrier \u2014 Cultulangues',
      'student.calendar.title': 'Mon calendrier',
      'student.calendar.heading': 'Calendrier',
      'student.calendar.month_view': 'Vue mois',
      'student.calendar.week_view': 'Vue semaine',
      'student.calendar.add_event': '+ Ajouter un \u00e9v\u00e9nement',
      'student.calendar.day_mon': 'Lun',
      'student.calendar.day_tue': 'Mar',
      'student.calendar.day_wed': 'Mer',
      'student.calendar.day_thu': 'Jeu',
      'student.calendar.day_fri': 'Ven',
      'student.calendar.day_sat': 'Sam',
      'student.calendar.day_sun': 'Dim',
      'student.calendar.upcoming_sessions': 'S\u00e9ances \u00e0 venir',
      'student.calendar.th_date': 'Date',
      'student.calendar.th_program': 'Programme',
      'student.calendar.th_time': 'Horaire',
      'student.calendar.th_teacher': 'Professeur',
      'student.calendar.th_location': 'Lieu',

      /* Student Tests */
      'student.tests.page_title': 'Tests de niveau \u2014 Cultulangues',
      'student.tests.title': 'Tests de niveau',
      'student.tests.evaluate_level': '\u00c9valuez votre niveau',
      'student.tests.listening_test': 'Test de compr\u00e9hension orale',
      'student.tests.grammar_test': 'Test de grammaire',
      'student.tests.view_results': 'Voir les r\u00e9sultats',
      'student.tests.test_history': 'Historique des tests',
      'student.tests.th_date': 'Date',
      'student.tests.th_test': 'Test',
      'student.tests.th_score': 'Score',
      'student.tests.th_level': 'Niveau',
      'student.tests.view': 'Voir',

      /* Student Programs */
      'student.programs.page_title': 'Mes Programmes \u2014 Cultulangues',
      'student.programs.title': 'Mes programmes',
      'student.programs.new_registration': '+ Nouvelle inscription',
      'student.programs.details': 'D\u00e9tails',
      'student.programs.already_enrolled': 'Vous avez d\u00e9j\u00e0 2 programmes en cours',
      'student.programs.encouragement': 'Continuez comme \u00e7a ! Vous pouvez \u00e9galement explorer nos autres formations.',
      'student.programs.discover_more': 'D\u00e9couvrir plus de programmes',
      'student.programs.details_title': 'D\u00e9tails du programme',
      'student.programs.label_start': 'D\u00e9but',
      'student.programs.label_end': 'Fin',
      'student.programs.label_schedule': 'Rythme',
      'student.programs.label_progress': 'Progression',
      'student.programs.label_level': 'Niveau actuel',

      /* Student Payments */
      'student.payments.page_title': 'Paiements \u2014 Cultulangues',
      'student.payments.title': 'Paiements & factures',
      'student.payments.last_payment': 'Dernier paiement',
      'student.payments.total_paid': 'Total pay\u00e9',
      'student.payments.next_payment': 'Prochain paiement',
      'student.payments.invoices_paid': 'Factures pay\u00e9es',
      'student.payments.invoice_history': 'Historique des factures',
      'student.payments.th_invoice': 'Facture',
      'student.payments.th_date': 'Date',
      'student.payments.th_description': 'Description',
      'student.payments.th_amount': 'Montant',
      'student.payments.th_status': 'Statut',
      'student.payments.download': 'T\u00e9l\u00e9charger',

      /* Student Profile */
      'student.profile.page_title': 'Profil \u2014 Cultulangues',
      'student.profile.title': 'Profil',
      'student.profile.change_photo': 'Modifier la photo',
      'student.profile.personal_info': 'Informations personnelles',
      'student.profile.first_name': 'Pr\u00e9nom',
      'student.profile.last_name': 'Nom',
      'student.profile.email': 'Email',
      'student.profile.phone': 'T\u00e9l\u00e9phone',
      'student.profile.save': 'Enregistrer',
      'student.profile.language_prefs': 'Pr\u00e9f\u00e9rences linguistiques',
      'student.profile.current_level': 'Niveau actuel',
      'student.profile.objective': 'Objectif',
      'student.profile.opt_tcf_qc': 'TCF Qu\u00e9bec',
      'student.profile.opt_tcf_canada': 'TCF Canada',
      'student.profile.opt_oral': 'Oral B ou C',
      'student.profile.native_language': 'Langue maternelle',
      'student.profile.update': 'Mettre \u00e0 jour',

      /* Student Support */
      'student.support.page_title': 'Support \u2014 Cultulangues',
      'student.support.title': 'Support',
      'student.support.send_message': 'Envoyer un message',
      'student.support.subject': 'Sujet',
      'student.support.subject_admin': 'Question administrative',
      'student.support.subject_tech': 'Probl\u00e8me technique',
      'student.support.subject_program': 'Programme & cours',
      'student.support.subject_payment': 'Paiement & facturation',
      'student.support.subject_other': 'Autre',
      'student.support.message': 'Message',
      'student.support.message_placeholder': 'D\u00e9crivez votre demande...',
      'student.support.send': 'Envoyer',
      'student.support.recent_messages': 'Messages r\u00e9cents',
      'student.support.support_label': 'Support',
      'student.support.you_label': 'Vous',
      'student.support.faq_title': 'FAQ rapide',
      'student.support.faq1_q': 'Comment modifier mon mot de passe ?',
      'student.support.faq1_a': 'Rendez-vous dans votre Profil, puis dans la section S\u00e9curit\u00e9.',
      'student.support.faq2_q': 'Quand re\u00e7ois-je mes factures ?',
      'student.support.faq2_a': 'Les factures sont g\u00e9n\u00e9r\u00e9es le 1er de chaque mois.',
      'student.support.faq3_q': 'Puis-je annuler un programme ?',
      'student.support.faq3_a': 'Oui, sous 14 jours apr\u00e8s le d\u00e9but du programme.',
      'student.support.faq4_q': 'Comment contacter mon professeur ?',
      'student.support.faq4_a': 'Vous pouvez lui envoyer un message depuis la messagerie int\u00e9gr\u00e9e.',

      /* Teacher Sidebar */
      'teacher.sidebar.navigation': 'Navigation',
      'teacher.sidebar.dashboard': 'Tableau de bord',
      'teacher.sidebar.schedule': 'Mon emploi du temps',
      'teacher.sidebar.students': 'Mes \u00e9tudiants',
      'teacher.sidebar.sessions': 'Suivi des s\u00e9ances',
      'teacher.sidebar.settings': 'Param\u00e8tres',
      'teacher.sidebar.profile': 'Profil',
      'teacher.sidebar.logout': 'D\u00e9connexion',

      /* Teacher Common */
      'teacher.common.search': 'Rechercher...',

      /* Teacher Dashboard */
      'teacher.dashboard.title': 'Tableau de bord',
      'teacher.dashboard.active_students': '\u00c9tudiants actifs',
      'teacher.dashboard.sessions_month': 'S\u00e9ances ce mois',
      'teacher.dashboard.groups': 'Groupes',
      'teacher.dashboard.avg_rating': '\u00c9valuation moyenne',
      'teacher.dashboard.upcoming_sessions': 'Prochaines s\u00e9ances',
      'teacher.dashboard.see_all': 'Voir tout',
      'teacher.dashboard.notifications': 'Notifications',
      'teacher.dashboard.today': 'Auj.',
      'teacher.dashboard.tomorrow': 'Demain',
      'teacher.dashboard.fri': 'Ven.',

      /* Teacher Profile */
      'teacher.profile.title': 'Profil \u2014 Enseignant',
      'teacher.profile.page_title': 'Profil',
      'teacher.profile.information': 'Informations',
      'teacher.profile.first_name': 'Pr\u00e9nom',
      'teacher.profile.last_name': 'Nom',
      'teacher.profile.email': 'Email',
      'teacher.profile.phone': 'T\u00e9l\u00e9phone',
      'teacher.profile.save': 'Enregistrer',
      'teacher.profile.skills_availability': 'Comp\u00e9tences & disponibilit\u00e9s',
      'teacher.profile.specialties': 'Sp\u00e9cialit\u00e9s',
      'teacher.profile.availability': 'Disponibilit\u00e9s',
      'teacher.profile.update': 'Mettre \u00e0 jour',

      /* Teacher Students */
      'teacher.students.title': 'Mes \u00e9tudiants \u2014 Enseignant',
      'teacher.students.page_title': 'Mes \u00e9tudiants',
      'teacher.students.heading': 'Mes \u00e9tudiants',
      'teacher.students.search_student': 'Rechercher un \u00e9tudiant...',
      'teacher.students.th_student': '\u00c9tudiant',
      'teacher.students.th_level': 'Niveau',
      'teacher.students.th_group': 'Groupe',
      'teacher.students.th_progress': 'Progression',
      'teacher.students.th_last_session': 'Derni\u00e8re s\u00e9ance',
      'teacher.students.view_profile': 'Voir profil',

      /* Teacher Schedule */
      'teacher.schedule.title': 'Mon emploi du temps \u2014 Enseignant',
      'teacher.schedule.page_title': 'Mon emploi du temps',
      'teacher.schedule.mon': 'Lun',
      'teacher.schedule.tue': 'Mar',
      'teacher.schedule.wed': 'Mer',
      'teacher.schedule.thu': 'Jeu',
      'teacher.schedule.fri': 'Ven',
      'teacher.schedule.sat': 'Sam',
      'teacher.schedule.sun': 'Dim',

      /* Teacher Sessions */
      'teacher.sessions.title': 'Suivi des s\u00e9ances \u2014 Enseignant',
      'teacher.sessions.page_title': 'Suivi des s\u00e9ances',
      'teacher.sessions.session_info': 'Informations de la s\u00e9ance',
      'teacher.sessions.date': 'Date',
      'teacher.sessions.time': 'Horaire',
      'teacher.sessions.group': 'Groupe',
      'teacher.sessions.room': 'Salle',
      'teacher.sessions.type': 'Type',
      'teacher.sessions.attendance': 'Pr\u00e9sents',
      'teacher.sessions.session_notes': 'Notes de s\u00e9ance',
      'teacher.sessions.save': 'Enregistrer',
      'teacher.sessions.notes_placeholder': 'R\u00e9sum\u00e9 de la s\u00e9ance, points cl\u00e9s abord\u00e9s, observations...',
      'teacher.sessions.attendance_list': 'Pr\u00e9sences',
      'teacher.sessions.present_students': '\u00c9tudiants pr\u00e9sents',
      'teacher.sessions.next_session': 'Prochaine s\u00e9ance',
      'teacher.sessions.prepare_session': 'Pr\u00e9parer la s\u00e9ance',

      /* Booking Page */
      'booking.page.title': 'Inscription \u2014 Cultulangues',
      'booking.header.title': 'Inscription',
      'booking.header.subtitle': 'Compl\u00e9tez votre inscription en quelques \u00e9tapes simples.',
      'booking.step1.label': '1',
      'booking.step1.title': 'Programme',
      'booking.step1.subtitle': 'Choisissez votre programme et vos disponibilit\u00e9s.',
      'booking.step1.schedule.title': 'Choisissez votre horaire',
      'booking.step1.days.label': 'Jours pr\u00e9f\u00e9r\u00e9s',
      'booking.step1.days.helper': 'S\u00e9lectionnez les jours qui vous conviennent',
      'booking.day.lundi': 'Lundi',
      'booking.day.mardi': 'Mardi',
      'booking.day.mercredi': 'Mercredi',
      'booking.day.jeudi': 'Jeudi',
      'booking.day.vendredi': 'Vendredi',
      'booking.day.samedi': 'Samedi',
      'booking.step1.time.label': 'Plage horaire pr\u00e9f\u00e9r\u00e9e',
      'booking.step1.time.helper': 'Choisissez votre cr\u00e9neau id\u00e9al',
      'booking.time.from': 'De',
      'booking.time.to': '\u00e0',
      'booking.step1.info.title': 'Vos informations',
      'booking.form.fullname': 'Nom complet',
      'booking.form.fullname.placeholder': 'Votre nom complet',
      'booking.form.email': 'Courriel',
      'booking.form.email.placeholder': 'votre@email.com',
      'booking.form.phone': 'T\u00e9l\u00e9phone',
      'booking.form.phone.placeholder': 'Votre num\u00e9ro de t\u00e9l\u00e9phone',
      'booking.form.contact': 'M\u00e9thode de contact',
      'booking.form.contact.placeholder': 'S\u00e9lectionnez une m\u00e9thode',
      'booking.form.notes': 'Notes',
      'booking.form.notes.optional': '(optionnel)',
      'booking.form.notes.placeholder': 'Informations compl\u00e9mentaires...',
      'booking.step1.footer.cancel': 'Annuler',
      'booking.step1.footer.confirm': 'Confirmer l\'inscription et commencer le test',
      'booking.step1.footer.confirm.solo': 'Confirmer ma réservation et commencer le test',
      'booking.step1.solo.title': 'Choisissez votre date et votre créneau',
      'booking.step1.solo.calendar': 'Sélectionnez une date',
      'booking.step1.solo.slots': 'Créneaux disponibles',
      'booking.step1.solo.default': 'Sélectionnez une date',
      'booking.step1.solo.prompt': 'Choisissez une date dans le calendrier',
      'booking.step1.solo.pkg.title': 'Sélectionnez votre formule',
      'booking.step1.solo.pkg.after': 'Ensuite, choisissez votre date et votre créneau',
      'booking.step1.group.title': 'Attribution de votre groupe',
      'booking.step1.group.desc1': 'Votre groupe sera déterminé après votre appel / test oral d\'évaluation.',
      'booking.step1.group.desc2': 'Cette étape nous permet de vous orienter vers le niveau et le groupe les plus adaptés à votre profil, à vos objectifs et à votre disponibilité.',
      'booking.step1.group.step1': 'Soumettez votre demande d\'inscription',
      'booking.step1.group.step2': 'Complétez le test écrit de placement',
      'booking.step1.group.step3': 'Participez à l\'appel d\'évaluation orale',
      'booking.step1.group.step4': 'Nous vous assignons au groupe le plus adapté à votre niveau et à vos disponibilités',
      'booking.step1.group.step5': 'Vous recevez votre horaire et votre confirmation finale',
      'booking.step2.label': '2',
      'booking.step2.title': 'Test de niveau',
      'booking.step2.subtitle': 'Un rapide test pour \u00e9valuer votre niveau.',
      'booking.step2.footer.back': 'Pr\u00e9c\u00e9dent',
      'booking.step2.footer.next': 'Suivante',
      'booking.step3.label': '3',
      'booking.step3.title': 'R\u00e9sultats',
      'booking.step3.subtitle': 'D\u00e9couvrez votre niveau estim\u00e9.',
      'booking.step3.score.label': 'Score global',
      'booking.step3.chart.correct': 'Bonnes r\u00e9ponses',
      'booking.step3.chart.incorrect': 'Mauvaises r\u00e9ponses',
      'booking.step3.footer.book': 'R\u00e9server un appel de suivi',
      'booking.step4.label': '4',
      'booking.step4.title': 'Rendez-vous',
      'booking.step4.subtitle': 'Choisissez votre cr\u00e9neau pour l\'appel de suivi.',
      'booking.step4.calendar.title': 'S\u00e9lectionnez une date',
      'booking.step4.slots.title': 'Cr\u00e9neaux disponibles',
      'booking.step4.slots.default': 'S\u00e9lectionnez une date',
      'booking.step4.slots.prompt': 'Choisissez une date pour voir les cr\u00e9neaux disponibles',
      'booking.step4.footer.back': 'Retour',
      'booking.step4.footer.confirm': 'Confirmer le test oral',
      'booking.success.title': 'Inscription confirm\u00e9e !',
      'booking.success.message': 'Votre inscription a bien \u00e9t\u00e9 re\u00e7ue. Nous vous contacterons sous 24h pour confirmer votre rendez-vous.',
      'booking.success.redirect': 'Redirection automatique...',

      /* Auth Login */
      'auth.login.page.title': 'Login \u2014 School Management',
      'auth.login.title': 'School Management',
      'auth.login.subtitle': 'Sign in to manage your institution',
      'auth.login.email': 'Email',
      'auth.login.email.placeholder': 'admin@school.com',
      'auth.login.password': 'Password',
      'auth.login.password.placeholder': 'Enter your password',
      'auth.login.role.label': 'I am a...',
      'auth.login.role.admin': 'Admin',
      'auth.login.role.teacher': 'Teacher',
      'auth.login.role.student': 'Student',
      'auth.login.signin': 'Sign In',
      'auth.login.back': 'Back to Home',

      /* Auth Register */
      'auth.register.page.title': 'Inscription \u2014 Cultulangues',
      'auth.register.title': 'Cr\u00e9er votre compte',
      'auth.register.subtitle': 'Rejoignez Cultulangues et commencez votre parcours linguistique',
      'auth.register.firstname': 'Pr\u00e9nom',
      'auth.register.firstname.placeholder': 'Votre pr\u00e9nom',
      'auth.register.lastname': 'Nom',
      'auth.register.lastname.placeholder': 'Votre nom',
      'auth.register.email': 'Email',
      'auth.register.email.placeholder': 'votre@email.com',
      'auth.register.password': 'Mot de passe',
      'auth.register.password.placeholder': 'Minimum 8 caract\u00e8res',
      'auth.register.level': 'Niveau de langue',
      'auth.register.level.a1': 'D\u00e9butant (A1)',
      'auth.register.level.a2': '\u00c9l\u00e9mentaire (A2)',
      'auth.register.level.b1': 'Interm\u00e9diaire (B1)',
      'auth.register.level.b2': 'Interm\u00e9diaire+ (B2)',
      'auth.register.level.c1': 'Avanc\u00e9 (C1)',
      'auth.register.level.c2': 'Expert (C2)',
      'auth.register.goal': 'Objectif principal',
      'auth.register.goal.tcf_qc': 'TCF Qu\u00e9bec',
      'auth.register.goal.tcf_ca': 'TCF Canada',
      'auth.register.goal.oral_bc': 'Oral B ou C',
      'auth.register.goal.general': 'Perfectionnement g\u00e9n\u00e9ral',
      'auth.register.goal.immersion': 'Immersion culturelle',
      'auth.register.bubbles_label': 'Choisissez votre parcours',
      'auth.register.accept': 'J\'accepte les',
      'auth.register.tos': 'conditions d\'utilisation',
      'auth.register.submit': 'Cr\u00e9er mon compte',
      'auth.register.has_account': 'D\u00e9j\u00e0 un compte ?',
      'auth.register.login': 'Se connecter',

      /* Common Months */
      'common.month.jan': 'Jan',
      'common.month.feb': 'F\u00e9v',
      'common.month.mar': 'Mar',
      'common.month.apr': 'Avr',
      'common.month.may': 'Mai',
      'common.month.jun': 'Juin',
      'common.month.jul': 'Juil',
      'common.month.aug': 'Ao\u00fb',
      'common.month.sep': 'Sep',
      'common.month.oct': 'Oct',
      'common.month.nov': 'Nov',
      'common.month.dec': 'D\u00e9c',

      /* Common Days */
      'common.day.mon': 'Lun',
      'common.day.tue': 'Mar',
      'common.day.wed': 'Mer',
      'common.day.thu': 'Jeu',
      'common.day.fri': 'Ven',
      'common.day.sat': 'Sam',
      'common.day.sun': 'Dim',

      /* Booking Additional */
      'booking.step1.badge.selected': 'D\u00e9j\u00e0 s\u00e9lectionn\u00e9',
      'booking.step1.footer.info': 'Les informations sont confidentielles',
      'booking.step2.footer.info': 'Ce test dure environ 15 minutes',
      'booking.step3.explanation': 'Ce r\u00e9sultat est une estimation. Un professeur confirm\u00e9ra votre niveau lors de l\'appel de suivi.',
      'booking.step3.footer.info': 'Test termin\u00e9',
      'booking.step4.footer.info': 'Un cr\u00e9neau vous sera confirm\u00e9 sous 24h',
      'booking.step4.timezone': 'Fuseau horaire : UTC',
      'booking.step4.timezone.city': '(heure de Montr\u00e9al)',
      'booking.time.to_label': '\u00c0',

      /* Auth Login Additional */
      'auth.login.demo.title': 'Mode D\u00e9mo',
      'auth.login.demo.text': 'S\u00e9lectionnez un r\u00f4le et cliquez sur Connexion pour acc\u00e9der \u00e0 la d\u00e9mo.',

      /* Student Portal (standalone index.html) */
      'student.portal.page.title': 'Portail \u00c9tudiant - School Management',
      'student.portal.brand': 'Portail \u00c9tudiant',
      'student.portal.section.main': 'Principal',
      'student.portal.section.account': 'Compte',
      'student.portal.nav.dashboard': 'Tableau de bord',
      'student.portal.nav.courses': 'Mes cours',
      'student.portal.nav.lessons': 'Le\u00e7ons',
      'student.portal.nav.schedule': 'Emploi du temps',
      'student.portal.nav.tests': 'Tests & R\u00e9sultats',
      'student.portal.nav.attendance': 'Pr\u00e9sences',
      'student.portal.nav.payments': 'Paiements',
      'student.portal.nav.profile': 'Profil',
      'student.portal.nav.logout': 'D\u00e9connexion',
      'student.portal.page.dashboard.title': 'Tableau de bord',
      'student.portal.page.dashboard.subtitle': 'Bon retour ! Suivez votre progression acad\u00e9mique.',
      'student.portal.search.placeholder': 'Rechercher cours, le\u00e7ons...',
      'student.portal.user.name': 'Emma Johnson',
      'student.portal.user.role': '\u00c9tudiant',
      'student.portal.dropdown.profile': 'Profil',
      'student.portal.dropdown.logout': 'D\u00e9connexion',
      'student.portal.dashboard.chart.scores.title': 'Notes acad\u00e9miques',
      'student.portal.dashboard.chart.scores.subtitle': 'Vos notes des 3 derniers mois',
      'student.portal.dashboard.chart.attendance.title': 'Taux de pr\u00e9sence',
      'student.portal.dashboard.chart.attendance.subtitle': 'Pourcentage de pr\u00e9sence mensuel',
      'student.portal.dashboard.upcoming_tests': 'Prochains tests',
      'student.portal.courses.title': 'Mes cours',
      'student.portal.courses.filter.all': 'Tous les cours',
      'student.portal.courses.filter.in_progress': 'En cours',
      'student.portal.courses.filter.completed': 'Termin\u00e9s',
      'student.portal.courses.back': 'Retour aux cours',
      'student.portal.courses.tab.overview': 'Aper\u00e7u',
      'student.portal.courses.tab.lessons': 'Le\u00e7ons',
      'student.portal.courses.tab.tests': 'Tests',
      'student.portal.courses.tab.resources': 'Ressources',
      'student.portal.resources.empty': 'Aucune ressource disponible pour ce cours.',
      'student.portal.lessons.title': 'Le\u00e7ons',
      'student.portal.lessons.upcoming': 'Prochaines le\u00e7ons',
      'student.portal.lessons.col.lesson': 'Le\u00e7on',
      'student.portal.lessons.col.course': 'Cours',
      'student.portal.lessons.col.date': 'Date',
      'student.portal.lessons.col.time': 'Heure',
      'student.portal.lessons.col.teacher': 'Professeur',
      'student.portal.lessons.col.status': 'Statut',
      'student.portal.schedule.title': 'Emploi du temps',
      'student.portal.schedule.mon': 'Lundi',
      'student.portal.schedule.tue': 'Mardi',
      'student.portal.schedule.wed': 'Mercredi',
      'student.portal.schedule.thu': 'Jeudi',
      'student.portal.schedule.fri': 'Vendredi',
      'student.portal.tests.title': 'Tests',
      'student.portal.tests.chart.history.title': 'Historique des scores',
      'student.portal.tests.chart.history.subtitle': 'Vos scores des 3 derniers mois',
      'student.portal.tests.chart.comparison.title': 'Comparaison de classe',
      'student.portal.tests.chart.comparison.subtitle': 'Votre score vs. la moyenne de la classe',
      'student.portal.tests.results.title': 'R\u00e9sultats des tests',
      'student.portal.attendance.chart.trend.title': 'Tendance mensuelle',
      'student.portal.attendance.chart.trend.subtitle': 'Taux de pr\u00e9sence des 6 derniers mois',
      'student.portal.attendance.chart.calendar.title': 'Calendrier de pr\u00e9sence',
      'student.portal.attendance.chart.calendar.subtitle': 'Juin 2026',
      'student.portal.attendance.day.mon': 'Lun',
      'student.portal.attendance.day.tue': 'Mar',
      'student.portal.attendance.day.wed': 'Mer',
      'student.portal.attendance.day.thu': 'Jeu',
      'student.portal.attendance.day.fri': 'Ven',
      'student.portal.attendance.day.sat': 'Sam',
      'student.portal.attendance.day.sun': 'Dim',
      'student.portal.payments.title': 'Historique des paiements',
      'student.portal.payments.col.course': 'Cours',
      'student.portal.payments.col.amount': 'Montant',
      'student.portal.payments.col.date': 'Date d\'\u00e9ch\u00e9ance',
      'student.portal.payments.col.method': 'M\u00e9thode',
      'student.portal.payments.col.status': 'Statut',
      'student.portal.profile.title': 'Mon profil',
      'student.portal.profile.edit.title': 'Modifier le profil',
      'student.portal.profile.edit.fullname': 'Nom complet',
      'student.portal.profile.edit.email': 'Email',
      'student.portal.profile.edit.phone': 'T\u00e9l\u00e9phone',
      'student.portal.profile.edit.avatar': 'URL de l\'avatar',
      'student.portal.profile.edit.avatar.placeholder': 'https://example.com/avatar.jpg',
      'student.portal.profile.edit.save': 'Enregistrer',
      'student.portal.profile.account.title': 'Infos du compte',
      'student.portal.profile.account.student_id': 'ID \u00e9tudiant',
      'student.portal.profile.account.enrollment': 'Date d\'inscription',
      'student.portal.profile.account.level': 'Niveau actuel',
      'student.portal.profile.account.courses': 'Cours inscrits',
      'student.portal.profile.stats.title': 'Statistiques',
      'student.portal.profile.stats.attendance': 'Pr\u00e9sence globale',
      'student.portal.profile.stats.score': 'Score moyen',
      'student.portal.profile.stats.completed': 'Cours termin\u00e9s',

      /* Teacher Portal (standalone index.html) */
      'teacher.portal.page.title': 'Portail Enseignant - School Management',
      'teacher.portal.brand': 'Portail Enseignant',
      'teacher.portal.section.main': 'Principal',
      'teacher.portal.section.account': 'Compte',
      'teacher.portal.nav.dashboard': 'Tableau de bord',
      'teacher.portal.nav.courses': 'Mes cours',
      'teacher.portal.nav.lessons': 'Le\u00e7ons',
      'teacher.portal.nav.schedule': 'Emploi du temps',
      'teacher.portal.nav.students': '\u00c9l\u00e8ves',
      'teacher.portal.nav.tests': 'Tests & Notes',
      'teacher.portal.nav.attendance': 'Pr\u00e9sences',
      'teacher.portal.nav.hours': 'Heures travaill\u00e9es',
      'teacher.portal.nav.profile': 'Profil',
      'teacher.portal.nav.logout': 'D\u00e9connexion',
      'teacher.portal.page.dashboard.title': 'Tableau de bord',
      'teacher.portal.page.dashboard.subtitle': 'Bon retour ! G\u00e9rez votre classe.',
      'teacher.portal.search.placeholder': 'Rechercher \u00e9l\u00e8ves, cours...',
      'teacher.portal.user.name': 'Marie Laurent',
      'teacher.portal.user.role': 'Enseignant',
      'teacher.portal.dropdown.profile': 'Profil',
      'teacher.portal.dropdown.logout': 'D\u00e9connexion',
      'teacher.portal.dashboard.chart.performance.title': 'Performance des \u00e9l\u00e8ves',
      'teacher.portal.dashboard.chart.performance.subtitle': 'Scores moyens par cours ce trimestre',
      'teacher.portal.dashboard.chart.workload.title': 'Charge hebdomadaire',
      'teacher.portal.dashboard.chart.workload.subtitle': 'R\u00e9partition des heures d\'enseignement',
      'teacher.portal.dashboard.actions.add_lesson': 'Ajouter une le\u00e7on',
      'teacher.portal.dashboard.actions.mark_attendance': 'Marquer les pr\u00e9sences',
      'teacher.portal.dashboard.actions.create_test': 'Cr\u00e9er un test',
      'teacher.portal.courses.title': 'Mes cours',
      'teacher.portal.courses.back': 'Retour aux cours',
      'teacher.portal.courses.tab.lessons': 'Le\u00e7ons',
      'teacher.portal.courses.tab.students': '\u00c9l\u00e8ves',
      'teacher.portal.courses.tab.attendance': 'Pr\u00e9sences',
      'teacher.portal.courses.tab.tests': 'Tests',
      'teacher.portal.courses.attendance.title': 'Pr\u00e9sences au cours',
      'teacher.portal.lessons.title': 'Le\u00e7ons',
      'teacher.portal.lessons.add': 'Ajouter',
      'teacher.portal.lessons.all': 'Toutes les le\u00e7ons',
      'teacher.portal.lessons.col.lesson': 'Le\u00e7on',
      'teacher.portal.lessons.col.course': 'Cours',
      'teacher.portal.lessons.col.date': 'Date',
      'teacher.portal.lessons.col.time': 'Heure',
      'teacher.portal.lessons.col.status': 'Statut',
      'teacher.portal.schedule.title': 'Emploi du temps',
      'teacher.portal.schedule.mon': 'Lundi',
      'teacher.portal.schedule.tue': 'Mardi',
      'teacher.portal.schedule.wed': 'Mercredi',
      'teacher.portal.schedule.thu': 'Jeudi',
      'teacher.portal.schedule.fri': 'Vendredi',
      'teacher.portal.students.title': 'Mes \u00e9l\u00e8ves',
      'teacher.portal.students.filter.all': 'Tous les cours',
      'teacher.portal.students.filter.intensive': 'Fran\u00e7ais intensif',
      'teacher.portal.students.filter.saturday': 'Programme du samedi',
      'teacher.portal.students.search.placeholder': 'Rechercher un \u00e9l\u00e8ve...',
      'teacher.portal.students.directory.title': 'R\u00e9pertoire des \u00e9l\u00e8ves',
      'teacher.portal.students.col.name': 'Nom',
      'teacher.portal.students.col.course': 'Cours',
      'teacher.portal.students.col.attendance': 'Pr\u00e9sence',
      'teacher.portal.students.col.avg_score': 'Score moyen',
      'teacher.portal.students.col.status': 'Statut',
      'teacher.portal.tests.title': 'Tests & Notes',
      'teacher.portal.tests.chart.results.title': 'Distribution des r\u00e9sultats',
      'teacher.portal.tests.chart.results.subtitle': 'Tranches de scores pour tous les tests',
      'teacher.portal.tests.chart.pass_rate.title': 'Taux de r\u00e9ussite',
      'teacher.portal.tests.chart.pass_rate.label': 'Taux de r\u00e9ussite ce trimestre',
      'teacher.portal.tests.grade_table.title': 'Tableau des notes',
      'teacher.portal.tests.grade_table.save': 'Tout enregistrer',
      'teacher.portal.tests.col.student': '\u00c9l\u00e8ve',
      'teacher.portal.tests.col.test': 'Test',
      'teacher.portal.tests.col.score': 'Score',
      'teacher.portal.tests.col.grade': 'Note',
      'teacher.portal.tests.col.pass_fail': 'R\u00e9ussi/\u00c9chou\u00e9',
      'teacher.portal.attendance.title': 'Pr\u00e9sences',
      'teacher.portal.attendance.summary.title': 'R\u00e9sum\u00e9 de la classe',
      'teacher.portal.attendance.today.title': 'Pr\u00e9sences du jour',
      'teacher.portal.attendance.records.title': 'Registre de pr\u00e9sence',
      'teacher.portal.attendance.col.student': '\u00c9l\u00e8ve',
      'teacher.portal.attendance.col.date': 'Date',
      'teacher.portal.attendance.col.course': 'Cours',
      'teacher.portal.attendance.col.status': 'Statut',
      'teacher.portal.hours.chart.per_day.title': 'Heures par jour',
      'teacher.portal.hours.chart.per_day.subtitle': 'Heures d\'enseignement quotidiennes ce mois',
      'teacher.portal.hours.chart.monthly.title': 'Aper\u00e7u mensuel',
      'teacher.portal.hours.chart.monthly.subtitle': 'Heures mensuelles vs. contrat',
      'teacher.portal.hours.contracted': 'sur 80 heures contractuelles',
      'teacher.portal.hours.overtime': '+16h suppl\u00e9mentaires',
      'teacher.portal.profile.title': 'Mon profil',
      'teacher.portal.profile.edit.title': 'Modifier les infos',
      'teacher.portal.profile.edit.fullname': 'Nom complet',
      'teacher.portal.profile.edit.email': 'Email',
      'teacher.portal.profile.edit.phone': 'T\u00e9l\u00e9phone',
      'teacher.portal.profile.edit.subjects': 'Mati\u00e8res',
      'teacher.portal.profile.edit.contract': 'Heures contractuelles',
      'teacher.portal.profile.edit.save': 'Enregistrer',
      'teacher.portal.profile.stats.title': 'Statistiques',
      'teacher.portal.profile.stats.hours': 'Total heures',
      'teacher.portal.profile.stats.students': '\u00c9l\u00e8ves',
      'teacher.portal.profile.stats.courses': 'Cours',
      'teacher.portal.profile.account.title': 'Infos du compte',
      'teacher.portal.profile.account.employee_id': 'ID employ\u00e9',
      'teacher.portal.profile.account.department': 'D\u00e9partement',
      'teacher.portal.profile.account.joined': 'Date d\'embauche',
      'teacher.portal.profile.account.rating': '\u00c9valuation',
      'teacher.portal.modal.title': 'Modal',
    },

    en: {
      /* Nav */
      'nav.home': 'Home',
      'nav.private': 'Private Lessons',
      'nav.tcf': 'TCF Québec Preparation',
      'nav.tcf_desc': 'Prepare calmly for the official test',
      'nav.workshops': 'Workshops',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.programs': 'Programs',
      'nav.parcours': 'Language Path',
      'nav.parcours_desc': 'Learn and progress in small groups',
      'nav.oral': 'Oral Mastery',
      'nav.oral_desc': 'Develop fluent and strategic oral expression',
      'nav.solo': 'Solo Training',
      'nav.solo_desc': '100% personalized coaching',
      'nav.login': 'Login',
      'nav.register': 'Sign Up',

      /* Footer */
      'footer.brand': 'Language Training & Exam Preparation.',
      'footer.courses': 'Courses',
      'footer.info': 'Information',
      'footer.info.about': 'About',
      'footer.info.contact': 'Contact',
      'footer.info.terms': 'Terms of Use',
      'footer.info.privacy': 'Privacy Policy',
      'footer.contact.title': 'Contact',
      'footer.contact.email': 'contact@cultulangues.fr',
      'footer.contact.phone': '+33 1 23 45 67 89',
      'footer.contact.location': 'Paris, France',
      'footer.copyright': 'Cultulangues. All rights reserved.',
      'footer.made': 'Made with care',

      /* Lang switcher */
      'lang.fr': 'FR',
      'lang.en': 'EN',

      /* Hero */
      'hero.badge': 'Certified school — +950 students',
      'hero.h1': 'At CultuLangues, we build your<br>success and give your <span class="text-gradient">projects</span><br>a fresh start.',
      'hero.intro': 'You want to learn one of Canada\'s official languages to:',
      'hero.list.1': 'Advance your career',
      'hero.list.2': 'Succeed in your immigration project',
      'hero.list.3': 'Gain confidence and independence in daily life',
      'hero.btn.primary': 'Discover Our Learning Paths →',
      'hero.btn.secondary': 'Choose Your Format',
      'hero.stat1.value': '98%',
      'hero.stat1.label': 'Success Rate',
      'hero.stat2.value': '4.9/5',
      'hero.stat2.label': 'Student Reviews',
      'hero.stat3.value': '+950',
      'hero.stat3.label': 'Students Supported',
      'hero.card1.text': 'Private Lessons',
      'hero.card1.label': '1-to-1 Support',
      'hero.card2.text': 'TCF Preparation',
      'hero.card2.label': 'Québec & Canada',
      'hero.card3.text': 'Goal Success',
      'hero.card3.label': 'Support',
      'hero.card4.text': 'Native Teachers',
      'hero.card4.label': '100% certified FLE',
      'hero.card5.text': 'Certificate',
      'hero.card5.label': 'Recognized',

      /* Stats */
      'stat1.value': '12',
      'stat1.label': 'Years of experience',
      'stat2.value': '98',
      'stat2.label': '% exam success rate',
      'stat3.value': '950',
      'stat3.label': 'Students supported',
      'stat4.value': '4.9★',
      'stat4.label': 'Google Reviews',

      /* Services */
      'services.title': 'Our <span class="text-gradient">flagship</span> programs',
      'services.subtitle': 'Programs designed for concrete goals: improve your oral skills, prepare for an official test, strengthen your everyday French, or get 100% personalized coaching.',
      'services.private.title': 'Private Lessons',
      'services.private.desc': 'Tailored support with a dedicated teacher. 100% adapted to your goals, level and pace. Flexible packages from 5h to 20h.',
      'services.private.btn': 'Discover programs →',
      'services.tcf.title': 'TCF Preparation',
      'services.tcf.desc': 'Intensive and regular programs for TCF Québec and TCF Canada. Weekly mock exams, personalized corrections and individual monitoring.',
      'services.tcf.btn': 'Discover programs →',
      'services.atelier.title': 'Workshops',
      'services.atelier.desc': 'Thematic workshops to practice, exchange and perfect your French. Conversation, Canadian culture, level maintenance and TCF oral preparation.',
      'services.atelier.btn': 'Discover workshops →',

      /* Flagship offers */
      'flagship.1.title': 'Language Path',
      'flagship.1.desc': 'A structured small-group program to progress in French with confidence, in a motivating and stimulating environment.',
      'flagship.1.tag1': 'Groups of 5 max',
      'flagship.1.tag2': 'Adults',
      'flagship.1.tag3': 'Confidence',
      'flagship.1.tag4': 'French',
      'flagship.1.cta': 'Discover the program →',
      'flagship.2.title': 'Cap sur l\'oral — Lingo Test',
      'flagship.2.desc': 'Two collaborative small-group paths to master oral French with confidence and precision, specially designed for the TCO.',
      'flagship.2.tag1': 'Path B & C',
      'flagship.2.tag2': 'TCO',
      'flagship.2.tag3': 'Part-time/Intensive',
      'flagship.2.tag4': 'English',
      'flagship.2.cta': 'Discover the program →',
      'flagship.3.title': 'TCF Québec Preparation',
      'flagship.3.desc': 'Structured and caring support to pass your TCF Québec and move forward serenely in your immigration project.',
      'flagship.3.tag1': 'Immigration',
      'flagship.3.tag2': 'Level B2',
      'flagship.3.tag3': 'Mock exams',
      'flagship.3.tag4': 'TCF',
      'flagship.3.cta': 'Discover the program →',
      'flagship.4.title': 'Solo Training',
      'flagship.4.desc': '100% personalized private lessons, flexible and adapted to your specific goals. Packages from 5h to 20h.',
      'flagship.4.tag1': '1-to-1',
      'flagship.4.tag2': 'Flexible',
      'flagship.4.tag3': '5h–20h packages',
      'flagship.4.tag4': 'Custom',
      'flagship.4.cta': 'Discover the program →',

      /* Compare */
      'compare.title': 'Which program <span class="text-gradient">fits</span> you?',
      'compare.subtitle': 'Compare our 4 flagship programs to find the one that matches your goals, pace and needs.',
      'compare.th.critere': 'Criteria',
      'compare.th.pl': 'Language Path',
      'compare.th.oral': 'Cap sur l\'oral',
      'compare.th.tcf': 'TCF Preparation',
      'compare.th.solo': 'Solo Training',
      'compare.row.objectif': 'Objective',
      'compare.row.format': 'Format',
      'compare.row.accompagnement': 'Support',
      'compare.row.ideal': 'Ideal for',
      'compare.row.flexibilite': 'Flexibility',
      'compare.pl.objectif': 'General French progress',
      'compare.pl.format': 'Group (max 5)',
      'compare.pl.accomp': 'Structured, collective',
      'compare.pl.ideal': 'Adults all levels',
      'compare.pl.flex': 'Fixed schedule',
      'compare.oral.objectif': 'Oral mastery & TCO',
      'compare.oral.format': 'Group (max 5), part-time or intensive',
      'compare.oral.accomp': 'Oral expert, collaborative',
      'compare.oral.ideal': 'TCO candidates',
      'compare.oral.flex': 'Part-time or intensive',
      'compare.tcf.objectif': 'TCF Québec & immigration',
      'compare.tcf.format': 'Guided path, simulations',
      'compare.tcf.accomp': 'Step by step, caring',
      'compare.tcf.ideal': 'Quebec immigration projects',
      'compare.tcf.flex': 'Progressive path',
      'compare.solo.objectif': 'Custom goals',
      'compare.solo.format': '1-to-1, fully flexible',
      'compare.solo.accomp': '100% tailored',
      'compare.solo.ideal': 'Flexible or targeted profile',
      'compare.solo.flex': 'Total (5h–20h)',

      /* Why */
      'why.title': 'Why <span class="text-gradient">Cultulangues</span>?',
      'why.subtitle': 'We believe in a humane and demanding approach to guide you toward success.',
      'why.card1.title': 'Certified Teachers',
      'why.card1.desc': 'All our teachers hold FLE degrees and specialize in TCF exam preparation.',
      'why.card2.title': 'Personalized Follow-up',
      'why.card2.desc': 'A path adapted to your level, goals, and learning pace.',
      'why.card3.title': 'Caring Approach',
      'why.card3.desc': 'We put people at the heart of our teaching to help you give your best.',

      /* Testimonials Home */
      'testimonials.title': 'They <span class="text-gradient">trust</span> us',
      'testimonials.subtitle': 'Discover what our students say.',
      'testimonial1.text': 'Thanks to Cultulangues, I obtained my TCF Québec with B2 level. The personalized support and mock exams really prepared me.',
      'testimonial1.name': 'Maria S.',
      'testimonial1.info': 'TCF Québec — Level B2',
      'testimonial2.text': 'A great team that helped me regain confidence in my oral French. The conversation workshops were a real revelation.',
      'testimonial2.name': 'Ahmed K.',
      'testimonial2.info': 'Oral Preparation — Level C1',
      'testimonial3.text': 'I recommend without hesitation. The platform is clear, the courses are well-structured and the teachers are attentive. Exactly what I needed.',
      'testimonial3.name': 'Laura P.',
      'testimonial3.info': 'TCF Canada — Level C1',

      /* CTA */
      'cta.home.title': 'Ready to start your journey?',
      'cta.home.desc': 'Join over 950 students who trust us for their language preparation.',
      'cta.home.btn': 'Create my free account →',

      /* About Page */
      'about.title': 'About — Cultulangues',
      'about.mission.title': 'Our Mission',
      'about.mission.text': 'At Cultulangues, we believe that mastering French is the key to linguistic and professional success. Our mission is to support each learner with care, professionalism and rigor toward the success of their projects.',
      'about.pedagogy.title': 'Our Teaching Approach',
      'about.pedagogy.subtitle': 'A method that puts people at the center of learning.',
      'about.value1.title': 'Care',
      'about.value1.desc': 'We create a safe environment where each learner can progress at their own pace, without judgment.',
      'about.value2.title': 'Excellence',
      'about.value2.desc': 'We set clear goals and accompany each student with rigor to achieve them.',
      'about.value3.title': 'Proximity',
      'about.value3.desc': 'Personalized follow-up and attentive listening to meet each person\'s specific needs.',
      'about.trust.title': 'Why trust us?',
      'about.trust1.title': 'Certified Teachers',
      'about.trust1.desc': 'All our teachers hold FLE degrees and have significant experience in TCF exam preparation.',
      'about.trust2.title': '98% Success Rate',
      'about.trust2.desc': 'Our results speak for themselves. 98% of our students achieve their target level on their first attempt.',
      'about.trust3.title': 'International Community',
      'about.trust3.desc': 'Over 950 students from 40 different nationalities have already joined us.',

      /* Contact Page */
      'contact.title': 'Contact Us',
      'contact.subtitle': 'A question? A project? We are here to help you.',
      'contact.form.firstname': 'First Name',
      'contact.form.lastname': 'Last Name',
      'contact.form.email': 'Email',
      'contact.form.subject': 'Subject',
      'contact.form.subject.placeholder': 'Select a subject',
      'contact.form.subject.programs': 'Program Information',
      'contact.form.subject.registration': 'Registration',
      'contact.form.subject.tcf': 'TCF / Exam Questions',
      'contact.form.subject.workshops': 'Workshops',
      'contact.form.subject.other': 'Other',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Send Message',
      'contact.info.title': 'Our Details',
      'contact.info.address.title': 'Address',
      'contact.info.address.value': '123 Rue de la Langue Française<br>75001 Paris, France',
      'contact.info.phone.title': 'Phone',
      'contact.info.phone.value': '+33 1 23 45 67 89',
      'contact.info.email.title': 'Email',
      'contact.info.email.value': 'contact@cultulangues.fr',
      'contact.info.hours.title': 'Hours',
      'contact.info.hours.value': 'Mon - Fri: 9:00 AM - 7:00 PM<br>Sat: 10:00 AM - 4:00 PM',

      /* Private Lessons Page */
      'private.title': 'Private Lessons <span class="text-gradient">1-to-1</span>',
      'private.subtitle': 'Choose the program that matches your goals. Personalized support with a certified FLE teacher.',
      'private.section.title': 'Choose your <span class="text-gradient">program</span>',
      'private.section.subtitle': 'Each program is adapted to your specific needs. Flexible packages from 5h to 20h.',
      'private.packages.title': 'Our Packages',
      'private.packages.subtitle': 'Choose the number of hours that suits you. The larger the package, the better the hourly rate.',
      'private.how.title': 'How it works?',
      'private.how.subtitle': 'Book your private lesson easily.',
      'private.cta.title': 'Ready to start your personalized journey?',
      'private.cta.desc': 'Choose your program, book your first session and let our expert teachers guide you.',
      'private.cta.btn': 'Book your private lesson',

      /* TCF Page */
      'tcf.breadcrumb': 'TCF Preparation',
      'tcf.title': '<span class="text-gradient">TCF</span> Preparation',
      'tcf.subtitle': 'Intensive and regular programs to succeed in TCF Québec and TCF Canada. Weekly mock exams and personalized monitoring.',
      'tcf.section.title': 'Choose your <span class="text-gradient">program</span>',
      'tcf.section.subtitle': 'Complete training for each exam, with support adapted to your pace.',
      'tcf.how.title': 'How it works?',
      'tcf.how.subtitle': 'Join our TCF preparation programs easily.',
      'tcf.cta.title': 'Ready to succeed in your TCF?',
      'tcf.cta.desc': 'Join our preparation programs and maximize your chances of success.',
      'tcf.cta.btn': 'Register now',

      /* Workshops Page */
      'workshops.breadcrumb': 'Workshops',
      'workshops.title': 'Our <span class="text-gradient">Workshops</span>',
      'workshops.subtitle': 'Thematic workshops to practice, exchange and perfect your French in a friendly atmosphere.',
      'workshops.section.title': 'Choose your <span class="text-gradient">workshop</span>',
      'workshops.section.subtitle': 'Varied formats for all levels and all goals.',
      'workshops.cta.title': 'Can\'t find the workshop you need?',
      'workshops.cta.desc': 'Contact us for personalized support. We create custom workshops based on your needs.',
      'workshops.cta.btn': 'Contact us',

      /* Programs Page */
      'programs.title': 'Our Programs',
      'programs.subtitle': 'Training adapted to every goal, from beginner to expert level. Find the program that suits you.',
      'programs.filter.all': 'All',
      'programs.cta.title': 'Ready to start your journey?',
      'programs.cta.desc': 'Contact us for a free placement test and find the program that matches your goals.',
      'programs.cta.btn': 'Contact us',

      /* Program Detail */
      'detail.back': '&larr; Back to programs',
      'detail.description': 'Program Description',
      'detail.structure': 'Program Structure',
      'detail.objectives': 'Learning Objectives',
      'detail.detail': 'Detailed Program',
      'detail.included': 'What\'s Included',
      'detail.teachers': 'Our Teachers',
      'detail.price.total': 'for the entire program',
      'detail.faq.title': 'Frequently Asked Questions',
      'detail.faq.subtitle': 'Everything you need to know before joining the program.',
      'detail.testimonials.title': 'What Our Students Say',
      'detail.testimonials.subtitle': 'Testimonials from learners who completed this program.',
      'detail.cta.title': 'Ready to start your preparation?',
      'detail.cta.desc': 'Join our intensive program and maximize your chances of succeeding in the TCF Québec.',

      /* Breadcrumbs */
      'breadcrumb.home': 'Home',

      /* Common */
      'common.details': 'Details',
      'common.book': 'Book',
      'common.choose': 'Choose',
      'common.register': 'Register',
      'common.contact': 'Contact us',
      'common.see.details': 'See details',
      'common.month': '/ month',
      'common.hour': '/ h',
      'common.session': '/ session',
      'common.week': 'wk',
      'common.popular': 'Popular',

      /* Filter buttons */
      'filter.tcf-canada': 'TCF Canada',
      'filter.tcf-quebec': 'TCF Québec',
      'filter.oral': 'Oral',
      'filter.particuliers': 'Private',
      'filter.groupe': 'Group',
      'filter.intensif': 'Intensive',
      'filter.evaluations': 'Assessments',

      /* Admin Sidebar */
      'admin.sidebar.section.gestion': 'Management',
      'admin.sidebar.section.system': 'System',
      'admin.sidebar.overview': 'Overview',
      'admin.sidebar.programs': 'Programs',
      'admin.sidebar.teachers': 'Teachers',
      'admin.sidebar.students': 'Students',
      'admin.sidebar.bookings': 'Bookings',
      'admin.sidebar.payments': 'Payments',
      'admin.sidebar.calendar': 'Calendar',
      'admin.sidebar.analytics': 'Analytics',
      'admin.sidebar.settings': 'Settings',
      'admin.sidebar.logout': 'Logout',

      /* Admin Common */
      'admin.common.search': 'Search...',
      'admin.common.seeAll': 'See all',
      'admin.common.cancel': 'Cancel',
      'admin.common.add': 'Add',
      'admin.common.save': 'Save',
      'admin.common.update': 'Update',
      'admin.common.create': 'Create',

      /* Admin Table */
      'admin.table.date': 'Date',
      'admin.table.program': 'Program',
      'admin.table.teacher': 'Teacher',
      'admin.table.students': 'Students',
      'admin.table.student': 'Student',
      'admin.table.amount': 'Amount',
      'admin.table.status': 'Status',
      'admin.table.email': 'Email',
      'admin.table.level': 'Level',
      'admin.table.progress': 'Progress',
      'admin.table.booking': 'Booking',
      'admin.table.service': 'Service',
      'admin.table.specialties': 'Specialties',
      'admin.table.evaluation': 'Evaluation',
      'admin.table.transaction': 'Transaction',
      'admin.table.method': 'Method',
      'admin.table.type': 'Type',
      'admin.table.duration': 'Duration',
      'admin.table.price': 'Price',

      /* Admin Form */
      'admin.form.firstName': 'First Name',
      'admin.form.lastName': 'Last Name',
      'admin.form.email': 'Email',
      'admin.form.specialties': 'Specialties',
      'admin.form.title': 'Title',
      'admin.form.date': 'Date',
      'admin.form.type': 'Type',
      'admin.form.startTime': 'Start Time',
      'admin.form.endTime': 'End Time',
      'admin.form.professor': 'Professor',
      'admin.form.programName': 'Program Name',
      'admin.form.level': 'Level',
      'admin.form.duration': 'Duration (weeks)',
      'admin.form.monthlyPrice': 'Monthly Price (\u20ac)',
      'admin.form.description': 'Description',
      'admin.form.platformName': 'Platform Name',
      'admin.form.contactEmail': 'Contact Email',
      'admin.form.currency': 'Currency',
      'admin.form.timezone': 'Timezone',
      'admin.form.paymentMethods': 'Accepted Payment Methods',
      'admin.form.serviceFee': 'Service Fee (%)',
      'admin.form.adminEmail': 'Admin Email',
      'admin.form.currentPassword': 'Current Password',
      'admin.form.newPassword': 'New Password',
      'admin.form.titlePlaceholder': 'Ex: TCF Qu\u00e9bec - Group A',
      'admin.form.programNamePlaceholder': 'Ex: TCF Quebec Intensive',
      'admin.form.descriptionPlaceholder': 'Program description...',
      'admin.form.passwordPlaceholder': 'Minimum 8 characters',

      /* Admin Form Options */
      'admin.form.option.tcfQuebec': 'TCF Qu\u00e9bec',
      'admin.form.option.tcfCanada': 'TCF Canada',
      'admin.form.option.oralBC': 'Oral B/C',
      'admin.form.option.oral': 'Oral',
      'admin.form.option.workshops': 'Workshops',
      'admin.form.option.solo': 'Solo',
      'admin.form.option.class': 'Class',
      'admin.form.option.workshop': 'Workshop',
      'admin.form.option.evaluation': 'Evaluation',
      'admin.form.option.eur': 'EUR (\u20ac)',
      'admin.form.option.cad': 'CAD ($)',

      /* Admin Modal */
      'admin.modal.addTeacher': 'Add Teacher',
      'admin.modal.newEvent': 'New Event',
      'admin.modal.newProgram': 'New Program',

      /* Admin Dashboard */
      'admin.dashboard.title': 'Overview',
      'admin.dashboard.students': 'Students',
      'admin.dashboard.activePrograms': 'Active Programs',
      'admin.dashboard.teachers': 'Teachers',
      'admin.dashboard.monthlyRevenue': 'Monthly Revenue',
      'admin.dashboard.upcomingSessions': 'Upcoming Sessions',
      'admin.dashboard.recentBookings': 'Recent Bookings',
      'admin.dashboard.monthlyRevenueChart': 'Monthly Revenue',

      /* Admin Bookings */
      'admin.bookings.title': 'Bookings',
      'admin.bookings.management': 'Booking Management',
      'admin.bookings.filter.all': 'All Bookings',
      'admin.bookings.filter.pending': 'Pending',
      'admin.bookings.filter.confirmed': 'Confirmed',
      'admin.bookings.filter.cancelled': 'Cancelled',

      /* Admin Students */
      'admin.students.title': 'Students',

      /* Admin Teachers */
      'admin.teachers.title': 'Teachers',
      'admin.teachers.management': 'Teacher Management',
      'admin.teachers.addTeacher': '+ Add Teacher',

      /* Admin Payments */
      'admin.payments.title': 'Payments',
      'admin.payments.monthlyRevenue': 'Monthly Revenue',
      'admin.payments.transactions': 'Transactions',
      'admin.payments.pending': 'Pending',
      'admin.payments.successRate': 'Success Rate',

      /* Admin Calendar */
      'admin.calendar.title': 'Calendar',
      'admin.calendar.general': 'General Calendar',
      'admin.calendar.addEvent': '+ Add Event',
      'admin.calendar.class': 'Class',
      'admin.calendar.workshop': 'Workshop',
      'admin.calendar.evaluation': 'Evaluation',

      /* Admin Analytics */
      'admin.analytics.title': 'Analytics & Reports',
      'admin.analytics.pageTitle': 'Analytics',
      'admin.analytics.filter.thisYear': 'This Year',
      'admin.analytics.filter.thisMonth': 'This Month',
      'admin.analytics.filter.thisWeek': 'This Week',
      'admin.analytics.enrollmentGrowth': 'Enrollment Growth',
      'admin.analytics.programDistribution': 'Program Distribution',
      'admin.analytics.successRate': 'Success Rate',
      'admin.analytics.globalAverage': 'Global Average',
      'admin.analytics.retention': 'Retention',
      'admin.analytics.retentionRate': '3-month Retention Rate',
      'admin.analytics.satisfaction': 'Satisfaction',
      'admin.analytics.studentRating': 'Average Student Rating',
      'admin.analytics.program.tcfQuebec': 'TCF Qu\u00e9bec',
      'admin.analytics.program.tcfCanada': 'TCF Canada',
      'admin.analytics.program.oralBC': 'Oral B & C',
      'admin.analytics.program.workshops': 'Workshops',

      /* Admin Settings */
      'admin.settings.title': 'Settings',
      'admin.settings.tab.general': 'General',
      'admin.settings.tab.payment': 'Payment',
      'admin.settings.tab.email': 'Email',
      'admin.settings.tab.security': 'Security',
      'admin.settings.generalInfo': 'General Information',
      'admin.settings.paymentConfig': 'Payment Configuration',
      'admin.settings.emailNotifications': 'Email Notifications',
      'admin.settings.security': 'Security',
      'admin.settings.payment.card': 'Credit Card (Visa, Mastercard)',
      'admin.settings.payment.paypal': 'PayPal',
      'admin.settings.payment.bankTransfer': 'Bank Transfer',
      'admin.settings.notif.registration': 'Registration Confirmation',
      'admin.settings.notif.sessionReminder': 'Session Reminder (24h before)',
      'admin.settings.notif.invoice': 'Invoice Available',
      'admin.settings.notif.testResult': 'Test Result',
      'admin.settings.notif.newsletter': 'Newsletter',

      /* Admin Programs */
      'admin.programs.title': 'Programs',
      'admin.programs.management': 'Program Management',
      'admin.programs.addProgram': '+ New Program',
      'admin.programs.createProgram': 'Create Program',

      /* Admin Index Sidebar */
      'admin.index.brand': 'SchoolAdmin',
      'admin.index.sidebar.section.main': 'Main',
      'admin.index.sidebar.section.tracking': 'Tracking',
      'admin.index.sidebar.section.management': 'Management',
      'admin.index.sidebar.dashboard': 'Dashboard',
      'admin.index.sidebar.students': 'Students',
      'admin.index.sidebar.teachers': 'Teachers',
      'admin.index.sidebar.courses': 'Courses',
      'admin.index.sidebar.lessons': 'Lessons',
      'admin.index.sidebar.schedules': 'Schedules',
      'admin.index.sidebar.testsResults': 'Tests & Results',
      'admin.index.sidebar.attendance': 'Attendance',
      'admin.index.sidebar.revenue': 'Revenue',
      'admin.index.sidebar.workHours': 'Work Hours',
      'admin.index.sidebar.reports': 'Reports',
      'admin.index.sidebar.settings': 'Settings',
      'admin.index.sidebar.logout': 'Log Out',

      /* Admin Index Header */
      'admin.index.dashboard.title': 'Dashboard',
      'admin.index.dashboard.subtitle': 'Complete overview of your institution',
      'admin.index.search.placeholder': 'Search students, teachers, courses...',
      'admin.index.search.student': 'Search student...',
      'admin.index.search.teacher': 'Search teacher...',

      /* Admin Index User */
      'admin.index.dropdown.profile': 'Profile',
      'admin.index.dropdown.preferences': 'Preferences',
      'admin.index.dropdown.logout': 'Log Out',

      /* Admin Index Dashboard */
      'admin.index.dashboard.enrollmentGrowth': 'Enrollment Growth',
      'admin.index.dashboard.enrollmentSub': 'Weekly student enrollment over the past 6 months',
      'admin.index.dashboard.overallAttendance': 'Overall Attendance',
      'admin.index.dashboard.attendanceSub': 'Average attendance rate across all courses',
      'admin.index.dashboard.present': 'present',
      'admin.index.dashboard.absent': 'Absent',
      'admin.index.add': 'Add',
      'admin.index.export': 'Export',

      /* Admin Index Filters */
      'admin.index.filter.allCourses': 'All Courses',
      'admin.index.filter.allLevels': 'All Levels',
      'admin.index.filter.allStatus': 'All Status',
      'admin.index.filter.active': 'Active',
      'admin.index.filter.suspended': 'Suspended',
      'admin.index.filter.completed': 'Completed',
      'admin.index.filter.allPrograms': 'Tous les programmes',
      'admin.index.filter.languages': 'Languages',
      'admin.index.filter.mathematics': 'Mathematics',
      'admin.index.filter.sciences': 'Sciences',
      'admin.index.filter.arts': 'Arts',
      'admin.index.filter.stem': 'STEM',
      'admin.index.filter.testPrep': 'Test Prep',
      'admin.index.filter.allCategories': 'All Categories',
      'admin.index.filter.allTests': 'All Tests',
      'admin.index.filter.placementTest': 'Placement Test',
      'admin.index.filter.midTerm': 'Mid-Term',
      'admin.index.filter.final': 'Final',
      'admin.index.filter.thisWeek': 'This Week',
      'admin.index.filter.thisMonth': 'This Month',
      'admin.index.filter.all': 'All',

      /* Admin Index Students */
      'admin.index.students.directory': 'Student Directory',
      'admin.index.backToStudents': 'Back to Students',
      'admin.index.attendanceOverview': 'Attendance Overview',
      'admin.index.testHistory': 'Test History',
      'admin.index.weeklySchedule': 'Weekly Schedule',
      'admin.index.enrolledClasses': 'Current enrolled classes',
      'admin.index.paymentHistory': 'Payment History',

      /* Admin Index Teachers */
      'admin.index.teachers.facultyDirectory': 'Faculty Directory',
      'admin.index.backToTeachers': 'Back to Teachers',
      'admin.index.assignedClasses': 'Assigned classes this week',
      'admin.index.performanceRating': 'Performance Rating',
      'admin.index.ratingSub': 'Based on student feedback and results',

      /* Admin Index Course */
      'admin.index.addCourse': 'Add Course',
      'admin.index.backToCourses': 'Back to Courses',
      'admin.index.course.lessons': 'Lessons',
      'admin.index.course.enrolledStudents': 'Enrolled Students',

      /* Admin Index Lesson */
      'admin.index.lesson.list': 'List',
      'admin.index.lesson.calendar': 'Calendar',
      'admin.index.lesson.schedule': 'Lesson Schedule',
      'admin.index.lesson.scheduleBtn': 'Schedule',

      /* Admin Index Schedules */
      'admin.index.schedules.title': 'Weekly Timetable',

      /* Admin Index Tests */
      'admin.index.tests.scoreDistribution': 'Score Distribution',
      'admin.index.tests.scoreSub': 'Latest test results by score range',
      'admin.index.tests.passRate': 'Pass Rate',
      'admin.index.tests.passSub': 'Pass / fail ratio this term',
      'admin.index.tests.passed': 'passed',
      'admin.index.tests.passedPercent': 'Passed (78%)',
      'admin.index.tests.inProgress': 'In Progress (22%)',
      'admin.index.tests.individualResults': 'Individual Results',

      /* Admin Index Attendance */
      'admin.index.attendance.monthlyTrend': 'Monthly Trend',
      'admin.index.attendance.trendSub': 'Attendance rate over the past 6 months',
      'admin.index.attendance.calendar': 'Attendance Calendar',
      'admin.index.attendance.calendarSub': 'June 2026',
      'admin.index.attendance.byCourse': 'Attendance by Course',

      /* Admin Index Revenue */
      'admin.index.revenue.monthly': 'Monthly Revenue',
      'admin.index.revenue.monthlySub': 'Income over the past 6 months',
      'admin.index.revenue.byCourse': 'Revenue by Course',
      'admin.index.revenue.byCourseSub': 'Income breakdown by course',
      'admin.index.revenue.recentPayments': 'Recent Payments',

      /* Admin Index Hours */
      'admin.index.hours.perTeacher': 'Hours per Teacher',
      'admin.index.hours.currentMonth': 'Current month',
      'admin.index.hours.detailed': 'Detailed Hours',

      /* Admin Index Reports */
      'admin.index.reports.title': 'Available Reports',
      'admin.index.reports.studentPerformance': 'Student Performance Report',
      'admin.index.reports.studentPerfDesc': 'Grades, progress tracking, and level distribution per student',
      'admin.index.reports.attendance': 'Attendance Report',
      'admin.index.reports.attendanceDesc': 'Attendance rates by course, month, and individual student',
      'admin.index.reports.revenue': 'Revenue Report',
      'admin.index.reports.revenueDesc': 'Income statements, payment tracking, and budget forecasts',
      'admin.index.reports.teacherWorkload': 'Teacher Workload Report',
      'admin.index.reports.teacherWorkloadDesc': 'Hourly distribution, overtime tracking, and workload balance',
      'admin.index.reports.topPerformers': 'Top Performers Report',
      'admin.index.reports.topPerformersDesc': 'Honor roll, highest achievers, and most improved students',
      'admin.index.reports.compliance': 'Compliance Report',
      'admin.index.reports.complianceDesc': 'Academic standards, attendance thresholds, and policy adherence',

      /* Admin Index Settings */
      'admin.index.settings.title': 'Settings',
      'admin.index.settings.schoolInfo': 'School Information',
      'admin.index.settings.institutionName': 'Institution Name',
      'admin.index.settings.institutionNameVal': 'International School of Languages',
      'admin.index.settings.academicYear': 'Academic Year',
      'admin.index.settings.timezone': 'Timezone',
      'admin.index.settings.academicTerm': 'Academic Term',
      'admin.index.settings.current': 'Current',
      'admin.index.settings.gradingSystem': 'Grading System',
      'admin.index.settings.scale': 'Scale',
      'admin.index.settings.scaleDesc': 'A\u2013F Letter Grading (A=90\u2013100, B=80\u201389, C=70\u201379, D=60\u201369, F<60)',
      'admin.index.settings.active': 'Active',
      'admin.index.settings.passThreshold': 'Pass Threshold',
      'admin.index.settings.passThresholdDesc': 'Minimum 65% to pass a course',
      'admin.index.settings.attendanceReq': 'Attendance Requirement',
      'admin.index.settings.attendanceReqDesc': 'Minimum 80% attendance to qualify for exams',
      'admin.index.settings.notifications': 'Notifications',
      'admin.index.settings.classReminders': 'Class Reminders',
      'admin.index.settings.classRemindersDesc': 'Send reminders 24h before class',
      'admin.index.settings.attendanceAlerts': 'Attendance Alerts',
      'admin.index.settings.attendanceAlertsDesc': 'Alert when student attendance < 80%',
      'admin.index.settings.weeklyReports': 'Weekly Reports',
      'admin.index.settings.weeklyReportsDesc': 'Email summary every Monday',
      'admin.index.settings.paymentNotifs': 'Payment Notifications',
      'admin.index.settings.paymentNotifsDesc': 'Alert on overdue payments',
      'admin.index.settings.rolesPermissions': 'Roles & Permissions',
      'admin.index.settings.roleAdmin': 'Administrator',
      'admin.index.settings.roleAdminDesc': 'Full access to all sections and settings',
      'admin.index.settings.roleTeacher': 'Teacher',
      'admin.index.settings.roleTeacherDesc': 'Courses, students, attendance, grades',
      'admin.index.settings.roleStudent': 'Student',
      'admin.index.settings.roleStudentDesc': 'Profile, grades, schedule only',
      'admin.index.settings.roleAccountant': 'Accountant',
      'admin.index.settings.roleAccountantDesc': 'Revenue, payments, financial reports',
      'admin.index.settings.full': 'Full',
      'admin.index.settings.limited': 'Limited',
      'admin.index.settings.restricted': 'Restricted',
      'admin.index.settings.financial': 'Financial',
      'admin.index.settings.system': 'System',
      'admin.index.settings.maintenanceMode': 'Maintenance Mode',
      'admin.index.settings.maintenanceModeDesc': 'Temporarily disable access for updates',
      'admin.index.settings.autoBackup': 'Auto Backup',
      'admin.index.settings.autoBackupDesc': 'Daily automated backup at 2:00 AM',

      /* Admin Index Table */
      'admin.index.table.student': 'Student',
      'admin.index.table.course': 'Course',
      'admin.index.table.level': 'Level',
      'admin.index.table.attendance': 'Attendance',
      'admin.index.table.testAvg': 'Test Avg',
      'admin.index.table.status': 'Status',
      'admin.index.table.test': 'Test',
      'admin.index.table.score': 'Score',
      'admin.index.table.grade': 'Grade',
      'admin.index.table.date': 'Date',
      'admin.index.table.teacher': 'Teacher',
      'admin.index.table.department': 'Department',
      'admin.index.table.courses': 'Courses',
      'admin.index.table.hoursPerWeek': 'Hours/Week',
      'admin.index.table.rating': 'Rating',
      'admin.index.table.lesson': 'Lesson',
      'admin.index.table.time': 'Time',
      'admin.index.table.rank': 'Rank',
      'admin.index.table.amount': 'Amount',
      'admin.index.table.method': 'Method',
      'admin.index.table.contractHours': 'Contract Hours',
      'admin.index.table.actualHours': 'Actual Hours',
      'admin.index.table.difference': 'Difference',
      'admin.index.table.overtime': 'Overtime',
      'admin.index.table.rate': 'Hourly Rate',
      'admin.index.table.montantDu': 'Amount Due',
      'admin.index.table.paymentStatus': 'Payment Status',
      'admin.index.table.hoursThisMonth': 'Hours/Month',

      /* Admin Index Tab */
      'admin.index.tab.overview': 'Overview',
      'admin.index.tab.attendance': 'Attendance',
      'admin.index.tab.testResults': 'Test Results',
      'admin.index.tab.schedule': 'Schedule',
      'admin.index.tab.payments': 'Payments',
      'admin.index.tab.classes': 'Classes',
      'admin.index.tab.hours': 'Schedule & Hours',
      'admin.index.tab.payroll': 'Payroll',
      'admin.index.tab.notes': 'Notes',

      /* Student Sidebar */
      'student.sidebar.navigation': 'Navigation',
      'student.sidebar.dashboard': 'Dashboard',
      'student.sidebar.my_programs': 'My Programs',
      'student.sidebar.calendar': 'My Calendar',
      'student.sidebar.payments': 'Payments & Invoices',
      'student.sidebar.level_tests': 'Level Tests',
      'student.sidebar.settings': 'Settings',
      'student.sidebar.profile': 'Profile',
      'student.sidebar.support': 'Support',
      'student.sidebar.logout': 'Logout',

      /* Student Common */
      'student.common.search': 'Search...',
      'student.common.close': 'Close',
      'student.common.view_calendar': 'View Calendar',

      /* Student Dashboard */
      'student.dashboard.page_title': 'Dashboard \u2014 Cultulangues',
      'student.dashboard.title': 'Dashboard',
      'student.dashboard.active_programs': 'Active Programs',
      'student.dashboard.change_this_month': '+1 this month',
      'student.dashboard.upcoming_sessions': 'Upcoming Sessions',
      'student.dashboard.next_session_label': 'Next: tomorrow',
      'student.dashboard.global_progress': 'Global Progress',
      'student.dashboard.progress_this_week': '+12% this week',
      'student.dashboard.current_level': 'Current Level',
      'student.dashboard.objective_label': 'Goal: C1',
      'student.dashboard.next_session': 'Next Session',
      'student.dashboard.view_calendar': 'View Calendar',
      'student.dashboard.join': 'Join',
      'student.dashboard.my_progress': 'My Progress',
      'student.dashboard.listening': 'Listening Comprehension',
      'student.dashboard.reading': 'Reading Comprehension',
      'student.dashboard.speaking': 'Speaking',
      'student.dashboard.writing': 'Writing',
      'student.dashboard.notifications': 'Notifications',
      'student.dashboard.notif_reminder_title': 'Reminder: comprehension test',
      'student.dashboard.notif_reminder_desc': 'Your test is scheduled in 2 days',
      'student.dashboard.notif_correction_title': 'Correction Available',
      'student.dashboard.notif_correction_desc': 'Your mock exam has been corrected',
      'student.dashboard.notif_workshop_title': 'Conversation Workshop',
      'student.dashboard.notif_workshop_desc': 'New workshop available for booking',
      'student.dashboard.notif_progress_title': 'Progress Updated',
      'student.dashboard.notif_progress_desc': '+5% this week, well done!',
      'student.dashboard.quick_actions': 'Quick Actions',
      'student.dashboard.take_level_test': 'Take a Level Test',
      'student.dashboard.book_program': 'Book a Program',
      'student.dashboard.view_invoices': 'View My Invoices',
      'student.dashboard.contact_support': 'Contact Support',

      /* Student Calendar */
      'student.calendar.page_title': 'My Calendar \u2014 Cultulangues',
      'student.calendar.title': 'My Calendar',
      'student.calendar.heading': 'Calendar',
      'student.calendar.month_view': 'Month View',
      'student.calendar.week_view': 'Week View',
      'student.calendar.add_event': '+ Add Event',
      'student.calendar.day_mon': 'Mon',
      'student.calendar.day_tue': 'Tue',
      'student.calendar.day_wed': 'Wed',
      'student.calendar.day_thu': 'Thu',
      'student.calendar.day_fri': 'Fri',
      'student.calendar.day_sat': 'Sat',
      'student.calendar.day_sun': 'Sun',
      'student.calendar.upcoming_sessions': 'Upcoming Sessions',
      'student.calendar.th_date': 'Date',
      'student.calendar.th_program': 'Program',
      'student.calendar.th_time': 'Time',
      'student.calendar.th_teacher': 'Teacher',
      'student.calendar.th_location': 'Location',

      /* Student Tests */
      'student.tests.page_title': 'Level Tests \u2014 Cultulangues',
      'student.tests.title': 'Level Tests',
      'student.tests.evaluate_level': 'Evaluate Your Level',
      'student.tests.listening_test': 'Listening Comprehension Test',
      'student.tests.grammar_test': 'Grammar Test',
      'student.tests.view_results': 'View Results',
      'student.tests.test_history': 'Test History',
      'student.tests.th_date': 'Date',
      'student.tests.th_test': 'Test',
      'student.tests.th_score': 'Score',
      'student.tests.th_level': 'Level',
      'student.tests.view': 'View',

      /* Student Programs */
      'student.programs.page_title': 'My Programs \u2014 Cultulangues',
      'student.programs.title': 'My Programs',
      'student.programs.new_registration': '+ New Registration',
      'student.programs.details': 'Details',
      'student.programs.already_enrolled': 'You already have 2 active programs',
      'student.programs.encouragement': 'Keep it up! You can also explore our other programs.',
      'student.programs.discover_more': 'Discover More Programs',
      'student.programs.details_title': 'Program Details',
      'student.programs.label_start': 'Start',
      'student.programs.label_end': 'End',
      'student.programs.label_schedule': 'Schedule',
      'student.programs.label_progress': 'Progress',
      'student.programs.label_level': 'Current Level',

      /* Student Payments */
      'student.payments.page_title': 'Payments \u2014 Cultulangues',
      'student.payments.title': 'Payments & Invoices',
      'student.payments.last_payment': 'Last Payment',
      'student.payments.total_paid': 'Total Paid',
      'student.payments.next_payment': 'Next Payment',
      'student.payments.invoices_paid': 'Invoices Paid',
      'student.payments.invoice_history': 'Invoice History',
      'student.payments.th_invoice': 'Invoice',
      'student.payments.th_date': 'Date',
      'student.payments.th_description': 'Description',
      'student.payments.th_amount': 'Amount',
      'student.payments.th_status': 'Status',
      'student.payments.download': 'Download',

      /* Student Profile */
      'student.profile.page_title': 'Profile \u2014 Cultulangues',
      'student.profile.title': 'Profile',
      'student.profile.change_photo': 'Change Photo',
      'student.profile.personal_info': 'Personal Information',
      'student.profile.first_name': 'First Name',
      'student.profile.last_name': 'Last Name',
      'student.profile.email': 'Email',
      'student.profile.phone': 'Phone',
      'student.profile.save': 'Save',
      'student.profile.language_prefs': 'Language Preferences',
      'student.profile.current_level': 'Current Level',
      'student.profile.objective': 'Goal',
      'student.profile.opt_tcf_qc': 'TCF Qu\u00e9bec',
      'student.profile.opt_tcf_canada': 'TCF Canada',
      'student.profile.opt_oral': 'Oral B or C',
      'student.profile.native_language': 'Native Language',
      'student.profile.update': 'Update',

      /* Student Support */
      'student.support.page_title': 'Support \u2014 Cultulangues',
      'student.support.title': 'Support',
      'student.support.send_message': 'Send a Message',
      'student.support.subject': 'Subject',
      'student.support.subject_admin': 'Administrative Question',
      'student.support.subject_tech': 'Technical Issue',
      'student.support.subject_program': 'Program & Courses',
      'student.support.subject_payment': 'Payment & Billing',
      'student.support.subject_other': 'Other',
      'student.support.message': 'Message',
      'student.support.message_placeholder': 'Describe your request...',
      'student.support.send': 'Send',
      'student.support.recent_messages': 'Recent Messages',
      'student.support.support_label': 'Support',
      'student.support.you_label': 'You',
      'student.support.faq_title': 'Quick FAQ',
      'student.support.faq1_q': 'How do I change my password?',
      'student.support.faq1_a': 'Go to your Profile, then the Security section.',
      'student.support.faq2_q': 'When do I receive my invoices?',
      'student.support.faq2_a': 'Invoices are generated on the 1st of each month.',
      'student.support.faq3_q': 'Can I cancel a program?',
      'student.support.faq3_a': 'Yes, within 14 days after the program starts.',
      'student.support.faq4_q': 'How do I contact my teacher?',
      'student.support.faq4_a': 'You can send them a message through the integrated messaging system.',

      /* Teacher Sidebar */
      'teacher.sidebar.navigation': 'Navigation',
      'teacher.sidebar.dashboard': 'Dashboard',
      'teacher.sidebar.schedule': 'My Schedule',
      'teacher.sidebar.students': 'My Students',
      'teacher.sidebar.sessions': 'Session Tracking',
      'teacher.sidebar.settings': 'Settings',
      'teacher.sidebar.profile': 'Profile',
      'teacher.sidebar.logout': 'Logout',

      /* Teacher Common */
      'teacher.common.search': 'Search...',

      /* Teacher Dashboard */
      'teacher.dashboard.title': 'Dashboard',
      'teacher.dashboard.active_students': 'Active Students',
      'teacher.dashboard.sessions_month': 'Sessions This Month',
      'teacher.dashboard.groups': 'Groups',
      'teacher.dashboard.avg_rating': 'Average Rating',
      'teacher.dashboard.upcoming_sessions': 'Upcoming Sessions',
      'teacher.dashboard.see_all': 'See All',
      'teacher.dashboard.notifications': 'Notifications',
      'teacher.dashboard.today': 'Today',
      'teacher.dashboard.tomorrow': 'Tomorrow',
      'teacher.dashboard.fri': 'Fri.',

      /* Teacher Profile */
      'teacher.profile.title': 'Profile \u2014 Teacher',
      'teacher.profile.page_title': 'Profile',
      'teacher.profile.information': 'Information',
      'teacher.profile.first_name': 'First Name',
      'teacher.profile.last_name': 'Last Name',
      'teacher.profile.email': 'Email',
      'teacher.profile.phone': 'Phone',
      'teacher.profile.save': 'Save',
      'teacher.profile.skills_availability': 'Skills & Availability',
      'teacher.profile.specialties': 'Specialties',
      'teacher.profile.availability': 'Availability',
      'teacher.profile.update': 'Update',

      /* Teacher Students */
      'teacher.students.title': 'My Students \u2014 Teacher',
      'teacher.students.page_title': 'My Students',
      'teacher.students.heading': 'My Students',
      'teacher.students.search_student': 'Search student...',
      'teacher.students.th_student': 'Student',
      'teacher.students.th_level': 'Level',
      'teacher.students.th_group': 'Group',
      'teacher.students.th_progress': 'Progress',
      'teacher.students.th_last_session': 'Last Session',
      'teacher.students.view_profile': 'View Profile',

      /* Teacher Schedule */
      'teacher.schedule.title': 'My Schedule \u2014 Teacher',
      'teacher.schedule.page_title': 'My Schedule',
      'teacher.schedule.mon': 'Mon',
      'teacher.schedule.tue': 'Tue',
      'teacher.schedule.wed': 'Wed',
      'teacher.schedule.thu': 'Thu',
      'teacher.schedule.fri': 'Fri',
      'teacher.schedule.sat': 'Sat',
      'teacher.schedule.sun': 'Sun',

      /* Teacher Sessions */
      'teacher.sessions.title': 'Session Tracking \u2014 Teacher',
      'teacher.sessions.page_title': 'Session Tracking',
      'teacher.sessions.session_info': 'Session Information',
      'teacher.sessions.date': 'Date',
      'teacher.sessions.time': 'Time',
      'teacher.sessions.group': 'Group',
      'teacher.sessions.room': 'Room',
      'teacher.sessions.type': 'Type',
      'teacher.sessions.attendance': 'Attendance',
      'teacher.sessions.session_notes': 'Session Notes',
      'teacher.sessions.save': 'Save',
      'teacher.sessions.notes_placeholder': 'Session summary, key points covered, observations...',
      'teacher.sessions.attendance_list': 'Attendance List',
      'teacher.sessions.present_students': 'Present Students',
      'teacher.sessions.next_session': 'Next Session',
      'teacher.sessions.prepare_session': 'Prepare Session',

      /* Booking Page */
      'booking.page.title': 'Registration \u2014 Cultulangues',
      'booking.header.title': 'Registration',
      'booking.header.subtitle': 'Complete your registration in a few simple steps.',
      'booking.step1.label': '1',
      'booking.step1.title': 'Program',
      'booking.step1.subtitle': 'Choose your program and availability.',
      'booking.step1.schedule.title': 'Choose Your Schedule',
      'booking.step1.days.label': 'Preferred Days',
      'booking.step1.days.helper': 'Select the days that suit you',
      'booking.day.lundi': 'Monday',
      'booking.day.mardi': 'Tuesday',
      'booking.day.mercredi': 'Wednesday',
      'booking.day.jeudi': 'Thursday',
      'booking.day.vendredi': 'Friday',
      'booking.day.samedi': 'Saturday',
      'booking.step1.time.label': 'Preferred Time Range',
      'booking.step1.time.helper': 'Choose your ideal time slot',
      'booking.time.from': 'From',
      'booking.time.to': 'to',
      'booking.step1.info.title': 'Your Information',
      'booking.form.fullname': 'Full Name',
      'booking.form.fullname.placeholder': 'Your full name',
      'booking.form.email': 'Email',
      'booking.form.email.placeholder': 'your@email.com',
      'booking.form.phone': 'Phone',
      'booking.form.phone.placeholder': 'Your phone number',
      'booking.form.contact': 'Contact Method',
      'booking.form.contact.placeholder': 'Select a method',
      'booking.form.notes': 'Notes',
      'booking.form.notes.optional': '(optional)',
      'booking.form.notes.placeholder': 'Additional information...',
      'booking.step1.footer.cancel': 'Cancel',
      'booking.step1.footer.confirm': 'Confirm registration and start the test',
      'booking.step1.footer.confirm.solo': 'Confirm my booking and start the test',
      'booking.step1.solo.title': 'Choose your date and time',
      'booking.step1.solo.calendar': 'Select a date',
      'booking.step1.solo.slots': 'Available slots',
      'booking.step1.solo.default': 'Select a date',
      'booking.step1.solo.prompt': 'Choose a date from the calendar',
      'booking.step1.solo.pkg.title': 'Select your package',
      'booking.step1.solo.pkg.after': 'Then, choose your date and time slot',
      'booking.step1.group.title': 'Group Assignment',
      'booking.step1.group.desc1': 'Your group will be determined after your oral evaluation call / test.',
      'booking.step1.group.desc2': 'This step allows us to place you in the level and group that best suit your profile, goals, and availability.',
      'booking.step1.group.step1': 'Submit your registration request',
      'booking.step1.group.step2': 'Complete the written placement test',
      'booking.step1.group.step3': 'Take the oral evaluation call',
      'booking.step1.group.step4': 'We assign you to the most suitable group for your level and availability',
      'booking.step1.group.step5': 'You receive your schedule and final confirmation',
      'booking.step2.label': '2',
      'booking.step2.title': 'Level Test',
      'booking.step2.subtitle': 'A quick test to assess your level.',
      'booking.step2.footer.back': 'Previous',
      'booking.step2.footer.next': 'Next',
      'booking.step3.label': '3',
      'booking.step3.title': 'Results',
      'booking.step3.subtitle': 'Discover your estimated level.',
      'booking.step3.score.label': 'Overall Score',
      'booking.step3.chart.correct': 'Correct Answers',
      'booking.step3.chart.incorrect': 'Incorrect Answers',
      'booking.step3.footer.book': 'Book a Follow-up Call',
      'booking.step4.label': '4',
      'booking.step4.title': 'Appointment',
      'booking.step4.subtitle': 'Choose your time slot for the follow-up call.',
      'booking.step4.calendar.title': 'Select a Date',
      'booking.step4.slots.title': 'Available Slots',
      'booking.step4.slots.default': 'Select a date',
      'booking.step4.slots.prompt': 'Choose a date to see available slots',
      'booking.step4.footer.back': 'Back',
      'booking.step4.footer.confirm': 'Confirm Oral Test',
      'booking.success.title': 'Registration Confirmed!',
      'booking.success.message': 'Your registration has been received. We will contact you within 24h to confirm your appointment.',
      'booking.success.redirect': 'Redirecting...',

      /* Auth Login */
      'auth.login.page.title': 'Login \u2014 School Management',
      'auth.login.title': 'School Management',
      'auth.login.subtitle': 'Sign in to manage your institution',
      'auth.login.email': 'Email',
      'auth.login.email.placeholder': 'admin@school.com',
      'auth.login.password': 'Password',
      'auth.login.password.placeholder': 'Enter your password',
      'auth.login.role.label': 'I am a...',
      'auth.login.role.admin': 'Admin',
      'auth.login.role.teacher': 'Teacher',
      'auth.login.role.student': 'Student',
      'auth.login.signin': 'Sign In',
      'auth.login.back': 'Back to Home',

      /* Auth Register */
      'auth.register.page.title': 'Registration \u2014 Cultulangues',
      'auth.register.title': 'Create Your Account',
      'auth.register.subtitle': 'Join Cultulangues and start your language journey',
      'auth.register.firstname': 'First Name',
      'auth.register.firstname.placeholder': 'Your first name',
      'auth.register.lastname': 'Last Name',
      'auth.register.lastname.placeholder': 'Your last name',
      'auth.register.email': 'Email',
      'auth.register.email.placeholder': 'your@email.com',
      'auth.register.password': 'Password',
      'auth.register.password.placeholder': 'Minimum 8 characters',
      'auth.register.level': 'Language Level',
      'auth.register.level.a1': 'Beginner (A1)',
      'auth.register.level.a2': 'Elementary (A2)',
      'auth.register.level.b1': 'Intermediate (B1)',
      'auth.register.level.b2': 'Upper Intermediate (B2)',
      'auth.register.level.c1': 'Advanced (C1)',
      'auth.register.level.c2': 'Expert (C2)',
      'auth.register.goal': 'Main Goal',
      'auth.register.goal.tcf_qc': 'TCF Quebec',
      'auth.register.goal.tcf_ca': 'TCF Canada',
      'auth.register.goal.oral_bc': 'Oral B or C',
      'auth.register.goal.general': 'General Improvement',
      'auth.register.goal.immersion': 'Cultural Immersion',
      'auth.register.bubbles_label': 'Choose your path',
      'auth.register.accept': 'I accept the',
      'auth.register.tos': 'Terms of Service',
      'auth.register.submit': 'Create My Account',
      'auth.register.has_account': 'Already have an account?',
      'auth.register.login': 'Log in',

      /* Common Months */
      'common.month.jan': 'Jan',
      'common.month.feb': 'Feb',
      'common.month.mar': 'Mar',
      'common.month.apr': 'Apr',
      'common.month.may': 'May',
      'common.month.jun': 'Jun',
      'common.month.jul': 'Jul',
      'common.month.aug': 'Aug',
      'common.month.sep': 'Sep',
      'common.month.oct': 'Oct',
      'common.month.nov': 'Nov',
      'common.month.dec': 'Dec',

      /* Common Days */
      'common.day.mon': 'Mon',
      'common.day.tue': 'Tue',
      'common.day.wed': 'Wed',
      'common.day.thu': 'Thu',
      'common.day.fri': 'Fri',
      'common.day.sat': 'Sat',
      'common.day.sun': 'Sun',

      /* Booking Additional */
      'booking.step1.badge.selected': 'Already selected',
      'booking.step1.footer.info': 'Information is confidential',
      'booking.step2.footer.info': 'This test takes about 15 minutes',
      'booking.step3.explanation': 'This result is an estimate. A confirmed teacher will verify your level during the follow-up call.',
      'booking.step3.footer.info': 'Test completed',
      'booking.step4.footer.info': 'A slot will be confirmed within 24h',
      'booking.step4.timezone': 'Timezone: UTC',
      'booking.step4.timezone.city': '(Montreal time)',
      'booking.time.to_label': 'To',

      /* Auth Login Additional */
      'auth.login.demo.title': 'Demo Mode',
      'auth.login.demo.text': 'Select a role and click Login to access the demo.',

      /* Student Portal (standalone index.html) */
      'student.portal.page.title': 'Student Portal - School Management',
      'student.portal.brand': 'Student Portal',
      'student.portal.section.main': 'Main',
      'student.portal.section.account': 'Account',
      'student.portal.nav.dashboard': 'Dashboard',
      'student.portal.nav.courses': 'My Courses',
      'student.portal.nav.lessons': 'Lessons',
      'student.portal.nav.schedule': 'Schedule',
      'student.portal.nav.tests': 'Tests & Results',
      'student.portal.nav.attendance': 'Attendance',
      'student.portal.nav.payments': 'Payments',
      'student.portal.nav.profile': 'Profile',
      'student.portal.nav.logout': 'Log Out',
      'student.portal.page.dashboard.title': 'Dashboard',
      'student.portal.page.dashboard.subtitle': 'Welcome back! Track your academic progress.',
      'student.portal.search.placeholder': 'Search courses, lessons...',
      'student.portal.user.name': 'Emma Johnson',
      'student.portal.user.role': 'Student',
      'student.portal.dropdown.profile': 'Profile',
      'student.portal.dropdown.logout': 'Log Out',
      'student.portal.dashboard.chart.scores.title': 'Academic Scores',
      'student.portal.dashboard.chart.scores.subtitle': 'Your scores over the past 3 months',
      'student.portal.dashboard.chart.attendance.title': 'Attendance Rate',
      'student.portal.dashboard.chart.attendance.subtitle': 'Monthly attendance percentage',
      'student.portal.dashboard.upcoming_tests': 'Upcoming Tests',
      'student.portal.courses.title': 'My Courses',
      'student.portal.courses.filter.all': 'All Courses',
      'student.portal.courses.filter.in_progress': 'In Progress',
      'student.portal.courses.filter.completed': 'Completed',
      'student.portal.courses.back': 'Back to Courses',
      'student.portal.courses.tab.overview': 'Overview',
      'student.portal.courses.tab.lessons': 'Lessons',
      'student.portal.courses.tab.tests': 'Tests',
      'student.portal.courses.tab.resources': 'Resources',
      'student.portal.resources.empty': 'No resources available for this course yet.',
      'student.portal.lessons.title': 'Lessons',
      'student.portal.lessons.upcoming': 'Upcoming Lessons',
      'student.portal.lessons.col.lesson': 'Lesson',
      'student.portal.lessons.col.course': 'Course',
      'student.portal.lessons.col.date': 'Date',
      'student.portal.lessons.col.time': 'Time',
      'student.portal.lessons.col.teacher': 'Teacher',
      'student.portal.lessons.col.status': 'Status',
      'student.portal.schedule.title': 'Schedule',
      'student.portal.schedule.mon': 'Monday',
      'student.portal.schedule.tue': 'Tuesday',
      'student.portal.schedule.wed': 'Wednesday',
      'student.portal.schedule.thu': 'Thursday',
      'student.portal.schedule.fri': 'Friday',
      'student.portal.tests.title': 'Tests',
      'student.portal.tests.chart.history.title': 'Score History',
      'student.portal.tests.chart.history.subtitle': 'Your scores over the past 3 months',
      'student.portal.tests.chart.comparison.title': 'Class Comparison',
      'student.portal.tests.chart.comparison.subtitle': 'Your score vs. class average',
      'student.portal.tests.results.title': 'Test Results',
      'student.portal.attendance.chart.trend.title': 'Monthly Trend',
      'student.portal.attendance.chart.trend.subtitle': 'Attendance rate over the past 6 months',
      'student.portal.attendance.chart.calendar.title': 'Attendance Calendar',
      'student.portal.attendance.chart.calendar.subtitle': 'June 2026',
      'student.portal.attendance.day.mon': 'Mon',
      'student.portal.attendance.day.tue': 'Tue',
      'student.portal.attendance.day.wed': 'Wed',
      'student.portal.attendance.day.thu': 'Thu',
      'student.portal.attendance.day.fri': 'Fri',
      'student.portal.attendance.day.sat': 'Sat',
      'student.portal.attendance.day.sun': 'Sun',
      'student.portal.payments.title': 'Payment History',
      'student.portal.payments.col.course': 'Course',
      'student.portal.payments.col.amount': 'Amount',
      'student.portal.payments.col.date': 'Due Date',
      'student.portal.payments.col.method': 'Method',
      'student.portal.payments.col.status': 'Status',
      'student.portal.profile.title': 'My Profile',
      'student.portal.profile.edit.title': 'Edit Profile',
      'student.portal.profile.edit.fullname': 'Full Name',
      'student.portal.profile.edit.email': 'Email',
      'student.portal.profile.edit.phone': 'Phone',
      'student.portal.profile.edit.avatar': 'Avatar URL',
      'student.portal.profile.edit.avatar.placeholder': 'https://example.com/avatar.jpg',
      'student.portal.profile.edit.save': 'Save Changes',
      'student.portal.profile.account.title': 'Account Info',
      'student.portal.profile.account.student_id': 'Student ID',
      'student.portal.profile.account.enrollment': 'Enrollment Date',
      'student.portal.profile.account.level': 'Current Level',
      'student.portal.profile.account.courses': 'Courses Enrolled',
      'student.portal.profile.stats.title': 'Stats',
      'student.portal.profile.stats.attendance': 'Overall Attendance',
      'student.portal.profile.stats.score': 'Average Score',
      'student.portal.profile.stats.completed': 'Courses Completed',

      /* Teacher Portal (standalone index.html) */
      'teacher.portal.page.title': 'Teacher Portal - School Management',
      'teacher.portal.brand': 'Teacher Portal',
      'teacher.portal.section.main': 'Main',
      'teacher.portal.section.account': 'Account',
      'teacher.portal.nav.dashboard': 'Dashboard',
      'teacher.portal.nav.courses': 'My Courses',
      'teacher.portal.nav.lessons': 'Lessons',
      'teacher.portal.nav.schedule': 'Schedule',
      'teacher.portal.nav.students': 'Students',
      'teacher.portal.nav.tests': 'Tests & Grades',
      'teacher.portal.nav.attendance': 'Attendance',
      'teacher.portal.nav.hours': 'Work Hours',
      'teacher.portal.nav.profile': 'Profile',
      'teacher.portal.nav.logout': 'Log Out',
      'teacher.portal.page.dashboard.title': 'Dashboard',
      'teacher.portal.page.dashboard.subtitle': 'Welcome back! Manage your classroom.',
      'teacher.portal.search.placeholder': 'Search students, courses...',
      'teacher.portal.user.name': 'Marie Laurent',
      'teacher.portal.user.role': 'Teacher',
      'teacher.portal.dropdown.profile': 'Profile',
      'teacher.portal.dropdown.logout': 'Log Out',
      'teacher.portal.dashboard.chart.performance.title': 'Student Performance',
      'teacher.portal.dashboard.chart.performance.subtitle': 'Average scores per course this term',
      'teacher.portal.dashboard.chart.workload.title': 'Weekly Workload',
      'teacher.portal.dashboard.chart.workload.subtitle': 'Teaching hours distribution',
      'teacher.portal.dashboard.actions.add_lesson': 'Add Lesson',
      'teacher.portal.dashboard.actions.mark_attendance': 'Mark Attendance',
      'teacher.portal.dashboard.actions.create_test': 'Create Test',
      'teacher.portal.courses.title': 'My Courses',
      'teacher.portal.courses.back': 'Back to Courses',
      'teacher.portal.courses.tab.lessons': 'Lessons',
      'teacher.portal.courses.tab.students': 'Students',
      'teacher.portal.courses.tab.attendance': 'Attendance',
      'teacher.portal.courses.tab.tests': 'Tests',
      'teacher.portal.courses.attendance.title': 'Course Attendance',
      'teacher.portal.lessons.title': 'Lessons',
      'teacher.portal.lessons.add': 'Add',
      'teacher.portal.lessons.all': 'All Lessons',
      'teacher.portal.lessons.col.lesson': 'Lesson',
      'teacher.portal.lessons.col.course': 'Course',
      'teacher.portal.lessons.col.date': 'Date',
      'teacher.portal.lessons.col.time': 'Time',
      'teacher.portal.lessons.col.status': 'Status',
      'teacher.portal.schedule.title': 'Schedule',
      'teacher.portal.schedule.mon': 'Monday',
      'teacher.portal.schedule.tue': 'Tuesday',
      'teacher.portal.schedule.wed': 'Wednesday',
      'teacher.portal.schedule.thu': 'Thursday',
      'teacher.portal.schedule.fri': 'Friday',
      'teacher.portal.students.title': 'My Students',
      'teacher.portal.students.filter.all': 'All Courses',
      'teacher.portal.students.filter.intensive': 'French Intensive',
      'teacher.portal.students.filter.saturday': 'Saturday Program',
      'teacher.portal.students.search.placeholder': 'Search student...',
      'teacher.portal.students.directory.title': 'Student Directory',
      'teacher.portal.students.col.name': 'Name',
      'teacher.portal.students.col.course': 'Course',
      'teacher.portal.students.col.attendance': 'Attendance',
      'teacher.portal.students.col.avg_score': 'Avg Score',
      'teacher.portal.students.col.status': 'Status',
      'teacher.portal.tests.title': 'Tests & Grades',
      'teacher.portal.tests.chart.results.title': 'Test Results Distribution',
      'teacher.portal.tests.chart.results.subtitle': 'Score ranges across all tests',
      'teacher.portal.tests.chart.pass_rate.title': 'Pass Rate',
      'teacher.portal.tests.chart.pass_rate.label': 'Pass rate this term',
      'teacher.portal.tests.grade_table.title': 'Grade Table',
      'teacher.portal.tests.grade_table.save': 'Save All',
      'teacher.portal.tests.col.student': 'Student',
      'teacher.portal.tests.col.test': 'Test',
      'teacher.portal.tests.col.score': 'Score',
      'teacher.portal.tests.col.grade': 'Grade',
      'teacher.portal.tests.col.pass_fail': 'Pass/Fail',
      'teacher.portal.attendance.title': 'Attendance',
      'teacher.portal.attendance.summary.title': 'Class Summary',
      'teacher.portal.attendance.today.title': 'Today\'s Attendance',
      'teacher.portal.attendance.records.title': 'Attendance Records',
      'teacher.portal.attendance.col.student': 'Student',
      'teacher.portal.attendance.col.date': 'Date',
      'teacher.portal.attendance.col.course': 'Course',
      'teacher.portal.attendance.col.status': 'Status',
      'teacher.portal.hours.chart.per_day.title': 'Hours per Day',
      'teacher.portal.hours.chart.per_day.subtitle': 'Daily teaching hours this month',
      'teacher.portal.hours.chart.monthly.title': 'Monthly Overview',
      'teacher.portal.hours.chart.monthly.subtitle': 'Monthly hours compared to contract',
      'teacher.portal.hours.contracted': 'of 80 contracted hours',
      'teacher.portal.hours.overtime': '+16h overtime',
      'teacher.portal.profile.title': 'My Profile',
      'teacher.portal.profile.edit.title': 'Edit Info',
      'teacher.portal.profile.edit.fullname': 'Full Name',
      'teacher.portal.profile.edit.email': 'Email',
      'teacher.portal.profile.edit.phone': 'Phone',
      'teacher.portal.profile.edit.subjects': 'Subjects',
      'teacher.portal.profile.edit.contract': 'Contract Hours',
      'teacher.portal.profile.edit.save': 'Save',
      'teacher.portal.profile.stats.title': 'Stats',
      'teacher.portal.profile.stats.hours': 'Total Hours',
      'teacher.portal.profile.stats.students': 'Students',
      'teacher.portal.profile.stats.courses': 'Courses',
      'teacher.portal.profile.account.title': 'Account Info',
      'teacher.portal.profile.account.employee_id': 'Employee ID',
      'teacher.portal.profile.account.department': 'Department',
      'teacher.portal.profile.account.joined': 'Joined',
      'teacher.portal.profile.account.rating': 'Rating',
      'teacher.portal.modal.title': 'Modal',
    }
  };

  /* ═══════════════════════════════════════════════
     COURSE & SERVICE CONTENT — Multilingual Data
     ═══════════════════════════════════════════════ */
  window.courseContent = {
    fr: {
      /* ─── Programs Page (programs.html) ─── */
      programs: {
        '1': { badge1:'TCF Canada', badge2:'Intensif', title:'TCF Canada \u00b7 Intensif', desc:'Programme intensif d\u00e9di\u00e9 au TCF Canada avec un focus sur l\'expression \u00e9crite et orale. Simulations d\'examen hebdomadaires et corrections personnalis\u00e9es pour maximiser votre score.', duration:'\ud83d\udcc5 16 sem', frequency:'\u23f1 2h30 \u2014 3x/sem', students:'\ud83d\udc64 6 \u00e9l\u00e8ves max', priceLabel:'/ mois' },
        '2': { badge1:'TCF Canada', badge2:'R\u00e9gulier', title:'TCF Canada \u00b7 R\u00e9gulier', desc:'Pr\u00e9paration progressive au TCF Canada en petits groupes. Id\u00e9al pour les apprenants qui souhaitent concilier apprentissage et emploi du temps charg\u00e9 tout en restant encadr\u00e9s.', duration:'\ud83d\udcc5 24 sem', frequency:'\u23f1 1h30 \u2014 2x/sem', students:'\ud83d\udc64 10 \u00e9l\u00e8ves max', priceLabel:'/ mois' },
        '3': { badge1:'TCF Qu\u00e9bec', badge2:'Intensif', title:'TCF Qu\u00e9bec \u00b7 Intensif', desc:'Formation intensive ciblant toutes les \u00e9preuves du TCF Qu\u00e9bec. Accompagnement renforc\u00e9 avec coaching individuel et examens blancs r\u00e9guliers pour une pr\u00e9paration optimale.', duration:'\ud83d\udcc5 12 sem', frequency:'\u23f1 2h \u2014 3x/sem', students:'\ud83d\udc64 8 \u00e9l\u00e8ves max', priceLabel:'/ mois' },
        '4': { badge1:'TCF Qu\u00e9bec', badge2:'R\u00e9gulier', title:'TCF Qu\u00e9bec \u00b7 R\u00e9gulier', desc:'Pr\u00e9paration \u00e9quilibr\u00e9e au TCF Qu\u00e9bec avec un rythme adapt\u00e9. Parfait pour une progression durable et ma\u00eetris\u00e9e, avec un accompagnement constant tout au long du programme.', duration:'\ud83d\udcc5 16 sem', frequency:'\u23f1 1h30 \u2014 2x/sem', students:'\ud83d\udc64 10 \u00e9l\u00e8ves max', priceLabel:'/ mois' },
        '5': { badge1:'Oral B/C', badge2:'Intensif', title:'Oral B/C \u00b7 Intensif', desc:'Ateliers intensifs d\u00e9di\u00e9s \u00e0 l\'expression orale niveaux B et C. Coaching personnalis\u00e9, mises en situation r\u00e9alistes et feedback d\u00e9taill\u00e9 pour chaque apprenant.', duration:'\ud83d\udcc5 8 sem', frequency:'\u23f1 1h30 \u2014 2x/sem', students:'\ud83d\udc64 4 \u00e9l\u00e8ves max', priceLabel:'/ mois' },
        '6': { badge1:'Particuliers', badge2:'Flexible', title:'Cours Particuliers 1-to-1', desc:'Accompagnement sur-mesure avec un enseignant d\u00e9di\u00e9. Programme 100% adapt\u00e9 \u00e0 vos objectifs, votre niveau et votre rythme d\'apprentissage.', duration:'\ud83d\udcc5 Flexible', frequency:'\u23f1 1h/s\u00e9ance', students:'\ud83d\udc64 1 \u00e9l\u00e8ve', priceLabel:'/ s\u00e9ance' },
        '7': { badge1:'Groupe', badge2:'', title:'Cours en Groupe', desc:'Apprenez en groupe dans une ambiance dynamique et collaborative. Id\u00e9al pour pratiquer l\'oral et progresser gr\u00e2ce \u00e0 l\'interaction entre pairs.', duration:'\ud83d\udcc5 12 sem', frequency:'\u23f1 1h30 \u2014 1x/sem', students:'\ud83d\udc64 15 \u00e9l\u00e8ves max', priceLabel:'/ mois' },
        '8': { badge1:'Samedi', badge2:'Groupe', title:'Programme du Samedi', desc:'Cours intensifs chaque samedi pour maximiser votre progression sans empi\u00e9ter sur votre semaine. Parfait pour les professionnels et \u00e9tudiants.', duration:'\ud83d\udcc5 10 samedis', frequency:'\u23f1 3h/session', students:'\ud83d\udc64 12 \u00e9l\u00e8ves max', priceLabel:'/ mois' },
        '9': { badge1:'Intensif', badge2:'G\u00e9n\u00e9ral', title:'Programme Intensif G\u00e9n\u00e9ral', desc:'Immersion totale avec 8h de cours par semaine. Progression rapide garantie gr\u00e2ce \u00e0 une approche compl\u00e8te couvrant toutes les comp\u00e9tences linguistiques.', duration:'\ud83d\udcc5 8 sem', frequency:'\u23f1 2h \u2014 4x/sem', students:'\ud83d\udc64 10 \u00e9l\u00e8ves max', priceLabel:'/ mois' },
        '10': { badge1:'\u00c9valuation', badge2:'', title:'Test de Placement', desc:'\u00c9valuation compl\u00e8te de votre niveau en fran\u00e7ais (compr\u00e9hension et expression \u00e9crite). R\u00e9sultats d\u00e9taill\u00e9s avec recommandations personnalis\u00e9es.', duration:'\ud83d\udcc5 1 s\u00e9ance', frequency:'\u23f1 2h', students:'\ud83d\udc64 Individuel', priceLabel:'' },
        '11': { badge1:'\u00c9valuation', badge2:'', title:'\u00c9valuation Orale', desc:'Test oral individuel de 45 minutes pour \u00e9valuer votre expression et compr\u00e9hension orales. Id\u00e9al avant de choisir votre programme.', duration:'\ud83d\udcc5 1 s\u00e9ance', frequency:'\u23f1 45 min', students:'\ud83d\udc64 Individuel', priceLabel:'' }
      },
      /* ─── TCF Page (tcf-preparation.html) ─── */
      tcf: {
        '1': { badge1:'TCF Qu\u00e9bec', badge2:'', title:'TCF Qu\u00e9bec \u00b7 Intensif', desc:'Programme intensif con\u00e7u pour r\u00e9ussir le TCF Qu\u00e9bec. Cours complets, simulations d\'examen et suivi personnalis\u00e9.', duration:'\ud83d\udcc5 12 semaines', frequency:'\u23f1 2h/s\u00e9ance', students:'\ud83d\udc64 8 \u00e9l\u00e8ves max', priceLabel:'/ mois' },
        '2': { badge1:'TCF Qu\u00e9bec', badge2:'', title:'TCF Qu\u00e9bec \u00b7 R\u00e9gulier', desc:'Pr\u00e9paration \u00e9quilibr\u00e9e au TCF Qu\u00e9bec avec un rythme adapt\u00e9. Parfait pour une progression durable.', duration:'\ud83d\udcc5 16 semaines', frequency:'\u23f1 1h30/s\u00e9ance', students:'\ud83d\udc64 10 \u00e9l\u00e8ves max', priceLabel:'/ mois' },
        '3': { badge1:'TCF Canada', badge2:'', title:'TCF Canada \u00b7 Intensif', desc:'Formation intensive ax\u00e9e sur les sp\u00e9cificit\u00e9s du TCF Canada. Focus sur l\'expression \u00e9crite et orale.', duration:'\ud83d\udcc5 16 semaines', frequency:'\u23f1 2h30/s\u00e9ance', students:'\ud83d\udc64 6 \u00e9l\u00e8ves max', priceLabel:'/ mois' },
        '4': { badge1:'TCF Canada', badge2:'', title:'TCF Canada \u00b7 R\u00e9gulier', desc:'Pr\u00e9paration progressive au TCF Canada en petits groupes. Id\u00e9al pour les apprenants en activit\u00e9.', duration:'\ud83d\udcc5 24 semaines', frequency:'\u23f1 1h30/s\u00e9ance', students:'\ud83d\udc64 10 \u00e9l\u00e8ves max', priceLabel:'/ mois' },
        '5': { badge1:'Oral B/C', badge2:'', title:'Oral B/C \u00b7 Intensif', desc:'Ateliers intensifs d\u00e9di\u00e9s \u00e0 l\'expression orale niveaux B et C. Coaching personnalis\u00e9 et mises en situation.', duration:'\ud83d\udcc5 8 semaines', frequency:'\u23f1 1h30/s\u00e9ance', students:'\ud83d\udc64 4 \u00e9l\u00e8ves max', priceLabel:'/ mois' },
        '6': { badge1:'G\u00e9n\u00e9ral', badge2:'', title:'Programme Intensif G\u00e9n\u00e9ral', desc:'Immersion totale avec 8h de cours par semaine. Progression rapide garantie pour tous les niveaux.', duration:'\ud83d\udcc5 8 semaines', frequency:'\u23f1 2h/s\u00e9ance', students:'\ud83d\udc64 10 \u00e9l\u00e8ves max', priceLabel:'/ mois' }
      },
      /* ─── Private Lessons Page (private-lessons.html) ─── */
      private: {
        '1': { badge1:'Fran\u00e7ais g\u00e9n\u00e9ral', badge2:'', title:'Programme de Fran\u00e7ais Complet', desc:'Apprentissage complet du fran\u00e7ais du niveau A1 \u00e0 C2. Grammaire, vocabulaire, expression \u00e9crite et orale.', duration:'\ud83d\udcc5 Flexible', frequency:'\u23f1 1h / s\u00e9ance', students:'\ud83d\udc64 1 \u00e9l\u00e8ve', priceLabel:'/ h' },
        '2': { badge1:'Oral', badge2:'', title:'Communication Orale', desc:'Am\u00e9liorez votre aisance, votre prononciation et votre fluidit\u00e9 \u00e0 l\'oral. Coaching personnalis\u00e9.', duration:'\ud83d\udcc5 Flexible', frequency:'\u23f1 1h / s\u00e9ance', students:'\ud83d\udc64 1 \u00e9l\u00e8ve', priceLabel:'/ h' },
        '3': { badge1:'TCF', badge2:'', title:'Pr\u00e9paration TCF', desc:'Entra\u00eenement cibl\u00e9 aux \u00e9preuves du TCF Qu\u00e9bec et TCF Canada. Simulations et corrections personnalis\u00e9es.', duration:'\ud83d\udcc5 Flexible', frequency:'\u23f1 1h / s\u00e9ance', students:'\ud83d\udc64 1 \u00e9l\u00e8ve', priceLabel:'/ h' },
        '4': { badge1:'Remise \u00e0 niveau', badge2:'', title:'Fran\u00e7ais Remise \u00e0 Niveau', desc:'Consolidez les bases et rattrapez vos lacunes grammaticales. Programme adapt\u00e9 \u00e0 votre niveau actuel.', duration:'\ud83d\udcc5 Flexible', frequency:'\u23f1 1h / s\u00e9ance', students:'\ud83d\udc64 1 \u00e9l\u00e8ve', priceLabel:'/ h' },
        '5': { badge1:'Concours', badge2:'', title:'Pr\u00e9paration Concours', desc:'Pr\u00e9parez les \u00e9preuves de fran\u00e7ais des concours de la fonction publique avec un enseignant expert.', duration:'\ud83d\udcc5 Flexible', frequency:'\u23f1 1h / s\u00e9ance', students:'\ud83d\udc64 1 \u00e9l\u00e8ve', priceLabel:'/ h' },
        '6': { badge1:'Simulation', badge2:'', title:'Simulations d\'Examen', desc:'Examens blancs complets dans les conditions r\u00e9elles. Mises en situation d\'entretien et pr\u00e9sentations.', duration:'\ud83d\udcc5 Flexible', frequency:'\u23f1 1h / s\u00e9ance', students:'\ud83d\udc64 1 \u00e9l\u00e8ve', priceLabel:'/ h' },
        '7': { badge1:'Maintien', badge2:'', title:'Maintien du Fran\u00e7ais', desc:'Pratique r\u00e9guli\u00e8re pour entretenir et approfondir vos comp\u00e9tences linguistiques avec un suivi continu.', duration:'\ud83d\udcc5 Flexible', frequency:'\u23f1 1h / s\u00e9ance', students:'\ud83d\udc64 1 \u00e9l\u00e8ve', priceLabel:'/ h' }
      },
      /* ─── Workshops Page (workshops.html) ─── */
      workshops: {
        '1': { badge1:'Conversation', badge2:'', title:'Atelier de Conversation', desc:'Am\u00e9liorez votre aisance \u00e0 l\'oral dans une ambiance conviviale et bienveillante. Th\u00e8mes vari\u00e9s : actualit\u00e9, culture, soci\u00e9t\u00e9.', duration:'\ud83d\udcc5 6 s\u00e9ances', frequency:'\u23f1 1h30 / s\u00e9ance', students:'\ud83d\udc64 8 participants max', priceLabel:'' },
        '2': { badge1:'Culture', badge2:'', title:'Culture Canadienne & Qu\u00e9b\u00e9coise', desc:'Plongez dans la culture francophone nord-am\u00e9ricaine : histoire, expressions, coutumes et enjeux contemporains.', duration:'\ud83d\udcc5 4 s\u00e9ances', frequency:'\u23f1 1h30 / s\u00e9ance', students:'\ud83d\udc64 12 participants max', priceLabel:'' },
        '3': { badge1:'Maintien', badge2:'', title:'Maintien & Renforcement', desc:'Pour les apprenants de niveau avanc\u00e9 souhaitant entretenir leur niveau et approfondir leurs comp\u00e9tences.', duration:'\ud83d\udcc5 8 s\u00e9ances', frequency:'\u23f1 1h / s\u00e9ance', students:'\ud83d\udc64 10 participants max', priceLabel:'' }
      },
      /* ─── Private Packages ─── */
      packages: {
        '1': { title:'Forfait Découverte', desc:'Idéal pour découvrir la méthode ou pour un besoin ponctuel.', sessions:'⏱ 5 séances', rate:'💰 45€/h', price:'225€' },
        '2': { title:'Forfait Standard', desc:'Parfait pour un suivi régulier sur plusieurs semaines.', sessions:'⏱ 10 séances', rate:'💰 42€/h', price:'420€' },
        '3': { title:'Forfait Avancé', desc:'Le meilleur rapport qualité-prix pour une progression significative.', sessions:'⏱ 15 séances', rate:'💰 40€/h', price:'600€' },
        '4': { title:'Forfait Intensif', desc:'Pour un accompagnement complet et une immersion linguistique totale.', sessions:'⏱ 20 séances', rate:'💰 38€/h', price:'760€' }
      },
      /* ─── Program Detail Page (program-detail.html) ─── */
      'program-detail': {
        'tcf-quebec-intensif': {
          badge1:'TCF Québec', badge2:'Intensif',
          title:'Préparation Intensive TCF Québec',
          subtitle:'Maîtrisez toutes les épreuves du TCF Québec avec un programme intensif conçu par des experts FLE. Simulations hebdomadaires, suivi individualisé et progression garantie.',
          desc1:'Notre préparation intensive au TCF Québec est conçue pour vous permettre d\'atteindre le niveau requis pour vos objectifs linguistiques. Encadré par des enseignants certifiés FLE, vous bénéficierez d\'une formation complète couvrant les 4 compétences évaluées : compréhension orale, compréhension écrite, expression orale et expression écrite.',
          desc2:'Le programme alterne cours théoriques, ateliers pratiques et simulations d\'examen en conditions réelles. Chaque séance est pensée pour maximiser votre progression et vous familiariser avec les formats et les exigences du TCF Québec. Un test diagnostique est réalisé en début de parcours pour identifier vos forces et axes d\'amélioration.',
          duration:'12 semaines', rhythm:'3 séances / semaine', session:'2h / séance', students:'8 élèves max',
          price:'450€', priceTotal:'Soit 1 350€ pour l\'ensemble du programme (12 semaines)',
          durationSidebar:'12 semaines', rhythmSidebar:'3x / semaine', studentsSidebar:'8 max', nextSession:'5 Sept 2026', level:'A2 minimum'
        }
      },
      /* ─── Booking Page (booking.html) ─── */
      booking: {
        courseDB: {
          'private': { name:'Cours particuliers', desc:'Cours 1-on-1 avec un enseignant certifié. Programme personnalisé selon vos objectifs.' },
          'tcf-quebec': { name:'TCF Québec', desc:'Préparation complète au TCF Québec. Cours en groupe avec horaire fixe.' },
          'tcf-canada': { name:'TCF Canada', desc:'Préparation complète au TCF Canada. Cours en groupe avec horaire fixe.' },
          'oral-bc': { name:'Préparation orale — Colombie-Britannique', desc:'Préparation en petit groupe à l\'examen oral de la Colombie-Britannique. Maximum 4 élèves.' },
          'intensif': { name:'Programme intensif', desc:'Cours intensif en groupe. 4 séances par semaine pour des progrès rapides.' },
          'groupe': { name:'Cours en groupe', desc:'Apprenez en groupe avec d\'autres apprenants. Ambiance conviviale et motivante.' },
          'samedi': { name:'Programme du samedi', desc:'Cours en groupe chaque samedi matin. Parfait pour les professionnels occupés.' },
          'workshop-conversation': { name:'Atelier de conversation', desc:'Atelier hebdomadaire de conversation. Thèmes variés pour pratiquer l\'oral.' },
          'workshop-culture': { name:'Atelier culturel', desc:'Atelier hebdomadaire sur la culture francophone. Cinéma, littérature, actualité.' },
          'workshop-maintenance': { name:'Atelier de maintien', desc:'Atelier hebdomadaire pour maintenir et pratiquer votre français.' }
        },
        programData: {
          'complete-french': 'Français complet',
          'oral-communication': 'Communication orale',
          'tcf-preparation': 'Préparation au TCF',
          'french-refresher': 'Remise à niveau',
          'public-service': 'Fonction publique',
          'exam-simulations': 'Simulations d\'examen',
          'french-maintenance': 'Maintien du français',
          'intensif': 'Intensif',
          'regulier': 'Régulier'
        },
        descriptionOverrides: {
          'private-complete-french': 'Programme complet de français en cours particuliers. Idéal pour une immersion totale.',
          'private-oral-communication': 'Cours particuliers axés sur la communication orale. Améliorez votre expression et votre compréhension.',
          'private-tcf-preparation': 'Préparation individuelle au TCF avec un enseignant dédié.',
          'private-french-refresher': 'Remise à niveau en français. Parfait pour réactiver vos connaissances.',
          'private-public-service': 'Français pour la fonction publique. Vocabulaire et situations administratives.',
          'private-exam-simulations': 'Simulations d\'examen en conditions réelles. Préparez-vous en toute confiance.',
          'private-french-maintenance': 'Cours de maintien pour garder votre niveau de français.'
        }
      }
    },
    en: {
      /* ─── Programs Page ─── */
      programs: {
        '1': { badge1:'TCF Canada', badge2:'Intensive', title:'TCF Canada \u00b7 Intensive', desc:'Intensive program dedicated to the TCF Canada with a focus on writing and speaking. Weekly exam simulations and personalized corrections to maximize your score.', duration:'\ud83d\udcc5 16 weeks', frequency:'\u23f1 2h30 \u2014 3x/week', students:'\ud83d\udc64 6 students max', priceLabel:'/ month' },
        '2': { badge1:'TCF Canada', badge2:'Regular', title:'TCF Canada \u00b7 Regular', desc:'Progressive TCF Canada preparation in small groups. Perfect for learners who need to balance studies with a busy schedule while staying guided.', duration:'\ud83d\udcc5 24 weeks', frequency:'\u23f1 1h30 \u2014 2x/week', students:'\ud83d\udc64 10 students max', priceLabel:'/ month' },
        '3': { badge1:'TCF Qu\u00e9bec', badge2:'Intensive', title:'TCF Qu\u00e9bec \u00b7 Intensive', desc:'Intensive training targeting all TCF Qu\u00e9bec exams. Reinforced support with individual coaching and regular mock exams for optimal preparation.', duration:'\ud83d\udcc5 12 weeks', frequency:'\u23f1 2h \u2014 3x/week', students:'\ud83d\udc64 8 students max', priceLabel:'/ month' },
        '4': { badge1:'TCF Qu\u00e9bec', badge2:'Regular', title:'TCF Qu\u00e9bec \u00b7 Regular', desc:'Balanced TCF Qu\u00e9bec preparation at an adapted pace. Perfect for steady, sustained progress with constant support throughout the program.', duration:'\ud83d\udcc5 16 weeks', frequency:'\u23f1 1h30 \u2014 2x/week', students:'\ud83d\udc64 10 students max', priceLabel:'/ month' },
        '5': { badge1:'Oral B/C', badge2:'Intensive', title:'Oral B/C \u00b7 Intensive', desc:'Intensive workshops dedicated to oral expression at B and C levels. Personalized coaching, realistic role-plays, and detailed feedback for each learner.', duration:'\ud83d\udcc5 8 weeks', frequency:'\u23f1 1h30 \u2014 2x/week', students:'\ud83d\udc64 4 students max', priceLabel:'/ month' },
        '6': { badge1:'Private', badge2:'Flexible', title:'Private Lessons 1-to-1', desc:'Tailored support with a dedicated teacher. 100% customized program based on your goals, level, and learning pace.', duration:'\ud83d\udcc5 Flexible', frequency:'\u23f1 1h/session', students:'\ud83d\udc64 1 student', priceLabel:'/ session' },
        '7': { badge1:'Group', badge2:'', title:'Group Classes', desc:'Learn in a group in a dynamic and collaborative environment. Great for practicing speaking and improving through peer interaction.', duration:'\ud83d\udcc5 12 weeks', frequency:'\u23f1 1h30 \u2014 1x/week', students:'\ud83d\udc64 15 students max', priceLabel:'/ month' },
        '8': { badge1:'Saturday', badge2:'Group', title:'Saturday Program', desc:'Intensive classes every Saturday to maximize your progress without interfering with your work week. Perfect for professionals and students.', duration:'\ud83d\udcc5 10 Saturdays', frequency:'\u23f1 3h/session', students:'\ud83d\udc64 12 students max', priceLabel:'/ month' },
        '9': { badge1:'Intensive', badge2:'General', title:'General Intensive Program', desc:'Total immersion with 8 hours of class per week. Fast progress guaranteed through a comprehensive approach covering all language skills.', duration:'\ud83d\udcc5 8 weeks', frequency:'\u23f1 2h \u2014 4x/week', students:'\ud83d\udc64 10 students max', priceLabel:'/ month' },
        '10': { badge1:'Assessment', badge2:'', title:'Placement Test', desc:'Complete evaluation of your French level (reading comprehension and writing). Detailed results with personalized recommendations.', duration:'\ud83d\udcc5 1 session', frequency:'\u23f1 2h', students:'\ud83d\udc64 Individual', priceLabel:'' },
        '11': { badge1:'Assessment', badge2:'', title:'Oral Assessment', desc:'45-minute individual oral test to evaluate your speaking and listening skills. Ideal before choosing your program.', duration:'\ud83d\udcc5 1 session', frequency:'\u23f1 45 min', students:'\ud83d\udc64 Individual', priceLabel:'' }
      },
      /* ─── TCF Page ─── */
      tcf: {
        '1': { badge1:'TCF Qu\u00e9bec', badge2:'', title:'TCF Qu\u00e9bec \u00b7 Intensive', desc:'Intensive program designed to pass the TCF Qu\u00e9bec. Comprehensive classes, exam simulations, and personalized support.', duration:'\ud83d\udcc5 12 weeks', frequency:'\u23f1 2h/session', students:'\ud83d\udc64 8 students max', priceLabel:'/ month' },
        '2': { badge1:'TCF Qu\u00e9bec', badge2:'', title:'TCF Qu\u00e9bec \u00b7 Regular', desc:'Balanced TCF Qu\u00e9bec preparation at an adapted pace. Perfect for steady progress.', duration:'\ud83d\udcc5 16 weeks', frequency:'\u23f1 1h30/session', students:'\ud83d\udc64 10 students max', priceLabel:'/ month' },
        '3': { badge1:'TCF Canada', badge2:'', title:'TCF Canada \u00b7 Intensive', desc:'Intensive training focused on TCF Canada specifics. Emphasis on writing and speaking skills.', duration:'\ud83d\udcc5 16 weeks', frequency:'\u23f1 2h30/session', students:'\ud83d\udc64 6 students max', priceLabel:'/ month' },
        '4': { badge1:'TCF Canada', badge2:'', title:'TCF Canada \u00b7 Regular', desc:'Progressive TCF Canada preparation in small groups. Ideal for busy learners.', duration:'\ud83d\udcc5 24 weeks', frequency:'\u23f1 1h30/session', students:'\ud83d\udc64 10 students max', priceLabel:'/ month' },
        '5': { badge1:'Oral B/C', badge2:'', title:'Oral B/C \u00b7 Intensive', desc:'Intensive workshops for B and C level oral expression. Personalized coaching and real-life scenarios.', duration:'\ud83d\udcc5 8 weeks', frequency:'\u23f1 1h30/session', students:'\ud83d\udc64 4 students max', priceLabel:'/ month' },
        '6': { badge1:'General', badge2:'', title:'General Intensive Program', desc:'Total immersion with 8 hours of class per week. Fast progress guaranteed for all levels.', duration:'\ud83d\udcc5 8 weeks', frequency:'\u23f1 2h/session', students:'\ud83d\udc64 10 students max', priceLabel:'/ month' }
      },
      /* ─── Private Lessons Page ─── */
      private: {
        '1': { badge1:'General French', badge2:'', title:'Complete French Program', desc:'Complete French learning from A1 to C2 levels. Grammar, vocabulary, writing and speaking skills.', duration:'\ud83d\udcc5 Flexible', frequency:'\u23f1 1h / session', students:'\ud83d\udc64 1 student', priceLabel:'/ h' },
        '2': { badge1:'Oral', badge2:'', title:'Oral Communication', desc:'Improve your fluency, pronunciation, and speaking confidence. Personalized coaching.', duration:'\ud83d\udcc5 Flexible', frequency:'\u23f1 1h / session', students:'\ud83d\udc64 1 student', priceLabel:'/ h' },
        '3': { badge1:'TCF', badge2:'', title:'TCF Preparation', desc:'Targeted training for TCF Qu\u00e9bec and TCF Canada exams. Simulations and personalized corrections.', duration:'\ud83d\udcc5 Flexible', frequency:'\u23f1 1h / session', students:'\ud83d\udc64 1 student', priceLabel:'/ h' },
        '4': { badge1:'Refresher', badge2:'', title:'French Refresher', desc:'Strengthen your foundations and fill grammar gaps. Program adapted to your current level.', duration:'\ud83d\udcc5 Flexible', frequency:'\u23f1 1h / session', students:'\ud83d\udc64 1 student', priceLabel:'/ h' },
        '5': { badge1:'Exam Prep', badge2:'', title:'Exam Preparation', desc:'Prepare for French civil service exam questions with an expert teacher.', duration:'\ud83d\udcc5 Flexible', frequency:'\u23f1 1h / session', students:'\ud83d\udc64 1 student', priceLabel:'/ h' },
        '6': { badge1:'Simulation', badge2:'', title:'Exam Simulations', desc:'Full mock exams under real conditions. Interview role-plays and presentations.', duration:'\ud83d\udcc5 Flexible', frequency:'\u23f1 1h / session', students:'\ud83d\udc64 1 student', priceLabel:'/ h' },
        '7': { badge1:'Maintenance', badge2:'', title:'French Maintenance', desc:'Regular practice to maintain and deepen your language skills with ongoing support.', duration:'\ud83d\udcc5 Flexible', frequency:'\u23f1 1h / session', students:'\ud83d\udc64 1 student', priceLabel:'/ h' }
      },
      /* ─── Workshops Page ─── */
      workshops: {
        '1': { badge1:'Conversation', badge2:'', title:'Conversation Workshop', desc:'Improve your speaking fluency in a warm and supportive environment. Varied topics: news, culture, society.', duration:'\ud83d\udcc5 6 sessions', frequency:'\u23f1 1h30 / session', students:'\ud83d\udc64 8 participants max', priceLabel:'' },
        '2': { badge1:'Culture', badge2:'', title:'Canadian & Qu\u00e9b\u00e9cois Culture', desc:'Explore North American Francophone culture: history, expressions, customs, and contemporary issues.', duration:'\ud83d\udcc5 4 sessions', frequency:'\u23f1 1h30 / session', students:'\ud83d\udc64 12 participants max', priceLabel:'' },
        '3': { badge1:'Maintenance', badge2:'', title:'Maintenance & Reinforcement', desc:'For advanced learners who want to maintain their level and deepen their skills.', duration:'\ud83d\udcc5 8 sessions', frequency:'\u23f1 1h / session', students:'\ud83d\udc64 10 participants max', priceLabel:'' }
      },
      /* ─── Private Packages ─── */
      packages: {
        '1': { title:'Discovery Package', desc:'Ideal for trying the method or for one-off needs.', sessions:'\u23f1 5 sessions', rate:'\ud83d\udcb0 45\u20ac/h', price:'225\u20ac' },
        '2': { title:'Standard Package', desc:'Perfect for regular support over several weeks.', sessions:'\u23f1 10 sessions', rate:'\ud83d\udcb0 42\u20ac/h', price:'420\u20ac' },
        '3': { title:'Advanced Package', desc:'Best value for meaningful progress.', sessions:'\u23f1 15 sessions', rate:'\ud83d\udcb0 40\u20ac/h', price:'600\u20ac' },
        '4': { title:'Intensive Package', desc:'For complete support and total language immersion.', sessions:'\u23f1 20 sessions', rate:'\ud83d\udcb0 38\u20ac/h', price:'760\u20ac' }
      },
      /* ─── Program Detail Page (program-detail.html) ─── */
      'program-detail': {
        'tcf-quebec-intensif': {
          badge1:'TCF Qu\u00e9bec', badge2:'Intensive',
          title:'Intensive TCF Qu\u00e9bec Preparation',
          subtitle:'Master all TCF Qu\u00e9bec exam sections with an intensive program designed by FLE experts. Weekly simulations, personalized feedback, and guaranteed progress.',
          desc1:'Our intensive TCF Qu\u00e9bec preparation helps you reach the level required for your language goals. Guided by certified FLE teachers, you will benefit from comprehensive training covering all 4 tested skills: listening comprehension, reading comprehension, speaking, and writing.',
          desc2:'The program alternates between theory classes, hands-on workshops, and full mock exams under real conditions. Each session is designed to maximize your progress and familiarize you with the formats and requirements of the TCF Qu\u00e9bec. A diagnostic test is given at the start to identify your strengths and areas for improvement.',
          duration:'12 weeks', rhythm:'3 sessions / week', session:'2h / session', students:'8 students max',
          price:'450\u20ac', priceTotal:'Total 1,350\u20ac for the full program (12 weeks)',
          durationSidebar:'12 weeks', rhythmSidebar:'3x / week', studentsSidebar:'8 max', nextSession:'Sept 5, 2026', level:'A2 minimum'
        }
      },
      /* ─── Booking Page (booking.html) ─── */
      booking: {
        courseDB: {
          'private': { name:'Private Lessons', desc:'1-on-1 classes with a certified teacher. Personalized program based on your goals.' },
          'tcf-quebec': { name:'TCF Qu\u00e9bec', desc:'Complete TCF Qu\u00e9bec preparation. Group classes with a fixed schedule.' },
          'tcf-canada': { name:'TCF Canada', desc:'Complete TCF Canada preparation. Group classes with a fixed schedule.' },
          'oral-bc': { name:'Oral Preparation — British Columbia', desc:'Small-group preparation for the British Columbia oral exam. Maximum 4 students.' },
          'intensif': { name:'Intensive Program', desc:'Intensive group classes. 4 sessions per week for rapid progress.' },
          'groupe': { name:'Group Classes', desc:'Learn in a group with other learners. Friendly and motivating environment.' },
          'samedi': { name:'Saturday Program', desc:'Group classes every Saturday morning. Perfect for busy professionals.' },
          'workshop-conversation': { name:'Conversation Workshop', desc:'Weekly conversation workshop. Varied topics to practice speaking.' },
          'workshop-culture': { name:'Cultural Workshop', desc:'Weekly workshop on Francophone culture. Cinema, literature, current events.' },
          'workshop-maintenance': { name:'Maintenance Workshop', desc:'Weekly workshop to maintain and practice your French.' }
        },
        programData: {
          'complete-french': 'Complete French',
          'oral-communication': 'Oral Communication',
          'tcf-preparation': 'TCF Preparation',
          'french-refresher': 'French Refresher',
          'public-service': 'Public Service',
          'exam-simulations': 'Exam Simulations',
          'french-maintenance': 'French Maintenance',
          'intensif': 'Intensive',
          'regulier': 'Regular'
        },
        descriptionOverrides: {
          'private-complete-french': 'Complete French program in private lessons. Ideal for total immersion.',
          'private-oral-communication': 'Private lessons focused on oral communication. Improve your expression and comprehension.',
          'private-tcf-preparation': 'Individual TCF preparation with a dedicated teacher.',
          'private-french-refresher': 'French refresher course. Perfect for reactivating your knowledge.',
          'private-public-service': 'French for the public service. Vocabulary and administrative situations.',
          'private-exam-simulations': 'Exam simulations under real conditions. Prepare with confidence.',
          'private-french-maintenance': 'Maintenance classes to keep your French level.'
        }
      }
    }
  };

  /* ─── Render course content on language switch ─── */
  function renderCourseCards() {
    var lang = window.currentLang;
    var data = window.courseContent[lang];
    if (!data) return;
    document.querySelectorAll('[data-course-card]').forEach(function (card) {
      var page = card.getAttribute('data-course-page');
      var id = card.getAttribute('data-course-id');
      var c = data[page] && data[page][id];
      if (!c) return;
      card.querySelectorAll('[data-course-field]').forEach(function (el) {
        var field = el.getAttribute('data-course-field');
        if (c[field] && c[field] !== '') {
          el.innerHTML = c[field];
        }
      });
    });
  }

  window.currentLang = localStorage.getItem('cultulangues_lang') || 'fr';

  function t(key) {
    var lang = window.currentLang;
    var dict = window.translations[lang];
    return dict && dict[key] ? dict[key] : key;
  }

  window.switchLanguage = function (lang) {
    if (!window.translations[lang]) return;
    window.currentLang = lang;
    localStorage.setItem('cultulangues_lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = t(key);
      if (text && text !== key) {
        el.innerHTML = text;
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var text = t(key);
      if (text && text !== key) el.placeholder = text;
    });
    document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-value');
      var text = t(key);
      if (text && text !== key) el.value = text;
    });
    document.querySelectorAll('.lang-opt').forEach(function (opt) {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });
    renderCourseCards();
  };

  document.addEventListener('DOMContentLoaded', function () {
    var lang = localStorage.getItem('cultulangues_lang');
    if (!lang || !window.translations[lang]) lang = 'fr';
    window.switchLanguage(lang);
  });
  if (document.readyState !== 'loading') {
    var lang = localStorage.getItem('cultulangues_lang');
    if (!lang || !window.translations[lang]) lang = 'fr';
    window.switchLanguage(lang);
  }

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
       STAGGERED CARD REVEAL — Premium
       ─────────────────────────────────────────────── */
    function initStaggeredCards() {
      var grids = document.querySelectorAll('.flagship-grid, .why-grid, .testimonials-grid, .stats-row');
      grids.forEach(function (grid) {
        var children = grid.children;
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              Array.from(children).forEach(function (child, i) {
                child.style.opacity = '0';
                child.style.transform = 'translateY(40px)';
                child.style.transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) ' + (i * 0.12) + 's, transform 0.7s cubic-bezier(0.16,1,0.3,1) ' + (i * 0.12) + 's';
                requestAnimationFrame(function () {
                  child.style.opacity = '1';
                  child.style.transform = 'translateY(0)';
                });
              });
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        observer.observe(grid);
      });
    }
    initStaggeredCards();

    /* ───────────────────────────────────────────────
       PARALLAX DECORATIVE ELEMENTS
       ─────────────────────────────────────────────── */
    function initParallaxDecos() {
      var decos = document.querySelectorAll('.hero-deco, .page-deco');
      if (!decos.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      var ticking = false;
      window.addEventListener('scroll', function () {
        if (!ticking) {
          requestAnimationFrame(function () {
            var scrollY = window.scrollY;
            decos.forEach(function (deco) {
              var speed = 0.03;
              deco.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
            });
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    }
    initParallaxDecos();

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
