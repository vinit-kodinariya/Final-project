const Joi = require("joi");

const createCoach = {
    body: Joi.object().keys({
        Coach_name: Joi.string().required().trim(),
        DOB: Joi.string().required().trim(),
        Nationality: Joi.string().required().trim(),
        Contact_information: Joi.string().required().trim(),
        event: Joi.string().allow("").trim(),
    })
};

const listCoach = {
    query: Joi.object().keys({
        Coach_name: Joi.string().allow("").trim(),
        DOB: Joi.string().allow("").trim(),
        Nationality: Joi.string().allow("").trim(),
        Contact_information: Joi.string().allow("").trim(),
        event: Joi.string().allow("").trim(),
    })
}

module.exports = { createCoach, listCoach }