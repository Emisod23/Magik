const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const moment = require("moment");
const mtg = require('mtgsdk')

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css/');
    eleventyConfig.addWatchTarget('./src/css/');

    eleventyConfig.addFilter('dateFilter', (value) => {
        moment.locale('sv');
        return moment(value).format('LL');
    })

    eleventyConfig.addPlugin(syntaxHighlight);
    return {
        dir: {
            input: "src",
            output: "dist"
        },
        passthroughFileCopy: true
    };
}



mtg.card.find(3)
.then(result => {
    console.log(result.card.name)
    console.log(result.card.rarity)
    console.log(result.card.set)
    console.log(result.card.manaCost)
    console.log(result.card.originalText)
    console.log(result.card.imageUrl)
})

card.where({ name: 'Jace, the Mind Sculptor' })
.then(cards => {
    console.log(cards[0].name)
})