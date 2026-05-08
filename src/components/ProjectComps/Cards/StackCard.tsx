
type TechStackProp = {description: string}

function StackCard({ description }: TechStackProp){
  return(
    <div className="w-full h-full text-white">
      <p>{description}</p>
    </div>
  )
}

export default StackCard;
