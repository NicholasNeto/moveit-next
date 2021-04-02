import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie'

interface userType {
    "login": "NicholasNeto",
    "avatar_url": string,
    "type": "User",
    "name": null,
    "created_at": "2016-06-02T17:59:23Z",
    "updated_at": "2021-03-31T01:13:51Z"
}


interface LoginContextData {
    user: userType
    handleChangeUser: (user: userType) => void
}

interface LoginProviderProps {
    children: ReactNode;
    user?: userType;
}

export const LoginContext = createContext({} as LoginContextData)

export function LoginProvider({ children, ...rest }: LoginProviderProps) {

    const [user, setUser] = useState(rest.user ?? {} as userType)

    useEffect(() => {
        Cookies.set('user', JSON.stringify(user));
    }, [user])

    function handleChangeUser(data) {
        setUser(data)
    }

    return (
        <LoginContext.Provider
            value={{
                user,
                handleChangeUser
            }}>
            {children}
        </LoginContext.Provider>
    )
}