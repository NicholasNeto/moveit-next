import { useContext, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import styles from './SignInButton.module.css'
import { useRouter } from 'next/router'


export function SignInButton() {
    const [user, setUser] = useState('')
    const router = useRouter()
    const { handleChangeUser } = useContext(LoginContext)

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`https://api.github.com/users/${user}`)
            .then(reposnse => reposnse.json())
            .then(data => handleChangeUser(data))
            .then(() => router.push('/home'))
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
                <button type="submit">
                    <img src="icons/arrow-right.svg" alt="logo" />
                </button>
            </form>
        </>





    )
}
