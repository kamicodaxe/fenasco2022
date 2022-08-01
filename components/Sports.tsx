import Image from "next/image"
import { useRouter } from "next/router"
import { useCallback, useMemo } from "react"
import { sports } from "../lib/data"

interface Props {
    locale: string
}

const Sports: React.FC<Props> = ({ locale }) => {
    const navigate = useCallback((sport: string) => () => router.push(`/results/${sport}`), [])
    const router = useRouter()
    const isFr = useMemo(() => locale.toLowerCase().includes('fr'), [locale])
    const title = isFr ? "12 Disciplines Sportives" : "12 Sports"

    return (
        <section className=" text-gray-800 py-16 space-y-6">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold">{title}</h2>
            </div>
            <div className="container mx-auto grid justify-center gap-4 max-h-screen overflow-y-scroll sm:grid-cols-2 lg:grid-cols-3">

                {
                    sports.map(_sport => (
                        <div key={_sport.name} className="flex flex-col items-center p-4">
                            <div className="max-w-[300px] text-center">
                                <span className="w-8 h-8 md:w-6 md:h-6 relative">
                                    <Image className="object-contain" width={128} height={128} src={_sport.image} alt={_sport.name} />
                                </span>
                            </div>
                            <div className="p-2 pb-4 text-center">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{isFr ? _sport.name : _sport.en}</h3>
                                <button onClick={navigate(_sport.name)} className="text-tertiary text-md hover:underline">
                                    {isFr ? "Résultats" : "Results"}
                                </button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Sports