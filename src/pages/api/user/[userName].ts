import {NextApiRequest, NextApiResponse} from 'next'


export default function Login(request: NextApiRequest, response: NextApiResponse){
    
    
    console.log(request.query)
     const user = {
        id: 1, name: 'Nicholas'
    }

    return response.json(user)

}