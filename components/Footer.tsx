import Image from "next/image"
import Link from "next/link"
import { GetStaticProps } from "next/types"
import { useEffect, useMemo, useState } from "react"
import logoImage from '../assets/images/logo.png'
import { sports } from "../lib/data"
import { ARTICLES_QUERY, IData, request } from "../lib/datocms"
import articles from '../data/articles.json'

interface Props {
    locale: 'en' | 'fr'
    data?: IData
}

const Footer: React.FC<Props> = ({ locale }) => {
    const isFr = useMemo(() => locale.toLowerCase().includes('fr'), [locale])
    const [data, setData] = useState<null | IData>(null)


    useEffect(() => {
        request<IData>({
            query: ARTICLES_QUERY(locale as string),
            variables: { locale },
            includeDrafts: false,
            excludeInvalid: true
        })
            .then(_data => {
                console.log(_data)
                if (_data) {
                    setData(_data)
                }
            }).catch(console.warn)
    }, [])

    return (
        <footer className="bg-[url('/images/background.png')] bg-cover text-gray-800 relative overflow-hidden" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>

            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="text-white xl:col-span-1 relative">
                        {/* <a href="./index.html" className="text-lg font-bold tracking-tighter text-tertiary transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"> MVOGMEKA'A 2022 </a> */}
                        {/* <p className="w-1/2 mt-2 text-sm">Wicked templates for wicked dev's</p> */}
                        <Image
                            layout="fill"
                            src={logoImage}
                            className="object-contain hidden lg:block"
                            alt="Logo - FENASCO 2022"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 md:grid-cols-3 xl:mt-0 xl:col-span-2">
                        <div>
                            <h3 className="text-sm font-bold tracking-wider text-tertiary uppercase">{isFr ? "Résultats" : "Results"}</h3>
                            <ul role="list" className="mt-4 space-y-2">
                                {
                                    sports.map(sport => (
                                        <li key={sport.name} className="text-base font-normal cursor-pointer hover:text-tertiary">
                                            <Link href={`/results/${sport.slug}`}>
                                                <span>{isFr ? sport.name : sport.en}</span>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-bold tracking-wider text-tertiary uppercase"> {isFr ? "Actualités" : "News"} </h3>
                            <ul role="list" className="mt-4 space-y-2">
                                {
                                    articles[locale].allArticles.map(article => (
                                        <li key={article.slug} className="text-base font-normal cursor-pointer hover:text-tertiary">
                                            {/* {article.title} */}
                                            <Link href={`/news/${article.slug}`}>
                                                <span>{article.title}</span>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-bold tracking-wider text-tertiary uppercase">{isFr ? "Réseau sociaux" : "Socials"}</h3>
                            <ul role="list" className="mt-4 space-y-2">
                                <li>
                                    <a href="#tweet" className="text-base font-normal hover:text-tertiary"> Twitter </a>
                                </li>
                                <li>
                                    <a href="#face" className="text-base font-normal hover:text-tertiary"> Facebook </a>
                                </li>
                                <li>
                                    <a href="#insta" className="text-base font-normal hover:text-tertiary"> Instagram </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
                <div className="flex flex-wrap items-baseline">
                    <span className="mt-2 text-sm font-light">
                        Copyright © 2022
                        <span className="mx-2 text-wickedblue hover:text-gray-500">FENASCO</span>
                    </span>
                </div>
            </div>

            <div className="w-32 h-32 bg-box-600 absolute right-[-4rem] top-1/2 rotate-45"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-box-600 absolute bottom-0 right-1/2 rotate-45"></div>

        </footer>
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

export default Footer