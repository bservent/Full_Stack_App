const mongoose = require('mongoose');

const hikeSchema = new mongoose.Schema ({
    Name: { type: String, required: true},
    Location: { type: String, required: true},
    LengthInMiles: { type: Number, min:1},
    Difficulty: { type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.model('Hike', hikeSchema);