//* Import DB config file
const db = require("../../data/db-config");

//* Function to get all results
function getAllCars() {
  return db("cars");
}

//* Function to get car by id
function getByID(id) {
  return db("cars").where({ id });
}

//* Function to create an entry
function create(car) {
  return db("cars")
    .insert(car)
    .then((id) => {
      return getByID(id);
    });
}

//* Function to update car entry
function update(id, changes) {
  return db("cars")
    .where({ id })
    .update(changes)
    .then(() => {
      return getByID(id);
    });
}

//* Function to delete a record
function remove(id) {
  return db("cars").where({ id }).del();
}

//* Export Modules
module.exports = {
  getAllCars,
  getByID,
  create,
  update,
  remove,
};
