import {NextApiRequest, NextApiResponse} from 'next'


export default function Login(request: NextApiRequest, response: NextApiResponse){
    
     const user = {
        id: 1, name: 'Nicholas'
    }

    return response.json(user)

}