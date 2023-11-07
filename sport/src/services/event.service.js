const Event = require("../models/event");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createEvent = async (reqBody) => {
  return Event.create(reqBody)
};

const getEvent = async () => {
  return Event.find()
};

const deleteEvent = async (id) => {
  return Event.findByIdAndDelete(id)
};

const updateEvent = async (id, updateBody) => {
  return Event.findByIdAndUpdate(id, { $set: updateBody })
}

module.exports = {
  createEvent,
  getEvent,
  deleteEvent,
  updateEvent
};
