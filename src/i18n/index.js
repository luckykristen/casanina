import cs from './cs.json'
import en from './eng.json'
import it from './it.json'

export const translations = { cs, en, it }

export function t(lang, key) {
  return translations?.[lang]?.[key] ?? key
}