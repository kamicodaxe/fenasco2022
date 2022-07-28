import Image from "next/image"
import Link from "next/link"
import logoImage from '../assets/images/logo.png'
import mvomeka from '../assets/images/mvomeka.png'
import boy from '../assets/images/boy.png'
import girl from '../assets/images/girl.png'


interface Props {
    active: string
}

const routes = [
    {
        name: "Projets",
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
const HomeHeader: React.FC<Props> = ({ active }) => {
    const activeLink = (routeName: string) => {
        // TODO: Use classnames from npm
        if (!active) return 'flex text-2xl hover:text-tertiary transition-colors cursor-pointer'
        const isActive = active.toLowerCase().includes(routeName.toLowerCase())
        console.log(isActive)
        if (isActive) return 'flex cursor-pointer link-active'
        return 'flex text-2xl hover:text-tertiary transition-colors cursor-pointer'
    }

    return (
        <header className="h-screen flex flex-col justify-between bg-[url('/images/background.png')] bg-cover">
            <nav className="p-4 text-gray-800">
                <div className="container flex justify-center align-start mx-auto">
                    <span className={activeLink('info')} >
                        <Link href='/results' className="flex items-center -mb-1">
                            <span className="p-4 uppercase">
                                Résultats
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
                            <span className="p-4 uppercase">
                                Actualités
                            </span>
                        </Link>
                    </span>
                </div>

            </nav>

            <div className="container mx-auto flex flex-col items-center px-4 text-center md:px-10 lg:px-12 xl:max-w-3xl">
                <span className="text-5xl md:text-4xl md:pb-4 font-bold text-tertiary uppercase">Bienvenue,</span>
                <h1 className="text-6xl md:text-4xl font-bold leading-none uppercase">
                    22<sup>éme</sup> édition des finales nationales des jeux scolaires
                </h1>
            </div>

            <section className="text-gray-800 flex">
                <Image className="object-contain" width={320} src={girl} alt="Girl competitor" />
                <Image width={620} src={mvomeka} className="object-contain w-2/3" alt="Olympics FENASCO 2022" />
                <Image className="object-contain" width={320} src={boy} alt="Boy competitor" />
            </section>

        </header>
    )
}

export default HomeHeader