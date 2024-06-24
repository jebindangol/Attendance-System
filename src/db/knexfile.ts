// USED AT RUN TIME
export const development = {
    client: "postgresql",
    connection: {
        database: "attendance_system",
        user: "postgres",
        password: "user",
        // password: "9861",
        port: 5432,
        // host: "139.59.37.77",
        host: "localhost",
    },
    /*
     * FOR LOCAL DEV
     * connection: {
     *     host: "localhost",
     *     database: "recsdb_mock",
     *     user: "postgres",
     *     // password: "SpaceLogic#Zer0",
     *     password: "9861",
     *     port: 5432,
     * },
     */
    migrations: { directory: "../../data/migrations" },
    seeds: { directory: "../../data/seeds" },
};

export const server = {
    client: "postgresql",
    connection: {
        database: "attendance_system",
        user: "postgres",
        password: "user",
        host: "192.168.1.2",
    },
    migrations: { directory: "../data/migrations" },
    seeds: { directory: "../data/seeds" },
};

export const knexConfig = {
    client: "postgresql",
    connection: {
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        port: process.env.DB_PORT,
    },
    migrations: { directory: "../../data/migrations" },
    seeds: { directory: "../../data/seeds" },
};
