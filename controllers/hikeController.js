const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/', (req, res) => {
    db.Hike.find({}, (err, allHikes) => {
        if (err) {
            console.log(err);
        }
        res.render('hikes/index', {
            hikes: allHikes,
        });
    });
});

router.get('/new', (req, res) => {
    res.render('hikes/new');
});

router.post('/', (req, res) => {
    const newHike = {
        name: req.body.name,
        location: req.body.location,
        lengthInMiles: req.body.lengthInMiles,
        difficulty: req.body.difficulty
    };
    db.Hike.create(req.body, (err, newHike) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/hikes/:hikeId')
    });
});

router.get('/:hikeId', (req, res) => {
    db.Hike.findById(req.params.hikeId, (err, foundHike) => {
        if (err) {
            console.log(err);
        }
        res.render('hikes/show', {
            hikes: foundHike,
        });
    });
}); 
module.exports = router;