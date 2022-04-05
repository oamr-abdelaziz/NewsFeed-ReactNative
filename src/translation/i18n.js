import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from './en.json';
import french from './fr.json';
import arabic from './ar.json';
import * as RNLocalize from 'react-native-localize';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    return callback(RNLocalize.getLocales()[0].languageCode);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};
i18n
.use(languageDetector)
.use(initReactI18next)
.init({
    compatibilityJSON: 'v3',
    lng:"en",
    fallbackLng: "en",
  resources: {
    en: english,
    fr:french,
    ar:arabic
  },
  react:{
      useSuspense:false
  }
});

export default i18n;





/////////////////Closed Trials////////////////////

// import i18next from 'i18next';
// import Backend from 'i18next-locize-backend';

// i18next
//   .use(Backend)
//   .init({
//     // ...other options
//     backend: {
//       projectId: '319907b6-7ea8-448e-9c50-83b08374c4c1',
//       apiKey: '5fc9c92b-8272-429b-b6ca-e8312c14a264',
//       referenceLng: '[LNG]'
//     }
//   });
// export default i18next;
////////////////////////////////////////
// import i18n from 'i18next';
// import {initReactI18next} from 'react-i18next';
// import * as RNLocalize from 'react-native-localize';
// import Backend from 'i18next-locize-backend';

// const languageDetector = {
//   type: 'languageDetector',
//   async: true,
//   detect: callback => {
//     return callback(RNLocalize.getLocales()[0].languageCode);
//   },
//   init: () => {},
//   cacheUserLanguage: () => {},
// };

// const locizeOptions = {
//   projectId: '319907b6-7ea8-448e-9c50-83b08374c4c1',
//   apiKey: '5fc9c92b-8272-429b-b6ca-e8312c14a264',
//   refLng: 'en',
// };
// i18n
//   .use(Backend)
//   .use(languageDetector)
//   .use(initReactI18next)
//   .init({
//     compatibilityJSON: 'v3',
//     debug: true,
//     fallbackLng: 'en', // if you're using a language detector, do not define the lng option
//     defaultNS: 'translation',
//     ns: 'translation',
//     interpolation: {
//       escapeValue: false,
//     },
//     backend: locizeOptions,
//     saveMissing: true,
//     react: {
//       useSuspense: false,
//     },
//   });
// export default i18n;
////////////////////////
// import i18next from "i18next";
// import HttpBackend from "i18next-http-backend";
// import * as RNLocalize from 'react-native-localize';
// import { initReactI18next } from "react-i18next";

// const languageDetector = {
//   type: 'languageDetector',
//   async: true,
//   detect: callback => {
//     return callback(RNLocalize.getLocales()[0].languageCode);
//   },
//   init: () => {},
//   cacheUserLanguage: () => {},
// };

// const apiKey = "QZ5YPSdDtfSvWY8akniQcg";
// const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;
// // const loadPath=`https://api.phrase.com/v2/projects/f9c489d42dc30cb7149a0b8e103dd6c8/translations`
// i18next
//   .use(HttpBackend)
//   .use(languageDetector)
//   .use(initReactI18next)
//   .init({
//     compatibilityJSON: 'v3',
//     fallbackLng: "en",
//     ns: ["default"],
//     defaultNS: "default",

//     supportedLngs: ["en","fr"],

//     backend: {
//       loadPath: loadPath
//     },
//     saveMissing: true,
//     react: {
//       useSuspense: false,
//     },
//   })
////////////////////
// import i18n from 'i18next';
// import {initReactI18next} from 'react-i18next';
// import Backend from 'i18next-locize-backend';
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

// const locizeOptions = {
//   projectId: '319907b6-7ea8-448e-9c50-83b08374c4c1',
//   apiKey: '5fc9c92b-8272-429b-b6ca-e8312c14a264',
//   refLng: 'en',
// };

// i18n
//   .use(Backend)
//   .use(languageDetector)
//   .use(initReactI18next)
//   .init({
//     compatibilityJSON: 'v3',
//     debug: true,
//     fallbackLng: 'en', // if you're using a language detector, do not define the lng option
//     defaultNS: 'translation',
//     ns: 'translation',
//     interpolation: {
//       escapeValue: false,
//     },
//     backend: locizeOptions,
//     saveMissing: true,
//     react: {
//       useSuspense: false,
//     },
//   });
// export default i18n;
////////////////////////////////////////
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import PhraseInContextEditorPostProcessor from 'i18next-phrase-in-context-editor-post-processor';
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

// // the translations
// // (tip move them in a JSON file and import them)
// // const resources = {
// //     en: {
// //         translation: {
// //             'title': 'This headline should be replaced when In-Context editor is enabled',
// //             'intro': 'Intro translation'
// //         }
// //     },
// //     fr: {
// //         translation: {
// //             'title': 'Hallo',
// //             'intro': 'Test',
// //         }
// //     }
// // };

// i18n
//     .use(initReactI18next) // passes i18n down to react-i18next
//     .use(languageDetector)
//     .use(new PhraseInContextEditorPostProcessor({
//         phraseEnabled: true,
//         projectId: 'f9c489d42dc30cb7149a0b8e103dd6c8'
//     }))
//     .init({
//         // compatibilityJSON: 'v2',
//         // resources,
//         // lng: 'en',
//         // debug: true,
//         // fallbackLng:'en',
//         // keySeparator: false, // we do not use keys in form messages.welcome

//         interpolation: {
//             escapeValue: false // react already safes from xss
//         },
//         // postProcess: ['phraseInContextEditor'],
//         // saveMissing: true,
//         // react: {
//         // useSuspense: false,
//         // },

//         compatibilityJSON: 'v3',
//             debug: true,
//             fallbackLng: 'en', // if you're using a language detector, do not define the lng option
//         keySeparator: false, // we do not use keys in form messages.welcome
//         defaultNS: 'translation',
//             ns: 'translation',
//             interpolation: {
//               escapeValue: false,
//             },
//             // backend: locizeOptions,
//             postProcess: ['phraseInContextEditor'],
//             saveMissing: true,
//             react: {
//               useSuspense: false,
//             },
//     });

// export default i18n;

// import i18n from 'i18next';
// import Backend from 'i18next-http-backend';
// import {initReactI18next} from 'react-i18next';
// import axios from 'axios';
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
// const fallbackLanguage = 'en';

// const projectToken = '07aaf9da8349403ba47db60473bb2a0c'; // YOUR PROJECT TOKEN
// const apiKey =
//   '8BEfD55B1C0043A3308CcF910b85D1A73FcD20018c3938053e24c549B41135a7'; // YOUR API KEY

// const loadPath = `https://cdn.simplelocalize.io/07aaf9da8349403ba47db60473bb2a0c/_latest/{{lng}}`;
// const addMissingTranslationsEndpoint = `https://api.simplelocalize.io/api/v1/translations`;
// const startAutoTranslate = `https://api.simplelocalize.io/api/v1/jobs/auto-translate`;
// const autoPublish = `https://api.simplelocalize.io/api/v1/translations/publish`;

// i18n
//   .use(Backend)
//   .use(languageDetector)
//   .use(initReactI18next)
//   .init({
//     compatibilityJSON: 'v3',
//     fallbackLng: fallbackLanguage,
//     backend: {
//       loadPath: loadPath,
//     },
//     saveMissing: true,
//     react: {
//       useSuspense: false,
//     },
//     missingKeyHandler: (lngs, ns, key, fallbackValue) => {
//       // optional step
//       const configuration = {
//         headers: {
//           'X-SimpleLocalize-Token': apiKey,
//         },
//       };

//       const requestBody = {
//         content: [
//           {
//             key: key,
//             language: i18n.language,
//             text: fallbackValue,
//           },
//         ],
//       };

//       axios.post(addMissingTranslationsEndpoint, requestBody, configuration);
//       const translateRequestBody = {
//         translationProvider: 'DEEPL',
//         options: [
//           'FORCE_REPLACE',
//           'USE_TRANSLATION_KEYS',
//           'EXCLUDE_VARIABLES',
//           'AUTO_PUBLISH',
//         ],
//         targetProjectLanguage: 'fr_FR',
//         targetLanguage: 'FR',
//         sourceProjectLanguage: 'en',
//         sourceLanguage: 'EN-US',
//       };
//       axios.post(startAutoTranslate, translateRequestBody, configuration);
//       axios.post(autoPublish, configuration);
//     },
//   });

// i18n.store.on('added', function (lng, ns) {
//   const configuration = {
//     headers: {
//       'X-SimpleLocalize-Token': apiKey,
//     },
//   };
//   const translateRequestBody = {
//     translationProvider: 'GOOGLE_TRANSLATE',
//     options: [
//       'FORCE_REPLACE',
//       'USE_TRANSLATION_KEYS',
//       'EXCLUDE_VARIABLES',
//       'AUTO_PUBLISH',
//     ],
//     targetProjectLanguage: 'fr_FR',
//     targetLanguage: 'fr_FR',
//     sourceProjectLanguage: 'en',
//     sourceLanguage: 'en',
//   };
//   axios.post(startAutoTranslate, translateRequestBody, configuration);
// });

// export default i18n;
