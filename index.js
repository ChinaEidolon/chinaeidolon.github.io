// Import required dependencies
const express = require('express');
const app = express();
const path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')))

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'ejs');

// Basic configuration
const PORT = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
    res.render('homepage.ejs');
});

app.get('/about', (req, res) => {
    res.render('about.ejs');
});

app.get('/connect', (req, res) => {
    res.render('connect.ejs');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
