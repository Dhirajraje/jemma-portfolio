import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/Contact'
import LandingPage from '../components/landing'
import Resume from '../components/Resume'
import TechStack from '../components/techStack'
import TimeLine from '../components/timeLine'

const Home: NextPage = () => {
  return (
    <>
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <LandingPage />
        <TechStack />
        <TimeLine />
        <Resume />
        <Contact />
      </main>
    </>
  )
}

export default Home
