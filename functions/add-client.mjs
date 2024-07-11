import { Conext } from "@netlify/functions";
import { fql,Client } from "fauna";

/**
 *
 * @param req {Request}
 * @param context {Context}
 * @returns {Promise<Response>}
 */
export default async (req, context) => {
  if (req.method !== "POST")
    return new Response(null, { status: 505 });

  const fauna = new Client({
    client_timeout_buffer_ms: process.env.FAUNADB_TIMEOUT,
  });

  const { firstName, lastName, sex, phone, email, services, legalStatus } = await req.json();


  try {
    const query = fql`Client.create({
        firstName: ${firstName},
        lastName: ${lastName},
        sex: ${sex},
        phoneNumber: ${phone},
        email: ${email},
        legalStatus: LegalStatus.byName(${legalStatus}),
        requestedServices: Service.where(doc => {${services}.includes(doc.name)}).toArray()
        })`;
    const data = await fauna.query(query);
    console.log(data);
  }
  catch (error) {
    // console.dir(error);
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
