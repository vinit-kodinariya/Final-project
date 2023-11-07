const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    Name: {
        type: String,
        trim: true
    },
    Email: {
        type: String,
        trim: true
    },
    PhoneNumber: {
        type: Number,
        trim: true
    },
    Message: {
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

    const Contact = mongoose.model("contact",ContactSchema);
    module.exports=Contact;