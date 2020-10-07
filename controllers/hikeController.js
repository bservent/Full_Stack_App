const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/', (req, res) => {
    res.render('hikes/index');
});

router.get('/new', (req, res) => {
    res.render('hikes/new');
});

/* router.post('/new', (req, res) => {
    
}); */

module.exports = router;