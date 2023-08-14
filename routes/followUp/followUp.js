const express = require("express");
const router = express.Router();
const followUpController = require("../../controllers/followUp/followUp");

router.get("/:secretCode", followUpController.followUp);

module.exports = router;
