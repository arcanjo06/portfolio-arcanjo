'use client'

import { personalInfo } from '@/data/personal'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

export function Sobre() {
  return (
    <section id="sobre" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-[1fr_2fr] gap-12 items-center"
        >
          <div className="w-full max-w-[300px] mx-auto md:mx-0 aspect-[4/5] rounded-2xl bg-bg-secondary border border-border overflow-hidden relative group">
            <Image
              src="/assets/IMG_0797-removebg-preview.png"
              alt="Foto de perfil de Levi Arcanjo"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Sobre mim
            </h2>
            
            <div className="prose prose-invert max-w-none text-text-muted leading-relaxed flex flex-col gap-4">
              <p>
                {personalInfo.bio}
              </p>
              <p>
                Atualmente residindo em {personalInfo.location}, meu foco é unir 
                design de interfaces moderno com código bem estruturado, criando 
                experiências digitais que vão além do básico. Meu trabalho em hackathons me ensinou a 
                prototipar rápido e focar na entrega de valor.
              </p>
              <p>
                Inglês: <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-sm font-medium bg-accent-light text-accent ml-1 border border-accent/20">B2 Upper Intermediate</span>
              </p>
            </div>

            <div className="mt-4">
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-bg-secondary hover:bg-bg-card border border-border hover:border-accent transition-colors text-text-primary font-medium">
                <FileText size={20} />
                Baixar Currículo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
