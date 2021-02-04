exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.string("VIN").notNullable();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.decimal("mileage").notNullable();
    tbl.string("transmissionType");
    tbl.string("titleStatus");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExist("cars");
};
