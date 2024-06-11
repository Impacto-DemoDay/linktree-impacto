import { Instagram, Linkedin } from 'lucide-react'

import logo from '@/assets/logo.svg'
import WWW from '@/assets/icones/www.svg'
import dossie from '@/assets/icones/dossie.svg'
import Balao from '@/assets/icones/balao.svg'

import { LinkButton } from './components/link-button'
import { Card } from './components/cards'

import Gabriel from '@/assets/images/gabriel-braz.jpeg'
import Fabio from '@/assets/images/fabio.jpeg'
import Celina from '@/assets/images/celina.jpeg'
import Gustavo from '@/assets/images/gustavo-sales.jpeg'
import Helen from '@/assets/images/helen.jpeg'
import Lucas from '@/assets/images/lucas.jpeg'
import Kaua from '@/assets/images/kaua.jpeg'

const colaboradoresImpacto = [
  {
    nome: "Celina Wendy",
    image: Celina,
    cargo: "Frontend",
    redes: {
      instagram: "https://www.instagram.com/wen_zegarra/",
      github: "https://github.com/Celina22w",
      linkedin: "https://www.linkedin.com/in/celina-lozano-981895282/"
    }
  },
  {
    nome: "Fabio Henrique",
    image: Fabio,
    cargo: "Backend",
    redes: {
      instagram: "https://www.instagram.com/henrique_fhsilva/",
      github: "https://github.com/FH-Silva",
      linkedin: "https://www.linkedin.com/in/fh-silva/"
    }
  },
  {
    nome: "Gabriel Braz",
    image: Gabriel,
    cargo: "Scrum Master e FullStack",
    redes: {
      github: "https://github.com/bieelbrz",
      linkedin: "https://www.linkedin.com/in/gabbraz/"
      }
  },
  {
    nome: "Gustavo Sales",
    image: Gustavo,
    cargo: "Q.A e Fullstack",
    redes: {
      instagram: "https://www.instagram.com/devgusales/",
      github: "https://github.com/Gusales",
      linkedin: "https://www.linkedin.com/in/devgusales/"
    }
  },
  {
    nome: "Helen Silva",
    image: Helen,
    cargo: "UX/UI, Financeira e Frontend",
    redes: {
      instagram: "https://www.instagram.com/_aart.girl/",
      github: "https://github.com/helenrocha19",
      linkedin: "https://www.linkedin.com/in/helen-silva-26b176231/"
    }
  },
  {
    nome: "Kauã Dolores",
    image: Kaua,
    cargo: "Backend e DevOps",
    redes: {
      instagram: "https://www.instagram.com/doloresskaua22/",
      github: "https://github.com/Kauadoloress",
      linkedin: "https://www.linkedin.com/in/kaua-dolores-developer/"
    }
  },
  {
    nome: "Lucas Tomaz",
    image: Lucas,
    cargo: "Product Owner, UX/UI e Frontend",
    redes: {
      instagram: "https://www.instagram.com/_lucastomazz_/",
      github: "https://github.com/LucasLTM",
      linkedin: "https://www.linkedin.com/in/lucas-tomaz-monteiro-331149270/"
    }
  },
]

export default function App() {
  return (
    <>
    <div className="fixed inset-0 bg-zinc-50/35 backdrop-blur-sm" />
    <div className="absolute inset-0 flex items-center flex-col">
      <figure className="mt-10">
        <img src={logo} alt="Logo da Impacto" />
      </figure>
      <div className="mt-7 font-bold text-3xl text-center text-[#15406B]">
        <h2>Unindo causas,</h2>
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
      <div className="w-[80%] md:w-2/5 mt-4 space-y-6">
        <LinkButton linkButtonIcon={WWW} linkButtonTitulo="Plataforma" linkParaRedirecionar="#" />
        <LinkButton linkButtonIcon={dossie} linkButtonTitulo="Dossiê" linkParaRedirecionar="#" />
      </div>
      <div className='mt-7 font-bold text-2xl text-center text-[#15406B]'>
        <h3>Conheça a equipe Impacto</h3>
      </div>
      <div className="mt-7 flex card-break:grid flex-col md:grid-cols-2 w-5/12 justify-items-center gap-y-4 place-items-center">
      {colaboradoresImpacto.map((impactante, index) => (
            <div
              key={index}
              className={`${index === colaboradoresImpacto.length - 1 && index % 2 === 0 ? 'col-span-2' : ''}`}
            >
              <Card
                image={impactante.image}
                nome={impactante.nome}
                alt={`${impactante.nome} - ${impactante.cargo}`}
                redes={impactante.redes}
                cargo={impactante.cargo}
              />
            </div>
          ))}
      </div>
      <div className='w-[80%] md:w-2/5 mt-4 space-y-6 pb-4'>
        <LinkButton linkButtonIcon={Balao} linkButtonTitulo='Fale Conosco' linkParaRedirecionar='mailto:projeto.impactosocial@gmail.com' />
      </div>
    </div>
    </>
  )
}