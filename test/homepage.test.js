const assert = require('assert');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const template = fs.readFileSync(path.join(__dirname, '..', 'views', 'homepage.ejs'), 'utf8');
const html = ejs.render(template);

assert.ok(html.includes('<svg id="hexbg"'), 'hex mesh background is present');
assert.ok(html.includes('Distributed Systems Engineer'), 'hero eyebrow is present');
assert.ok(html.includes('id="about"'), 'about section is present');
assert.ok(html.includes('id="work"'), 'work section is present');
assert.ok(html.includes('id="contact"'), 'contact section is present');
assert.ok(html.includes('buildHexGrid'), 'hex grid script is present');
assert.ok(!html.includes('Golden Travels'), 'old Golden Travels homepage content is gone');

console.log('homepage smoke test passed');
