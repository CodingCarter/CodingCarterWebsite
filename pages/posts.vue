<template>
    <div class="recent-posts" v-if="page.posts">
      <ul>
        <li v-for="post in page.posts" :key="post.permalink">
          <!-- {{ formatDate(post.createdAt) }} - -->
          <a :href="post.permalink" v-if="!post.releasingOn">
            <h2>{{ post.title }}</h2>
            <span>{{ stripHtml(post.excerpt) }}</span>
            <h4>{{ formatDate(post.updatedAt) }} - {{ post.author }}</h4>
          </a>
          <a v-else class='not-published-post'>
            <h2>{{ post.title }}</h2>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, debitis recusandae. Voluptates porro exercitationem molestiae incidunt laboriosam deserunt nesciunt reiciendis!</span>
            <h4>Read on {{ post.releasingOn }}</h4>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
export const data = {
    layout: 'page',
    title: 'Recent Posts',
    injectAllPosts: true
}

export default {
    props: ['page'],
    methods: {
        formatDate(v) {
        const date = new Date(v)
        return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
        },
        stripHtml(excerpt) {
          excerpt = excerpt.replace(/(<([^>]+)>)/ig,"");
          return excerpt;
        }
    }
}
</script>

<style lang="scss">

@mixin phone {
  @media (max-width: 720px) { @content; }
}

.recent-posts {
  margin-top: 3em;
  
  @include phone {
    margin-top: 1em;
  }

  ul {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0;
    margin: 0 auto;
    margin-top: -1em;

    @include phone {
      width: 90%;
      margin-top: 1em;
    }

    li {
      margin: 0 auto;
      list-style: none;
      width: 100%;
      // border: 1px solid #fff;
      margin-bottom: 1em;
      padding: .5em 1em;

      @include phone {
        padding: 0;
        margin: .5em 0;
      }

      a {
        color: inherit;
        text-decoration: none;
        display: grid;
        // grid-template-columns: 125% auto;
        
        h2 {
          margin: 0;
          margin-bottom: 0em;
          font-size: 1.3em;
          font-weight: 100;

          @include phone {
            text-align: center;
            font-size: 1em;
            filter: brightness(90%);
          }
        }

        span {
          filter: brightness(70%);
          font-size: .8em;
          line-height: 1.5;
          margin: .7em 0;

          @include phone {
            display: none;
          }
        }

        h4 {
          filter: brightness(60%);
          font-size: .7em;
          line-height: 1.5;
          padding: 0;
          margin: 0;
          padding-bottom: 1em;
          font-weight: 100;

          @include phone {
            text-align: center;
            font-size: .7em;
            filter: brightness(80%);
          }
        }
      }

      .not-published-post {
        cursor: wait;
        // pointer-events: none;
        position: relative;

        span, h2 {
          filter: blur(5px) brightness(30%) !important;
        }

        h4 {
          font-size: 1.5em;
          position: absolute;
          transform: translateY(-50%);
          left: 0%;
          top: 60%;
          filter: brightness(100%);
        }

        @include phone {
          display: none;
        }
      }
    }
  }
}

</style>