const express = require("express");
const router = express.Router();
const searchController = require("../../controllers/search/search");

router.get("/:uniqueId", searchController.search);

module.exports = router;
