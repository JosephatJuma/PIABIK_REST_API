const express = require("express");
const router = express.Router();
const lostItemsRouter = require("./lostItems/lostItems");
const foundItemsRouter = require("./foundItems/foundItems");
const followUpRouter = require("./followUp/followUp");
const matchedItemsRouter = require("./matchedItems/matchedItems");
const searchRouter = require("./search/search");

router.use("/lostItems", lostItemsRouter);
router.use("/foundItems", foundItemsRouter);
router.use("/followUp", followUpRouter);
router.use("/matchedItems", matchedItemsRouter);
router.use("/search", searchRouter);

module.exports = router;
