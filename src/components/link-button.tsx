import { ComponentProps } from "react"

interface LinkButtonProps extends ComponentProps<'a'> {
  linkButtonTitulo: string
  linkButtonIcon: string
}

export function LinkButton({ linkButtonIcon, linkButtonTitulo, ...props }: LinkButtonProps) {
  return(
    <a {...props} target="_blank" className="bg-[#004AAD] hover:opacity-80 transition-all flex items-center justify-between py-3 px-3 border-[3px] border-[#001858] text-zinc-200 font-bold text-xl rounded-xl">
      <img src={linkButtonIcon} />
      {linkButtonTitulo}
      <img src={linkButtonIcon} /> 
    </a>
  )
}