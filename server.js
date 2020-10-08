require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;


const ctrl = require('./controllers/hikeController');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/hikes', ctrl);

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`Server is connected on port: ${PORT}`)
});
