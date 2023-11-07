const express = require("express");
const router = express.Router();
const { teamValidation } = require("../../validation");
const teamController = require("../../controllers/team.controller");
const validate = require("../../middlewares/validate");

// Create team

router.post(
    "/create-team",
    validate(teamValidation.createTeam),
    teamController.createTeam
);

// List team
router.get(
    "/list-team",
    validate(teamValidation.listTeam),
    teamController.listTeam
);

// Delete team
router.delete(
    "/delete-team/:Id",
    teamController.deleteTeam
);

// Update team
router.put(
    "/update-team/:id",
    teamController.updateTeam
);

module.exports = router;