---
title: How to use vue-pure-lightbox in Nuxt Content body
description: This article is about how to add vue-pure-lightbox plugin in our Nuxt Content application.
image: https://res.cloudinary.com/mayks/image/upload/v1654661577/blog-mayks/posts/vue-pure-lightbox/nuxt-content-cover_awnedb.jpg
alt: Nuxt Content with vue-pure-lightbox
lang: en
categories:
  - programming
  - code
  - nuxt
  - vue
tags: ["programming", "published"]
number: 10
date: 2022-06-08
status: publish
---
## Adding Vue Plugin [vue-pure-lightbox](https://github.com/DCzajkowski/vue-pure-lightbox) in Nuxt Conten markdown file

- Nuxt Content is a git files based headless CMS that allows you to create a blog or documentation site from Markdown, JSON, YAML, XML, and CSV files.  
- vue-pure-lightbox is very simple lightbox plugin (without any dependencies) for Vuejs and can be installed on Nuxt Aplication

## Installation: 

```node
npm i vue-pure-lightbox

or 

yarn add vue-pure-lightbox
```

## Usage:  

- First of all, we need to create a **component** in the **/components** directory and a folder named **global**.

This way our component can be used in the body of the markdown file.  
- Create a component named ArticleImage.vue in the folder /components/global folder.  

```bash
/components
    /global/ArticleImage.vue
```

- We write the HTML code for the template  

```html
<template>
    <VuePureLightbox
        :thumbnail="thumb"
        :images="[src]"
        :alternate-text="alt"
    />
</template>
```
- In the script section we import the plugin and define three props - thumb, src and alt:
thum is for the thumbnail, src is for the images and alt is for the alt of the image

```javascript
<script>
import VuePureLightbox from 'vue-pure-lightbox'
export default {
    components: {
        VuePureLightbox
    },
    props: {
        thumb:
        {
            type: String,
            required: true
        },
        src: {
            type: Array,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    },
}
</script>
```  

#### Now it remains to enter the css file in one of two ways:

```html
<style src="vue-pure-lightbox/dist/VuePureLightbox.css">

</style>
```

**or**

```html
<style>
@import url("./../../node_modules/vue-pure-lightbox/dist/VuePureLightbox.css");

</style>
```


## Usage in Markdown file

We can now use our component in the markdown file as follows:  

```html
<article-image 
  thumb="/path/to/thumbnail.jpg"
  src="['/path/to/image1.jpg', '/path/to/image1.jpg']"
  alt="Some Alt Text"
/></article-image>
```  

#### You have to get this:

<article-image 
    thumb="https://res.cloudinary.com/mayks/image/upload/c_scale,w_720/v1653205131/blog-mayks/movies/la-foret/la-foret-7_fxnlrd_ijw6vb.webp" src="https://res.cloudinary.com/mayks/image/upload/v1653205131/blog-mayks/movies/la-foret/la-foret-7_fxnlrd_ijw6vb.webp" 
    alt="Сериалът Гората - La Foret"/></article-image>  
    
#### You can style LightBox elements with the following classes:  

```html
<style>
    .lightbox{}
    .lightbox__close{}
    .lightbox__element{}
    .lightbox__image{}
    .lightbox__arrow{}
    .lightbox__arrow--left{}
</style>
```
    
#### [Link to GITHUB](https://github.com/DCzajkowski/vue-pure-lightbox)

**I hope I have been useful to you!
Happy coding ...**










