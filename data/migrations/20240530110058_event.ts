/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("events", (table) => {
        table.increments("event_id").notNullable().primary().unique();
        table.string("title").notNullable();
        table.text("description");
        table.boolean("is_holiday").notNullable().defaultTo(false);
        table.date("date").notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("events");
};
