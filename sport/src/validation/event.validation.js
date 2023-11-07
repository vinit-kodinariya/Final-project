const Joi = require("joi");

// create user

const createEvent = {
  body: Joi.object().keys({
    Event_name: Joi.string().trim().required(),
    Event_date: Joi.string().trim().required(),
    Event_location: Joi.string().trim().required(),
  }),
};

const getEvent = {
  query: Joi.object().keys({
    Event_name: Joi.string().trim().allow(""),
    Event_date: Joi.string().trim().allow(""),
    Event_location: Joi.string().trim().allow(""),
  }),
};

module.exports = { createEvent, getEvent };