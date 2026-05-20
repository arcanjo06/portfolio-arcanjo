import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'barberpro',
    title: 'BarberPro',
    description: 'SaaS de agendamento autônomo 24h com dashboard para o barbeiro, foco no faturamento e agendamento direto.',
    problem: 'Barbeiros perdiam horas gerenciando agenda pelo WhatsApp.',
    solution: 'Sistema com link direto para os clientes agendarem e um painel de gestão de horários para os barbeiros.',
    stack: ['React', 'Supabase'],
    category: 'saas',
    period: '1 semana (MVP)'
  },
  {
    id: 'vocacione',
    title: 'Vocacione',
    description: 'Plataforma com gamificação (Pet Vocacional) e IA que gera relatório narrativo baseado nas 8 Inteligências Múltiplas de Howard Gardner.',
    problem: 'Testes vocacionais tradicionais são rasos e desengajantes.',
    solution: 'Gamificação inteligente combinada com IA para gerar um relatório em JSON com um plano de ação completo.',
    stack: ['Node.js', 'Supabase', 'Google Gemini API'],
    category: 'ia',
    liveUrl: 'https://vocalizee.vercel.app',
    award: '🥇 1º lugar Romathon'
  },
  {
    id: 'album-phygital',
    title: 'Álbum Phygital',
    description: 'Experiência imersiva integrando presentes físicos a componentes digitais personalizados.',
    problem: 'Presentes físicos não têm componente digital personalizado.',
    solution: 'QR Code impresso em álbum artesanal que abre micro-página do casal com timer em tempo real, música do Spotify e texto animado.',
    stack: ['Vue.js', 'Supabase'],
    category: 'landing',
    liveUrl: 'https://sistema-nossa-historia.vercel.app',
    period: '3 dias (MVP)'
  },
  {
    id: 'briefflow-ai',
    title: 'BriefFlow AI',
    description: 'Copiloto de IA para levantamento de requisitos em reuniões de engenharia de software.',
    problem: 'Projetos falham por requisitos mal levantados em reuniões iniciais.',
    solution: 'Copiloto que sugere perguntas em tempo real, identifica lacunas e estrutura informações nos moldes de desenvolvimento.',
    stack: ['IA', 'Prototipagem rápida'],
    category: 'ia',
    award: '🥉 3º lugar Hackatech'
  },
  {
    id: 'amor-printed',
    title: 'Amor Printed',
    description: 'Catálogo online com UX focada em conversão e experiência de compra para uma loja artesanal.',
    problem: 'Loja artesanal sem presença digital estruturada, dificultando vendas e escalabilidade.',
    solution: 'Desenvolvimento de plataforma robusta resultando em +30% na taxa de conversão.',
    stack: ['Next.js', 'TypeScript'],
    category: 'ecommerce',
    liveUrl: 'https://amorprinted.vercel.app'
  },
  {
    id: 'vocalize',
    title: 'Vocalize!',
    description: 'Análise de perfil único com compatibilidade, pontos fortes e plano de ação.',
    problem: 'Profissionais sem clareza sobre sua direção de carreira.',
    solution: 'Formulário interativo onde a Google Gemini API gera carreiras alternativas baseadas em dados do usuário.',
    stack: ['Vue.js', 'Node.js', 'Google Gemini API'],
    category: 'ia',
    liveUrl: 'https://vocalizee.vercel.app'
  },
  {
    id: 'lima-vision',
    title: 'Lima Vision',
    description: 'Landing page corporativa moderna com contraste em preto e roxo.',
    problem: 'Necessidade de uma página para refletir modernidade e profissionalismo.',
    solution: 'Interface limpa, moderna, focada em performance e layout clean.',
    stack: ['HTML', 'CSS', 'JS'],
    category: 'landing',
    liveUrl: 'https://limavision.vercel.app'
  }
]
