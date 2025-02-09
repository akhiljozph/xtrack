import { Sequelize } from "sequelize";

const RDBMS_USERNAME = process.env.RDBMS_USERNAME || 'postgres';
const RDBMS_HOSTNAME = process.env.RDBMS_HOSTNAME || 'localhost';
const RDBMS_DATABASE = process.env.RDBMS_DATABASE || 'ex-tracker';
const RDBMS_PASSWORD = process.env.RDBMS_PASSWORD || 'admin';
const RDBMS_PORT = process.env.RDBMS_PORT || 5432;

const sequelizeDBConfig = new Sequelize(RDBMS_DATABASE, RDBMS_USERNAME, RDBMS_PASSWORD, {
    host: RDBMS_HOSTNAME,
    dialect: 'postgres',
    port: Number(RDBMS_PORT),
});

async function connectToDatabase() {
    try {
        sequelizeDBConfig.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default connectToDatabase;