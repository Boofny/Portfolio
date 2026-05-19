
type TechStackProp = {description: string}

function StackCard({ description }: TechStackProp){
  return(
    <div className="w-full h-full text-zinc-300 text-lg">
      <p>{description}</p>
    </div>
  )
}

export default StackCard;
