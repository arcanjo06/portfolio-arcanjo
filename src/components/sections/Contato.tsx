'use client'

import { personalInfo } from '@/data/personal'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export function Contato() {
  return (
    <section id="contato" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            Vamos construir algo <span className="text-accent">incrível</span> juntos?
          </h2>
          
          <p className="text-text-muted text-lg">
            Estou sempre aberto a conversar sobre novos projetos, oportunidades 
            criativas e parcerias estratégicas.
          </p>

          <a 
            href={personalInfo.links.email}
            className="text-2xl md:text-3xl font-semibold text-text-primary hover:text-accent transition-colors"
          >
            {personalInfo.links.email.replace('mailto:', '')}
          </a>

          <div className="flex gap-4">
            <Link href={personalInfo.links.github} target="_blank" aria-label="GitHub" className="p-3 bg-bg-secondary border border-border rounded-lg text-text-muted hover:text-text-primary hover:border-accent transition-all">
              <Github size={24} />
            </Link>
            <Link href={personalInfo.links.linkedin} target="_blank" aria-label="LinkedIn" className="p-3 bg-bg-secondary border border-border rounded-lg text-text-muted hover:text-text-primary hover:border-accent transition-all">
              <Linkedin size={24} />
            </Link>
            <Link href={personalInfo.links.instagram} target="_blank" aria-label="Instagram" className="p-3 bg-bg-secondary border border-border rounded-lg text-text-muted hover:text-text-primary hover:border-accent transition-all">
              <Instagram size={24} />
            </Link>
          </div>

          <Link 
            href={personalInfo.links.whatsapp}
            target="_blank"
            className="mt-4 bg-success hover:bg-success/90 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 transition-colors hover:scale-105 active:scale-95 duration-200"
          >
            <MessageSquare size={24} />
            Iniciar conversa no WhatsApp
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
