/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("noticeboard", (table) => {
        table.increments("id").notNullable().primary().unique();
        table.string("title").notNullable();
        table.text("content");
        table.date("posted_date").notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("noticeboard");
};
