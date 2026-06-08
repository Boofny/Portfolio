
interface CardProp{
  title: string;
  children?: React.ReactNode;
  mobileTitle: string
  xPadding: string,
}

function Card(prop: CardProp){
  return(
    <div className={`md:h-128 w-full pb-20 flex justify-center items-center md:pt-20 md:${prop.xPadding}`}>
      <fieldset className="bg-OneDarkGray border-3 border-OneGreen rounded mx-10 h-full w-full md:w-full">
        <legend className="md:block hidden ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
          {prop.title}
        </legend>
        <legend className="md:hidden block ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
          {prop.mobileTitle}
        </legend>
        <div>
          {prop.children}
        </div>
      </fieldset>
    </div>
  )
}

export default Card;
