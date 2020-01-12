<template>
    <footer>
        <div class="footer-container">
            <div class="footer-links">
                <saber-link to='/'>Home</saber-link>
                <saber-link to='/posts'>Posts</saber-link>
                <saber-link to='/about-me'>About Me</saber-link>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">

footer {
    width: 100%;
    height: 6em;
    margin: 0;
    padding: 0;
    background: #222;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;

    .footer-container {
        width: 80%;
        margin: 0 auto;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        div {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            a {
                text-transform: lowercase;
                color: #fff;
                font-size: 1.5em;
                text-decoration: none;
                margin-left: 0em;
                padding: 1em;
            }
        }
    }
    
}

</style>