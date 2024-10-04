import 'dotenv/config';
import Koa from "koa";
import mongoose from "mongoose";
import bodyParser from "koa-bodyparser";

import logger from "./common/logger/logger";
import router from "./routes";

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || "";

const app = new Koa();

app.use(router.routes());
app.use(bodyParser());
app.use(async (ctx) => {
    ctx.body = `
        <section style='height:calc(100vh - 16px);display:flex;align-items:center;justify-content:center;'>
            <label style='font-family:congenial;font-size:64px;font-weight:700;'>Welcome to Ex Tracker!</label>
        </section>
    `;
});

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        logger.info(`Successfully Connected to MongoDB`);
    } catch (error) {
        logger.error(error);
    }
}

connectDB();

app.listen(PORT, () => {
    logger.info(`Ex-tracker is running on port ${PORT}`)
});
