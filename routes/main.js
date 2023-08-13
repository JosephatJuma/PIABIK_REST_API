const express = require("express");
const router = express.Router();
const lostItemsRouter = require("./lostItems/lostItems");
const foundItemsRouter = require("./foundItems/foundItems");
const followUpRouter = require("./followUp/followUp");

router.use("/lostItems", lostItemsRouter);
router.use("/foundItems", foundItemsRouter);
router.use("/followUp", followUpRouter);

module.exports = router;
