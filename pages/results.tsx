import classNames from 'classnames'
import type { NextPage } from 'next'
import Image from 'next/image'
import router from 'next/router'
import { useCallback } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { sports } from '../lib/data'

const Results: NextPage = () => {
  const navigate = useCallback((sport: string) => () => router.push(`/results/${sport}`), [])
  return (
    <Layout>
      {/* <NavBar active="contact" /> */}
      <Header title="Results" />
      <div className="flex">
        <div className="flex flex-col w-16 md:w-64 max-h-screen bg-white border-r">
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
                      <Image className="object-contain" width={128} height={128} src={_sport.image} alt={'Button: ' + _sport.name} />
                    </span>
                    <span className="mx-4 font-medium hidden md:block">{_sport.name}</span>
                  </button>
                ))
              }

            </nav>
          </div>
        </div>

        <div className="flex flex-col justify-center align-center w-full">
          <p className='text-2xl text-center text-gray-500'>Sélectionnez une discipline</p>
        </div>

      </div>


    </Layout>
  )
}

export default Results
