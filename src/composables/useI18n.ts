import { useLanguageStore } from '../stores/language'
import { computed, ComputedRef } from 'vue'

export type LanguageKey = 'ru' | 'en'

export function useI18n<T extends Record<string, Record<LanguageKey, any>>>(
  translations: T
): ComputedRef<{ [K in keyof T]: T[K][LanguageKey] }> {
  const langStore = useLanguageStore()

  return computed(() => {
    const result = {} as { [K in keyof T]: T[K][LanguageKey] }
    for (const key in translations) {
      result[key as keyof T] = translations[key][langStore.lang]
    }
    return result
  })
}
