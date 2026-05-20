import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-bg-secondary py-12 border-t border-border mt-20">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-muted text-sm">
          Desenvolvido por Levi Arcanjo — {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-6 text-sm">
          <Link href="#sobre" className="text-text-muted hover:text-accent transition-colors">Sobre</Link>
          <Link href="#projetos" className="text-text-muted hover:text-accent transition-colors">Projetos</Link>
          <Link href="#contato" className="text-text-muted hover:text-accent transition-colors">Contato</Link>
        </div>
      </div>
    </footer>
  )
}
