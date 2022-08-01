import classNames from 'classnames'
import type { NextPage } from 'next'
import Image from 'next/image'
import router, { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import { sports } from '../../lib/data'

const Results: NextPage = ({ }) => {
  const { locale, locales, asPath } = useRouter()
  const navigate = useCallback((sport: string) => () => router.push(`/results/${sport}`), [])
  const isFr = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale])
  const title = isFr ? "Résultats des Jeuxs" : "Games Results"
  const desc = isFr ? "Retrouvez les résultats des Jeux FENASSCO 2022" : "List of all FENASSCO GAMES scores"

  return (
    <Layout locale={locale as string} title={title} desc={desc}>
      <Header locale={locale as string} title={isFr ? "Résultats" : "News"} />
      <div className="flex">
        <div className="flex flex-col w-16 md:w-72 max-h-screen bg-white border-r">
          <div className="flex flex-col justify-between">
            <nav>
              {
                sports.map(_sport => (
                  <button
                    key={_sport.name}
                    onClick={navigate(_sport.name)}
                    className={classNames(
                      ["flex items-center p-2 md:px-4 md:py-[0.9rem] w-full bg-[#0B0D4A] text-gray-200"]
                    )}
                  >
                    <span className="w-8 h-8 md:w-6 md:h-6 relative">
                      <Image className="object-contain" width={128} height={128} src={_sport.image} alt={'Button: ' + (isFr ? _sport.name : _sport.en)} />
                    </span>
                    <span className="ml-4 font-medium hidden md:block">{isFr ? _sport.name : _sport.en}</span>
                  </button>
                ))
              }

            </nav>
          </div>
        </div>

        <div className="flex flex-col justify-center align-center w-full">
          <p className='text-2xl text-center text-gray-500'>
            {isFr ? "Sélectionnez une discipline à gauche" : "Choose a sport on the left"}
          </p>
        </div>

      </div>


    </Layout>
  )
}

export default Results
