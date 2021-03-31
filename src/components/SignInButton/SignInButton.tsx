import { useState } from "react";
import Login from "../../pages/api/user/[userName]";
import styles from './SignInButton.module.css'


export function SignInButton() {
    const [user, setUser] = useState()



    function handleSubmit(event) {
        event.preventDefault();
        fetch(`https://api.github.com/users/${user}`)
        .then(reposnse => reposnse.json())
        .then(data => setUser(data))
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
