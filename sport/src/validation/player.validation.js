const Joi = require("joi");

const createPlayer = {
    body: Joi.object().keys({
        FirstName: Joi.string().required().trim(),
        LastName: Joi.string().required().trim(),
        DOB: Joi.string().required().trim(),
        Nationality: Joi.string().required().trim(),
        Gender: Joi.string().required().trim(),
        Phone: Joi.string().required().trim(),
        Sport: Joi.string().required().trim(),
        Player_photo: Joi.string().allow(""),
        team: Joi.string().allow("").trim()
    })
};

const listPlayer = {
    query: Joi.object().keys({
        FirstName: Joi.string().allow("").trim(),
        LastName: Joi.string().allow("").trim(),
        DOB: Joi.string().allow("").trim(),
        Nationality: Joi.string().allow("").trim(),
        Gender: Joi.string().allow("").trim(),
        Phone: Joi.string().allow("").trim(),
        Sport: Joi.string().allow("").trim(),
        Player_photo: Joi.string().allow(""),
        team: Joi.string().allow("").trim()
    })
}

module.exports = { createPlayer, listPlayer }