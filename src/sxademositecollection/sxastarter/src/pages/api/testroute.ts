import type { NextApiRequest, NextApiResponse } from 'next'

export default function Hndler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'GET') {
    res.status(200).json({ name: 'Hello world from the API' })
  }
}