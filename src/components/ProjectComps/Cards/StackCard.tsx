
type TechStackProp = {description: string}

function StackCard({ description }: TechStackProp){
  return(
    <div className="w-full h-full text-gray-300 font-hack">
      <p className="">{description}</p>
    </div>
  )
}

export default StackCard;
