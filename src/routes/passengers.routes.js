import { Router } from "express";
import { postPassenger } from "../controllers/passenger.controller.js"
import { validateSchema} from "../middleware/validateSchema.middleware.js"
import { passengersSchema } from "../schemas/passengers.schema.js";


const passengersRouter = Router()

passengersRouter.post("/passengers", validateSchema(passengersSchema), postPassenger)
passengersRouter.get("/passengers/travels")

export default passengersRouter