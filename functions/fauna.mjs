import { Conext } from "@netlify/functions";
import { fql, Client } from "fauna";

/**
 *
 * @param req {Request}
 * @param context {Context}
 * @returns {Promise<Response>}
 */
export default async (req, context) => {
  if (req.method !== "POST")
    return new Response(null, { status: 400 });

  const fauna = new Client({
    client_timeout_buffer_ms: process.env.FAUNADB_TIMEOUT,
  });

  const { collection } = await req.json();


  try {
    const query = fql`${collection}.all()`;
    const response = await fauna.query(query);
    console.log(response);
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
