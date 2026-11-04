const assert = require('assert');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const template = fs.readFileSync(path.join(__dirname, '..', 'views', 'homepage.ejs'), 'utf8');
const html = ejs.render(template);

assert.strictEqual(html.trim(), '', 'homepage is completely blank');

console.log('homepage smoke test passed');
