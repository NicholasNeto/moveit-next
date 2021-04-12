import { createContext, ReactNode, useState } from 'react';

interface PlusChallegeData {
    show: boolean;
    handleAddChallege: (data: boolean) => void;
}
interface PlusChallegeProviderProps {
    children: ReactNode;
}

export const PlusChallegeContext = createContext({} as PlusChallegeData)

export function PlusChallegeProvider({ children, ...rest }: PlusChallegeProviderProps) {

    const [show, setShow ]= useState(false)

    function handleAddChallege(data) {
        setShow(data)
    }

    return (
        <PlusChallegeContext.Provider
            value={{
                show,
                handleAddChallege
            }}>
            {children}
        </PlusChallegeContext.Provider>
    )
}