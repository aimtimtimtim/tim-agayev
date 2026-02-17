import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  const lang = ref<'ru' | 'en'>(
    (localStorage.getItem('lang') as 'ru' | 'en') || 'ru'
  )

  const setLang = (newLang: 'ru' | 'en') => {
    lang.value = newLang
    localStorage.setItem('lang', newLang)
  }

  const toggleLang = () => {
    setLang(lang.value === 'ru' ? 'en' : 'ru')
  }

  return {
    lang,
    setLang,
    toggleLang,
  }
})
