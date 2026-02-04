import { ref, computed } from 'vue'
import { ru } from './ru'
import { en } from './en'

export const lang = ref(localStorage.getItem('lang') || 'ru')

export const setLang = (val: 'ru' | 'en') => {
    lang.value = val
    localStorage.setItem('lang', val)
}

export const content = computed(() => lang.value === 'ru' ? ru : en)

export function useI18n() {
    return { content, setLang, lang }
}