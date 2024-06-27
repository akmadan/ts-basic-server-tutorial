import { Router } from "express";
import calciRouter from "./calculator.routes";

const router = Router();

router.use("/calci", calciRouter )

export default router;