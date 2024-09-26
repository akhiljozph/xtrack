import Koa from "koa";
import 'dotenv/config';
import mongoose from "mongoose";

import logger from "./common/logger/logger";

const app = new Koa();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || "";

app.use(async (ctx) => {
    ctx.body = "Hello World";
});

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(DB_URI);
        logger.info(`Successfully Connected to MongoDB`);
    } catch (error) {
        logger.error(error);
    }
}

connectDB();

app.listen(PORT, () => {
    logger.info(`Ex-tracker is running on port ${PORT}`)
});
