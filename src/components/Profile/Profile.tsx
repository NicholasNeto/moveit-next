
import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import styles from './Profile.module.css'

export function Profile(){

    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/19715382?s=460&u=18725978371c34ecc26ca37f9c058b25587f8070&v=4" alt="Nicholas Neto"/>
            <div>
                <strong>Nicholas Neto</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}</p>
            </div>
        </div>
    )
}