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
