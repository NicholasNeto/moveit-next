import { createContext, useState, ReactNode } from 'react'




interface ChallengesContextData {
    level: number,
    currentExperience: number,
    challengesCompleted: number,
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


    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenges() {
        console.log('New Challenge')
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                levelUp,
                startNewChallenges
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}