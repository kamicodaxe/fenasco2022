
const fs = require('fs');
const { ARTICLES_QUERY, request } = require('./lib/datocms')

module.exports.preBuildDevelopment = async () => {

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
}