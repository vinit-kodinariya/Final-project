const mongoose = require("mongoose");
const config = require("../config/config")

const PlayerSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        trim: true
    },
    LastName: {
        type: String,
        trim: true
    },
    DOB: {
        type: String,
        trim: true
    },
    Nationality: {
        type: String,
        trim: true
    },
    Gender: {
        type: String,
        trim: true
    },
    Phone: {
        type: Number,
        trim: true
    },
    Sport:{
        type: String,
        trim :true
    },
    Player_photo: {
        type: String
    },
    is_active: {
        type: Boolean,
        default: true
    },
    team: {
        type: mongoose.Types.ObjectId,
        ref: 'team'
    }
},
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.Player_photo) {
                    data.Player_photo = `${config.base_url}images/${data.Player_photo}`;
                }
            },
        },
    });

const Player = mongoose.model("player", PlayerSchema);
module.exports = Player;