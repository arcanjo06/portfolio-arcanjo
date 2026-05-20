import { Conquista } from '@/types'
import { Trophy, Rocket, Briefcase } from 'lucide-react'

const icons = {
  Trophy,
  Rocket,
  Briefcase
}

export function ConquistaCard({ conquista }: { conquista: Conquista }) {
  const Icon = icons[conquista.icon as keyof typeof icons] || Trophy

  return (
    <div className="bg-bg-card border border-border p-6 rounded-xl flex items-center gap-4 flex-1 min-w-[280px]">
      <div className="bg-accent-light p-3 rounded-lg text-accent">
        <Icon size={24} />
      </div>
      <div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-text-primary">{conquista.value}</span>
          <span className="text-sm font-semibold text-text-primary uppercase tracking-wider">{conquista.label}</span>
        </div>
        <p className="text-text-muted text-sm mt-1">{conquista.description}</p>
      </div>
    </div>
  )
}
