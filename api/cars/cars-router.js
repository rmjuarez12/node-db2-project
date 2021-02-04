//* Import express and setup Router
const express = require("express");
const router = express.Router();

//* Import Models
const carsModel = require("./cars-model");

//* Import Middleware
const getMiddleware = require("../middleware/middleware");

//* Setup Endpoint Handlers

//-- GET
// Get all cars
router.get("/", (req, res) => {
  carsModel
    .getAllCars()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Get car by ID
router.get("/:id", getMiddleware.validateCarID(carsModel), (req, res) => {
  const { car } = req;

  res.status(200).json(car);
});

//-- POST
// Create a new car entry
router.post("/", getMiddleware.validateCarBody, (req, res) => {
  const carData = req.body;

  carsModel
    .create(carData)
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//-- PUT
// Update a car entry
router.put(
  "/:id",
  [getMiddleware.validateCarID(carsModel), getMiddleware.validateCarBody],
  (req, res) => {
    const { id } = req.params;
    const newCarData = req.body;

    carsModel
      .update(id, newCarData)
      .then((car) => {
        res.status(200).json(car);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
);

//-- DELETE
// Delete a record
router.delete("/:id", getMiddleware.validateCarID(carsModel), (req, res) => {
  const { id } = req.params;

  carsModel
    .remove(id)
    .then(() => {
      res.status(200).json({ message: "Car entry has been delete!" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//* Export Modules
module.exports = router;
