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
}

const Header: React.FC<Props> = ({ title, locale }) => {
    const { pathname } = useRouter()
    const isFr = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale])

    const activeLink = (routeName: string) => {
        // TODO: Use classnames from npm
        const isActive = pathname.toLowerCase().includes(routeName.toLowerCase())
        console.log(isActive)
        if (isActive) return 'flex text-2xl cursor-pointer link-active'
        return 'flex text-2xl hover:text-tertiary transition-colors cursor-pointer'
    }

    return (
        <header className="flex flex-col justify-between bg-[url('/images/background.png')] bg-cover">
            <nav className="p-4 text-gray-800">
                <div className="container flex justify-center align-start mx-auto">
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
                                    alt="Logo - Taroungamograph by Tarounga Mbaye "
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

            {/* <div className="container mx-auto flex flex-col items-center px-4 text-center md:translate-y-12 md:px-10 lg:px-12 xl:max-w-3xl">
                <h1 className="text-2xl text-tertiary md:text-4xl font-bold leading-none uppercase">
                    {title}
                </h1>
            </div> */}

            {/* <Image width={620} src={mvomeka} className="object-contain w-2/3" /> */}

            <section className="text-gray-800 flex">
                <Image className="object-contain" width={320} src={girl} />
                <Image width={620} src={mvomeka} className="object-contain w-2/3" />
                <Image className="object-contain" width={320} src={boy} />
            </section>

        </header>
    )
}

export default Header