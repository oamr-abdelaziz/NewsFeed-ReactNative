import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from './en.json';
import french from './fr.json';
import arabic from './ar.json';
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: english,
    fr: french,
    ar: arabic,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;

//// if i needed to detect device language settings

// import * as RNLocalize from 'react-native-localize';

// const languageDetector = {
//   type: 'languageDetector',
//   async: true,
//   detect: callback => {
//     return callback(RNLocalize.getLocales()[0].languageCode);
//   },
//   init: () => {},
//   cacheUserLanguage: () => {},
// };
// .use(languageDetector)
