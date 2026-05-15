import { FaGithub  }from "react-icons/fa"
import {type CompCardFooter} from "./Types.ts"

interface CompContent {
  Description: string
  TechUsed: CompCardFooter[],
  Image: string // using string for now but can use a url or pic later
  Repo: string 
  Name: string 
}

export function CompCard(content: CompContent) {
  return (
    <div className="w-full h-full bg-OneDarkGray flex flex-col border">

      {/* Image content */}
      <div className="w-full flex-1 flex flex-col md:flex-row ">
        {/* Image */}
        <div className="w-full h-48 md:h-full flex justify-center items-center">
          <img className="w-full h-full object-cover" src="pic" alt={content.Image} />
        </div>
        {/* Description for mobile */}
        <div className="md:hidden block w-full md:w-72 md:shrink-0 border border-white p-2">
          <p className="text-white">{content.Description}</p>
        </div>

        {/* ----------------------------------------- */}
        {/* stack and intro */}
        <div className="md:block hidden border-l w-1/3 h-full flex justify-center items-center flex-col">

          <div className="border-b w-full h-full flex justify-center items-center flex-col">
            {/* <p className="pt-3 font-hack text-OneYellow text-2xl ">_Stack</p> */}

            <p className="py-2 relative font-hack text-base text-OneYellow text-xl">
              Stack
              <span className="animate-[blink_0.8s_step-start_infinite]">
                _
              </span>
            </p>
            <div className="border border-white w-full h-full">
            stack here 
            </div>
          </div>
        </div>
        {/* ----------------------------------------- */}

      </div>

      {/* Footer bar */}
      <div className="bg-OneLightGray w-full h-20 flex shrink-0">
        <div className="w-20 shrink-0 h-full border-2 border-zinc-600 flex items-center justify-center text-white text-xs">
          <a href={content.Repo} target="_blank" rel="noopener noreferrer">
            <FaGithub className="md:text-4xl text-3xl"/>
          </a>
        </div>
        <div className="flex-1 h-full border-2 border-l-0 border-zinc-600 flex items-center justify-center ">

          <div className="flex justify-center items-center h-full w-full">
              {content.TechUsed.map((tech, index) => (
              <div key={`${tech.techName}-${index}`} className="
              flex 
              gap-x-2
              items-center 
              justify-center 
              rounded-sm 
              md:px-3 
              md:text-5xl 
              text-4xl 
              ">
              {/* {tech.icon} */}
              {/* <p className="text-lg font-bold font-hack border rounded border-zinc-700 p-1 bg-zinc-900"> {tech.techName}</p> */}
              <p className="text-lg font-semibold font-hack p-1 text-sm md:text-lg"> {content.Name} - {tech.descIntro}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
