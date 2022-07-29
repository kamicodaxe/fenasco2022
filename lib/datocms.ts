import { GraphQLClient } from "graphql-request";

interface Props {
    query: string
    variables: {
        locale: string
    }
    includeDrafts: boolean
    excludeInvalid: boolean
}

export interface IData {
    allArticles: {
        id: string
        title: string
        desc: string
        slug: string
        coverImage: {
            id: string
            url: string
            alt: string
        }
        _status: string
        _firstPublishedAt: string
    }[]
    _allArticlesMeta: {
        count: number
    }
}

function request({ query, variables, includeDrafts, excludeInvalid }: Props) {
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
    return client.request<IData>(query, variables);
}

const ARTICLES_QUERY = `query HomePage {
    allArticles(locale: fr) {
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


export {
    request,
    ARTICLES_QUERY
}