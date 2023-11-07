const Contact = require("../models/contact")

const createContact = async (reqBody) => {
    return Contact.create(reqBody)
};

const listContact = async () => {
    return Contact.find({$or : [{is_active : "true"}]})
};

const getId = async (id) => {
    return Contact.findById(id);
};

const deleteContact = async (Id) => {
    return Contact.findByIdAndDelete(Id)
};

const updateContact = async (Id, updatebody) => {
    return Contact.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createContact, listContact, deleteContact, getId, updateContact }