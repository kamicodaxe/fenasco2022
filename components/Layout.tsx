import Head from 'next/head'
import { useMemo } from 'react'
import Footer from "./Footer"


interface Props extends React.PropsWithChildren {
    locale: string
    title: string
    desc: string
}

interface Props {
    locale: string
}

const Layout: React.FC<Props> = ({ children, locale, title, desc }) => {
    const isFr = useMemo(() => locale.toLowerCase().includes('fr'), [locale])
    const lang = isFr ? 'fr_FR' : 'en_US'
    const siteName = isFr ? "JEUX FENASSCO 2022" : "FENASSCO GAMES 2022"
    
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={desc} />
                <meta name="robots" content="max-image-preview:large" />
                <link rel="canonical" href="http://www.fenassco.com/" />
                <meta property="og:locale" content={lang} />
                <meta property="og:site_name" content={siteName} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta property="og:url" content="http://fenassco.com/" />
                <meta property="og:image" content="/favicon.ico" />
                <meta property="og:image:secure_url" content="/favicon.ico" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={desc} />
                <meta name="twitter:image" content="/favicon.ico" />
            </Head>

            <body>
                <main>
                    {children}
                </main>
            </body>

            <Footer />
        </div>
    )
}

export default Layout