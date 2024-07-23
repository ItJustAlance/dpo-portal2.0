import svgLoader from 'vite-svg-loader';
import Aura from '@primevue/themes/aura';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

export default defineNuxtConfig({
  devtools: true,
  ssr: true,

  runtimeConfig: {
    cookieName: "__session",
    cookieSecret: "secret",
    cookieExpires: ONE_DAY.toString(),
    cookieRememberMeExpires: ONE_WEEK.toString(),
  },

  modules: [
    '@primevue/nuxt-module',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@vueuse/nuxt'
    ],

  css: ['@/assets/sass/_app.scss'],

  vite: {
        plugins: [
          svgLoader({
            svgoConfig: {
              multipass: true,
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      // viewBox is required to resize SVGs with CSS.
                      // @see https://github.com/svg/svgo/issues/1128
                      removeViewBox: false
                    }
                  }
                }
              ]
            }
          })
        ],
    build: {
      //sourcemap: 'inline'
    },
    css: {
      preprocessorOptions: {
        scss: {
          //additionalData: `@import "./src/scss/_app.scss";`
        }
      },
      devSourcemap: true, // this one
    },
    },

  components: {
    dirs: [
      '~/components'
    ]
  },

  content: {
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue']
    }
    // Options
  },

  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'de', file: 'de.json', name: 'German' }
    ],
    vueI18n: './vue-i18n.options.ts'
  },

  primevue: {
    components: {
      include: ['Checkbox', 'Radio', 'InputOtp']
    },
    options: {
      //ripple: true,
      //unstyled: true,
      theme: {
        preset: Aura,
        options: {
          cssLayer: false
        }
      }
    }
  },

  build: {
    transpile: ['nuxt', 'primevue'],
    // extend(config, { isClient }) {
    //   // Extend only webpack config for client-bundle
    //   if (isClient) {
    //     config.devtool = 'source-map'
    //   }
    // },
    //extractCSS: true,
  },

  sourcemap: {
    client: true,
    server: true
  },

  compatibilityDate: '2024-07-21'
});
