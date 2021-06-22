const express = require("express");

const cardRoutes = require("./card.routes");

const router = express.Router();


router.use("/cards", cardRoutes);

module.exports = router