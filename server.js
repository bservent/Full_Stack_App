const express = require('express');
const app = express();
const PORT = 3000;
const hikeController = require('./controllers/hikeController');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/hikes', hikeController);

app.use('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`Server is connected on port: ${PORT}`)
});
