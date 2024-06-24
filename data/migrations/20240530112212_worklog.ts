/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("worklog", (table) => {
        table.increments("worklog_id").notNullable().primary().unique();
        table.integer("attendance_id").notNullable(); // Assuming attendance_id is a foreign key
        table.date("date").notNullable();
        table.text("task_description").notNullable();
        table.integer("employee_id").notNullable(); // Assuming employee_id is a foreign key
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("worklog");
};
