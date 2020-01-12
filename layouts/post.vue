<template>
    <div>
        <Navbar />
        <div class="wrapper">
            <h1>{{ page.title }}</h1>
            <h3>
                <span class='date'>{{ formatDate(page.updatedAt) }}</span>
                <span class='author'>{{ page.author }}</span>
            </h3>
            <div class="content">
                <slot name='default' />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import 'prismjs/themes/prism-twilight.css'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navbar,
        Footer
    },
    props: ['page'],
    head() {
        return {
            title: `${this.page.title} - ${this.$siteConfig.title}`
        }
    },
    methods: {
        formatDate(v) {
        const date = new Date(v)
        return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
        }
    },
    head: {
      script: [{
        "src": "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        "async": "true",
        "data-ad-client": "ca-pub-1485901785138606"
      }],
      script: [{
        "src": "/main.js"
      }]
    }
}
</script>

<style lang="scss">

@mixin phone {
  @media (max-width: 720px) { @content; }
}

body {
    background: #222;
}

// responsive youtube video
.video-container, #video-container { position: relative; margin-top: 3em; padding-bottom: 56.25%; padding-top: 30px; height: 0; overflow: hidden; } .video-container iframe, #video-container iframe, .video-container object, #video-container object, .video-container embed, #video-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

.saber-highlight, .saber-highlight-code, .language-css {
    border: none !important;
    background: #000;
    border-radius: 50%;
}

.saber-highlight pre, .saber-highlight, .saber-highlight code {
    white-space: pre-wrap;

    ::selection {
        background: #fff;
        color: #000;
    }
}

.wrapper {
    width: 60%;
    min-height: calc(100vh - 20.5em) !important;
    margin: 0 auto;
    padding: 3em 0;
    text-align: center;
    color: #fff;

    h1 {
        font-size: 3.2em;
        font-weight: 100;
        width: 80%;
        margin: 0 auto !important;
        margin-bottom: .5em;
        padding: 0 !important;
        line-height: 1.25;
        margin-block: none !important;
        text-align: center;

        @include phone {
            font-size: 2em !important;
            width: 95%;
        }
    }
    
    h3 {
        font-weight: 100;
        text-align: left;
        padding: 0;
        font-size: 1.2em;
        padding: 0;
        margin: 1.5em 0;
        display: flex;
        padding-bottom: 1.5em;
        border-bottom: solid #c4c4c4 2px;
        justify-content: space-between;
    }

    p {
        font-size: 1.2em;
        text-align: left;
        text-indent: 2em;
        line-height: 1.5;
    }

    li {
        font-size: 1.4em;
        text-align: left;
        padding-top: 1.25em;
    }
}

</style>