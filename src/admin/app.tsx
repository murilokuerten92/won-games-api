import BlackLogo from './extensions/logo-won.svg'
import favicon from './extensions/favicon.png'

export default {
  config: {
    auth: {
      logo: BlackLogo
    },
    menu: {
      logo: BlackLogo
    },
    head: {
      favicon: favicon
    },
    tutorials: false,
    notifications: { release: false },
    theme: {
      colors: {
        primary100: '#10132d',
        primary200: '#0a0d27',
        primary500: '#06081b',
        primary600: '#f231a5',
        primary700: '#f56161',
        danger700: '#b72b1a'
      },
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap() {

  },
};
