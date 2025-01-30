
import { Client } from "pg";

const dbClient = new Client({
    user: process.env.RDBMS_USERNAME,
    host: process.env.RDBMS_HOSTNAME,
    database: process.env.RDBMS_DATABASE,
    password: process.env.RDBMS_PASSWORD,
    port: Number(process.env.RDBMS_PORT),
});

export default dbClient;