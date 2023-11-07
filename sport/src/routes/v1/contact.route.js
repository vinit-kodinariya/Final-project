const express = require("express");
const router = express.Router();
const { contactValidation } = require("../../validation");
const { contactController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create contact

router.post(
    "/create-contact",
    validate(contactValidation.createContact),
    contactController.createContact
);

// List contact
router.get(
    "/list-contact",
    validate(contactValidation.listContact),
    contactController.listContact
);

// Delete contact
router.delete(
    "/delete-contact/:Id",
    contactController.deleteContact
);

// Update contact
router.put(
    "/update-contact/:id",
    contactController.updateContact
);

module.exports = router;