
interface CardProps {
  image: string
  nome: string
  alt: string
}
export function Card({ image, nome, alt }: CardProps) {
    return(
      <article className='w-60 p-5 bg-[#004AAD] border-[3px] border-[#001858] rounded-xl'>
          <figure>
            <img className='border-[3px] border-[#001858] rounded-xl' src={image} alt={alt} />
          </figure>
          <p className='text-center mt-5 text-white font-bold text-xl shadow-sm'>{nome}</p>
        </article>
    )
  }