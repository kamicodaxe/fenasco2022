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
  const title = "Jeux FENASCO 2022"
  const desc = "FENASCO 2022 - 22ÉME ÉDITION DES FINALES NATIONALES DES JEUX SCOLAIRES"

  return (
    <Layout locale={locale as string} title={title} desc={desc}>
      <HomeHeader locale={locale as string} active="home" />
      <Presentation locale={locale as string} />
      <Statistics locale={locale as string} />
      <Sports locale={locale as string} />
      <Covid19 />
      <Magazine locale={locale as string} />
      <Partners locale={locale as string} />
    </Layout>
  )
}

export default Home
