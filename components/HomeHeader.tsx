import Image from "next/image"
import Link from "next/link"
import logoImage from '../assets/images/logo.png'
import mvomeka from '../assets/images/mvomeka.png'
import boy from '../assets/images/boy.png'
import girl from '../assets/images/girl.png'
import { useMemo } from "react"


interface Props {
    active: string
    locale: string
}

const HomeHeader: React.FC<Props> = ({ active, locale }) => {
    const activeLink = (routeName: string) => {
        // TODO: Use classnames from npm
        if (!active) return 'flex text-2xl hover:text-tertiary transition-colors cursor-pointer'
        const isActive = active.toLowerCase().includes(routeName.toLowerCase())
        console.log(isActive)
        if (isActive) return 'flex cursor-pointer link-active'
        return 'flex text-2xl hover:text-tertiary transition-colors cursor-pointer'
    }

    const isFrench = useMemo(() => locale.toLowerCase().includes('fr'), [locale])

    return (
        <header className="flex flex-col justify-between bg-[url('/images/background.png')] bg-cover">
            <nav className="p-4 text-gray-800">
                <div className="container flex justify-around md:justify-center align-start mx-auto">
                    <span className={activeLink('info')} >
                        <Link href='/results' className="flex items-center -mb-1">
                            <span className="uppercase">
                                {isFrench ? 'Résultats' : 'Results'}
                            </span>
                        </Link>
                    </span>
                    <Link href="/" aria-label="Back to homepage" className="flex items-center p-2">
                        <div className="flex items-center cursor-pointer z-50 md:px-16">
                            <div className="h-32 w-32 relative">
                                <Image
                                    layout="fill"
                                    src={logoImage}
                                    className="object-contain"
                                    alt="Logo - FENASCO 2022"
                                />
                            </div>
                        </div>
                    </Link>
                    <span className={activeLink('info')} >
                        <Link href='/news' className="flex items-center -mb-1">
                            <span className="uppercase">
                                {isFrench ? 'Actualités' : 'News'}
                            </span>
                        </Link>
                    </span>
                </div>

            </nav>

            <div className="container mx-auto flex flex-col items-center px-4 text-center md:px-10 lg:px-12 xl:max-w-3xl">
                <span className="text-5xl 2xl:text-6xl pb-4 font-bold text-tertiary uppercase">
                    {isFrench ? 'Bienvenue,' : 'Welcome,'}
                </span>
                <h1 className="text-5xl md:text-4xl 2xl:text-5xl font-bold leading-none uppercase">
                    22<sup>{isFrench ? 'éme' : 'nd'}</sup>
                    {
                        isFrench ?
                            'édition des finales nationales des jeux scolaires' :
                            'edition of national school games finals'
                    }
                </h1>
            </div>

            <section className="text-gray-800 flex justify-around">
                <Image className="object-contain" width={256} src={girl} alt="Girl competitor" />
                <Image width={420} src={mvomeka} className="object-contain w-2/3" alt="Olympics FENASCO 2022" />
                <Image className="object-contain" width={256} src={boy} alt="Boy competitor" />
            </section>

        </header>
    )
}

export default HomeHeader