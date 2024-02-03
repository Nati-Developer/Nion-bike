const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button className={`
    flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none transition ease-in delay-100 duration-200 hover:bg-transparent hover:text-white
      ${
        backgroundColor 
        ? `${backgroundColor} ${textColor} ${borderColor}` 
        : "bg-coral-red text-white border-coral-red"} rounded-full ${fullWidth && 'w-full'}"}`

    }>

      {label}
        {iconURL&& <img
          src={iconURL}
          alt="icone de seta esquerda"
          className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Button