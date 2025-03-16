import Router from "koa-router";

import { Context } from "koa";
import { userRegistrationHandler } from "../middleware/auth.middleware";

const authRoutes = new Router();

authRoutes.post('/registration', async (ctx: Context) => {

    const user = userRegistrationHandler(ctx);

});

authRoutes.post('/create/password', async (ctx) => {
    ctx.body = { message: "Hello from authRoutes." }
});

authRoutes.post('/create/password', async (ctx) => {
    ctx.body = { message: "Hello from authRoutes." }
});

authRoutes.get('/login', async (ctx) => {
    ctx.body = { message: "Hello from authRoutes." }
});

export default authRoutes;