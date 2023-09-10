import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.middleware.js"
import { postNewCity } from "../controllers/cities.controllers.js";
import { citiesSchema } from "../schemas/cities.schema.js"
 

const cityRouter = Router();

cityRouter.post('/cities', validateSchema(citiesSchema), postNewCity);

export default cityRouter;


