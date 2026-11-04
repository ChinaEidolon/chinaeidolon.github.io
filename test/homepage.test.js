const assert = require('assert');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const template = fs.readFileSync(path.join(__dirname, '..', 'views', 'homepage.ejs'), 'utf8');
const html = ejs.render(template);
const imagePath = path.join(__dirname, '..', 'public', 'image_bullseye.jpeg');

assert.ok(html.includes('src="/image_bullseye.jpeg"'), 'homepage references the profile photo');
assert.ok(fs.existsSync(imagePath), 'profile photo exists in the public directory');

console.log('homepage smoke test passed');
