<template>
    <nav>        
        <!-- <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"> -->
        <div class="nav-container">
            <h2>
                <saber-link to='/'>Coding Carter</saber-link>
            </h2>
            
            <div class="menu-icon">
                <svg version="1.1" viewBox="0 0 60.123 60.123" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">  <path d="m57.124 51.893h-40.204c-1.657 0-3-1.343-3-3s1.343-3 3-3h40.203c1.657 0 3 1.343 3 3s-1.342 3-2.999 3z"/> <path d="m57.124 33.062h-40.204c-1.657 0-3-1.343-3-3s1.343-3 3-3h40.203c1.657 0 3 1.343 3 3 1e-3 1.657-1.342 3-2.999 3z"/> <path d="m57.124 14.231h-40.204c-1.657 0-3-1.343-3-3s1.343-3 3-3h40.203c1.657 0 3 1.343 3 3s-1.342 3-2.999 3z"/> <circle cx="4.029" cy="11.463" r="4.029"/> <circle cx="4.029" cy="30.062" r="4.029"/> <circle cx="4.029" cy="48.661" r="4.029"/></svg>
            </div>

            <div class="nav-links">
                <saber-link to='/'>Home</saber-link>
                <saber-link to='/posts'>Posts</saber-link>
                <saber-link to='/about-me'>About Me</saber-link>
                <saber-link to='https://youtube.com/Carter04'>YouTube</saber-link>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Raleway&display=swap'
            }
        ],
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

html {
    font-family: 'Raleway', monospace;
}

::selection {
    background: #fff;
    color: #222;
    text-decoration: none !important;
}

html, body {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background: #222;
    color: #fff;
}

.nprogress, #nprogress {
    background: #fff;
}

nav {
    width: 100%;
    height: 5.5em;
    margin: 0;
    padding: 1.5em 0;
    background: transparent;
    color: inherit !important;
    display: flex;
    flex-direction: row;
    align-items: center;

    @include phone {
        padding: 0;
        height: 6em;
        width: 100%;
    }

    .nav-container {
        width: 80%;
        margin: 0 auto;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-transform: lowercase;

        @include phone {
            display: grid;
            height: 100%;
            grid-template-columns: repeat(2, 1fr);
        }

        h2 {
            font-size: 1.6em;
            font-weight: lighter;
            margin: 0;
            padding: 0;
            text-align: left;

            @include phone {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            a {
                text-decoration: none;
                color: inherit;
            }
        }

        .menu-icon {
            display: none;
            flex-direction: row-reverse;
            align-items: center;

            @include phone {
                display: flex;
                position: relative;
            }

            svg {
                width: 2.5em;
                fill: currentColor;
                cursor: pointer;
            }
        }

        .nav-links {
            height: 0 !important;

            @include phone {
                position: absolute;
                width: 100%;
                transform: translateX(-50%);
                left: 50%;
                height: auto !important;
                top: 8.5em * .7;
                display: none;
                opacity: 0;
                flex-direction: column;
                z-index: 3;
                background: #222;
                border-bottom: 1px solid white;
                padding-bottom: 1em;
                will-change: opacity;
                transition: 500ms opacity ease-in-out;
            }

            a {
                color: inherit;
                font-size: 1.3em;
                text-decoration: none;
                margin: 0;
                margin-left: 0em;
                padding: 1em;
                
                @include phone {
                    width: 100%;
                    padding: 1.1em 0;
                    margin: 0;
                    text-align: center;
                    background: #222;
                    border: none;
                    outline: none;
                }

            }
        }
    }
    
}

</style>