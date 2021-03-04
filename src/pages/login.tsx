
import styles from '../styles/pages/login.module.css';

export function Login() {

    return (
        <div className={styles.loginContainer}>
            <img src="logo-full.svg" alt="logo" />
            <h1>Bem vindo</h1>
            <p>Faça login com seu Github para começar</p>
        </div>
    )
}