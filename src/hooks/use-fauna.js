import { useEffect, useState } from "react";
import netlifyFunctions, { faunaMethods } from "../utils/netlify-functions-path";

/**
 * @param {any} data
 * @param {keyof typeof faunaMethods} method
 * */
async function fetchFauna(method, data) {
    const response = await fetch(netlifyFunctions.fauna, {
        method: "POST",
        body: JSON.stringify({ method, data }),
    });
    try
    {
        return await response.json();
    }
    catch(e)
    {
        console.error(e);
        return undefined;
    }
}

/** @param {string} collection  */
export function useFaunaCollection(collection) {
    /** @type {[undefined | unknown[], React.Dispatch<React.SetStateAction<undefined | unknown[]>]} */
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchFauna(faunaMethods.COLLECTION, collection).then(setData);
    }, [collection, setData]);
    return data;
}

/**
 * @param { string} collectionQuery fql query that should return a set, array, or document type
 * @returns {any[] | undefined}
 * */
export function useFaunaQuery(collectionQuery) {
    /** @type {[undefined | unknown[], React.Dispatch<React.SetStateAction<undefined | unknown[]>]} */
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchFauna(faunaMethods.QUERY, collectionQuery).then(setData);
    }, [collectionQuery, setData]);
    return data;
}

export default {
    useCollection: useFaunaCollection
};