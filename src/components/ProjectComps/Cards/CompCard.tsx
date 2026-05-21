import { FaGithub } from "react-icons/fa"
import { type CompCardFooter } from "./Types.ts"

interface CompContent {
  Description: string
  TechUsed: CompCardFooter[]
  Image: string
  Repo: string
  Name: string
  Intro: string
  Specifications: string[],
}

export function CompCard(content: CompContent) {
  return (
    <div className="w-full h-full bg-OneDarkGray flex flex-col border border-zinc-700 rounded">

      {/* Main content area */}
      <div className="w-full flex-1 flex flex-col md:flex-row min-h-0">

        {/* Image */}
        <div className="w-full md:flex-1 h-48 md:h-85 overflow-hidden shrink-0 p-0">
          <img
            className="
              w-full
              h-full
              object-cover
              object-center
              opacity-80
              hover:opacity-100
              transition-opacity
              duration-300
            "
            src={content.Image}
            alt={content.Name}
          />
        </div>

        {/* Mobile description */}
        <div className="md:hidden border-t border-zinc-700 p-3">
          <p className="text-zinc-300 font-hack text-xs font-semibold leading-relaxed">{content.Description}</p>
        </div>

        {/* Right panel — stack + description */}
        <div className="hidden md:flex flex-col border-l border-zinc-700 w-72 shrink-0">

          {/* Project name header */}
          <div className="border-b border-zinc-700 px-4 py-2 flex items-center gap-2">
            <span className="text-zinc-400 font-hack text-xs">project:</span>
            <span className="text-OneYellow font-hack text-sm">{content.Name}</span>
          </div>

          {/* Description */}
          <div className="border-b border-zinc-700 p-4 flex-1 pl-2 pt-2">
            <p className="text-OneYellow font-hack text-md mb-1 pl-2">{"> "}Specifications</p>
            <div className="pl-9 text-sm text-OneWhite">
              {content.Specifications.map((spec, index) => (
                <li key={index}>{ spec }</li>
              ))}
            </div>
            {/* <p className="text-zinc-300 font-hack text-sm leading-relaxed">{content.Description}</p> */}
          </div>

          {/* Stack */}
          <div className="p-4 flex-1">
            <p className="text-OneYellow font-hack text-sm mb-3">
              ./Stack
              {/* <span className=" border bg-OneYellow animate-[blink_0.8s_step-start_infinite]">_</span> */}
            </p>
            <div className="flex flex-col gap-1 grid grid-cols-2">
              {content.TechUsed.map((tech, index) => (
                <div
                  key={`${tech.techName}-${index}`}
                  className="flex items-center gap-1"
                >
                  {/* <span className="text-zinc-500 font-hack text-md">$</span> */}
                  <span className="text-zinc-300 font-hack text-2xl">{tech.icon}</span>
                  <p className="text-zinc-300 font-hack border-zinc-600 border mx-1 rounded px-1 text-sm">{tech.techName}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Intro bar for mobile */}
      {/* Footer bar */}
      <div className="bg-OneLightGray w-full md:h-14 h-18 flex shrink-0 border-t border-zinc-700">

        {/* GitHub link */}
        <div className="md:w-14 w-18 shrink-0 h-full border-r border-zinc-700 flex items-center justify-center group mr-1.5 md:mr-0">
         <a 
            href={content.Repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View repository"
          >
            <FaGithub className="text-3xl text-zinc-300 group-hover:text-zinc-100 transition-colors duration-200" />
          </a>
        </div>

        {/* Tech pills - desktop / icon+name - mobile */}
        {/* <div className="flex-1 h-full flex items-center px-4 md:justify-center flex-wrap grid grid-cols-2"> */}
        
        <div className="flex-1 h-full grid grid-cols-2 px-4 md:pt-0 pt-2 md:flex md:justify-center md:items-center">
        
          {/* Mobile: icon + name */}
          {content.TechUsed.map((tech, index) => (
            <div
              key={`${tech.techName}-${index}`}
              className="md:hidden flex items-center gap-x-2"
            >
              <span className="text-zinc-300 text-xl">{tech.icon}</span>
              <span className="font-hack text-xs text-zinc-400">{tech.techName}</span>
            </div>
          ))}
          {/* Desktop: single overview */}
          <span className="hidden md:inline font-hack text-lg text-zinc-200 bg-zinc-900 border border-zinc-600 rounded px-2">
            {content.Intro}
          </span>
        </div>
      </div>
      <div className="md:hidden font-hack flex bg-OneLightGray w-full h-8 justify-center items-center pt-2 border-t border-zinc-700">
        <p className="font-hack text-sm text-zinc-200 bg-zinc-900 border border-zinc-600 rounded px-2">
        {content.Intro}
        </p>
      </div>
    </div>
  )
}
