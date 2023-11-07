const Joi = require("joi");

const createTeam= {
    body: Joi.object().keys({
        Team_name: Joi.string().required().trim(),
        Sport_type: Joi.string().required().trim(),
        City: Joi.string().required().trim(),
        State: Joi.string().required().trim(),
        Country: Joi.string().required().trim(),
        Established_year: Joi.string().required().trim(),
    })
};

const listTeam = {
    query: Joi.object().keys({
        Team_name: Joi.string().allow("").trim(),
        Sport_type: Joi.string().allow("").trim(),
        City: Joi.string().allow("").trim(),
        State: Joi.string().allow("").trim(),
        Country: Joi.string().allow("").trim(),
        Established_year: Joi.string().allow("").trim(),
    })
}

module.exports = { createTeam, listTeam }