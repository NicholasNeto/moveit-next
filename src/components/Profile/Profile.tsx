
import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import { useSession } from 'next-auth/client'
import styles from './Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)
    const [session] = useSession()

    return session ? (
        <div className={styles.profileContainer}>
            <img src={session.user.image} alt='user image' />
            <div>
                <strong>{session.user.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                Level {level}</p>
            </div>
        </div>
    ) : (
        <div className={styles.profileContainer}>
            <img src="icons/user.svg" alt='user image' />
            <div>
                <strong>Nome Usuario</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level}</p>
            </div>
        </div>
    )
}