const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/hikes', (req, res) => {
    res.render('./hikes/index');
});

/* router.get('./hikes/new', (req, res) => {
    res.render('new');
}); */

module.exports = router;