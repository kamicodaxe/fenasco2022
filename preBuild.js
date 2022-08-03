
const fs = require('fs')
const { GraphQLClient } = require('graphql-request');

const ARTICLES_QUERY = (locale) => `query NewsPage {
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

async function request({ query, variables, includeDrafts, excludeInvalid }) {
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
    return res
}

(async () => {

    const enArticles = await request({
        query: ARTICLES_QUERY('en'),
        variables: { locale: 'en' },
        includeDrafts: false,
        excludeInvalid: true
    });

    const frArticles = await request({
        query: ARTICLES_QUERY('fr'),
        variables: { locale: 'fr' },
        includeDrafts: false,
        excludeInvalid: true
    });

    fs.writeFileSync("./data/articles.json", JSON.stringify({
        en: JSON.stringify(enArticles),
        fr: JSON.stringify(frArticles),
    }))
})()

exports = {}