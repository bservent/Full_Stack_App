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

router.get('/:hikeId', (req, res) => {
    db.Hike.findById(req.params.hikeId, (err, foundHike) => {
        if (err) {
            console.log(err);
        }
        res.render('hikes/show', {
        hike: foundHike
        });
    });
}); 

router.post('/', (req, res) => {
    db.Hike.create(req.body, (err, newHike) => { 
        if (err) {
            console.log(err);
        }
        console.log(newHike);
        res.redirect(`/hikes/${newHike._id}`)
    });
});

router.get('/:hikeId/edit', (req, res) => {
    db.Hike.findById(req.params.hikeId, (err, foundHike) => {
        if (err) {
            console.log(err);
        }
        res.render('hikes/edit', {
        hike: foundHike
        });
    });
});

router.delete('/:hikeId', (req, res) => {
    db.Hike.findByIdAndDelete(req.params.hikeId, (err, deletedHike) => {
        if (err) {
            console.log(err);
        }
    });

    res.redirect('/hikes');
});
module.exports = router;