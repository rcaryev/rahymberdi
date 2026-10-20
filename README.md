# RAHYMBERDI — Architectural Portfolio Website

Премиальное портфолио архитектурной студии Рахымберди Чарыева.

## 🏗️ Возможности

- **Двуязычность**: Полная поддержка русского и английского языков
- **Темная/Светлая тема**: Переключение между темами + специальный "чертежный режим"
- **Адаптивный дизайн**: Оптимизирован для всех устройств
- **Интерактивное портфолио**: Фильтрация проектов по категориям
- **Калькулятор стоимости**: Автоматический расчет бюджета проекта
- **Контактная форма**: Прием заявок от клиентов
- **Плавная анимация**: Alpine.js для интерактивных элементов

## 🚀 Технологии

- **HTML5** — семантическая разметка
- **Tailwind CSS** — современный CSS фреймворк
- **Alpine.js** — легковесный JS фреймворк для реактивности
- **Google Fonts** (Cinzel, Inter, Montserrat)
- **Font Awesome** — иконки
- **Unsplash** — качественные изображения

## 📁 Структура проекта

```
rahymberdi-portfolio/
├── index.html          # Основной HTML файл
├── app.js              # JavaScript логика приложения
├── README.md           # Документация
├── .gitignore          # Git игнорирование
├── vercel.json         # Конфигурация Vercel
└── netlify.toml        # Конфигурация Netlify
```

## 🌐 Развертывание

### Вариант 1: Vercel (Рекомендуется)

1. Установите Vercel CLI:
```bash
npm i -g vercel
```

2. Разверните проект:
```bash
cd rahymberdi-portfolio
vercel
```

3. Следуйте инструкциям в терминале

**Или через веб-интерфейс:**
- Зайдите на [vercel.com](https://vercel.com)
- Импортируйте GitHub репозиторий
- Vercel автоматически обнаружит настройки
- Нажмите "Deploy"

### Вариант 2: Netlify

1. Установите Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Разверните проект:
```bash
cd rahymberdi-portfolio
netlify deploy --prod
```

**Или через веб-интерфейс:**
- Зайдите на [netlify.com](https://netlify.com)
- Drag & drop папку проекта
- Сайт развернется автоматически

### Вариант 3: GitHub Pages

1. Создайте репозиторий на GitHub
2. Загрузите все файлы
3. В настройках репозитория включите GitHub Pages
4. Выберите ветку `main` и папку `root`
5. Сайт будет доступен по адресу: `https://username.github.io/repository-name`

### Вариант 4: Простой хостинг

Загрузите все файлы на любой веб-хостинг через FTP:
- Hostinger
- Bluehost
- SiteGround
- и другие

## 🛠️ Локальная разработка

Просто откройте `index.html` в браузере или используйте локальный сервер:

```bash
# С помощью Python
python -m http.server 8000

# С помощью Node.js (http-server)
npx http-server

# С помощью PHP
php -S localhost:8000
```

Затем откройте `http://localhost:8000` в браузере.

## ⚙️ Настройка контента

### Изменение контактной информации

Отредактируйте в `app.js`:
- Email: `charyyevrahymberdi@gmail.com`
- Телефон: `+993 62 457770`
- Локация: `Ашхабад, Туркменистан`

### Добавление проектов в портфолио

В `app.js` найдите массив `portfolioItems` и добавьте новый объект:

```javascript
{
    title: { ru: 'Название RU', en: 'Title EN' },
    category: { ru: 'Виллы', en: 'Villas' },
    categoryKey: 'Villas', // All, Villas, Interiors, Commercial
    location: { ru: 'Ашхабад', en: 'Ashgabat' },
    area: 500,
    year: '2026',
    image: 'https://your-image-url.com/image.jpg',
    description: { 
        ru: 'Описание проекта на русском',
        en: 'Project description in English'
    }
}
```

### Изменение цен на услуги

В `app.js` в объекте `translations` измените `serviceItems[].price`

### Настройка калькулятора

В методе `calculatedPrice` в `app.js`:
```javascript
get calculatedPrice() {
    let rate = 35;  // Базовая ставка архитектуры
    if (this.calcPackage === 'interior') rate = 30;
    if (this.calcPackage === 'full') rate = 55;
    return (this.calcArea * rate).toLocaleString();
}
```

## 🎨 Кастомизация дизайна

### Изменение цветовой схемы

В `index.html` в секции `<script>` с конфигурацией Tailwind:

```javascript
colors: {
    archGold: '#C5A880',        // Основной золотой цвет
    archGoldHover: '#d4b992',   // Золотой при наведении
    archDark: '#0B0C0E',        // Темный фон
    archCardDark: '#14161A',    // Фон карточек
    archBorderDark: '#232730',  // Цвет границ
}
```

## 📱 Оптимизация

Сайт оптимизирован для продакшена:
- ✅ Lazy loading изображений
- ✅ Минифицированные внешние библиотеки
- ✅ Preconnect для CDN
- ✅ SEO meta-теги
- ✅ Open Graph для соцсетей
- ✅ Адаптивные изображения
- ✅ Быстрая загрузка шрифтов

## 🔧 Дополнительные улучшения

### Подключение формы обратной связи

Для работы контактной формы добавьте один из сервисов:

**1. Formspree** (Бесплатно)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**2. Netlify Forms** (Если используете Netlify)
```html
<form netlify>
```

**3. Web3Forms** (Бесплатно)
```html
<form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="YOUR_KEY">
```

### Google Analytics

Добавьте перед закрывающим `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📞 Поддержка

Вопросы? Свяжитесь с разработчиком или архитектурной студией:
- Email: charyyevrahymberdi@gmail.com
- Телефон: +993 62 457770

## 📄 Лицензия

© 2026 RAHYMBERDI. All rights reserved.
