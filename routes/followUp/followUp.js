const express = require("express");
const router = express.Router();
const followUpController = require("../../controllers/followUp/followUp");

router.get("/:uiqueId", followUpController.followUp);

module.exports = router;
