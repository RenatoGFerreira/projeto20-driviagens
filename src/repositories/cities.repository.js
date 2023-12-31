import { db } from "../db/db.js"

async function isCityExisting ( name ) {
    const query = `
        SELECT name FROM cities WHERE name=$1;
    `
    return db.query(query, [name]);
}

async function insertNewCity ( name ) {
    const query = `
        INSERT INTO cities (name) VALUES ($1);
    `
    return db.query(query, [name]);
}

export const cityRepository = { 
    insertNewCity,
    isCityExisting
};