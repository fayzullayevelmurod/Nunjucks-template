# Loyhaga npmni ishga tushurish:
npm init -y

# Nunjucksni o‘rnating:
npm install nunjucks

# Lokal server uchun live-server ni o‘rnating (ixtiyoriy, lekin foydali):
npm install -g live-server

# Nunjucksni sozlash:
## 1 Loyiha papkasi ichida quyidagi tuzilmani yarating:
my-nunjucks-project/
├── src/
│   ├── templates/
│   │   ├── base.njk
│   │   ├── header.njk
│   │   ├── footer.njk
│   │   └── index.njk
│   ├── css/
│   │   └── style.css
├── dist/
├── app.js
├── package.json


## 	2.	app.js fayli: Bu fayl orqali Nunjucks shablonlarini kompilyatsiya qilamiz.
const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

// Nunjucksni sozlash
nunjucks.configure('src/templates', { autoescape: true });

// Template'larni kompilyatsiya qilish
const pages = ['index.njk']; // Sahifalaringiz ro‘yxati

pages.forEach((page) => {
    const rendered = nunjucks.render(page, { title: 'Welcome to Nunjucks!' });
    fs.writeFileSync(
        path.join(__dirname, 'dist', page.replace('.njk', '.html')),
        rendered
    );
});

## 	3.	base.njk fayli: Sahifalar uchun asosiy shablon.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    {% include "header.njk" %}
    <main>
        {% block content %}{% endblock %}
    </main>
    {% include "footer.njk" %}
</body>
</html>

## 4.	index.njk fayli: Bosh sahifa shabloni.
{% extends "base.njk" %}

{% block content %}
    <h1>Salom! Nunjucks ishlayapti! 😊</h1>
{% endblock %}

## 5.	header.njk va footer.njk fayllari: Takrorlanadigan qismlar.
•	header.njk:

<header>
    <nav>
        <a href="/">Bosh sahifa</a>
        <a href="/about">Biz haqimizda</a>
    </nav>
</header>


•	footer.njk:
<footer>
    <p>© 2024, Barcha huquqlar himoyalangan.</p>
</footer>

# 3. Nunjucksni ishlatish
node app.js

# 2.	Statik serverni ishga tushirish:
## Agar live-server o‘rnatgan bo‘lsangiz, dist papkani ochish uchun quyidagini yozing:
live-server dist


# Nunjucks Sintaksisi:
•	Variables: {{ variable }}
•	Loops: {% for item in items %}...{% endfor %}
•	Conditions: {% if condition %}...{% endif %}
•	Includes: {% include "file.njk" %}
•	Extends va Blocks: {% extends "base.njk" %} va {% block content %}.



# ko'p sahifali va scss bilan:
project/
├── src/
│   ├── templates/       # Nunjucks shablonlari
│   │   ├── layouts/     # Asosiy layoutlar (masalan, base.njk)
│   │   ├── partials/    # Header, footer, sidebar kabi komponentlar
│   │   ├── pages/       # Har bir sahifa uchun alohida shablon
│   │   └── index.njk    # Loyihaning bosh sahifasi
│   ├── scss/            # SCSS fayllar
│   │   ├── base/        # Umumiy sozlamalar (variables, mixins, reset)
│   │   ├── components/  # Komponentlar uchun SCSS
│   │   ├── layout/      # Layout (grid, container) uchun SCSS
│   │   ├── pages/       # Sahifa uchun maxsus SCSS
│   │   └── main.scss    # Asosiy SCSS fayl (barcha SCSS fayllar shu yerda birlashadi) (@import 'base/variables';)
│   ├── js/              # JavaScript fayllar
│   │   ├── modules/     # Modullangan skriptlar
│   │   └── main.js      # Asosiy JavaScript fayl
│   ├── images/          # Tasvirlar (rasmlar, ikonlar)
│   ├── fonts/           # Shriftlar
│   ├── css/             # Kompilyatsiya qilingan CSS fayllar
│   └── assets/          # Qo‘shimcha resurslar (videolar, JSON, SVG)
├── dist/                # Tayyor (build qilingan) fayllar
├── app.js               # Nunjucks kompilyatsiya qilish uchun skript
├── package.json         # Loyihaning konfiguratsiya fayli
└── README.md            # Loyihaga oid hujjatlar


