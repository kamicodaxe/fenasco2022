import Image from "next/image"
import { useRouter } from "next/router"
import { useCallback, useMemo } from "react"
import { sports } from "../lib/data"

const Sports: React.FC<{}> = ({ }) => {
    const router = useRouter()

    const navigate = useCallback((sport: string) => () => router.push(`/results/${sport}`), [])

    return (
        <section className=" text-gray-800 py-16 space-y-6">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold">Disciplines</h2>
                <p className="text-gray-400">12 Disciplines Sportives </p>
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
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{_sport.name}</h3>
                                <button onClick={navigate(_sport.name)} className="text-tertiary text-md hover:underline">
                                    Résultat
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