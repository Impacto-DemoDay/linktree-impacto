interface LinkButtonProps {
  linkButtonTitulo: string
  linkButtonIcon: string
  linkParaRedirecionar: string
}

export function LinkButton({ linkButtonIcon, linkButtonTitulo, linkParaRedirecionar }: LinkButtonProps) {
  return(
    <a href={linkParaRedirecionar} target="_blank" className="bg-[#004AAD] hover:opacity-80 transition-all flex items-center justify-between py-3 px-3 border-[3px] border-[#001858] text-zinc-200 font-bold text-xl rounded-xl">
      <img src={linkButtonIcon} />
      {linkButtonTitulo}
      <img src={linkButtonIcon} /> 
    </a>
  )
}