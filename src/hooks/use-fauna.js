import { useEffect, useState } from "react";
import netlifyFunctions from "../utils/netlify-functions-path";

async function getFaunaCollection(collection) {
    const response = await fetch(netlifyFunctions.fauna, {
        method: "POST",
        body: JSON.stringify({ collection }),
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

export function useFaunaCollection(collection) {
    /** @type {[undefined | unknown[], React.Dispatch<React.SetStateAction<undefined | unknown[]>]} */
    const [data, setData] = useState([]);
    useEffect(() => {
        getFaunaCollection(collection).then(setData);
    }, [collection, setData]);
    return data;
}

export default {
    useCollection: useFaunaCollection
};