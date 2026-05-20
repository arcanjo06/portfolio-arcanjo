export interface Project {
  id: string
  title: string
  description: string
  problem: string
  solution: string
  stack: string[]
  category: 'saas' | 'ia' | 'landing' | 'ecommerce' | 'hackathon'
  liveUrl?: string
  githubUrl?: string
  award?: string
  period?: string
  highlight?: boolean
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  type: 'fulltime' | 'freelance' | 'internship' | 'volunteer' | 'apprentice'
  current: boolean
  bullets: string[]
}

export interface Skill {
  name: string
  icon?: string
  level: 'básico' | 'intermediário' | 'avançado' | 'especialista'
}

export interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

export interface Certification {
  name: string
  issuer: string
  date: string
  credentialUrl?: string
  badge?: string
}

export interface Conquista {
  value: string
  label: string
  description: string
  icon: string
}

export interface PersonalInfo {
  name: string
  nickname: string
  headline: string
  bio: string
  location: string
  available: boolean
  links: {
    whatsapp: string
    linkedin: string
    github: string
    instagram: string
    email: string
  }
}
