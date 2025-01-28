import { Dialect, Sequelize } from "sequelize";

const settings = {
    host: "localhost",
    dialect: "postgres" as Dialect
};

const sequelize = new Sequelize("ex-tracker", "postgres", "admin", settings);

export default sequelize;
