const lazyImagesPlugin = require('eleventy-plugin-lazyimages')
const pluginRss = require("@11ty/eleventy-plugin-rss")
const htmlmin = require("html-minifier")
// This Eleventy plugin will automatically embed common media formats
// in your pages, requiring only a URL in your markdown files.
// It currently supports Instagram, SoundCloud, Spotify, TikTok, 
// Twitch, Twitter, Vimeo, and YouTube, with more planned.
const embedEverything = require("eleventy-plugin-embed-everything")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss")
const purgeCssPlugin = require("eleventy-plugin-purgecss")
const readingTime = require('eleventy-plugin-reading-time')

const isProd = process.env.ELEVENTY_ENV === "production"

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/images')
    eleventyConfig.addPassthroughCopy('./src/fonts')
    eleventyConfig.addPassthroughCopy("./src/favicon.png")

    eleventyConfig.addCollection('publishedPosts', (collectionApi) => {
        let posts = collectionApi
            .getFilteredByTag("post")
            .filter(p => !p.data.tags.includes("draft"))
        // Remove "post" from tags array
        posts.forEach(post => post.data.tags.shift())
        return posts
    })


    // Run only in production
    if (isProd) {
        // eleventyConfig.addPlugin(purgeCssPlugin, {
        //     config: "./purgecss.config.js",
        //     quiet: false,
        // })
    
        eleventyConfig.addPlugin(lazyImagesPlugin)
    }
    // HTML Minifier
     eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
        if (outputPath.endsWith(".html")) {
          return htmlmin.minify(content, {
            collapseWhitespace: true,
            removeComments: true,  
            useShortDoctype: true,
          });
        }

        return content;
      })

    eleventyConfig.addPlugin(eleventySass)
    eleventyConfig.addPlugin(pluginRss)
    eleventyConfig.addPlugin(embedEverything)
    eleventyConfig.addPlugin(syntaxHighlight)
 
    eleventyConfig.addPlugin(readingTime)

    eleventyConfig.addFilter("formatDate", (value) => {
        const date = new Date(value)
        return date.toLocaleString('bg-BG', { dateStyle: 'medium' })
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
    })

    return {
        dir: {
            input: "src",
            output: "_site",
        }
    }
}
