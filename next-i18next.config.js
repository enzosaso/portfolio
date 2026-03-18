module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en']
  },
  react: {
    useSuspense: false
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath: './public/locales'
}
