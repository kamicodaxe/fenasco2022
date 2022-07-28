import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'

const Article: NextPage = () => {
    const { locale } = useRouter()
    const isFr = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale])
    const title = isFr ? "Articles, FENASSCO 2022" : "Articles, FENASSCO 2022"
    const desc = isFr ? "Article, Jeux FENASSCO 2022" : "Article FENASSCO GAMES"

    return (
        <Layout locale={locale as string} title={title} desc={desc}>
            <Header locale={locale as string} title="News - Article" />
            <section className="container flex flex-col items-center max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group lg:grid lg:grid-cols-12">
                    <div className="w-full h-64 sm:h-96 lg:col-span-12">
                        <Image src="https://source.unsplash.com/random/1280x720" width={720} height={420} className="object-cover bg-gray-400 rounded" alt='Blog post image' />
                    </div>
                </div>

                {/* Content */}
                <div className="block max-w-sm  mx-auto sm:max-w-2xl group text-gray-800 font-sans text-lg">

                    <div className="space-y-4 text-justify">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                        <span className="text-xs text-gray-400">28 Juillet, 2022</span>

                        <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>

                        <p>
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                        </p>

                        <p>
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                        </p>

                        <Image src="https://source.unsplash.com/random/1280x721" width={720} height={420} className="object-cover bg-gray-400 rounded" alt='Blog post image' />

                        <p>
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                        </p>

                        <p>
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                        </p>

                        <Image src="https://source.unsplash.com/random/1280x722" width={720} height={420} className="object-cover bg-gray-400 rounded" alt='Blog post image' />

                        <p>
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
                        </p>
                    </div>

                </div>

            </section>
        </Layout>
    )
}

export default Article
