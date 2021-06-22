// configure environment variables from .env file
require('dotenv').config();
const express = require("express");

const app = express();
const middlewares = require("./app/middlewares");
const routes = require("./app/routes");

const db = require("./app/db/models");

//configure middlewares
app.use(middlewares);

// configure api routes
app.use("/api/v1", routes);

// set port, listen for requests
const PORT = process.env.PORT || 3000;

(async () => {

  try {

    // wait for DB connection to be authenticated and established
    await db.sequelize.authenticate();

    // Start api server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });

  } catch (error) {
    console.error(error);    
  }
  
})();