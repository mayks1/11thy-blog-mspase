---
title: How to add Google Analytics GA4 Code in Nuxt Application?
description: How to add Google Analytics in our Nuxt application. We will see about adding Google Analytics GA4 Code type X-XXXXXXXXX without any Plugins.
image: https://res.cloudinary.com/mayks/image/upload/v1653938261/blog-mayks/logo/google_analytics_logo_nuxt_h0kusu.webp
alt: Google Analytics with NuxtJS Mixed Logo
lang: en
categories:
  - programming
  - code
  - nuxt
  - analytics
tags: ["programming", "published"]
number: 5
date: 2022-05-30
status: publish
---
## Google Analytics GA4 Code in Nuxt without any Plugins

#### Method: Add Google Analytics 4 Id to Nuxt: 
Choose: Google Bookmark Icon Common site tag (gtag.js) which looks like this:

```javascript
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Convert the script:
```javascript
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```
to the following code and put it in nuxt.config.js at the beginning of the head element:
```javascript
head: {
    script: [
          // Google Analytics Code
          {
            src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX",
            async: true,
          },
        ]
    }
```
Then create a new folder named 'js' in the /static folder and create a file named analytics.js in it.

In the analytics.js file, write the following code:

```javascript
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-XXXXXXXXXX");
```

Now it remains to import the analytics.js file in nuxt.config.js by adding it to the script in head:

```javascript
head: {
    script: [
          // Google Analytics Code
          {
            src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX",
            async: true,
          },
          // Import analitics.js file
          { src: "/js/analitics.js" },
        ]
    }
```
### Important: 
Note that instead of G-XXXXXXXXXX, you need to enter your Google Analytics code!!!

In about 24 hours Google will start collecting data on visits to your site!

And that's it, we have successfully added Google Analytics to our Nuxt application.
