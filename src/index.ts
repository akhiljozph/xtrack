import Koa from "koa";
import 'dotenv/config';
import mongoose from "mongoose";

import logger from "./common/logger/logger";

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(async (ctx) => {
    ctx.body = "Hello World";
});

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/ex-tracker`);
        logger.info(`Successfully Connected to MongoDB`);
    } catch (error) {
        logger.error(error);
    }
}

connectDB();

app.listen(PORT, () => {
    logger.info(`Ex-tracker is running on port ${PORT}`)
});
