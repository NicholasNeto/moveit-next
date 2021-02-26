import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';


interface Challenge {
    type: 'body' | 'eye',
    description: string,
    amount: number

}
interface ChallengesContextData {
    level: number,
    currentExperience: number,
    challengesCompleted: number,
    activeChallenge: Challenge,
    levelUp: ()=> void,
    startNewChallenges: ()=> void,
}

interface ChallengesProviderProps {
    children: ReactNode
}


export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChalengesCompleted] = useState(0)

    const [activeChallenge, setActiveChallenge] = useState(null)


    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenges() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]
        console.log(challenge)
        console.log('New Challenge')
        setActiveChallenge(challenge)
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                activeChallenge,
                levelUp,
                startNewChallenges
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}