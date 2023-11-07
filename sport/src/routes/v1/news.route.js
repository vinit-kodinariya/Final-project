const express = require("express");
const router = express.Router();
const { newsValidation } = require("../../validation");
const { newsController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create news

router.post(
    "/create-news",
    validate(newsValidation.createNews),
    newsController.createNews
);

// List news
router.get(
    "/list-news",
    validate(newsValidation.listNews),
    newsController.listNews
);

// Delete news
router.delete(
    "/delete-news/:Id",
    newsController.deleteNews
);

// Update news
router.put(
    "/update-news/:id",
    newsController.updateNews
);

module.exports = router;