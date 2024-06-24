import { Knex } from "knex";


const migrations_dir = "./data/migrations";
const seeds_dir = "./data/seeds";

const config: { [key: string]: Knex.Config } = {
    development: {
        client: "postgresql",
        connection: {
            database: "attendance_system",
            user: "postgres",
            password: "user",
            port: 5432,
        },
        migrations: { directory: migrations_dir },
        seeds: { directory: seeds_dir },
    },

    server: {
        client: "postgresql",
        connection: {
            database: "attendance_system",
            user: "postgres",
            password: "user",
            host: "139.59.37.77",
            port: 5432,
        },
        migrations: { directory: migrations_dir },
        seeds: { directory: seeds_dir },
    },
};

module.exports = config;
