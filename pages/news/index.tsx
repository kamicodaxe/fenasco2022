import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'

const News: NextPage = () => {
  const { locale } = useRouter()
  const isFr = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale])
  const title = isFr ? "Actualité, FENASSCO 2022" : "News, FENASSCO 2022"
  const desc = isFr ? "Actualités des Jeux FENASSCO 2022" : "All news from FENASSCO GAMES"

  return (
    <Layout locale={locale as string} title={title} desc={desc}>
      <Header locale={locale as string} title="News" />
      <section className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        {
          [
            "https://source.unsplash.com/random/1280x720",
            "https://source.unsplash.com/random/1280x721",
            "https://source.unsplash.com/random/1280x722",
            "https://source.unsplash.com/random/1280x723",

          ].map(link => (
            <Link key={link} rel="noopener noreferrer" href={'/news/article'} >
              <span className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:cursor-pointer hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
                <div className="w-full h-64 sm:h-96 lg:col-span-7">
                  <Image src={link} width={720} height={420} className="object-cover bg-gray-400 rounded" alt='Blog post image' />
                </div>
                <div className="p-6 space-y-2 lg:col-span-5 md:self-end">
                  <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                  <span className="text-xs text-gray-400">28 Juillet, 2022</span>
                  <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                </div>
              </span>
            </Link>
          ))
        }
      </section>
    </Layout>
  )
}

export default News
