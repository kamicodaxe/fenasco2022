import Image from "next/image"
import Link from "next/link"
import logoImage from '../assets/images/logo.png'
import { sports } from "../lib/data"

const routes = [
    {
        name: "Projects",
        path: "/projects"
    },
    {
        name: "A Propos",
        path: "/about"
    },
    {
        name: "Contact",
        path: "/contact"
    }
]

const Footer: React.FC<{}> = ({ }) => {
    // <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
    //     {
    //         routes.map(route => (
    //             <li key={route.name} className="cursor-pointer">
    //                 <Link href={route.path}>
    //                     <span className="px-4">
    //                         {route.name}
    //                     </span>
    //                 </Link>
    //             </li>
    //         ))
    //     }
    // </ul>

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
                            <h3 className="text-sm font-bold tracking-wider text-tertiary uppercase">Résultats</h3>
                            <ul role="list" className="mt-4 space-y-2">
                                {
                                    sports.map(
                                        sport => (
                                            <li key={sport.name} className="text-base font-normal cursor-pointer hover:text-tertiary">
                                                <Link href={`/results/${sport.name}`}>
                                                    <span>{sport.name}</span>
                                                </Link>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>

                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-bold tracking-wider text-tertiary uppercase"> Actualités </h3>
                            <ul role="list" className="mt-4 space-y-2">
                                <li>
                                    <a href="#www.wickedblocks.dev" className="text-base font-normal hover:text-tertiary"> vide </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-bold tracking-wider text-tertiary uppercase">Réseau sociaux</h3>
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
                        <a href="https://wickedlabs.dev" className="mx-2 text-wickedblue hover:text-gray-500" rel="noopener noreferrer">FENASCO</a>
                    </span>
                </div>
            </div>

            <div className="w-32 h-32 bg-box-600 absolute right-[-4rem] top-1/2 rotate-45"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-box-600 absolute bottom-0 right-1/2 rotate-45"></div>

        </footer>
    )
}


export default Footer