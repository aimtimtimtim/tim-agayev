import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { ru } from '../content/ru'
import { en } from '../content/en'

export const useLanguageStore = defineStore('language', () => {
  const lang = ref<'ru' | 'en'>(
    (localStorage.getItem('lang') as 'ru' | 'en') || 'ru'
  )

  const content = computed(() => (lang.value === 'ru' ? ru : en))

  const setLang = (newLang: 'ru' | 'en') => {
    lang.value = newLang
    localStorage.setItem('lang', newLang)
  }

  const toggleLang = () => {
    setLang(lang.value === 'ru' ? 'en' : 'ru')
  }

  return {
    lang,
    content,
    setLang,
    toggleLang,
  }
})
