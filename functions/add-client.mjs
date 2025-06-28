//import { Conext } from "@netlify/functions";
import { connectToDatabase } from './lib/mongodb.js';

/**
 *
 * @param req {Request}
 * @param context {Context}
 * @returns {Promise<Response>}
 */
export default async (req, context) => {
  if (req.method !== "POST")
    return new Response(null, { status: 405 });

  const { firstName, lastName, sex, phone, email, services, legalStatus } = await req.json();

  try {
    const { db } = await connectToDatabase();
    // Insert the new client into the "Client" collection
    const result = await db.collection('Client').insertOne({
      firstName,
      lastName,
      sex,
      phone,
      email,
      legalStatus,
      services,
      joinedDate: new Date(),
    });

    return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
};
