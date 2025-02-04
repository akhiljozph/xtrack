import Router from "koa-router";
import authRoutes from "./auth.routes";
import filterRoutes from "./filter.routes";

const router = new Router();

router.use("/auth", authRoutes.routes());
router.use("/filter", filterRoutes.routes());

export default router;