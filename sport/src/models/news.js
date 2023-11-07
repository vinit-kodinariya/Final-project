const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
    Title: {
        type: String,
        trim: true
    },
    Author: {
        type: String,
        trim: true
    },
    Content: {
        type: Number,
        trim: true
    },
    Tags: {
        type: String,
        trim: true
    },
    Comments: {
        type: String,
        trim: true
    },
    Gallery: {
        type: String,
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

const News = mongoose.model("news", NewsSchema);
module.exports = News;