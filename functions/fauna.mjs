import { fql, Client } from "fauna";

/**
 *
 * @param req {Request}
 * @param context {import('@netlify/functions').Context}}
 * @returns {Promise<Response>}
 */
export default async (req, context) => {
  if (req.method !== "POST")
    return new Response(null, { status: 400 });

  const fauna = new Client();

  const { collection } = await req.json();


  try {
    // collection name needs to be inserted before parsed by fql template function
    // if not then it's inserted as a string literal
    const collectionQuery = collection + ".all()";
    const query = fql([collectionQuery]);
    const response = await fauna.query(query);
    console.debug("initial response", response);
    console.debug("data:", response.data.data)
    return new Response(JSON.stringify(response.data.data))
  }
  catch (error) {
    const type = error.code;
    const name = error.name;
    const code = error.httpStatus;
    const summary = error?.queryInfo?.summary ?? error.message;
    const stack = error.stack;
    console.error(`(${type}) ${name}: ${code}\n\n${summary}`);
    console.error(stack);
    return new Response(null, { status: 400 });
  }
};
