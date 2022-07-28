import Image from "next/image"
import { useMemo } from "react"
import magazineCover from '../assets/images/fenassco_magazine.png'

interface Props {
    locale: string
}

const Magazine: React.FC<Props> = ({ locale }) => {
    const isFr = useMemo(() => locale.toLowerCase().includes('fr'), [locale])

    return (
        <section className=" text-gray-100 py-16 space-y-12 relative overflow-hidden">
            <div className="container mx-auto lg:px-16">
                <div className="flex flex-col md:flex-row items-center md:items-center lg:items-start">
                    <div className="flex justify-center w-1/3 md:px-0">
                        <Image className="object-cover" src={magazineCover} height={420} width={320} alt="Magazone Fenasco 2022" />
                    </div>
                    <div className="flex flex-col w-2/3 p-2 py-8 md:pl-8 md:pt-0 ">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Editorial</h3>
                        <p className="text-gray-600 text-md">
                            {
                                isFr ?
                                    `Every year, Cameroonian school youths are given the opportunity to express
                                    themselves through sports in the FENASSCO League “A” Games. After a twoyear hiatus owing to the global Coronavirus pandemic, we are delighted to
                                    resume FENASSCO League “A” Games, with a subtle dose of innovations. The
                                    theme of the 22nd Edition of the Games, “School Games for Peace and
                                    Unity in Diversity” urges us to move from monotony to variety, both in the
                                    form and content of the Games. The choice of Mvomeka’a as the host town
                                    this year therefore sets the pace, since major cities have been enjoying this
                                    prestige over the years.`
                                    :
                                    `Every year, Cameroonian school youths are given the opportunity to express
                                themselves through sports in the FENASSCO League “A” Games. After a twoyear hiatus owing to the global Coronavirus pandemic, we are delighted to
                                resume FENASSCO League “A” Games, with a subtle dose of innovations. The
                                theme of the 22nd Edition of the Games, “School Games for Peace and
                                Unity in Diversity” urges us to move from monotony to variety, both in the
                                form and content of the Games. The choice of Mvomeka’a as the host town
                                this year therefore sets the pace, since major cities have been enjoying this
                                prestige over the years.`
                            }


                        </p>
                        <button className="p-4 mx-auto mt-8 rounded-lg bg-tertiary text-white text-2xl">
                            <a href="/assets/fenassco_magazine.pdf" target='_blank'>{isFr ? 'Télécharger' : 'Download'}</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-32 h-32 bg-box-600 absolute left-[-4rem] top-1/3 rotate-45 -z-10"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-box-600 absolute right-1/2 bottom-0 rotate-45"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-box-600 absolute right-0 bottom-1/2 rotate-45"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-box-600 absolute right-0 bottom-2/3 rotate-45"></div>
            <div className="w-32 h-32 bg-box-600 absolute right-[-4rem] top-2/3 rotate-45 -z-10"></div>

        </section>
    )
}

export default Magazine