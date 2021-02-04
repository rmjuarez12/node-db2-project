//* Import Express and setup server
const express = require("express");
const server = express();

//* Ensure the server can parse JSON
server.use(express.json());

//* Import Routers
const carsRouter = require("./cars/cars-router");

//* Setup Routers
server.use("/api/cars", carsRouter);

//* Export Modules
module.exports = server;
