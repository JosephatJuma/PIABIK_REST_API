const express = require("express");
const router = express.Router();
const matchedItemsController = require("../../controllers/matcheItems/matchedItems");

router.get("/", matchedItemsController.getMatchedItems);

module.exports = router;
