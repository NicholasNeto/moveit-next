import { useState } from "react";
import { signIn } from 'next-auth/client'
import styles from './SignInButton.module.css'

export function SignInButton() {
    const [user, setUser] = useState('')
    
    
    function handleSubmit(event) {
        event.preventDefault();
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
