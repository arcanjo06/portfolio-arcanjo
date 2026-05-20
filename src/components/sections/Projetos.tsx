'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import { ProjectCard } from '../ui/ProjectCard'
import { motion, AnimatePresence } from 'framer-motion'

export function Projetos() {
  const [filter, setFilter] = useState('todos')
  
  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'saas', label: 'SaaS' },
    { id: 'ia', label: 'IA' },
    { id: 'landing', label: 'Landing Page' },
    { id: 'ecommerce', label: 'E-commerce' }
  ]

  const filteredProjects = filter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projetos" className="py-24 bg-bg-secondary/30">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">Projetos em Destaque</h2>
            <p className="text-text-muted">Soluções reais que construí para problemas reais.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat.id 
                    ? 'bg-accent text-white' 
                    : 'bg-bg-secondary text-text-muted hover:text-text-primary border border-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
