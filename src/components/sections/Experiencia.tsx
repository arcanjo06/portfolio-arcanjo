'use client'

import { experienceData } from '@/data/experience'
import { TimelineItem } from '../ui/TimelineItem'
import { motion } from 'framer-motion'

export function Experiencia() {
  return (
    <section id="experiencia" className="py-24 bg-bg-secondary/30 border-y border-border">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">Experiência Profissional</h2>
          <p className="text-text-muted">Minha trajetória construindo e evoluindo produtos digitais.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {experienceData.map(exp => (
            <TimelineItem key={exp.id} exp={exp} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
