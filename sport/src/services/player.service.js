const Player = require("../models/player")

const createPlayer = async (reqBody) => {
    return Player.create(reqBody)
};

const listPlayer = async () => {
    return Player.find({ $or: [{ is_active: "true" }] }).populate("team", { Team_name: 1 });
};

const getId = async (id) => {
    return Player.findById(id);
};

const deletePlayer = async (Id) => {
    return Player.findByIdAndDelete(Id)
};

const updatePlayer = async (Id, updatebody) => {
    return Player.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createPlayer, listPlayer, deletePlayer, getId, updatePlayer }