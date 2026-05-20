import { Experience } from '@/types'

export function TimelineItem({ exp }: { exp: Experience }) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border">
      <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-bg-secondary border-2 border-accent" />
      
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-accent text-sm font-medium">{exp.period}</span>
          {exp.current && (
            <span className="bg-accent-light text-accent text-xs font-medium px-2 py-1 rounded-full uppercase tracking-wider">
              Atual
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-text-primary mt-1">{exp.role}</h3>
        <p className="text-text-muted text-sm font-medium">{exp.company} • {exp.location}</p>
        
        <ul className="mt-4 flex flex-col gap-2">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="text-text-muted text-sm flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
