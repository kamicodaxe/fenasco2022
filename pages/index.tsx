import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import HomeHeader from '../components/HomeHeader'
import Layout from '../components/Layout'
import Covid19 from '../components/Covid19'
import Presentation from '../components/Presentation'
import Statistics from '../components/Statistics'
import Sports from '../components/Sports'
import Magazine from '../components/Magazine'
import Partners from '../components/Partners'
import { useRouter } from 'next/router'
import { ARTICLE_QUERY_BY_ID, IArticle, IData, request } from '../lib/datocms'
import Link from 'next/link'
import { useMemo } from 'react'
import NewsLetter from '../components/NewsLetter'

interface Props {
  data: {
    article: IArticle
  }
}
const Home: NextPage<Props> = ({ data }) => {
  const { locale } = useRouter()
  const title = "Jeux FENASCO 2022"
  const desc = "FENASCO 2022 - 22ÉME ÉDITION DES FINALES NATIONALES DES JEUX SCOLAIRES"
  const article = useMemo(() => data.article, [data])

  return (
    <Layout locale={locale as string} title={title} desc={desc}>
      <HomeHeader locale={locale as string} active="home" />
      <Magazine locale={locale as string} />
      <Presentation locale={locale as string} />
      <Statistics locale={locale as string} />
      <Sports locale={locale as string} />
      <Covid19 />
      <Partners locale={locale as string} />
      <NewsLetter locale={locale as string} />
      <section className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <Link key={article.id} href={`/news/${article.slug}`} title={`/news/${article.slug}`} >
          <span className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:cursor-pointer hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
            <div className="w-full h-64 sm:h-96 lg:col-span-7">
              <Image src={article.coverImage.url} width={720} height={420} className="object-cover bg-gray-400 rounded" alt={article.coverImage.alt} />
            </div>
            <div className="p-6 space-y-2 lg:col-span-5 md:self-end">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{article.title}</h3>
              <span className="text-xs text-gray-400">{article._firstPublishedAt}</span>
              <p>
                {article.desc}
              </p>
            </div>
          </span>
        </Link>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const data = await request({
    query: ARTICLE_QUERY_BY_ID(context.locale as string, "48643834"),
    variables: {
      slug: context.params?.slug as string,
      locale: context.locale as string
    },
    includeDrafts: false,
    excludeInvalid: true
  });

  return {
    props: { data },
    // revalidate: 1
  };
}

export default Home
