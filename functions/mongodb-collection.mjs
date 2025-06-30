import { connectToDatabase } from './lib/mongodb.js';

/**
 *
 * @param req {Request}
 * @param context {import('@netlify/functions').Context}}
 * @returns {Promise<Response>}
 */
// eslint-disable-next-line no-unused-vars
export default async (req, context) => {
  if (req.method !== "POST")
    return new Response(null, { status: 400 });

  try {
    const { collection } = await req.json();
    
    if (!collection) {
      return new Response(JSON.stringify({ error: 'Collection name is required' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { db } = await connectToDatabase();
    const collectionData = await db.collection(collection).find({}).toArray();
    
    console.debug("MongoDB response:", collectionData);
    
    return new Response(JSON.stringify(collectionData), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  catch (error) {
    console.error('MongoDB collection error:', error);
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 