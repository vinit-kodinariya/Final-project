const Joi = require("joi");

// create user

const createNews = {
  body: Joi.object().keys({
    Title: Joi.string().trim().required(),
    Author: Joi.string().trim().required(),
    Content: Joi.string().trim().required(),
    Tags: Joi.string().trim().required(),
    Comments: Joi.string().trim().required(),
    Gallery: Joi.string().trim().required(),
  }),
};

const listNews = {
  query: Joi.object().keys({
    Title: Joi.string().trim().allow(""),
    Author: Joi.string().trim().allow(""),
    Content: Joi.string().trim().allow(""),
    Tags: Joi.string().trim().allow(""),
    Comments: Joi.string().trim().allow(""),
    Gallery: Joi.string().trim().allow(""),
  }),
};

module.exports = { createNews, listNews };