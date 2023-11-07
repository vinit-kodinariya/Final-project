const mongoose = require("mongoose");

const CoachSchema = new mongoose.Schema({
    Coach_name: {
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
    Contact_information: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    event :{
        type : mongoose.Types.ObjectId,
        ref:"event"
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Coach = mongoose.model("coach", CoachSchema);
module.exports = Coach;