// Case types
export interface CaseSection {
  title: string
  description: string
}

export interface CaseItem {
  id: string
  title: string
  description: string
  image: string
  situation: CaseSection
  task: CaseSection
  action: CaseSection
  result: CaseSection
}

// Social and Links types
export interface SocialLink {
  id: number
  text: string
  href: string
}

export interface Links {
  ruResume: string
  enResume: string
  telegram: string
  enLinkedin: string
  ruLinkedin: string
  mail: string
  dribbble: string
}

// Language type
export type Language = 'ru' | 'en'

// Content structure type
export interface ContentStructure {
  logo: string
  hero: {
    hello: string
    name: string
    description: string
    resume: string
  }
}
