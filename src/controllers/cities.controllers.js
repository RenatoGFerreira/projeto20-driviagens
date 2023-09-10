import { cityService } from "../services/cities.service.js";

export async function postNewCity ( req, res ) {
    const { name } = req.body;

    await cityService.postNewCity(name);

    return res.sendStatus(200)
}