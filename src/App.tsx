import logo from '@/assets/logo.svg'
import WWW from '@/assets/icones/www.svg'
import youtube from '@/assets/icones/youtube.svg'
import { Instagram, Linkedin } from 'lucide-react'
import { LinkButton } from './components/link-button'
import { Card } from './components/cards'
import Gabriel from '@/assets/images/gabriel-braz.jpeg'
import Fabio from '@/assets/images/fabio.jpeg'
import Celina from '@/assets/images/celina.jpeg'
import Gustavo from '@/assets/images/gustavo-sales.jpeg'
import Helen from '@/assets/images/helen.jpeg'
import Lucas from '@/assets/images/lucas.jpeg'
import Kaua from '@/assets/images/kaua.jpeg'

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
      <div className='mt-7 font-bold text-xl text-center text-[#15406B]'>
        <h3>Conheça a equipe Impacto</h3>
      </div>
      <div className="mt-7">
        <Card image={Celina} nome='Celina Wendy' alt='Foto da Celina Wendy - Front-end' />
        <Card image={Fabio} nome='Fabio Henrique' alt='Foto do Fabio Henrique - Back-end' />
        <Card image={Gabriel} nome='Gabriel Braz' alt='Foto do Gabriel Braz - Scrum Master' />
        <Card image={Gustavo} nome='Gustavo Sales' alt='Foto do Gustavo Sales - Quality Assurance' />
        <Card image={Helen} nome='Helen Silva' alt='Foto da Helen Silva - Financeira' />
        <Card image={Kaua} nome='Kauã Dolores' alt='Foto do Kauã Dolores - Back-end' />
        <Card image={Lucas} nome='Lucas Tomaz' alt='Foto do Lucas Tomaz - Product Owner' />
      </div>
      <div className='w-2/5 mt-4 space-y-6'>
      <LinkButton linkButtonIcon={WWW} linkButtonTitulo='Fale Conosco' linkParaRedirecionar='#' />
      </div>
    </div>
    
  )
}