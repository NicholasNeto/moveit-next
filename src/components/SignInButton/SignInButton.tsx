import { useContext, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import styles from './SignInButton.module.css'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'


export function SignInButton() {
    const [user, setUser] = useState('')
    const router = useRouter()
    
    function handleSubmit(event) {
        event.preventDefault();
       // router.push('/home')
    }

    function handleChange(event) {
        setUser(event.target.value);
    }

    return (

        < >
            <form onSubmit={handleSubmit} className={styles.loginInputData}>
                <input
                    type="text"
                    value={user}
                    placeholder="Digite seu username"
                    onChange={handleChange} />
                <button type="button" onClick={() => signIn('github')}>
                    <img src="icons/arrow-right.svg" alt="logo" />
                </button>
            </form>
        </>





    )
}
