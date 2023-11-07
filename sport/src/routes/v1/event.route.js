const express = require("express");
const router = express.Router();
const {eventValidation} = require("../../validation");
const eventController = require("../../controllers/event.controller");
const validate = require("../../middlewares/validate");


/** Crate event.validation list */
router.post(
  "/create-event",
  validate(eventValidation.createEvent),
  eventController.createEvent
);

/** Crate event.validation list */
router.get(
  "/list-event",
  validate(eventValidation.getEvent),
  eventController.getEvent
);

router.delete(
  "/delete-event/:Id",
  eventController.deleteEvent
);

router.put(
  "/update-event/:Id",
  eventController.updateEvent
);

module.exports = router;