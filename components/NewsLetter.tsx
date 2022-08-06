import Image from "next/image"
import { useRouter } from "next/router"
import { useCallback, useMemo } from "react"
import { newsletter } from "../data/newsletter"
import magazineCover from '../assets/images/fenassco_magazine.png'


interface Props {
    locale: string
}

const NewsLetter: React.FC<Props> = ({ locale }) => {
    const router = useRouter()
    const navigate = useCallback((sport: string) => () => router.push(`/results/${sport}`), [])
    const isFr = useMemo(() => locale.toLowerCase().includes('fr'), [locale])
    const title = isFr ? "FENASSCO Ligue A NewsLetter" : "FENASSCO Ligue A NewsLetter"

    return (
        <section className="bg-black text-gray-800 py-16 space-y-6 bg-[url('/images/background.png')] bg-cover">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold">{title}</h2>
            </div>
            <div className="container bg-white mx-auto grid justify-center gap-4 max-h-screen overflow-y-scroll sm:grid-cols-2 lg:grid-cols-3">
                {
                    newsletter.map(_item => (
                        <div key={_item.name} className="flex flex-col items-center p-4">
                            <div className="max-w-[300px]">
                                <Image className="object-contain" height={420} width={320} src={_item.image} alt={_item.name} />
                            </div>
                            <div className="p-2 pb-4 text-center">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{isFr ? _item.name : _item.en}</h3>
                                <button className="p-4 mx-auto mt-4 rounded-lg bg-tertiary text-white text-2xl">
                                    <a href={_item.dl} target='_blank'>{isFr ? 'Télécharger' : 'Download'}</a>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default NewsLetter