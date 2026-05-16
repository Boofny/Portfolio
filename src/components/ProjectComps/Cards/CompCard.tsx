import { FaGithub } from "react-icons/fa"
import { type CompCardFooter } from "./Types.ts"

interface CompContent {
  Description: string
  TechUsed: CompCardFooter[]
  Image: string
  Repo: string
  Name: string
  // Overview: string
  Specifications: string[],
}

export function CompCard(content: CompContent) {
  return (
    <div className="w-full h-full bg-OneDarkGray flex flex-col border border-zinc-700">

      {/* Main content area */}
      <div className="w-full flex-1 flex flex-col md:flex-row min-h-0">

        {/* Image */}
        <div className="w-full md:flex-1 h-48 md:h-full overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
            src={content.Image}
            alt={content.Name}
          />
        </div>

        {/* Mobile description */}
        <div className="md:hidden border-t border-zinc-700 p-3">
          <p className="text-zinc-400 font-hack text-sm leading-relaxed">{content.Description}</p>
        </div>

        {/* Right panel — stack + description */}
        <div className="hidden md:flex flex-col border-l border-zinc-700 w-72 shrink-0">

          {/* Project name header */}
          <div className="border-b border-zinc-700 px-4 py-2 flex items-center gap-2">
            <span className="text-zinc-400 font-hack text-xs">~/projects/</span>
            <span className="text-OneYellow font-hack text-sm">{content.Name}</span>
          </div>

          {/* Description */}
          <div className="border-b border-zinc-700 p-4 flex-1">
            <p className="text-zinc-500 font-hack text-xs mb-1">// Specifications</p>
            <div className="px-4 text-sm">
              {content.Specifications.map((spec, index) => (
                <li key={index}>{ spec }</li>
              ))}
            </div>
            {/* <p className="text-zinc-300 font-hack text-sm leading-relaxed">{content.Description}</p> */}
          </div>

          {/* Stack */}
          <div className="p-4 flex-1">
            <p className="text-OneYellow font-hack text-sm mb-3">
              _Stack
              <span className="animate-[blink_0.8s_step-start_infinite]">_</span>
            </p>
            <div className="flex flex-col gap-1 grid grid-cols-3">
              {content.TechUsed.map((tech, index) => (
                <div
                  key={`${tech.techName}-${index}`}
                  className="flex items-center gap-1"
                >
                  <span className="text-zinc-600 font-hack text-md">$</span>
                  <span className="text-zinc-300 font-hack text-2xl">{tech.icon}</span>
                  <p className="text-zinc-300 font-hack border-zinc-200 border mx-1 rounded px-1 text-sm">{tech.techName}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Footer bar */}
      <div className="bg-OneLightGray w-full h-14 flex shrink-0 border-t border-zinc-700 ">

        {/* GitHub link */}
        <div className="w-14 shrink-0 h-full border-r border-zinc-700 flex items-center justify-center group">
         <a 
            href={content.Repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View repository"
          >
            <FaGithub className="text-2xl text-zinc-500 group-hover:text-zinc-100 transition-colors duration-200" />
          </a>
        </div>

        {/* Tech pills - desktop / icon+name - mobile */}
        <div className="flex-1 h-full flex items-center gap-2 px-4 overflow-x-auto md:justify-center">
        
          {/* Mobile: icon + name */}
          {content.TechUsed.map((tech, index) => (
            <div
              key={`${tech.techName}-${index}`}
              className="md:hidden shrink-0 flex items-center gap-1"
            >
              <span className="text-zinc-300 text-xl">{tech.icon}</span>
              <span className="font-hack text-xs text-zinc-400">{tech.techName}</span>
            </div>
          ))}
        
          {/* Desktop: pills */}
          {/* {content.TechUsed.map((tech, index) => ( */}
          {/*   <span */}
          {/*     key={`${tech.techName}-${index}`} */}
          {/*     className="hidden md:inline shrink-0 font-hack text-lg text-zinc-200 border border-zinc-700 bg-zinc-900 px-2 rounded-sm" */}
          {/*   > */}
          {/*     {tech.descIntro} */}
          {/*   </span> */}
          {/* ))} */}

          {/* Desktop: single overview */}
          <span className="hidden md:inline font-hack text-lg text-zinc-200 bg-zinc-900 border border-zinc-600 rounded px-2">
            {content.TechUsed[0]?.descIntro}
          </span>
        </div>
      </div>
    </div>
  )
}
