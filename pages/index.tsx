import type { NextPage } from 'next'
import HomeHeader from '../components/HomeHeader'
import Layout from '../components/Layout'
import Covid19 from '../components/Covid19'
import Presentation from '../components/Presentation'
import Statistics from '../components/Statistics'
import Sports from '../components/Sports'
import Magazine from '../components/Magazine'
import Partners from '../components/Partners'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const { locale, locales, asPath } = useRouter()

  return (
    <Layout>
      <HomeHeader locale={locale as string} active="home" />
      <Presentation locale={locale as string} />
      <Statistics locale={locale as string} />
      <Sports />
      <Covid19 />
      <Magazine />
      <Partners />
    </Layout>
  )
}

export default Home
