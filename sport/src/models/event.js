const mongoose = require("mongoose");

const EventSchema  = new mongoose.Schema({
    Event_name: {
        type: String,
        trim: true
    },
    Event_date: {
        type:  String,
        trim: true
    },
    Event_location: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    product : {
        type : mongoose.Types.ObjectId,
        ref:"product"
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Event = mongoose.model("event", EventSchema );
module.exports = Event;