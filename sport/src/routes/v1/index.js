const express = require("express");
const coach = require("./coach.route");
const player = require("./player.route");
const event = require("./event.route");
const team = require("./team.route");
const user = require("./user.route");
const token =require("./token.route")

const router = express.Router();
router.use("/coach", coach);
router.use("/player", player);
router.use("/event", event);
router.use("/team", team);
router.use("/user", user);
router.use('/token', token);

module.exports = router;