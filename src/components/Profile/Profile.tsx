
import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import { useSession } from 'next-auth/client'
import styles from './Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)
    const [session] = useSession()

    const  user  = session && session.user ?  session.user: {}
    
    return (
        <div className={styles.profileContainer}>
            <img src={user.image} alt={user.name} />
            <div>
                <strong>{user.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level}</p>
            </div>
        </div>
    )
}