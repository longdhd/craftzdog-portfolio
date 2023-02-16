import { NEXT_URL } from '../../../config'
import clientPromise from '../../../libs/mongodb'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db('node-tuts')
  switch (req.method) {
    case 'GET':
      const blog = await db.collection('blogs').findOne({
        _id: new ObjectId(req.query.id)
      });
      // res.json({ status: 200, data: blog })
      res.status(200).json(JSON.stringify(blog))
      break;
  }
}

// export async function getBlog(id) {
//   const response = await fetch(`${NEXT_URL}/api/blogs/${id}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       'User-Agent': '*'
//     }
//   })
//   const jsonData = await response.json()
//   return jsonData
// }
