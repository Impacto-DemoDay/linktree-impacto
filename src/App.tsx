import logo from '@/assets/logo.svg'
import WWW from '@/assets/icones/www.svg'
import youtube from '@/assets/icones/youtube.svg'

import { Instagram, Linkedin } from 'lucide-react'

import { LinkButton } from './components/link-button'

export default function App() {
  return (
    <div className="absolute inset-0 flex items-center flex-col">
      <figure className="mt-10">
        <img src={logo} alt="Logo da Impacto" />
      </figure>

      <div className="mt-7 font-bold text-3xl text-center text-[#15406B]">
        <h2>Unindo causas</h2>
        <h2>Transformando vidas!</h2>
      </div>

      <div className="mt-4 flex gap-3">
        <a href="https://www.instagram.com/impactoinspira/" target="_blank">
          <Instagram className="text-[#15406B] hover:opacity-70 cursor-pointer" height="28" width="28"/>
        </a>
        <a href="https://www.linkedin.com/company/projetoimpacto/" target="_blank">
          <Linkedin className="text-[#15406B] hover:opacity-70 cursor-pointer" height="28" width="28" /> 
        </a>
      </div>

      <div className="w-2/5 mt-4 space-y-6">
        <LinkButton linkButtonIcon={WWW} linkButtonTitulo="Plataforma" linkParaRedirecionar="#" />
        <LinkButton linkButtonIcon={youtube} linkButtonTitulo="Dossiê" linkParaRedirecionar="#" />
      </div>
    </div>
  )
}