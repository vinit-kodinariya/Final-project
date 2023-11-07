const Coach = require("../models/coach")

const createCoach = async (reqBody) => {
    return Coach.create(reqBody)
};

const listCoach = async () => {
    return Coach.find({$or : [{is_active : "true"}]}).populate("event", {Event_name : 1})
};

const getId = async (id) => {
    return Coach.findById(id);
};

const deleteCoach = async (Id) => {
    return Coach.findByIdAndDelete(Id)
};

const updateCoach = async (Id, updatebody) => {
    return Coach.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createCoach, listCoach, deleteCoach, getId, updateCoach }