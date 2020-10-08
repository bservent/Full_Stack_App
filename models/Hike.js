const mongoose = require('mongoose');

const hikeSchema = new mongoose.Schema ({
    Name: { type: String},
    Location: { type: String},
    LengthInMiles: { type: Number, min:1},
    Difficulty: { type: String},
}, {timestamps: true});

module.exports = mongoose.model('Hike', hikeSchema);