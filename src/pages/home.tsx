
import React from "react";
import { GetServerSideProps } from 'next'
import { CompletedChallenges } from "../components/CompletedChallenges/CompletedChallenges";
import { Countdown } from "../components/Countdown/Countdown";
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";
import { Profile } from "../components/Profile/Profile";

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox";

import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { LoginProvider } from "../contexts/LoginContext";

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  user: {}
}


export default function Home(props: HomeProps) {

  console.log(props);
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>

        <Head>
          <title>Inicio | Moveit</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <LoginProvider user={props.user}>
                <Profile />
              </LoginProvider>
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted, user } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      user: JSON.parse(user)
    }
  }
}
