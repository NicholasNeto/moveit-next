
import styles from '../styles/pages/Login.module.css';

export function Login() {

    return (
        <div className={styles.loginContainer}>
            <section>
                <div>
                    <img src="icons/backgraund.svg" alt="logo" />
                </div>
                <div>
                    <img src="logo-full-white.svg" alt="logo" />
                    <h1>Bem vindo</h1>
                    <div className={styles.loginGithub}>
                        <img src="icons/github.svg" alt="logo" />
                        <p>Faça login com seu Github para começar</p>
                    </div>
                    <div className={styles.loginInputData}>
                        <input type="text" placeholder="Digite seu username" />
                        <button>
                            <img src="icons/teste.svg" alt="logo" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}