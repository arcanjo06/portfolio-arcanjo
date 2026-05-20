'use client'

import { conquistas } from '@/data/personal'
import { ConquistaCard } from '../ui/ConquistaCard'
import { motion } from 'framer-motion'

export function Conquistas() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-12 border-y border-border bg-bg-secondary/50">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap gap-6"
        >
          {conquistas.map((conquista, index) => (
            <motion.div key={index} variants={item} className="flex-1">
              <ConquistaCard conquista={conquista} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
