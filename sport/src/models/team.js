const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    Team_name: {
        type: String,
        trim: true
    },
    Sport_type: {
        type: String,
        trim: true
    },
    City: {
        type: String,
        trim: true
    },
    State: {
        type: String,
        trim: true
    },
    Country: {
        type: String,
        trim: true
    },
    Established_year: {
        type: Number,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Team = mongoose.model("team", TeamSchema);
module.exports = Team;