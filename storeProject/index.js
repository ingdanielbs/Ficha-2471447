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

app.get('/catalogo', function (req, res) {
  res.render('catalogo');
});

app.get('/listaproductos', function (req, res) {
  res.render('lis-products');
});

app.get('*', function (req, res) {
  res.render('404');
});

app.listen(3000);