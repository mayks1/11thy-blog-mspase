const { DateTime } = require('luxon')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets/css')
    eleventyConfig.addPassthroughCopy('./src/assets/images')
    eleventyConfig.addPassthroughCopy('./src/assets/blog')
    // eleventyConfig.addPassthroughCopy('./src/admin')
    
    eleventyConfig.addPlugin(syntaxHighlight)

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })

    return {
        dir: {
            input: "src",
            output: "dist",
        }
    }
}