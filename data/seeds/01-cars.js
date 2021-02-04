exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "V12345",
          make: "BMW",
          model: "M3",
          mileage: "2000",
          transmissionType: "Manual",
          titleStatus: "Import",
        },
        {
          VIN: "V54321",
          make: "Cadillac",
          model: "ATS Coupe",
          mileage: "5100",
          transmissionType: "Automatic",
          titleStatus: "",
        },
        {
          VIN: "V67890",
          make: "Ford",
          model: "Edge",
          mileage: "6700",
          transmissionType: "",
          titleStatus: "",
        },
      ]);
    });
};
