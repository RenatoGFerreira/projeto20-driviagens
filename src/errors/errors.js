function conflict(resource = "Item") {
    return {
        type: "conflict", 
        message: resource==="Origin" ? "[ERRO] A Origem e o destino precisam ser diferentes" : `${resource} já registrada!`
    }
}

function notFound (resource = "Item") {
    return {
        type: "notFound",
        message: `${resource} não foi encontrado!`
    }
}

function unprocessableEntity ( resource = "Item", err ) {
    return {
        type: "unprocessableEntity",
        message: resource === "Flight" ? "[ERRO] A data deve ser maior que a data de hoje" : resource === "Schema" ? err : resource === "Dates" ? "bigger-date e smaller-date devem ser passados juntos" : ""
    }
}

function badRequest ( resource = "Item" ) {
    return {
        type: "badRequest",
        message: resource==="Date" ? `[ERRO] É impossível viajar com estas datas` : ""
    }
}

function internalServerError ( resource = "Item" ) {
    return {
        type: "internalServerError",
        message: "Existem muitos resultados"
    }
}


export const errors = { conflict, notFound, unprocessableEntity, badRequest, internalServerError }