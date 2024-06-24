import knex from "knex";
import { development, server } from "./knexfile";

const db = knex(process.env.NODE_ENV == "prod" ? server : development);
export default db;
