'use client'

import { certificacoes } from '@/data/personal'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

export function Certificacoes() {
  return (
    <section id="certificacoes" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-12 flex items-center gap-4">
          <Award size={32} className="text-accent" />
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Certificações</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificacoes.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-card border border-border p-6 rounded-xl flex flex-col gap-3 hover:border-accent transition-colors"
            >
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-lg font-semibold text-text-primary">{cert.name}</h3>
                {cert.badge && (
                  <span className="bg-success/20 text-success text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap">
                    {cert.badge}
                  </span>
                )}
              </div>
              <div className="flex justify-between items-end mt-auto pt-4 border-t border-border/50">
                <p className="text-text-muted text-sm font-medium">{cert.issuer}</p>
                <span className="text-text-muted text-sm">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
