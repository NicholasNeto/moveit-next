import {NextApiRequest, NextApiResponse} from 'next'


export default function Login(request: NextApiRequest, response: NextApiResponse){
    
    const { pid } = request.query
    console.log(pid)
     const user = {
        id: 1, name: 'Nicholas'
    }

    return response.json(user)

}