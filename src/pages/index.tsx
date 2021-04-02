import React from "react";
import { SignInButton } from "../components/SignInButton/SignInButton";
import { LoginProvider } from "../contexts/LoginContext";
import { GetServerSideProps } from 'next'
import styles from '../styles/pages/Login.module.css';


interface userType {
    "login": "NicholasNeto",
    "avatar_url": string,
    "type": "User",
    "name": null,
    "created_at": "2016-06-02T17:59:23Z",
    "updated_at": "2021-03-31T01:13:51Z"
}

interface LoginProps {
    user: userType
}


export default function Login(props: LoginProps) {

    return (
        <LoginProvider
            user={props.user}
        >
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
        </LoginProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { user } = ctx.req.cookies;

    return {
        props: {
            user: JSON.parse(user)
        }
    }
}