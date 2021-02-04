//* Import knew and knex configuration
const knex = require("knex");
const config = require("../knexfile");

//* Declare a db variable to house knex with the config
const configuredKnex = knex(config.development);

//* Export Module
module.exports = configuredKnex;
