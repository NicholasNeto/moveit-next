import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie'
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
    level: number,
    currentExperience: number,
    challengesCompleted: number,
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider(
    { 
    children, ...rest }: ChallengesProviderProps) {
    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
    const [challengesCompleted, setChalengesCompleted] = useState(rest.challengesCompleted ?? 0)

    const [activeChallenge, setActiveChallenge] = useState(null)


    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


    // Vai ser executado uma unica vez
    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));

    }, [level, currentExperience, challengesCompleted])

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenges() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

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