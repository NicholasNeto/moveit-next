
import React from "react";
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { CompletedChallenges } from "../components/CompletedChallenges/CompletedChallenges";
import { Countdown } from "../components/Countdown/Countdown";
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";
import { Profile } from "../components/Profile/Profile";
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox";
import { Menu } from "../components/menu/Menu";
import { PlusChallenges } from "../components/PlusChallenges/PlusChallenges";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { PlusChallegeProvider } from "../contexts/PlusChallegeContext";
import styles from '../styles/pages/Home.module.css'

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >

      <PlusChallegeProvider>
        <Menu />
        <PlusChallenges />
      </PlusChallegeProvider>
      <div className={styles.container}>
        <Head>
          <title>Inicio | Moveit</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
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

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
