import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { LeaderBoard } from '../components/LeaderBoard';

import { ChallengesProvider } from '../context/ChallengesContext';
import { CountdownProvider } from '../context/CountdownContext';

import { SideBar } from '../components/SideBar';
import { useSession } from 'next-auth/client';

import styles from '../styles/pages/Home.module.css';
import Login from './login';
import { SideBarContext, SideBarProvider } from '../context/SideBarContext';
import { useContext } from 'react';


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {

  const [session] = useSession();
  const { isHome } = useContext(SideBarContext);

  return (

    <div className='Main'>
      {session ?
        <ChallengesProvider
          level={props.level}
          currentExperience={props.currentExperience}
          challengesCompleted={props.challengesCompleted}

        >
          <SideBarProvider>
            <div className={styles.container}>
              <Head>
                <title> Inicio | Move.it</title>
              </Head>

              <SideBar />
              {!isHome ?     //AINDA NÃO SEI COMO MUDAR DE PAGINA E MANTER O VALOR DE ISHOME
                <>
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
                </> :
                <>
                  <LeaderBoard />
                </>
              }

            </div>
          </SideBarProvider>
        </ChallengesProvider>
        :
        <Login />
      }
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0)
    }
  }
}
