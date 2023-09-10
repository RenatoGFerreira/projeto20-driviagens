function conflict(resource = "Item") {
    return {
        type: "conflict", 
        message: resource==="Origin" ? "[ERRO] Você não pode escolher o destino igual ao local de origem" : `${resource} já existe!`
    }
}

function notFound (resource = "Item") {
    return {
        type: "notFound",
        message: `${resource} [ERRO] Não encontrado!`
    }
}

function unprocessableEntity ( resource = "Item", err ) {
    return {
        type: "unprocessableEntity",
        message: resource === "Flight" ? "[ERRO] A data do seu voo deve ser posterior a data presente." : resource === "Schema" ? err : ""
    }
}


export const errors = { conflict, notFound, unprocessableEntity }