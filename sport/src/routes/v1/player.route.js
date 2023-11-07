const express = require("express");
const router = express.Router();
const { playerValidation } = require("../../validation");
const playerController = require("../../controllers/player.controller");
const validate = require("../../middlewares/validate");
const { upload } = require("../../middlewares/upload")

// Create player

router.post(
    "/create-player",
    upload.single("Player_photo"),
    validate(playerValidation.createPlayer),
    playerController.createPlayer
);

// List player
router.get(
    "/list-player",
    validate(playerValidation.listPlayer),
    playerController.listPlayer
);

// Delete player
router.delete(
    "/delete-player/:Id",
    playerController.deletePlayer
);

// Update player
router.put(
    "/update-player/:id",
    upload.single("image"),
    playerController.updatePlayer
);

module.exports = router;