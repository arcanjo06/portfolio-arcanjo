import { Hero } from '@/components/sections/Hero'
import { Conquistas } from '@/components/sections/Conquistas'
import { Sobre } from '@/components/sections/Sobre'
import { Projetos } from '@/components/sections/Projetos'
import { Habilidades } from '@/components/sections/Habilidades'
import { Experiencia } from '@/components/sections/Experiencia'
import { Certificacoes } from '@/components/sections/Certificacoes'
import { Servicos } from '@/components/sections/Servicos'
import { Contato } from '@/components/sections/Contato'

export default function Home() {
  return (
    <>
      <Hero />
      <Conquistas />
      <Sobre />
      <Projetos />
      <Habilidades />
      <Experiencia />
      <Certificacoes />
      <Servicos />
      <Contato />
    </>
  )
}
