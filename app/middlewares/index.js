const express = require("express");
const cors = require("cors");

const router = express.Router();

const corsOptions = {
    origin: process.env.WEB_URL || "http://localhost:3001"
};

// allow cross origin requests
router.use(cors(corsOptions));

// parse requests of content-type - application/json
router.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
router.use(express.urlencoded({ extended: true }));

module.exports = router;
