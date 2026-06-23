export default defineNuxtConfig({
  modules: ['my-module'],
  devtools: { enabled: true },
  compatibilityDate: 'latest',
  myModule: {},
   app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
        }
      ],
    }
  }
})
