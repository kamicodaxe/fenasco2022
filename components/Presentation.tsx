import { useMemo } from 'react'
import ReactPlayer from 'react-player'

interface Props {
    locale: string
}

const Presentation: React.FC<Props> = ({ locale }) => {
    const isFrench = useMemo(() => locale.toLowerCase().includes('fr'), [locale])
    const videoUrl = isFrench ? '/videos/fenassco.mp4' : '/videos/fenassco_en.mp4'
    const desc = isFrench ? 'Présentation de la 22ème éditions des finales nationales des jeux scolaires' : 'Presentation video of the 22nd edition of the national school games final.'

    return (
        <section className="text-gray-800 relative overflow-hidden">
            <div className="container mx-auto my-16 lg:px-16">
                <div className="flex flex-col md:flex-row md:items-center lg:items-end">
                    <div className="flex justify-center items-center px-0 min-h-64 sm:h-96 md:w-[200%] bg-black">
                        <ReactPlayer controls url={videoUrl} />
                    </div>
                    <div className="p-2 pb-4 md:pl-8 md:self-end">
                        <p className="text-gray-600 text-md">
                            {desc}
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-box-600 absolute right-0 bottom-1/2 rotate-45"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-box-600 absolute left-0 top-0 rotate-45"></div>
            <div className="w-32 h-32 bg-box-600 absolute left-[-4rem] top-1/2 rotate-45 -z-10"></div>

        </section>
    )
}

export default Presentation