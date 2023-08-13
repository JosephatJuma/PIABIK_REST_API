const express = require("express");
const router = express.Router();
const foundItemsController = require("../../controllers/foundItems/foundItems");

router.get("/", foundItemsController.getFoundItems);
router.post("/", foundItemsController.postFoundItem);

module.exports = router;
