import { Dialect, Sequelize } from "sequelize";

const settings = {
    host: "localhost",
    dialect: "postgres" as Dialect
};

const sequelize = new Sequelize("DATABASE", "USERNAME", "PASSWORD", settings);

export default sequelize;
