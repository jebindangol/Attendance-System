/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("people", function(table) {
    table.increments("user_id").notNullable().primary().unique();
    table.string("name").notNullable();
    table.string("contact_info");
    table.string("role").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("people");
};
