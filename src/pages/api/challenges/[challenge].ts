import { query as q } from 'faunadb'
import { NextApiRequest, NextApiResponse } from 'next'
import { fauna } from '../../../services/fauna'



type challengeData = {
    type: string,
    challenge: string,
    amount: number,
  }


export default async (req: NextApiRequest, response: NextApiResponse) => {
    console.log('req ------------> ', req.body) 
    
    if (req.method === 'POST') {
        const challengeData = req.body    
        console.log('DENTRO DO POST')
        await fauna.query(
            q.Create(
                q.Collection('challenges'),
                { data: challengeData, }
            )
        )
        
        return response.status(200).json({ ok: true })
    } else {
        response.setHeader('Allow', 'POST');
        response.status(405).end('Method not allowed');
    }
}