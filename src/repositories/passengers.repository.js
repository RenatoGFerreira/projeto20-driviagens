import { db } from "../db/db.js"

function postPassenger ( firstName, lastName ) {
    const query = 'INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)'
    return db.query(query, [ firstName, lastName ])
}

export const passengersRepository = { postPassenger };