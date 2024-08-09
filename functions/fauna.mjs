import { fql, Client } from "fauna";
import { faunaMethods } from "../src/utils/netlify-functions-path";
import { StatusCodes } from 'http-status-codes';

/**
 *
 * @param req {Request}
 * @param context {import('@netlify/functions').Context}}
 * @returns {Promise<Response>}
 */
export default async (req, context) => {
  if(req.method !== "POST")
    return new Response(null, { status: 400 });

  const fauna = new Client();

  const { method, data } = await req.json();


  let response, code;
  try
  {
    switch(method)
    {
      case faunaMethods.COLLECTION: {
        const collection = data;
        // collection name needs to be inserted before parsed by fql template function
        // if not then it's inserted as a string literal
        const collectionQuery = collection + ".all()";
        const query = fql([collectionQuery]);
        response = await fauna.query(query);
        console.debug("initial response", response);
        console.debug("data:", response.data.data);
        response = response.data.data;
        break;
      }
      case faunaMethods.QUERY:
        {
          const query = data;
          response = await fauna.query(fql([query]));
          console.debug("initial response", response);
          console.debug("data:", response.data.data);
          response = response.data.data;
          break;
        }
      default:
        break;
    }
    code = StatusCodes.OK;

  }
  catch(error)
  {
    const type = error.code;
    const name = error.name;
    const errCode = error.httpStatus;
    const summary = error?.queryInfo?.summary ?? error.message;
    const stack = error.stack;
    console.error(`(${type}) ${name}: ${errCode}\n\n${summary}`);
    console.error(stack);
    response = { error: { type, name, errCode, summary, stack } };
    code = StatusCodes.BAD_REQUEST;
  }
  return new Response(JSON.stringify(response), { status: code });
};
