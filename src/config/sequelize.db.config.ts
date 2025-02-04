import { Sequelize } from "sequelize";

const RDBMS_USERNAME = process.env.RDBMS_USERNAME || '';
const RDBMS_HOSTNAME = process.env.RDBMS_HOSTNAME || '';
const RDBMS_DATABASE = process.env.RDBMS_DATABASE || '';
const RDBMS_PASSWORD = process.env.RDBMS_PASSWORD || '';
const RDBMS_PORT = process.env.RDBMS_PORT || '';

const sequelizeDBConfig = new Sequelize(RDBMS_DATABASE, RDBMS_USERNAME, RDBMS_PASSWORD, {
    host: RDBMS_USERNAME,
    dialect: 'postgres'
});

export default sequelizeDBConfig;