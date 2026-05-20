'use client'

import { Project } from '@/types'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-bg-card rounded-xl border border-border p-6 flex flex-col gap-4 hover:border-accent transition-colors group">
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-[1.1rem] font-semibold text-text-primary group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        {project.award && (
          <span className="bg-success/20 text-success text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap">
            {project.award}
          </span>
        )}
      </div>

      <p className="text-text-muted text-sm line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.stack.map(tech => (
          <span key={tech} className="bg-bg-secondary text-text-muted text-xs px-2 py-1 rounded-md">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-4 border-t border-border/50">
        {project.liveUrl && (
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-text-primary hover:text-accent transition-colors">
            <ExternalLink size={16} /> Ver projeto
          </Link>
        )}
        {project.githubUrl && (
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors">
            <Github size={16} /> Ver código
          </Link>
        )}
      </div>
    </div>
  )
}
