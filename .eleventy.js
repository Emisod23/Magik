const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css/');
    eleventyConfig.addWatchTarget('./src/css/');

    eleventyConfig.addPlugin(syntaxHighlight);
    return {
        dir: {
            input: "src",
            output: "dist"
        },
        passthroughFileCopy: true
    };
}

const mtg = require('mtgsdk')

mtg.card.find(3)
.then(result => {
    console.log(result.card.name) // "Black Lotus"
})

mtg.card.all({ name: 'Squee', pageSize: 1 })
.on('data', card => {
    console.log(card.name)
})