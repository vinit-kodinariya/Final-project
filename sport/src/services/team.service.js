const Team = require("../models/team")

const createTeam= async (reqBody) => {
    return Team.create(reqBody)
};

const listTeam = async () => {
    return Team.find({$or : [{is_active : "true"}]})
};

const getId = async (id) => {
    return Team.findById(id);
};

const deleteTeam = async (Id) => {
    return Team.findByIdAndDelete(Id)
};

const updateTeam = async (Id, updatebody) => {
    return Team.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createTeam, listTeam, deleteTeam, getId, updateTeam }