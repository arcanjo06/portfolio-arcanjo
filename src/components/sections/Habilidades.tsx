'use client'

import { skillCategories } from '@/data/skills'
import { SkillBadge } from '../ui/SkillBadge'
import { motion } from 'framer-motion'
import { MonitorSmartphone, Database, Wrench, Bot } from 'lucide-react'

const icons = {
  MonitorSmartphone,
  Database,
  Wrench,
  Bot
}

export function Habilidades() {
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
    <section id="habilidades" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">Habilidades & Ferramentas</h2>
          <p className="text-text-muted">Minha stack técnica e ferramentas do dia a dia.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map(category => {
            const Icon = icons[category.icon as keyof typeof icons] || MonitorSmartphone

            return (
              <motion.div key={category.title} variants={item} className="flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent-light text-accent">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map(skill => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
