import Image from "next/image"

import camtelLogo from '../assets/images/logo-camtel.svg'
import logo1 from '../assets/images/logo-1.svg'
import logo2 from '../assets/images/logo-2.svg'
import logo3 from '../assets/images/logo-3.svg'
import logo4 from '../assets/images/logo-4.svg'

const Partners: React.FC<{}> = ({ }) => {
    return (
        <section className="relative overflow-hidden">
            <div className="px-5 py-24 mx-auto lg:px-16 ">
                <div className="container mx-auto text-center pb-16">
                    <h2 className="text-4xl font-bold">Partenaires</h2>
                </div>

                <div className="mx-auto text-center">
                    <div className="grid grid-cols-2 gap-4 mx-auto md:grid-cols-4 lg:grid-cols-5">
                        <div>
                            <Image className="h-10 mx-auto lg:h-12" src={camtelLogo} width={128} alt="Camtel, sponsor officiel FENASCO 2022" />
                        </div>
                        <div>
                            <Image className="h-10 mx-auto lg:h-12" src={logo1} width={128} alt="Sponsor FENASCO 2022" />
                        </div>
                        <div>
                            <Image className="h-10 mx-auto lg:h-12" src={logo2} width={128} alt="Sponsor FENASCO 2022 " />
                        </div>
                        <div>
                            <Image className="h-10 mx-auto lg:h-12" src={logo3} width={128} alt="Sponsor FENASCO 2022" />
                        </div>
                        <div>
                            <Image className="h-10 mx-auto lg:h-12" src={logo4} width={128} alt="Sponsor FENASCO 2022" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-32 h-32 bg-box-600 absolute left-[-4rem] top-1/2 rotate-45 -z-10"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-box-600 absolute right-0 top-1/2 rotate-45"></div>

        </section>
    )
}

export default Partners