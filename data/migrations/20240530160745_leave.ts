import { Knex } from "knex";

/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("leave", (table) => {
        table.increments("leave_id").notNullable().primary().unique();
        table.integer("user_id").unsigned().notNullable();
        table.foreign("user_id").references("user_id").inTable("people");
        table.date("date").notNullable();
        table.string("reason").notNullable();
        table.timestamps(true, true);
    });
}

/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("leave");
}
