import { errors } from "../errors/errors.js";
import { cityRepository } from "../repositories/cities.repository.js";

async function postNewCity ( name ) {
    const city = await cityRepository.isCityExisting(name);

    if (city.rowCount !== 0) throw errors.conflict("cidade");

    return await cityRepository.insertNewCity(name);
}

export const cityService = { postNewCity }