
import { Client } from "pg";
import { Sequelize } from "sequelize";

// const dbClient = new Client({
//     user: process.env.RDBMS_USERNAME,
//     host: process.env.RDBMS_HOSTNAME,
//     database: process.env.RDBMS_DATABASE,
//     password: process.env.RDBMS_PASSWORD,
//     port: Number(process.env.RDBMS_PORT),
// });

const dbClient = new Sequelize(process.env.RDBMS_DATABASE || 'ex-tracker', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

export default dbClient;