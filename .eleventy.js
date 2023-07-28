const { DateTime } = require('luxon')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets/css')
    eleventyConfig.addPassthroughCopy('./src/assets/images')
    eleventyConfig.addPassthroughCopy('./src/assets/blog')
    // eleventyConfig.addPassthroughCopy('./src/admin')
    // eleventyConfig.addCollection('post', function(collectionApi) {
    //     return collectionApi.getFilteredByGlob('src/articles/**/*.md')
    // })

    eleventyConfig.addCollection('publishedPosts', (collectionApi) => {
        let posts = collectionApi
            .getFilteredByTag("post")
            .filter(p => !p.data.tags.includes("draft"))
            
        // Remove "post" from tags array
        posts.forEach(post => post.data.tags.shift())

        return posts
    })
    
    eleventyConfig.addPlugin(syntaxHighlight)

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })
    

    eleventyConfig.addCollection('categoryList', collectionApi => {

        const tagsSet = new Set()

        collectionApi.getAll().forEach(item => {
            if (!item.data.tags) return

            // Remove "post", "all", draft" from tags
            item.data.tags.filter(tag => !['post', 'all', 'draft'].includes(tag))
                .forEach(tag => tagsSet.add(tag))
        })

        const tags = Array.from(tagsSet).sort()

        return tags

        // const tags = Array.from(tagsSet).sort()
        // const itemsToRemove = [ "post", "draft" ]
        // Remove "post" and "draft" from tags
        // return tags.filter(item => !itemsToRemove.includes(item))
    })

    return {
        dir: {
            input: "src",
            output: "_site",
        }
    }
}