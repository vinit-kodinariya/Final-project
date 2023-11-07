const Joi = require("joi");

// create user

const createContact = {
  body: Joi.object().keys({
    Name: Joi.string().trim().required(),
    Email: Joi.string().trim().required(),
    PhoneNumber: Joi.string().trim().required(),
    Message: Joi.string().trim().required(),
  }),
};

const listContact = {
  query: Joi.object().keys({
    Name: Joi.string().trim().allow(""),
    Email: Joi.string().trim().allow(""),
    PhoneNumber: Joi.string().trim().allow(""),
    Message: Joi.string().trim().allow(""),
  }),
};

module.exports = { createContact, listContact };