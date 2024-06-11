import InstagramIcone from '@/assets/icones/instagram.svg'
import LinkedinIcone from '@/assets/icones/linkedin.svg'
import GithubIcone from '@/assets/icones/github.svg'

interface CardProps {
  image: string
  nome: string
  alt: string
  cargo: string
  redes: {
    instagram?: string,
    github: string,
    linkedin: string
  }
}

const regexInstagram = /https:\/\/www\.instagram\.com\/([^/]+)\//
const regexGithub = /https:\/\/github\.com\/([^/]+)/;

export function Card({ image, nome, alt, redes, cargo }: CardProps) {
  const instagramMatch = redes.instagram?.match(regexInstagram)
  const githubMatch = redes.github.match(regexGithub)
  const usuarioInstagram = (instagramMatch && instagramMatch[1]) ? instagramMatch[1] : ""
  const usuarioGithub = (githubMatch && githubMatch[1]) ? githubMatch[1] : ""
    return(
      <article className='group [pespective: 1000px]'>
        <div className="relative w-72 h-[330px] [transform-style:preserve-3d] transition-all duration-500 group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 p-5 bg-[#004AAD] border-[3px] border-[#001858] rounded-xl shadow-md">
            <figure>
              <img className='border-[3px] border-[#001858] rounded-xl max-h-[242px] w-full object-cover' src={image} alt={alt} />
            </figure>
            <p className='text-center mt-5 text-white font-bold text-xl shadow-sm'>{nome}</p>
          </div>
          <div className="absolute inset-0 p-5 bg-[#004AAD] border-[3px] border-[#001858] rounded-xl shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <h4 className="text-zinc-50 font-semibold text-center text-2xl mb-12">{cargo}</h4>

            <div className="flex flex-col gap-4">
              { redes.instagram && (
                <a href={redes.instagram} target='_blank' className="flex items-center text-xl font-semibold gap-2 text-white hover:underline hover:underline-offset-2">
                  <img src={InstagramIcone} alt="Icone do instagram" />
                  <p>@{usuarioInstagram}</p>
                </a>
              ) }

              <a href={redes.linkedin} target='_blank' className="flex items-center text-xl font-semibold gap-2 text-white hover:underline hover:underline-offset-2">
                <img src={LinkedinIcone} alt="Icone do linkedin" />
                <p>{nome}</p>
              </a>

              <a href={redes.github} target='_blank' className="flex items-center text-xl font-semibold gap-2 text-white hover:underline hover:underline-offset-2">
                <img src={GithubIcone} alt="Icone do linkedin" />
                <p>{usuarioGithub}</p>
              </a>
            </div>
          </div>
        </div>
      </article>
    )
  }