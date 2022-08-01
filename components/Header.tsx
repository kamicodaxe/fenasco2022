import Image from "next/image"
import Link from "next/link"
import logoImage from '../assets/images/logo.png'
import mvomeka from '../assets/images/mvomeka.png'
import boy from '../assets/images/boy.png'
import girl from '../assets/images/girl.png'
import { useMemo } from "react"
import { useRouter } from "next/router"

interface Props {
    title: string
    locale: string
    subtitle?: string
}

const Header: React.FC<Props> = ({ title, subtitle, locale }) => {
    const { pathname } = useRouter()
    const isFr = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale])

    const activeLink = (routeName: string) => {
        // TODO: Use classnames from npm
        const isActive = pathname.toLowerCase().includes(routeName.toLowerCase())
        if (isActive) return 'flex text-2xl cursor-pointer link-active'
        return 'flex text-2xl hover:text-tertiary transition-colors cursor-pointer'
    }

    return (
        <header className="flex flex-col justify-between bg-[url('/images/background.png')] bg-cover">

            <nav className="p-4 text-gray-800">
                <div className="container flex justify-around md:justify-center align-start mx-auto">
                    <span className={activeLink('results')} >
                        <Link href='/results' className="flex items-center -mb-1">
                            <span className="p-4 uppercase">
                                {isFr ? 'Résultats' : 'Results'}
                            </span>
                        </Link>
                    </span>
                    <Link href="/" aria-label="Back to homepage" className="flex items-center p-2">
                        <div className="flex items-center cursor-pointer z-50 md:px-16">
                            <div className="h-16 w-16 relative">
                                <Image
                                    layout="fill"
                                    src={logoImage}
                                    className="object-contain"
                                    alt="Logo - LOGO FENASSCO GAMES 2022 "
                                />
                            </div>
                        </div>
                    </Link>
                    <span className={activeLink('news')} >
                        <Link href='/news' className="flex items-center -mb-1">
                            <span className="p-4 uppercase">
                                {isFr ? 'Actualités' : 'News'}
                            </span>
                        </Link>
                    </span>
                </div>

            </nav>

            <section className="text-gray-800 flex justify-around items-center">
                <Image className="object-contain" width={128} height={172} src={girl} alt="Girl" />
                <span className="text-center">
                    <h1 className="text-2xl text-tertiary md:text-4xl font-bold leading-none uppercase">
                        {title}
                    </h1>
                    {
                        subtitle &&
                        (
                            <h2 className="text-xl text-black md:text-2xl font-bold leading-none uppercase">
                                {subtitle}
                            </h2>
                        )
                    }
                    {/* <Image height={64} src={mvomeka} className="object-contain w-1/2" alt="Logo" /> */}
                </span>
                <Image className="object-contain" width={128} height={172} src={boy} alt="Boy" />
            </section>

        </header>
    )
}

export default Header