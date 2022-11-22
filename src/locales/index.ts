import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import enUS from './en-US'
import zhCN from './zh-CN'

function injectLanguages() {
  const dataMap: any = {
    'en-US': enUS,
    'zh-CN': zhCN
  }

  return Object.keys(dataMap).reduce((previous, key) => {
    return {
      ...previous,
      [key]: {
        translation: {
          ...Object.assign({}, dataMap[key])
        }
      }
    }
  }, {})
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ...injectLanguages()
    },
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false
    }
  })
