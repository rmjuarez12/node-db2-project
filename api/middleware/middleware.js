//* Function to validate ID
const validateCarID = (carsModel) => (req, res, next) => {
  const { id } = req.params;

  carsModel.getByID(id).then((car) => {
    if (car.length) {
      req.car = car;
      next();
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  });
};

//* Function to validate care body
const validateCarBody = (req, res, next) => {
  const carData = req.body;
  let errors = [];

  if (!carData.VIN || carData.VIN === "") {
    errors = [...errors, "Please enter a VIN number"];
  }

  if (!carData.make || carData.make === "") {
    errors = [...errors, "Please enter a vehicle Make"];
  }

  if (!carData.model || carData.model === "") {
    errors = [...errors, "Please enter a vehicle Model"];
  }

  if (!carData.mileage || carData.mileage === "") {
    errors = [...errors, "Please enter a vehicle Mileage"];
  }

  if (errors.length) {
    res.status(400).json({ errors });
  } else {
    next();
  }
};

//* Export Modules
module.exports = {
  validateCarID,
  validateCarBody,
};
