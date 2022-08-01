import type { GetStaticPaths, GetStaticProps, NextPage, NextPageContext } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import dynamic from "next/dynamic";
// @ts-ignore
const ImageGallery = dynamic(import('react-image-gallery'));
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import { ARTICLES_QUERY, ARTICLE_QUERY, IArticle, IData, request } from '../../lib/datocms'

import { StructuredText } from 'react-datocms'

interface Props {
    data: {
        article: IArticle
    }
}

const Article: NextPage<Props> = ({ data }) => {
    const { locale } = useRouter()
    const isFr = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale])
    const article = useMemo(() => data.article, [data])
    console.log(article)
    const title = article.title
    const desc = article.desc
    const galleryTitle = isFr ? "Galerie" : "Gallery"

    return (
        <Layout locale={locale as string} title={title} desc={desc}>
            <Header locale={locale as string} title="News - Article" />
            <section className="container flex flex-col items-center max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group lg:grid lg:grid-cols-12">
                    <div className="w-full h-64 sm:h-96 lg:col-span-12">
                        {/* <Image src="https://source.unsplash.com/random/1280x720" width={720} height={420} className="object-cover bg-gray-400 rounded" alt='Blog post image' /> */}
                        <Image src={article.coverImage.url} width={720} height={420} className="object-cover bg-gray-400 rounded" alt={article.coverImage.alt} />
                    </div>
                </div>

                {/* Content */}
                <div className="block max-w-sm  mx-auto sm:max-w-2xl group text-gray-800 font-sans text-lg">

                    <div className="space-y-4 text-justify">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-focus:underline">{article.title}</h3>
                        {/* <span className="text-xs text-gray-400">28 Juillet, 2022</span> */}
                        <span className="text-xs text-gray-400">{article._firstPublishedAt}</span>
                        {
                            (article?.gallery?.length && article?.gallery?.length > 0) &&
                            (
                                <>
                                    <h4 className="text-2xl font-semibold sm:text-4xl group-focus:underline">{galleryTitle}</h4>
                                    {
                                        // @ts-ignore
                                        <ImageGallery items={article.gallery.map(_item => ({
                                            original: _item.url,
                                            originalAlt: _item.alt || 'Fenassco 2022 Gallery image',
                                            thumbnailAlt: _item.responsiveImage.alt || 'Fenassco 2022 Gallery image',
                                            thumbnail: _item.responsiveImage.src
                                         }))} />
                                    }
                                </>
                            )
                        }
                        <StructuredText
                            data={article.body}
                            renderBlock={context => {
                                console.log(context)
                                if (context.record.__typename === 'paragraph') {
                                    return <p>{context.record.__typename}</p>
                                }
                                return <p>{context.record.__typename}</p>
                            }}
                        />

                    </div>

                </div>

            </section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {

    const data = await request({
        query: ARTICLE_QUERY(context.locale as string, context.params?.slug as string),
        variables: {
            slug: context.params?.slug as string,
            locale: context.locale as string
        },
        includeDrafts: false,
        excludeInvalid: true
    });
    return {
        props: { data },
        revalidate: 360
    };
}

export const getStaticPaths: GetStaticPaths = async (context) => {
    const data = await request<IData>({
        query: ARTICLES_QUERY(context.defaultLocale as string),
        variables: {
            locale: 'fr'
        },
        includeDrafts: false,
        excludeInvalid: true
    });

    return {
        paths: data.allArticles.map((artcle) => ({
            params: {
                slug: artcle.slug
            }
        })), //OK
        fallback: 'blocking'
    }

}


export default Article
