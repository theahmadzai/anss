const functions = {
    "add-client": "/functions/add-client.mjs",
    "fauna": "/functions/fauna.mjs",
};

for(const [key, value] of Object.entries(functions))
{
    //remove file extension
    const path = value.split(".")[0];
    functions[key] = `/.netlify${path}`;
}

export const faunaMethods = {
    /** post body: {method: "COLLECTION", data: <collection_name>} */
    COLLECTION: "COLLECTION",
    /** post body: {method: "QUERY", data: <query_string>} */
    QUERY: "QUERY",
    /** post body: {method: "DELETE", data: {collection: <collection_name>, id: <id>}}} */
    DELETE: "DELETE",
};

export const functionsPath = functions;

export default functions;