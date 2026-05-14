// will be using thie file in order to make the project components more module

// import { GoLiveDesc, DNYET, SkillScanDesc}from "../ProjectConsts.ts"
import { FaGithub  }from "react-icons/fa"
import {type CompCardFooter} from "./Types.ts"

interface CompContent {
  Description: string
  TechUsed: CompCardFooter[],
  Image: string // using string for now but can use a url or pic later
  Repo: string 
}

export function CompCard(content: CompContent) {
  return (
    <div className="w-full h-full bg-OneDarkGray flex flex-col">
      <div className="w-full flex-1 flex flex-col md:flex-row">
        {/* Image */}
        <div className="w-full h-48 md:h-full flex justify-center items-center">
          <img className="w-full h-full object-cover" src="pic" alt={content.Image} />
        </div>
        {/* Description */}
        <div className="md:hidden block w-full md:w-72 md:shrink-0 border border-white p-2">
          <p className="text-white">{content.Description}</p>
        </div>
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
              {tech.icon}
              <p className="text-lg font-bold font-hack border rounded border-zinc-700 p-1 bg-zinc-900"> {tech.techName} </p>
              </div>
            ))}
          </div>
          {/* <p className="text-white p-2">{content.TechUsed}</p> */}
        </div>
      </div>
    </div>
  )
}
