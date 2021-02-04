exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "",
          make: "",
          model: "",
          mileage: "",
          transmissionType: "",
          titleStatus: "",
        },
        {
          VIN: "",
          make: "",
          model: "",
          mileage: "",
          transmissionType: "",
          titleStatus: "",
        },
        {
          VIN: "",
          make: "",
          model: "",
          mileage: "",
          transmissionType: "",
          titleStatus: "",
        },
      ]);
    });
};
