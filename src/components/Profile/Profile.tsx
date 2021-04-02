
import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import { LoginContext } from '../../contexts/LoginContext'
import styles from './Profile.module.css'

export function Profile() {

    const { level } = useContext(ChallengesContext)
    const { user } = useContext(LoginContext)

    console.log('user', user)

    return (
        <div className={styles.profileContainer}>
            <img src={ user && user.avatar_url} alt={user && user.login} />
            <div>
               {user &&  <strong>{user.name ? user.name : user.login}</strong>}
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level}</p>
            </div>
        </div>
    )
}