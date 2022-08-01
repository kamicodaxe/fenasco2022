import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import { ARTICLES_QUERY, IData, request } from '../../lib/datocms'

interface Props {
  data: IData
}
const News: NextPage<Props> = ({ data }) => {
  const { locale } = useRouter()
  const isFr = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale])
  const title = isFr ? "Actualité, FENASSCO 2022" : "News, FENASSCO 2022"
  const desc = isFr ? "Actualités des Jeux FENASSCO 2022" : "All news from FENASSCO GAMES"

  return (
    <Layout locale={locale as string} title={title} desc={desc}>
      <Header locale={locale as string} title="News" />
      <section className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        {
          data.allArticles.map(
            article => (
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
            )
          )
        }
      </section>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  const data = await request<IData>({
    query: ARTICLES_QUERY(context.locale as string),
    variables: { locale: 'fr' },
    includeDrafts: false,
    excludeInvalid: true
  });
  return {
    props: { data }
  };
}


export default News
