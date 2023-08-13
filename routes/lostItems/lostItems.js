const express = require("express");
const router = express.Router();
const lostItemsController = require("../../controllers/lostsItems/lostItems");

router.post("/", lostItemsController.postLostItem);
router.get("/", lostItemsController.getLostItems);

module.exports = router;
