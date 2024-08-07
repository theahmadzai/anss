import { fql, Client } from "fauna";
import { StatusCodes } from "http-status-codes";

/**
 *
 * @param req {Request}
 * @param context {import('@netlify/functions').Context}}
 * @returns {Promise<Response>}
 */
export default async (req, context) => {
  if(req.method !== "POST")
    return new Response(null, { status: 505 });

  // should be an array of members, with the primary applicant first
  const clients = await req.json();
  const services = clients[0]?.services ?? [];
  const clientIds = [];
  try
  {
    const fauna = new Client();
    for(const client of clients)
    {
      console.log("creating client:", client);
      const { firstName, lastName, sex, phone, uci, email, legalStatus, notes, birthdate, } = client;
      const query = fql`Client.create({
        firstName: ${firstName},
        lastName: ${lastName},
        sex: ${sex},

        email: ${email},
        phoneNumber: ${phone},
        uci: ${uci},

        legalStatus: LegalStatus.byId(${legalStatus}),

        // birthdate is string from dayjs.toString ISO format: "2020-01-01T00:00:00.000Z"
        birthdate: Date.fromString(${birthdate.split('T')[0]}),

        requestedServices: Service.where(service => {${services}.includes(service.name)}).toArray(),
        notes: ${notes ?? null},
        })`;
      const data = await fauna.query(query);
      clientIds.push(data.data.id);
      console.log("created client success:", data);
    }

    const query = fql`ClientGroup.create({
      clients: Client.where(client => {${clientIds}.includes(client.id)}).toArray(),
    })`;

    const data = await fauna.query(query);
    console.log("successfully created client group:", data);
    return new Response(JSON.stringify(data), { status: StatusCodes.OK });
  }
  catch(error)
  {
    // console.dir(error);
    const type = error.code;
    const name = error.name;
    const code = error.httpStatus;
    const summary = error?.queryInfo?.summary ?? error.message;
    const stack = error.stack;
    console.error(`(${type}) ${name}: ${code}\n\n${summary}`);
    console.error(stack);
    // rollback any created clients
    const fauna = new Client();
    const query = fql`Client
      .where(client => {${clientIds}.includes(client.id)})
      .forEach(client => client.delete())`;
    fauna.query(query);
    return new Response(null, { status: 400 });
  }
};

