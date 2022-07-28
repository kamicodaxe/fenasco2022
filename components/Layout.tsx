import Head from 'next/head'
import Footer from "./Footer"


interface Props extends React.PropsWithChildren {
}

const Layout: React.FC<Props> = ({ children }) => {

    return (
        <div>
            <Head>
                <title>FENASCO 2022</title>
                <meta name="description" content="FENASCO 2022 - 22ÉME ÉDITION DES FINALES NATIONALES DES JEUX SCOLAIRES" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="FENASCO 2022 - 22ÉME ÉDITION DES FINALES NATIONALES DES JEUX SCOLAIRES" />
                <meta name="robots" content="max-image-preview:large" />
                {/* <link rel="canonical" href="https://example.com/" /> */}
                <meta property="og:locale" content="fr_FR" />
                <meta property="og:site_name" content="FENASCO 2022" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="FENASCO 2022" />
                <meta property="og:description" content="FENASCO 2022 - 22ÉME ÉDITION DES FINALES NATIONALES DES JEUX SCOLAIRES" />
                {/* <meta property="og:url" content="https://example.com/" /> */}
                {/* <meta property="og:image" content="https://example.com/favicon.ico" /> */}
                {/* <meta property="og:image:secure_url" content="https://example.com/favicon.ico" /> */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="FENASCO 2022" />
                <meta name="twitter:description" content="FENASCO 2022 - 22ÉME ÉDITION DES FINALES NATIONALES DES JEUX SCOLAIRES" />
                {/* <meta name="twitter:image" content="https://example.com/favicon.ico" /> */}
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