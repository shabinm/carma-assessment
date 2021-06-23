const express = require("express");

const cardRoutes = require("./card.routes");

const router = express.Router();

// routes related to cards
router.use("/cards", cardRoutes);

module.exports = router