import { PersonalInfo, Conquista, Certification } from '@/types'

export const personalInfo: PersonalInfo = {
  name: 'Levi Arcanjo',
  nickname: 'Dev Arcanjo',
  headline: 'Full-Stack Developer · UX/UI · IA Aplicada',
  bio: 'Estudante de Análise e Desenvolvimento de Sistemas na Faculdade Nova Roma (último semestre). Sou um desenvolvedor apaixonado por criar produtos que resolvem problemas reais. Vencedor de hackathons (Romathon 1º lugar e Hackatech 3º lugar), possuo mais de 2 anos de experiência como freelancer construindo soluções e MVPs com tecnologias modernas e IA aplicada.',
  location: 'Caruaru, PE — Brasil',
  available: true,
  links: {
    whatsapp: 'https://wa.me/5581996609690',
    linkedin: 'https://www.linkedin.com/in/levi-murilo',
    github: 'https://github.com/arcanjo06',
    instagram: 'https://www.instagram.com/dev.arcanjo/',
    email: 'mailto:arcanjolevi000@gmail.com',
  },
}

export const conquistas: Conquista[] = [
  {
    value: '2',
    label: 'Hackathons vencidos',
    description: '1º lugar Romathon e 3º lugar Hackatech',
    icon: 'Trophy'
  },
  {
    value: '7+',
    label: 'Projetos entregues',
    description: 'MVPs validados por usuários reais',
    icon: 'Rocket'
  },
  {
    value: '2+',
    label: 'Anos de freelance',
    description: 'Desenvolvimento e design focados na satisfação do cliente',
    icon: 'Briefcase'
  }
]

export const certificacoes: Certification[] = [
  {
    name: 'EF SET English Certificate — B2 Upper Intermediate (54/100)',
    issuer: 'EF SET',
    date: 'nov/2025',
    badge: 'B2 Upper Intermediate'
  },
  {
    name: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    date: 'mai/2024'
  }
]
