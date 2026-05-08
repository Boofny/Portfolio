interface CardProp{
  title: string;
  children?: React.ReactNode;
}
function Card({title, children}: CardProp){
  return(
    <div className="md:h-128 w-full pb-10 flex justify-center items-center md:pt-20">
      <fieldset className="bg-OneDarkGray border-3 border-OneGreen rounded mx-10 h-full w-full md:w-full">
        <legend className="ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
          {title}
        </legend>
        <div>
          {children}
        </div>
      </fieldset>
    </div>
  )
}

export default Card;
