const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
const languageButtons = [...document.querySelectorAll("[data-language]")];
const languageGroup = document.querySelector(".language-switch");
const pageDescription = document.querySelector('meta[name="description"]');
const contactForm = document.querySelector("#contact-form");
const contactEmailInput = document.querySelector("#contact-email");
const contactPhoneInput = document.querySelector("#contact-phone");

const translations = {
    fr: {

        title: "Zakaria El Farouki — Développeur Web Full-Stack",
        description: "Développeur Web Full Stack formé en Développement Digital, spécialisé en applications web modernes, Front-End, Back-End, API REST et microservices.",
        languageLabel: "Choisir la langue",
        menuOpen: "Ouvrir la navigation",
        menuClose: "Fermer la navigation",
        themeLight: "Activer le mode clair",
        themeDark: "Activer le mode sombre",
        "name.first": "Zakaria",
        "name.last": "El Farouki",
        "name.full": "Zakaria El Farouki",
        "nav.home": "Accueil",
        "nav.profile": "Profil",
        "nav.skills": "Compétences",
        "nav.projects": "Projets",
        "nav.journey": "Parcours",
        "nav.contact": "Contact",
        "header.navigation": "Navigation principale",
        "header.homeLabel": "Accueil — Zakaria El Farouki",
        "header.download": "Télécharger le CV",
        "header.downloadLabel": "Télécharger mon CV",
        "hero.greeting": "Bonjour, je suis",
        "hero.role": "Développeur Web Full-Stack",
        "hero.intro": "Je suis un développeur Web Full Stack passionné par la création d'applications web modernes, performantes et intuitives. Formé en Développement Digital, spécialité Web Full Stack, je maîtrise plusieurs technologies telles que HTML, CSS, JavaScript, React.js, PHP, Laravel, Node.js et MongoDB.\n\nJ'aime concevoir des solutions digitales complètes, du développement Front-End à la gestion Back-End, en passant par la conception et l'intégration des bases de données et des API REST.\n\nÀ travers mes différents projets, j'ai développé des compétences en architecture MVC, développement d'applications RESTful, authentification sécurisée et architecture microservices.\n\nCurieux, autonome et motivé, je cherche constamment à apprendre de nouvelles technologies et à relever de nouveaux défis pour transformer des idées en applications concrètes.",
        "hero.contact": "Me contacter",
        "hero.projects": "Voir mes projets",
        "hero.location": "Safi, Maroc",
        "contact.emailLabel": "Envoyer un e-mail",
        "contact.formTitle": "Laissez vos coordonnées",
        "contact.formNote": "Indiquez votre nom et prénom, puis au moins un moyen de vous joindre. Votre application e-mail s’ouvrira pour préparer le message.",
        "contact.firstName": "Prénom",
        "contact.lastName": "Nom",
        "contact.formEmail": "E-mail",
        "contact.formPhone": "Téléphone",
        "contact.submit": "Préparer l’e-mail",
        "contact.contactRequired": "Veuillez renseigner une adresse e-mail ou un numéro de téléphone.",
        "contact.subject": "Nouveau contact depuis le portfolio",
        "stats.label": "Repères de mon parcours",
        "stats.diploma": "spécialisé en développement web",
        "stats.internship": "Stage en entreprise",
        "stats.projects": "Projets réalisés",
        "stats.technologies": "Technologies",
        "profile.kicker": "Mon parcours",
        "profile.title": "Profil professionnel",
        "profile.summary": "Développeur Web Full-Stack diplômé en Développement Digital, spécialisé en React.js, Laravel, Node.js et API REST.",
        "profile.detail": "Lors de mon stage, j’ai contribué à une plateforme de gestion de matériel industriel avec authentification sécurisée. Je souhaite aujourd’hui rejoindre une équipe pour participer à des projets web concrets et renforcer mes compétences.",
        "profile.more": "Découvrir mon parcours",
        "skills.kicker": "Technologies et outils",
        "skills.title": "Compétences techniques",
        "skills.languages": "Langages",
        "skills.frontend": "Frontend",
        "skills.backend": "Backend",
        "skills.architecture": "API & architecture",
        "skills.tools": "Données, DevOps & outils",
        "projects.kicker": "Réalisations académiques",
        "projects.title": "Projets réalisés",
        "projects.mockReservations": "Réservations",
        "projects.medicalTitle": "Réservation médicale",
        "projects.medicalDescription": "Application de réservation organisée en microservices, conteneurisée avec Docker Compose.",
        "projects.medicalTech": "JWT · Rôles Patient, Médecin, Administrateur",
        "projects.maintenance": "Maintenance",
        "projects.equipment": "Matériel industriel",
        "projects.industryTitle": "Gestion de matériel industriel",
        "projects.industryDescription": "Suivi des équipements, des pannes, des statuts et des opérations de maintenance.",
        "projects.catalogue": "Catalogue",
        "projects.home": "Accueil",
        "projects.products": "Produits",
        "projects.cart": "Panier",
        "projects.shopMock": "CATALOGUE<br>DE<br><b>PRODUITS.</b>",
        "projects.ecommerceTitle": "Plateforme e-commerce",
        "projects.ecommerceStack": "PHP natif, MySQL, architecture MVC",
        "projects.ecommerceDescription": "Site marchand avec catalogue, panier et commandes, organisé selon le modèle MVC.",
        "experience.kicker": "Expérience professionnelle",
        "experience.title": "Mon expérience",
        "experience.date": "Avril – Mai 2026",
        "experience.internship": "Stage pratique en entreprise",
        "experience.role": "Développeur Web Full-Stack",
        "experience.task1": "Développement d’une plateforme de gestion de matériel industriel, de pannes et de maintenance.",
        "experience.task2": "Création de l’interface avec React.js et Framer Motion, et d’API REST avec Laravel.",
        "experience.task3": "Mise en place de l’authentification avec Laravel Sanctum et JWT.",
        "experience.task4": "Travail en équipe selon une organisation Agile / Kanban.",
        "education.kicker": "Études et savoir-être",
        "education.title": "Formation & qualités",
        "education.degree": "Technicien spécialisé en Développement Digital",
        "education.specialty": "Option Web Full-Stack · ISTA NTIC Safi",
        "education.bac": "Baccalauréat",
        "education.bacSpecialty": "Sciences et technologie mécanique",
        "education.languages": "Langues :",
        "education.languageLevels": "Français courant · Anglais intermédiaire · Arabe",
        "qualities.analysis": "Esprit d’analyse",
        "qualities.solving": "Résolution de problèmes",
        "qualities.team": "Travail en équipe",
        "qualities.autonomy": "Autonomie",
        "qualities.adaptability": "Adaptabilité",
        "qualities.initiative": "Initiative",
        "qualities.learning": "Apprentissage continu",
        "qualities.organization": "Organisation",
        "contact.title": "Échangeons sur votre projet",
        "contact.availability": "À la recherche d’un premier emploi en développement web.<br>Disponible pour rejoindre votre équipe.",
        "contact.email": "Email",
        "contact.phone": "Téléphone",
        "contact.cta": "Me contacter",
        "footer.rights": "Tous droits réservés.",
        "footer.navigation": "Navigation de pied de page",
        "footer.top": "Retour en haut"
    },
    en: {
        title: "Zakaria El Farouki — Full-Stack Web Developer",
        description: "Full-Stack Web Developer trained in Digital Development, specializing in modern web applications, Front-End, Back-End, REST APIs, and microservices.",
        languageLabel: "Choose language",
        menuOpen: "Open navigation",
        menuClose: "Close navigation",
        themeLight: "Switch to light mode",
        themeDark: "Switch to dark mode",
        "name.first": "Zakaria",
        "name.last": "El Farouki",
        "name.full": "Zakaria El Farouki",
        "nav.home": "Home",
        "nav.profile": "Profile",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.journey": "Experience",
        "nav.contact": "Contact",
        "header.navigation": "Main navigation",
        "header.homeLabel": "Home — Zakaria El Farouki",
        "header.download": "Download CV",
        "header.downloadLabel": "Download my CV",
        "hero.greeting": "Hello, I'm",
        "hero.role": "Full-Stack Web Developer",
        "hero.intro": "I am a Full-Stack Web Developer passionate about creating modern, high-performing, and intuitive web applications. Trained in Digital Development with a Full-Stack Web specialization, I work with technologies such as HTML, CSS, JavaScript, React.js, PHP, Laravel, Node.js, and MongoDB.\n\nI enjoy designing complete digital solutions, from Front-End development to Back-End management, including database and REST API design and integration.\n\nThrough my projects, I have developed skills in MVC architecture, RESTful application development, secure authentication, and microservices architecture.\n\nCurious, independent, and motivated, I am always looking to learn new technologies and take on challenges that turn ideas into real applications.",
        "hero.contact": "Get in touch",
        "hero.projects": "View my projects",
        "hero.location": "Safi, Morocco",
        "contact.emailLabel": "Send an email",
        "contact.formTitle": "Leave your contact details",
        "contact.formNote": "Enter your first and last name, then at least one way to reach you. Your email app will open to prepare the message.",
        "contact.firstName": "First name",
        "contact.lastName": "Last name",
        "contact.formEmail": "Email",
        "contact.formPhone": "Phone",
        "contact.submit": "Prepare email",
        "contact.contactRequired": "Please provide an email address or phone number.",
        "contact.subject": "New contact from portfolio",
        "stats.label": "Career highlights",
        "stats.diploma": "Specialized in web development",
        "stats.internship": "Industry internship",
        "stats.projects": "Completed projects",
        "stats.technologies": "Technologies",
        "profile.kicker": "My background",
        "profile.title": "Professional profile",
        "profile.summary": "Full-Stack Web Developer with a Digital Development degree, specializing in React.js, Laravel, Node.js, and REST APIs.",
        "profile.detail": "During my internship, I contributed to an industrial equipment management platform with secure authentication. I’m now looking to join a team, contribute to practical web projects, and continue developing my skills.",
        "profile.more": "Explore my background",
        "skills.kicker": "Technologies and tools",
        "skills.title": "Technical skills",
        "skills.languages": "Programming languages",
        "skills.frontend": "Frontend",
        "skills.backend": "Backend",
        "skills.architecture": "APIs & architecture",
        "skills.tools": "Data, DevOps & tools",
        "projects.kicker": "Academic work",
        "projects.title": "Selected projects",
        "projects.mockReservations": "Appointments",
        "projects.medicalTitle": "Medical appointment booking",
        "projects.medicalDescription": "Microservices-based appointment booking application containerized with Docker Compose.",
        "projects.medicalTech": "JWT · Patient, Doctor, and Administrator roles",
        "projects.maintenance": "Maintenance",
        "projects.equipment": "Industrial equipment",
        "projects.industryTitle": "Industrial equipment management",
        "projects.industryDescription": "Track equipment, breakdowns, statuses, and maintenance operations.",
        "projects.catalogue": "Catalog",
        "projects.home": "Home",
        "projects.products": "Products",
        "projects.cart": "Cart",
        "projects.shopMock": "PRODUCT<br><br><b>CATALOG.</b>",
        "projects.ecommerceTitle": "E-commerce platform",
        "projects.ecommerceStack": "Native PHP, MySQL, MVC architecture",
        "projects.ecommerceDescription": "Online shop with a product catalog, shopping cart, and orders, structured using the MVC pattern.",
        "experience.kicker": "Professional experience",
        "experience.title": "My experience",
        "experience.date": "April – May 2026",
        "experience.internship": "Industry internship",
        "experience.role": "Full-Stack Web Developer",
        "experience.task1": "Developed a platform for managing industrial equipment, breakdowns, and maintenance.",
        "experience.task2": "Built the interface with React.js and Framer Motion, and created REST APIs with Laravel.",
        "experience.task3": "Implemented authentication with Laravel Sanctum and JWT.",
        "experience.task4": "Collaborated with a team using Agile / Kanban practices.",
        "education.kicker": "Education & strengths",
        "education.title": "Education & strengths",
        "education.degree": "Specialized Technician in Digital Development",
        "education.specialty": "Full-Stack Web specialization · ISTA NTIC Safi",
        "education.bac": "High school diploma",
        "education.bacSpecialty": "Mechanical Science and Technology",
        "education.languages": "Languages:",
        "education.languageLevels": "Fluent French · Intermediate English · Arabic",
        "qualities.analysis": "Analytical thinking",
        "qualities.solving": "Problem-solving",
        "qualities.team": "Teamwork",
        "qualities.autonomy": "Autonomy",
        "qualities.adaptability": "Adaptability",
        "qualities.initiative": "Initiative",
        "qualities.learning": "Continuous learning",
        "qualities.organization": "Organization",
        "contact.title": "Let's talk about your project",
        "contact.availability": "Looking for my first role in web development.<br>Ready to join your team.",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.cta": "Get in touch",
        "footer.rights": "All rights reserved.",
        "footer.navigation": "Footer navigation",
        "footer.top": "Back to top"
    },
    ar: {
        title: "زكريا الفاروقي  مطور ويب متكامل",
        description: "مطور ويب متكامل متخصص في تطوير التطبيقات الحديثة والواجهات الأمامية والخلفية وواجهات REST والخدمات المصغرة.",
        languageLabel: "اختر اللغة",
        menuOpen: "افتح قائمة التنقل",
        menuClose: "أغلق قائمة التنقل",
        themeLight: "تفعيل الوضع الفاتح",
        themeDark: "تفعيل الوضع الداكن",
        "name.first": "زكرياء",
        "name.last": "الفاروقي",
        "name.full": "زكرياء الفاروقي",
        "nav.home": "الرئيسية",
        "nav.profile": "نبذة عني",
        "nav.skills": "المهارات",
        "nav.projects": "المشاريع",
        "nav.journey": "المسار المهني",
        "nav.contact": "اتصل بي",
        "header.navigation": "قائمة التنقل الرئيسية",
        "header.homeLabel": "الرئيسية — زكريا الفاروقي",
        "header.download": "تحميل السيرة الذاتية",
        "header.downloadLabel": "تحميل سيرتي الذاتية",
        "hero.greeting": "مرحباً، أنا",
        "hero.role": "مطور ويب متكامل",
        "hero.intro": "أنا مطور ويب متكامل شغوف بإنشاء تطبيقات ويب حديثة وعالية الأداء وسهلة الاستخدام. تلقيت تكويناً في التطوير الرقمي، تخصص ويب متكامل، وأتقن تقنيات متعددة مثل HTML وCSS وJavaScript وReact.js وPHP وLaravel وNode.js وMongoDB.\n\nأحب تصميم حلول رقمية متكاملة، من تطوير الواجهات الأمامية إلى إدارة الواجهات الخلفية، بما في ذلك تصميم قواعد البيانات وواجهات REST ودمجها.\n\nمن خلال مشاريعي، طورت مهارات في بنية MVC وتطوير تطبيقات RESTful والمصادقة الآمنة وبنية الخدمات المصغرة.\n\nأنا فضولي ومستقل ومتحمس، وأسعى باستمرار إلى تعلم تقنيات جديدة ومواجهة تحديات لتحويل الأفكار إلى تطبيقات ملموسة.",
        "hero.contact": "تواصل معي",
        "hero.projects": "اكتشف مشاريعي",
        "hero.location": "آسفي، المغرب",
        "contact.emailLabel": "إرسال بريد إلكتروني",
        "contact.formTitle": "اترك بيانات الاتصال الخاصة بك",
        "contact.formNote": "أدخل اسمك ولقبك، ثم وسيلة واحدة على الأقل للتواصل معك. سيفتح تطبيق البريد الإلكتروني لإعداد الرسالة.",
        "contact.firstName": "الاسم الشخصي",
        "contact.lastName": "اسم العائلة",
        "contact.formEmail": "البريد الإلكتروني",
        "contact.formPhone": "الهاتف",
        "contact.submit": "إعداد البريد الإلكتروني",
        "contact.contactRequired": "يرجى إدخال عنوان بريد إلكتروني أو رقم هاتف.",
        "contact.subject": "جهة اتصال جديدة من الموقع",
        "stats.label": "محطات من مساري",
        "stats.diploma": "متخصص في تطوير الويب",
        "stats.internship": "تدريب مهني",
        "stats.projects": "مشاريع منجزة",
        "stats.technologies": "التقنيات",
        "profile.kicker": "مساري",
        "profile.title": "نبذة مهنية",
        "profile.summary": "مطور ويب متكامل حاصل على دبلوم في التطوير الرقمي، متخصص في React.js وLaravel وNode.js وواجهات REST API.",
        "profile.detail": "ساهمت خلال تدريبي في تطوير منصة لإدارة المعدات الصناعية مع نظام مصادقة آمن. أطمح الآن إلى الانضمام لفريق والمشاركة في مشاريع ويب عملية ومواصلة تطوير مهاراتي.",
        "profile.more": "اكتشف مساري",
        "skills.kicker": "التقنيات والأدوات",
        "skills.title": "المهارات التقنية",
        "skills.languages": "لغات البرمجة",
        "skills.frontend": "تطوير الواجهات الأمامية",
        "skills.backend": "تطوير الواجهات الخلفية",
        "skills.architecture": "واجهات API والهندسة",
        "skills.tools": "البيانات وDevOps والأدوات",
        "projects.kicker": "مشاريع أكاديمية",
        "projects.title": "أبرز المشاريع",
        "projects.mockReservations": "المواعيد",
        "projects.medicalTitle": "منصة حجز المواعيد الطبية",
        "projects.medicalDescription": "تطبيق لحجز المواعيد مبني على الخدمات المصغرة ويعمل ضمن حاويات Docker Compose.",
        "projects.medicalTech": "JWT · أدوار المريض والطبيب والمسؤول",
        "projects.maintenance": "الصيانة",
        "projects.equipment": "المعدات الصناعية",
        "projects.industryTitle": "إدارة المعدات الصناعية",
        "projects.industryDescription": "متابعة المعدات والأعطال والحالات وعمليات الصيانة.",
        "projects.catalogue": "الكتالوج",
        "projects.home": "الرئيسية",
        "projects.products": "المنتجات",
        "projects.cart": "السلة",
        "projects.shopMock": "كتالوج<br>الـ<br><b>منتجات</b>",
        "projects.ecommerceTitle": "منصة تجارة إلكترونية",
        "projects.ecommerceStack": "PHP وMySQL وبنية MVC",
        "projects.ecommerceDescription": "متجر إلكتروني يضم كتالوجاً وسلة تسوق وطلبات، وفق بنية MVC.",
        "experience.kicker": "الخبرة المهنية",
        "experience.title": "خبرتي",
        "experience.date": "أبريل – مايو 2026",
        "experience.internship": "تدريب عملي في شركة",
        "experience.role": "مطور ويب متكامل",
        "experience.task1": "تطوير منصة لإدارة المعدات الصناعية والأعطال وعمليات الصيانة.",
        "experience.task2": "إنشاء الواجهة باستخدام React.js وFramer Motion وتطوير REST API باستخدام Laravel.",
        "experience.task3": "إعداد المصادقة باستخدام Laravel Sanctum وJWT.",
        "experience.task4": "العمل ضمن فريق وفق منهجية Agile / Kanban.",
        "education.kicker": "الدراسة والمهارات الشخصية",
        "education.title": "التعليم والمهارات الشخصية",
        "education.degree": "تقني متخصص في التطوير الرقمي",
        "education.specialty": "تخصص تطوير الويب المتكامل · ISTA NTIC آسفي",
        "education.bac": "شهادة البكالوريا",
        "education.bacSpecialty": "العلوم والتكنولوجيا الميكانيكية",
        "education.languages": "اللغات:",
        "education.languageLevels": "الفرنسية: بطلاقة · الإنجليزية: متوسط · العربية",
        "qualities.analysis": "التفكير التحليلي",
        "qualities.solving": "حل المشكلات",
        "qualities.team": "العمل الجماعي",
        "qualities.autonomy": "الاستقلالية",
        "qualities.adaptability": "القدرة على التكيف",
        "qualities.initiative": "روح المبادرة",
        "qualities.learning": "التعلم المستمر",
        "qualities.organization": "التنظيم",
        "contact.title": "لنتحدث عن مشروعك",
        "contact.availability": "أبحث عن أول فرصة عمل في تطوير الويب.<br>مستعد للانضمام إلى فريقكم.",
        "contact.email": "البريد الإلكتروني",
        "contact.phone": "الهاتف",
        "contact.cta": "تواصل معي",
        "footer.rights": "جميع الحقوق محفوظة.",
        "footer.navigation": "روابط أسفل الصفحة",
        "footer.top": "العودة إلى الأعلى"
    }
};

const savedLanguage = localStorage.getItem("portfolio-language");
let currentLanguage = Object.hasOwn(translations, savedLanguage) ? savedLanguage : "fr";

const setLanguage = (language) => {
    const dictionary = translations[language];
    if (!dictionary) return;

    currentLanguage = language;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.title = dictionary.title;
    pageDescription.content = dictionary.description;
    languageGroup.setAttribute("aria-label", dictionary.languageLabel);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const translation = dictionary[element.dataset.i18n];
        if (translation === undefined) {
            console.error(`Missing "${language}" translation for "${element.dataset.i18n}".`);
            return;
        }
        if (element.hasAttribute("data-i18n-html")) {
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        const translation = dictionary[element.dataset.i18nAria];
        if (translation === undefined) {
            console.error(`Missing "${language}" translation for "${element.dataset.i18nAria}".`);
            return;
        }
        element.setAttribute("aria-label", translation);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const translation = dictionary[element.dataset.i18nPlaceholder];
        if (translation === undefined) {
            console.error(`Missing "${language}" placeholder translation for "${element.dataset.i18nPlaceholder}".`);
            return;
        }
        element.setAttribute("placeholder", translation);
    });

    updateContactValidation();
    languageButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    menuToggle.setAttribute("aria-label", menuToggle.getAttribute("aria-expanded") === "true"
        ? dictionary.menuClose
        : dictionary.menuOpen);
    animateHeroIntro();
    updateThemeLabel();
    localStorage.setItem("portfolio-language", language);
};

let heroTypingTimer;

function animateHeroIntro() {
    const nameParts = [...document.querySelectorAll(".hero h1 [data-i18n^='name.']")];
    const description = document.querySelector(".hero-intro");
    if (heroTypingTimer) window.clearTimeout(heroTypingTimer);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const names = nameParts.map((part) => part.textContent);
    const descriptionText = description.textContent;
    description.setAttribute("aria-label", descriptionText);
    nameParts.forEach((part) => {
        part.textContent = "";
    });
    description.textContent = "";

    let partIndex = 0;
    let characterIndex = 0;
    let descriptionIndex = 0;
    const typeDescription = () => {
        const characters = Array.from(descriptionText);
        if (descriptionIndex >= characters.length) return;
        description.textContent += characters[descriptionIndex];
        descriptionIndex += 1;
        heroTypingTimer = window.setTimeout(typeDescription, 10);
    };
    const typeNextNameCharacter = () => {
        const characters = Array.from(names[partIndex]);
        if (characterIndex >= characters.length) {
            partIndex += 1;
            characterIndex = 0;
            if (partIndex < nameParts.length) {
                heroTypingTimer = window.setTimeout(typeNextNameCharacter, 240);
            } else {
                heroTypingTimer = window.setTimeout(typeDescription, 240);
            }
            return;
        }

        nameParts[partIndex].textContent += characters[characterIndex];
        characterIndex += 1;
        heroTypingTimer = window.setTimeout(typeNextNameCharacter, 90);
    };

    heroTypingTimer = window.setTimeout(typeNextNameCharacter, 180);
}

// Restaure le thème choisi et mémorise les changements pour la prochaine visite.
const themeToggle = document.querySelector(".theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');

function updateThemeLabel() {
    const isLight = document.documentElement.dataset.theme === "light";
    const label = translations[currentLanguage][isLight ? "themeDark" : "themeLight"];
    themeToggle.setAttribute("aria-label", label);
    themeToggle.title = label;
}

const setTheme = (theme) => {
    const isLight = theme === "light";
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.querySelector(".theme-icon").textContent = isLight ? "☾" : "☀";
    themeMeta.content = isLight ? "#f8f9fc" : "#080b13";
    localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
    updateThemeLabel();
};

setLanguage(currentLanguage);
setTheme("dark");
themeToggle.addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");
});
languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
});

// Révèle progressivement les éléments à mesure qu'ils entrent dans la fenêtre.
const revealTargets = document.querySelectorAll(
    ".hero-copy, .stats-bar, .about-copy, .skills-panel, .projects-section > .section-heading, .project-card, .resume-experience, .resume-education, .contact-top"
);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
        });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    revealTargets.forEach((element, index) => {
        if (element.classList.contains("project-card")) {
            element.style.setProperty("--reveal-delay", `${(index % 3) * 100}ms`);
        }
        element.classList.add("reveal-pending");
        revealObserver.observe(element);
    });
}

// Affiche automatiquement l'année en cours dans le pied de page.
document.querySelector("#year").textContent = new Date().getFullYear();

function updateContactValidation() {
    if (!contactEmailInput || !contactPhoneInput) return;
    const hasContactMethod = contactEmailInput.value.trim() || contactPhoneInput.value.trim();
    const message = hasContactMethod ? "" : translations[currentLanguage]["contact.contactRequired"];
    contactEmailInput.setCustomValidity(message);
    contactPhoneInput.setCustomValidity(message);
}

contactEmailInput.addEventListener("input", updateContactValidation);
contactPhoneInput.addEventListener("input", updateContactValidation);
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    updateContactValidation();
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const message = [
        `${translations[currentLanguage]["contact.firstName"]}: ${formData.get("firstName")}`,
        `${translations[currentLanguage]["contact.lastName"]}: ${formData.get("lastName")}`,
        `${translations[currentLanguage]["contact.formEmail"]}: ${formData.get("email") || "—"}`,
        `${translations[currentLanguage]["contact.formPhone"]}: ${formData.get("phone") || "—"}`
    ].join("\n");
    const mailto = new URL("mailto:zakariaelfarouki0@gmail.com");
    mailto.searchParams.set("subject", translations[currentLanguage]["contact.subject"]);
    mailto.searchParams.set("body", message);
    window.location.href = mailto.toString();
});

// Ouvre ou ferme le menu mobile et met à jour son état accessible.
menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen
        ? translations[currentLanguage].menuOpen
        : translations[currentLanguage].menuClose);
    primaryNav.classList.toggle("open", !isOpen);
});

primaryNav.querySelectorAll("a").forEach((link) => {
    // Referme le menu après la sélection d'une section.
    link.addEventListener("click", () => {
        primaryNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", translations[currentLanguage].menuOpen);
    });
});

const navLinks = [...document.querySelectorAll(".primary-nav .nav-link")];
const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

// Met en évidence dans la navigation la section actuellement visible.
if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
        const visibleSection = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visibleSection) return;
        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${visibleSection.target.id}`);
        });
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.1, 0.3, 0.6] });

    sections.forEach((section) => sectionObserver.observe(section));
}
