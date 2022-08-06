import { useCallback, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import type { NextPage } from 'next'
import Image from 'next/image'
// @ts-ignore
import MUIDataTable from "mui-datatables";

import Header from '../../components/Header'
import Layout from '../../components/Layout'

import { sports } from '../../lib/data'

interface Props { }

const Results: NextPage<Props> = () => {
    const router = useRouter()
    const { sport: slug } = router.query
    const navigate = useCallback((sport: string) => () => router.push(`/results/${sport}`), [router])
    const { locale } = useRouter()
    const isFr = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale])
    const pageTitle = isFr ? "Résultats des Jeux" : "Games Results"
    const title = (isFr ? "Résultats " : "Results ")
    const desc = slug + (isFr ? "Résultats de Match FENASSCO 2022" : "Match results FENASSCO 2022")

    const [selectedTab, setSelected] = useState('girls')

    const results = useMemo(() => {
        return sports.find(_sport => _sport.slug === slug)?.results
    }, [slug])

    const games = useMemo(() => {
        if (!results) return []
        return Object.keys(results)
    }, [results])

    const columns = useMemo(() => {
        const _columns: {
            name: string
            label: string
            options: {
                filter: boolean
                sort: boolean
            }
        }[] = []

        if (games.length === 0 || !results) return _columns
        // @ts-ignore
        const result = results[selectedTab]
        for (const key in result[0]) {
            if (Object.prototype.hasOwnProperty.call(result[0], key)) {
                // const element = result[key];
                _columns.push({
                    name: key,
                    label: key,
                    options: {
                        filter: true,
                        sort: true,
                    }
                })
            }
        }
        return _columns

    }, [results])

    const data = useMemo(() => {
        if (!selectedTab || !results) return {}

        // @ts-ignore
        return results[selectedTab]

    }, [selectedTab, results])

    function getCategory(name: string) {
        switch (name) {
            case "girls": return isFr ? "Junior Dames" : "Young School Girls"
                break;
            case "boys": return isFr ? "Junior Messieurs" : "Young School Boys"
                break;
            case "egirls": return isFr ? "ENIEG - ENIET Dames" : "ENIEG - ENIET Girls"
                break;
            case "eboys": return isFr ? "ENIEG - ENIET Messieurs" : "ENIEG - ENIET Boys"
                break;

            default: return ''
                break;
        }
    }

    return (
        <Layout locale={locale as string} title={title} desc={desc}>
            <Header locale={locale as string} title={pageTitle} subtitle={slug as string} />
            <div className="flex">
                <div className="flex flex-col w-16 md:w-72 max-h-screen bg-white border-r">
                    <div className="flex flex-col justify-between">
                        <nav>
                            {
                                sports.map(_sport => (
                                    <button
                                        key={_sport.name}
                                        onClick={navigate(_sport.slug)}
                                        className={classNames(
                                            ["flex items-center p-2 md:px-4 md:py-[0.9rem] w-full bg-[#0B0D4A] text-gray-200"],
                                            _sport.name === slug && ['bg-[#1c1d49]']
                                        )}
                                    >
                                        <span className="w-8 h-8 md:w-6 md:h-6 relative">
                                            <Image className="object-contain" width={128} height={128} src={_sport.image} alt={'button: ' + _sport.name} />
                                        </span>
                                        <span className="ml-4 font-medium hidden md:block">{isFr ? _sport.name : _sport.en}</span>
                                    </button>
                                ))
                            }

                        </nav>
                    </div>
                </div>

                <div className="flex flex-col w-full">
                    {/* <p className='text-2xl text-center text-gray-500'>{title}</p> */}
                    {/* <span className="ml-4 text-center font-medium text-gray-500">{isFr ? "indisponible!" : "Unavailable"}</span> */}

                    <div className='flex justify-around'>
                        {
                            games.map(
                                _game => <button key={_game} className={
                                    classNames(
                                        ["text-md capitalize self-stretch"],
                                        selectedTab === _game && ["border-b-4 border-tertiary"]
                                    )
                                } onClick={() => setSelected(_game)}>{getCategory(_game)}</button>
                            )
                        }
                    </div>

                    {
                        columns.length > 0 &&
                        <MUIDataTable
                            // title={"Employee List"}
                            data={data}
                            columns={columns}
                        // options={{ filterType: 'checkbox' }}
                        />
                    }

                </div>

            </div>


        </Layout>
    )
}

export default Results
