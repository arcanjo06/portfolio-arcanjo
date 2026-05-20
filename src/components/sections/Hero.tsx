'use client'

import { personalInfo } from '@/data/personal'
import { TypewriterText } from '../ui/TypewriterText'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  const phrases = [
    'Desenvolvedor Full-Stack',
    'Especialista em UX/UI Design',
    'Construo soluções com IA'
  ]

  return (
    <section id="hero" className="py-24 flex items-center min-h-[90vh]">
      <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-6"
        >
          {personalInfo.available && (
            <div className="flex items-center gap-2 bg-success/10 border border-success/20 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              <span className="text-success text-sm font-medium">👋 Disponível para oportunidades</span>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold text-text-primary leading-tight">
              LEVI ARCANJO
            </h1>
            <h2 className="text-xl md:text-2xl text-text-muted font-medium">
              <TypewriterText phrases={phrases} />
            </h2>
          </div>

          <p className="text-text-muted text-base max-w-md">
            Transformo problemas complexos em interfaces elegantes e sistemas escaláveis. 
            Mais de 2 anos criando MVPs e soluções focadas no usuário.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link 
              href={personalInfo.links.whatsapp} 
              target="_blank"
              className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contratar para projeto
            </Link>
            <Link 
              href={personalInfo.links.linkedin} 
              target="_blank"
              className="bg-bg-secondary hover:bg-accent/10 border border-border text-text-primary px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Ver no LinkedIn
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden md:block mx-auto"
        >
          <div className="w-72 h-72 rounded-2xl border-4 border-accent relative overflow-hidden group">
            <Image
              src="/assets/IMG_0797-removebg-preview.png"
              alt="Foto de perfil de Levi Arcanjo"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
