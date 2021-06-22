const express = require("express");
const router = express.Router();

const cardsController = require("../controllers/cards.controller");

router.get("/", cardsController.listCards);
router.post("/", cardsController.addCard);

module.exports = router;