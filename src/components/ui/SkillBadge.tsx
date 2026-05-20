import { Skill } from '@/types'

export function SkillBadge({ skill }: { skill: Skill }) {
  const getLevelColor = (level: Skill['level']) => {
    switch (level) {
      case 'básico': return 'bg-border text-text-muted'
      case 'intermediário': return 'bg-accent/20 text-accent'
      case 'avançado': return 'bg-success/20 text-success'
      case 'especialista': return 'bg-purple-500/20 text-purple-400'
      default: return 'bg-border text-text-muted'
    }
  }

  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-bg-secondary border border-border">
      <span className="font-medium text-text-primary text-sm">{skill.name}</span>
      <span className={`text-[10px] px-2 py-1 rounded-full ${getLevelColor(skill.level)} uppercase tracking-wider font-semibold`}>
        {skill.level}
      </span>
    </div>
  )
}
