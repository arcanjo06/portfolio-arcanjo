import { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Front-end & Design',
    icon: 'MonitorSmartphone',
    skills: [
      { name: 'HTML5', level: 'avançado' },
      { name: 'CSS3 / Sass / Tailwind', level: 'avançado' },
      { name: 'JavaScript ES6+', level: 'avançado' },
      { name: 'TypeScript', level: 'intermediário' },
      { name: 'Vue.js', level: 'avançado' },
      { name: 'React', level: 'intermediário' },
      { name: 'Next.js', level: 'intermediário' },
      { name: 'Figma', level: 'avançado' },
      { name: 'UX/UI Design', level: 'avançado' }
    ]
  },
  {
    title: 'Back-end & Banco',
    icon: 'Database',
    skills: [
      { name: 'Node.js', level: 'intermediário' },
      { name: 'PHP', level: 'intermediário' },
      { name: 'Python (Flask)', level: 'básico' },
      { name: 'MySQL', level: 'intermediário' },
      { name: 'PostgreSQL', level: 'básico' },
      { name: 'Supabase', level: 'intermediário' },
      { name: 'APIs RESTful', level: 'avançado' }
    ]
  },
  {
    title: 'Ferramentas & DevOps',
    icon: 'Wrench',
    skills: [
      { name: 'Git', level: 'avançado' },
      { name: 'GitHub', level: 'avançado' },
      { name: 'Vercel', level: 'avançado' },
      { name: 'NPM', level: 'avançado' },
      { name: 'SEO Técnico', level: 'avançado' },
      { name: 'WCAG (Acessibilidade)', level: 'avançado' }
    ]
  },
  {
    title: 'IA & Integrações',
    icon: 'Bot',
    skills: [
      { name: 'Google Gemini API', level: 'avançado' },
      { name: 'Prompt Engineering', level: 'avançado' },
      { name: 'APIs de IA', level: 'intermediário' }
    ]
  }
]
