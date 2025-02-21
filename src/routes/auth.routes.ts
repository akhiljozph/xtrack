import Router from "koa-router";

const authRoutes = new Router();

authRoutes.post('/registration', async(ctx) => {

    const userData: any = ctx.request.body;

    if (userData) {
        ctx.body = { message: "Registrations successfully completed!"}
        ctx.status = 201;
    }

    ctx.body = { message: "Registrations not completed!"}
    ctx.status = 500;
});

authRoutes.post('/create/password', async(ctx) => {
    ctx.body = { message: "Hello from authRoutes."}
});

authRoutes.post('/create/password', async(ctx) => {
    ctx.body = { message: "Hello from authRoutes."}
});

authRoutes.get('/login', async(ctx) => {
    ctx.body = { message: "Hello from authRoutes."}
});

export default authRoutes;