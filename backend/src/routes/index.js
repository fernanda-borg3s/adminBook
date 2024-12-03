import { Router } from "express";
import livrosRouter from "./livros.route.js";
const router = Router();

router.use("/livros", livrosRouter);


export default router;