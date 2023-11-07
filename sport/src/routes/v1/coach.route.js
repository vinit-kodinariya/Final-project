const express = require("express");
const router = express.Router();
const { coachValidation } = require("../../validation");
const coachController = require("../../controllers/coach.controller");
const validate = require("../../middlewares/validate");

// Create coach

router.post(
    "/create-coach",
    validate(coachValidation.createCoach),
    coachController.createCoach
);

// List coach
router.get(
    "/list-coach",
    validate(coachValidation.listCoach),
    coachController.listCoach
);

// Delete coach
router.delete(
    "/delete-coach/:Id",
    coachController.deleteCoach
);

// Update coach
router.put(
    "/update-coach/:id",
    coachController.updateCoach
);

module.exports = router;