import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json';


interface Challenge {
    type: 'body' | 'eye',
    description: string,
    amount: number

}
interface ChallengesContextData {
    level: number,
    currentExperience: number,
    experienceToNextLevel: number,
    challengesCompleted: number,
    activeChallenge: Challenge,
    levelUp: ()=> void,
    startNewChallenges: ()=> void,
    resetChallenge: () => void,
    completedChallenge: () => void,
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


    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


    // Vai ser executado uma unica vez
    useEffect(() => {
        Notification.requestPermission();
    }, [])



    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenges() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio', {
             body: `Valendo ${ challenge.amount }xp`,   
            })
        }
    }


    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completedChallenge(){
       if(!activeChallenge) {
           return;
       }

       const { amount } = activeChallenge;

       let finalExperience = currentExperience + amount;
       
       if(finalExperience > experienceToNextLevel){
        finalExperience = finalExperience - experienceToNextLevel
        levelUp()
       }

       setCurrentExperience(finalExperience);
       setActiveChallenge(null);
       setChalengesCompleted(challengesCompleted + 1)

    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperience,
                experienceToNextLevel,
                challengesCompleted,
                activeChallenge,
                levelUp,
                startNewChallenges,
                resetChallenge,
                completedChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}