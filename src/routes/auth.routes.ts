import Router from "koa-router";

const authRoutes = new Router();

authRoutes.get('/hello', async(ctx) => {
    ctx.body = { message: "Hello from authRoutes."}
});

export default authRoutes;