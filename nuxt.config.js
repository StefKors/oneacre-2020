import Mode from 'frontmatter-markdown-loader/mode'
import {markdownCustomCompiler} from './helpers/markdownCustomCompiler'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  generate: {
    fallback: true, // if you want to use '404.html' instead of the default '200.html'
    // fallback: 'my-fallback/file.html' // if your hosting needs a custom location
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
 // Doc: https://hackernoon.com/how-i-use-scss-variables-mixins-functions-globally-in-nuxt-js-projects-while-compiling-css-utilit-58bb6ff30438
  buildModules: ['@nuxtjs/style-resources'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],

  styleResources: {
      scss: [
          'assets/scss/main.scss'
      ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [Mode.VUE_COMPONENT],
          markdown: (body) => {
            return markdownCustomCompiler(body)
          },
          // markdownIt: {
          //   html: true,
          //   linkify: true,
          //   breaks: true
          // }
        }
      })
    }
  }
}
