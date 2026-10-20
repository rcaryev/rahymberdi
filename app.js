function archStudioApp() {
    return {
        lang: 'ru',
        darkMode: true,
        blueprintMode: false,
        mobileMenuOpen: false,
        modalOpen: false,
        selectedItem: null,
        activeCategory: 'All',
        calcArea: 250,
        calcPackage: 'full',
        formSubmitted: false,
        form: { name: '', phone: '', email: '', message: '' },

        translations: {
            ru: {
                studioTag: 'Архитектор & Пространственный Дизайнер',
                navAbout: 'О студии',
                navPortfolio: 'Проекты',
                navServices: 'Услуги',
                navCalculator: 'Расчет стоимости',
                navContact: 'Контакты',
                heroBadge: 'Архитектура & Дизайн Пространств',
                heroTitle: 'Проектируем Монументальную Эстетику & Чистый Уют',
                heroSubtitle: 'Создание премиальной жилой и коммерческой архитектуры, индивидуальных вилл и вневременных интерьеров. От концепта и 3D-визуализации до реализации с авторским надзором.',
                btnPortfolio: 'Смотреть Портфолио',
                btnDiscuss: 'Обсудить Проект',
                heroStats: [
                    { value: '8+', label: 'Лет опыта' },
                    { value: '45+', label: 'Реализованных объектов' },
                    { value: '100%', label: 'Авторский контроль' },
                    { value: '12', label: 'Наград & Публикаций' }
                ],
                architectName: 'Рахымберди Чарыев',
                architectRole: 'Главный Архитектор & Основатель Студии',
                aboutLabel: 'Архитектурный Подход',
                aboutHeading: 'Синтез геометрии, естественного света и натуральных материалов',
                aboutDesc: 'Мы верим, что архитектура должна органично взаимодействовать с окружающей средой, отражая характер и статус владельца. Каждое пространственное решение основывается на пропорциях, эргономике и чистоте линий.',
                aboutPillars: [
                    { title: 'Эргономика и Свет', desc: 'Максимальное использование естественного освещения и продуманная логистика.' },
                    { title: 'Натуральные Текстуры', desc: 'Использование камня, дерева, бетона и металлов высшего качества.' }
                ],
                aboutQuote: 'Архитектура — это искусство материализации эмоций и создания пространств, выдерживающих испытание временем.',
                portfolioTag: 'Архитектурное Портфолио',
                portfolioHeading: 'Избранные Реализованные Объекты',
                portfolioSub: 'Виллы, резиденции, премиальные квартиры и коммерческие пространства.',
                sqm: 'м²',
                btnDetails: 'Детали Проекта',
                servicesTag: 'Наши Компетенции',
                servicesHeading: 'Полный Цикл Архитектурного Проектирования',
                serviceItems: [
                    { icon: 'fa-solid fa-house', title: 'Архитектурное проектирование', desc: 'Разработка концепции, эскизов, объемно-планировочных решений и рабочих чертежей вилл.', price: 'от $35 / м²' },
                    { icon: 'fa-solid fa-couch', title: 'Дизайн Интерьеров', desc: 'Создание эксклюзивных интерьеров с подбором отделочных материалов, мебели и освещения.', price: 'от $30 / м²' },
                    { icon: 'fa-solid fa-vr-cardboard', title: '3D Визуализация & VR Walkthrough', desc: 'Фотореалистичные 3D-рендеры и интерактивные VR-туры для полного погружения в объект.', price: 'Включено в проект' },
                    { icon: 'fa-solid fa-clipboard-check', title: 'Авторский Надзор', desc: 'Регулярный выезд на объект, контроль соответствия строительных работ проекту.', price: 'от $500 / мес' }
                ],
                calcTag: 'Онлайн Расчет',
                calcHeading: 'Калькулятор Архитектурного Бюджета',
                calcSub: 'Рассчитайте примерную стоимость и сроки разработки вашего объекта.',
                calcAreaLabel: 'Площадь объекта:',
                calcPackageLabel: 'Уровень проектирования:',
                pkgArch: 'Архитектурное решение (Эскизный проект)',
                pkgInt: 'Дизайн-проект интерьера',
                pkgFull: 'Комплексный проект (Архитектура + Интерьер)',
                calcEstCost: 'Предварительная стоимость',
                calcNote: '*Окончательная смета формируется после ТЗ',
                calcBtnOrder: 'Заказать точный расчет',
                contactTag: 'Связаться с нами',
                contactHeading: 'Обсудим ваш будущий объект',
                contactDesc: 'Готовы воплотить архитектурные идеи любой сложности. Запишитесь на консультацию или отправьте техническое задание.',
                emailLabel: 'Электронная почта',
                phoneLabel: 'Телефон / WhatsApp / Telegram',
                locLabel: 'Локация',
                formName: 'Ваше Имя',
                formPhone: 'Телефон / Мессенджер',
                formEmail: 'Email',
                formMessage: 'Детали проекта или вопросы',
                formSubmit: 'Отправить Заявку',
                formSuccess: 'Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.'
            },
            en: {
                studioTag: 'Architect & Spatial Designer',
                navAbout: 'About',
                navPortfolio: 'Projects',
                navServices: 'Services',
                navCalculator: 'Calculator',
                navContact: 'Contact',
                heroBadge: 'Architecture & Spatial Design',
                heroTitle: 'Designing Architectural Elegance & Pure Comfort',
                heroSubtitle: 'Creating premium residential and commercial architecture, bespoke luxury villas, and timeless interior spaces. From initial layout concept to site supervision.',
                btnPortfolio: 'View Portfolio',
                btnDiscuss: 'Discuss Project',
                heroStats: [
                    { value: '8+', label: 'Years Experience' },
                    { value: '45+', label: 'Completed Projects' },
                    { value: '100%', label: 'Author Supervision' },
                    { value: '12', label: 'Awards & Publications' }
                ],
                architectName: 'Rahymberdi Charyyev',
                architectRole: 'Lead Architect & Studio Founder',
                aboutLabel: 'Architectural Philosophy',
                aboutHeading: 'Synthesis of Geometry, Natural Light & Raw Materials',
                aboutDesc: 'We believe architecture should naturally interact with its context, echoing the character and prestige of its owner. Every spatial decision is built on proportion, ergonomics, and clean aesthetics.',
                aboutPillars: [
                    { title: 'Ergonomics & Daylight', desc: 'Maximized natural daylighting paired with functional internal flow.' },
                    { title: 'Tactile Materials', desc: 'Curated natural stone, solid timber, textured concrete, and refined metals.' }
                ],
                aboutQuote: 'Architecture is the art of materializing emotion and crafting spaces that withstand the test of time.',
                portfolioTag: 'Architectural Portfolio',
                portfolioHeading: 'Featured Selected Works',
                portfolioSub: 'Villas, private residences, luxury apartments, and commercial venues.',
                sqm: 'sq.m',
                btnDetails: 'Project Details',
                servicesTag: 'Our Competencies',
                servicesHeading: 'Full-Cycle Architectural & Design Services',
                serviceItems: [
                    { icon: 'fa-solid fa-house', title: 'Architectural Design', desc: 'Concept development, spatial planning, facade design, and detailed construction documentation.', price: 'from $35 / sq.m' },
                    { icon: 'fa-solid fa-couch', title: 'Interior Architecture', desc: 'Bespoke interior design including material specifications, custom furniture, and lighting design.', price: 'from $30 / sq.m' },
                    { icon: 'fa-solid fa-vr-cardboard', title: '3D Renderings & VR Walkthrough', desc: 'Photorealistic 3D imagery and interactive VR walkthroughs to visualize spaces prior to construction.', price: 'Included in project' },
                    { icon: 'fa-solid fa-clipboard-check', title: 'Site Supervision', desc: 'Regular site visits and quality assurance to ensure full compliance with design blueprints.', price: 'from $500 / mo' }
                ],
                calcTag: 'Online Estimator',
                calcHeading: 'Architectural Budget Calculator',
                calcSub: 'Estimate project development costs and timelines instantly.',
                calcAreaLabel: 'Project Area:',
                calcPackageLabel: 'Scope of Service:',
                pkgArch: 'Architectural Concept & Blueprint',
                pkgInt: 'Interior Design Package',
                pkgFull: 'Complete Architectural & Interior Package',
                calcEstCost: 'Estimated Budget',
                calcNote: '*Final quote provided after formal design brief',
                calcBtnOrder: 'Request Detailed Proposal',
                contactTag: 'Get in Touch',
                contactHeading: 'Let\'s Discuss Your Project',
                contactDesc: 'Ready to turn your architectural vision into reality. Book a meeting or share your initial project requirements.',
                emailLabel: 'Email Address',
                phoneLabel: 'Phone / WhatsApp / Telegram',
                locLabel: 'Location',
                formName: 'Your Name',
                formPhone: 'Phone / Messaging App',
                formEmail: 'Email Address',
                formMessage: 'Project Details / Requirements',
                formSubmit: 'Submit Request',
                formSuccess: 'Thank you! Your request has been sent. We will get back to you shortly.'
            }
        },

        portfolioItems: [
            {
                title: { ru: 'Резиденция "Минимализм & Камень"', en: 'Minimalist Stone Residence' },
                category: { ru: 'Виллы', en: 'Villas' },
                categoryKey: 'Villas',
                location: { ru: 'Ашхабад', en: 'Ashgabat' },
                area: 680,
                year: '2025',
                image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
                description: { 
                    ru: 'Загородная вилла с панорамным остеклением, монолитным бетоном и натуральным травертином. Открытые пространства интегрированы с природным ландшафтом.',
                    en: 'Private villa featuring panoramic glazing, monolithic concrete, and natural travertine finish. Open layout seamlessly connects interior spaces with the outdoor landscape.'
                }
            },
            {
                title: { ru: 'Пентхаус "Эбеновое Дерево"', en: 'Ebony Wood Penthouse' },
                category: { ru: 'Интерьеры', en: 'Interiors' },
                categoryKey: 'Interiors',
                location: { ru: 'Центр', en: 'Downtown' },
                area: 310,
                year: '2024',
                image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
                description: { 
                    ru: 'Премиальный интерьер пентхауса с акцентом на тёмное дерево, скрытую подсвеченную геометрию и дизайнерскую авторскую мебель.',
                    en: 'Luxury penthouse interior utilizing dark wood accents, integrated architectural lighting, and custom-designed furniture.'
                }
            },
            {
                title: { ru: 'Коммерческий Комплекс "Horizon"', en: 'Horizon Commercial Hub' },
                category: { ru: 'Коммерция', en: 'Commercial' },
                categoryKey: 'Commercial',
                location: { ru: 'Деловой Центр', en: 'Business Center' },
                area: 1450,
                year: '2025',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
                description: { 
                    ru: 'Современный коммерческий центр с кинетическим фасадом, энергоэффективными инженерными решениями и атриумом со световым фонарем.',
                    en: 'Modern commercial building featuring kinetic facade design, high energy efficiency standards, and a central sunlit atrium.'
                }
            }
        ],

        get portfolioCategories() {
            return ['All', 'Villas', 'Interiors', 'Commercial'];
        },

        get filteredPortfolio() {
            if (this.activeCategory === 'All') return this.portfolioItems;
            return this.portfolioItems.filter(item => item.categoryKey === this.activeCategory);
        },

        get calculatedPrice() {
            let rate = 35;
            if (this.calcPackage === 'interior') rate = 30;
            if (this.calcPackage === 'full') rate = 55;
            return (this.calcArea * rate).toLocaleString();
        },

        t(key) {
            return this.translations[this.lang][key] || key;
        },

        getCategoryLabel(cat) {
            if (cat === 'All') return this.lang === 'ru' ? 'Все Проекты' : 'All Projects';
            if (cat === 'Villas') return this.lang === 'ru' ? 'Виллы' : 'Villas';
            if (cat === 'Interiors') return this.lang === 'ru' ? 'Интерьеры' : 'Interiors';
            if (cat === 'Commercial') return this.lang === 'ru' ? 'Коммерция' : 'Commercial';
            return cat;
        },

        openModal(item) {
            this.selectedItem = item;
            this.modalOpen = true;
        },

        submitForm() {
            this.formSubmitted = true;
            setTimeout(() => {
                this.form = { name: '', phone: '', email: '', message: '' };
                this.formSubmitted = false;
            }, 4000);
        }
    }
}
