import { NEXT_URL } from "../../config";
import clientPromise from "../../libs/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("node-tuts");
  switch (req.method) {
    case "GET":
      const allBlogs = await db.collection("blogs").find({}).toArray();
      res.json({ status: 200, data: allBlogs });
      break;
  }
}

export async function getData() {
  const response = await fetch(`${NEXT_URL}/api/blogs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*'
    }
  })
  const jsonData = await response.json()
  return jsonData
}
