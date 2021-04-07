import React from "react";
import { SignInButton } from "../components/SignInButton/SignInButton";
import { signIn, useSession } from 'next-auth/client'
import styles from '../styles/pages/Login.module.css';
import { useRouter } from 'next/router'

export default function Login() {

    const router = useRouter()
    const [ session ] = useSession()

    if( session ){
        router.push('/home')
    }

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
