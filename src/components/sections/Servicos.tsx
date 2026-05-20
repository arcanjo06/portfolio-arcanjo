'use client'

import { motion } from 'framer-motion'
import { Palette, LayoutTemplate, Briefcase, Monitor, Code, Bot } from 'lucide-react'

const servicos = [
  {
    icon: Palette,
    title: 'UX/UI Design',
    description: 'Interfaces intuitivas, acessíveis e focadas na experiência do usuário, seguindo a abordagem mobile-first.'
  },
  {
    icon: LayoutTemplate,
    title: 'Landing Pages',
    description: 'Páginas de alta conversão, otimizadas para engajamento e vendas do seu produto ou serviço.'
  },
  {
    icon: Briefcase,
    title: 'Criação de Portfólios',
    description: 'Identidade visual personalizada e memorável para profissionais se destacarem no mercado.'
  },
  {
    icon: Monitor,
    title: 'Sites Responsivos',
    description: 'Aplicações adaptadas a qualquer dispositivo, desde smartphones até grandes monitores.'
  },
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Soluções full-stack completas, seguras e escaláveis utilizando as melhores tecnologias do mercado.'
  },
  {
    icon: Bot,
    title: 'Integração com IA',
    description: 'Chatbots, análise de dados e automações inteligentes com LLMs para otimizar processos.'
  }
]

export function Servicos() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="servicos" className="py-24 bg-bg-secondary/30 border-y border-border">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Serviços Oferecidos</h2>
          <p className="text-text-muted">Como posso ajudar a transformar sua ideia em realidade através de tecnologia e design estratégico.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicos.map((servico, index) => {
            const Icon = servico.icon
            return (
              <motion.div 
                key={index} 
                variants={item}
                className="bg-bg-card border border-border p-8 rounded-xl flex flex-col gap-4 hover:border-accent group transition-colors"
              >
                <div className="bg-accent-light text-accent w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">{servico.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{servico.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
