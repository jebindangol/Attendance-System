/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("attendance", (table) => {
        table.increments("attendance_id").notNullable().primary().unique();
        table.date("date").notNullable();
        table.string("status").notNullable(); 
        table.integer("user_id").unsigned().notNullable(); 
        table.foreign("user_id").references("id").inTable("users"); 
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("attendance");
};
