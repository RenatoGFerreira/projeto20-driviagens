import { Router } from "express";
import passengersRouter from "./passengers.routes.js"
import cityRouter from "./cities.routes.js";


const router = Router();

router.use(passengersRouter);
router.use(cityRouter)

export default router;