import { query as q } from 'faunadb'
import { fauna } from "../../../services/fauna";


export async function saveChallenge() {

    const challegeData = {
        'id': 'teste',
        "type": "body",
        "description": "Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.",
        "amount": 80
        // status: 
    }

    await fauna.query(
        q.Create(
            q.Collection('challeges'),
            { data: challegeData, }
        )
    )
}