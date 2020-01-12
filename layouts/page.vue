<template>
    <div>
        <Navbar />
        <div class="wrapper">
            <h1>{{ page.title }}</h1>
            <slot name='default' />
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">

@mixin phone {
  @media (max-width: 720px) { @content; }
}

.wrapper {
    width: 60%;
    min-height: calc(100vh - 20.5em) !important;
    margin: 0 auto;
    padding: 3em 0;
    text-align: left;

    @include phone {
        width: 85% !important;
    }

    h1 {
        font-size: 3em !important;
        font-weight: 100;
        margin: 0;
        padding: 0;
        text-align: center;

        @include phone {
            font-size: 2.35em !important;
        }
    }

    p {
        font-size: 1.35em !important;
        text-indent: 2em;
        line-height: 1.5;

        @include phone {
            font-size: 1.1em !important;
        }

        a {
            color: inherit;
        }
    }
}

</style>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navbar,
        Footer
    },
    props: ['page'],
    // head: {
    //     script: [
    //         {
    //             src: '/main.js'
    //         }
    //     ]
    // },
    head() {
        return {
            title: `${this.page.title} - ${this.$siteConfig.title}`,
            // script: [{
            //     src: '/main.js'
            // }]
        }
    }
    // head: {
    //   script: [{
    //     "src": "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    //     "async": "true",
    //     "data-ad-client": "ca-pub-1485901785138606"
    //   }],
    //   script: [{
    //     "src": "/main.js"
    //   }]
    // }
}
</script>