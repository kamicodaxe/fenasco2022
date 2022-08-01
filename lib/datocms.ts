import { GraphQLClient } from "graphql-request";

interface Props {
    query: string
    variables: {
        locale?: string
        slug?: string
    }
    includeDrafts: boolean
    excludeInvalid: boolean
}

export interface IData {
    allArticles: IArticle[]
    _allArticlesMeta: {
        count: number
    }
}

export interface IArticle {
    id: string
    title: string
    desc: string
    slug: string
    coverImage: {
        id: string
        url: string
        alt: string
    }
    body: any
    gallery?: {
        alt: string
        url: string
        responsiveImage: {
            alt: string
            src: string
            width: number
        }
    }[]
    _status: string
    _firstPublishedAt: string
}

async function request<Type>({ query, variables, includeDrafts, excludeInvalid }: Props) {
    const headers = {
        authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    };
    if (includeDrafts) {
        // @ts-ignore
        headers['X-Include-Drafts'] = 'true';
    }
    if (excludeInvalid) {
        // @ts-ignore
        headers['X-Exclude-Invalid'] = 'true';
    }
    const client = new GraphQLClient('https://graphql.datocms.com', { headers });

    const res = await client.request(query, variables)
    return res as Type
}

// ($locale: String)
const ARTICLES_QUERY = (locale: string) => `query NewsPage {
    allArticles(locale: ${locale}) {
        id
        title
        desc
        slug
        coverImage {
            id
            url
            alt
        }
        _status
        _firstPublishedAt
      }
    
      _allArticlesMeta {
        count
      }
  }`;

const ARTICLE_QUERY = (locale: string, slug: string) => `query ArticlePage {
    article(locale: ${locale}, filter: {slug: {eq: "${slug}"}}) {
        id
        slug
        title
        slug
        coverImage {
            id
            url
            alt
        }
        body {
            value
        }
        gallery {
            alt
            url
            responsiveImage(imgixParams: {fit: crop, w: "128", maxH: "128"}) {
              alt
              src
              width
            }
          }
        _status
        _firstPublishedAt
    }
  }`;


export {
    request,
    ARTICLES_QUERY,
    ARTICLE_QUERY
}