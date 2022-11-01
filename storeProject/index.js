const express = require('express')
const app = express()
app.set('view engine', 'hbs');

let hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/dashboard', function (req, res) {
  res.render('dashboard');
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html');
});

app.get('/about', function (req, res) {
    res.send('About page');
});

app.listen(3000);