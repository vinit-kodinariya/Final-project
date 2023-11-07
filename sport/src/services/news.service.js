const News = require("../models/news")

const createNews = async (reqBody) => {
    return News.create(reqBody)
};

const listNews = async () => {
    return News.find({ $or: [{ is_active: "true" }] });
};

const getId = async (id) => {
    return News.findById(id);
};

const deleteNews = async (Id) => {
    return News.findByIdAndDelete(Id)
};

const updateNews = async (Id, updatebody) => {
    return News.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createNews, listNews, deleteNews, getId, updateNews }