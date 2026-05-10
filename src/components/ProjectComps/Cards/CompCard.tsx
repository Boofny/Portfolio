// will be using thie file in order to make the project components more module

// import { GoLiveDesc, DNYET, SkillScanDesc}from "../ProjectConsts.ts"
import { FaGithub  }from "react-icons/fa"

interface CompContent {
  Description: string
  TechUsed: string
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
        <div className="w-20 shrink-0 h-full border border-white flex items-center justify-center text-white text-xs">
          <a href={content.Repo} target="_blank" rel="noopener noreferrer">
            <FaGithub className="md:text-4xl text-3xl"/>
          </a>
        </div>
        <div className="flex-1 h-full border border-white flex items-center">
          <p className="text-white p-2">{content.TechUsed}</p>
        </div>
      </div>
    </div>
  )
}
