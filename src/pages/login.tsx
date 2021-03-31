import React from "react";
import { SignInButton } from "../components/SignInButton/SignInButton";
import styles from '../styles/pages/Login.module.css';

export default function Login() {

    return (
        <div className={styles.loginContainer}>
            <section>
                <div>
                    <img src="background-login-page.svg" alt="background login page" />
                </div>
                <div>
                    <img src="logo-full-white.svg" alt="logo" />
                    <h1>Bem vindo</h1>
                    <div className={styles.loginGithub}>
                        <img src="icons/github.svg" alt="logo" />
                        <p>Faça login com seu Github para começar</p>
                    </div>

                    <SignInButton />

                </div>
            </section>
        </div>
    )
}