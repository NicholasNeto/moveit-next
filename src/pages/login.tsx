
import styles from '../styles/pages/Login.module.css';

export function Login() {

    return (
        <div className={styles.loginContainer}>
            <img src="logo-full-white.svg" alt="logo" />
            <h1>Bem vindo</h1>
            <p>Faça login com seu Github para começar</p>
            <div>
                <input   name="phone" placeholder="Digite seu username"/>
                <button><img src="icons/teste.svg" alt="logo" /></button>
            </div>
        </div>
    )
}