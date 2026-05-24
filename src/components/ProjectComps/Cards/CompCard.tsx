import { FaGithub } from "react-icons/fa"
import { type CompCardFooter, type ProjectLinks} from "./Types.ts"
import { IoIosLink } from "react-icons/io";

interface CompContent {
  Description: string
  TechUsed: CompCardFooter[]
  Image: string
  Name: string
  Intro: string
  Links: ProjectLinks
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
        <div className="md:hidden border-t border-zinc-700 p-3 pb-0">
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
            <p className="text-OneYellow font-hack text-md mb-3">
            {"> "}Stack
              {/* <span className=" border bg-OneYellow animate-[blink_0.8s_step-start_infinite]">_</span> */}
            </p>
            <div className="flex flex-col gap-1 grid grid-cols-2">
              {content.TechUsed.map((tech, index) => (
                <div
                  key={`${tech.TechName}-${index}`}
                  className="flex items-center gap-1"
                >
                  {/* <span className="text-zinc-500 font-hack text-md">$</span> */}
                  <span className="text-zinc-300 font-hack text-2xl">{tech.Icon}</span>
                  <p className="text-zinc-300 font-hack border-zinc-600 border mx-1 rounded px-1 text-sm">{tech.TechName}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* NOTE: new tab with merged border  */}
      <div className="relative md:hidden flex justify-end">
        <div className="
          font-hack
          flex
          bg-OneLightGray
          w-1/4
          h-5
          justify-center
          items-center
          border
          border-zinc-700
          border-b-0
          border-r-0
          rounded-tl
          relative
          z-10
          translate-y-px
        ">
          <p className="text-sm text-OneYellow font-semibold">
            Stack
          </p>
        </div>
      </div>

      {/* Intro bar for mobile */}
      {/* Footer bar */}
      <div className="bg-OneLightGray w-full md:h-14 h-18 flex shrink-0 border-t border-b border-zinc-700">

        {/* NOTE: old github links -------------------------------------------------------*/}
        {/* <div className="md:w-14 w-18 shrink-0 h-full border-r border-zinc-700 flex items-center justify-center group mr-1.5 md:mr-0 gap-2"> */}
        {/*  <a  */}
        {/*     href={content.Links.GitHubLink} */}
        {/*     target="_blank" */}
        {/*     rel="noopener noreferrer" */}
        {/*     aria-label="View repository" */}
        {/*   > */}
        {/*     <FaGithub className="md:text-3xl text-2xl text-zinc-300 group-hover:text-zinc-100 transition-colors duration-200" /> */}
        {/*   </a> */}
        {/*     {content.Links.WebsiteLink && ( */}
        {/*       <a  */}
        {/*         href={content.Links.WebsiteLink} */}
        {/*         target="_blank" */}
        {/*         rel="noopener noreferrer" */}
        {/*         aria-label="View website" */}
        {/*       > */}
        {/*         <FaLink className="text-xl text-zinc-300 hover:text-zinc-100 transition-colors duration-200" /> */}
        {/*       </a> */}
        {/*     )} */}
        {/* </div> */}

        <div className="
          shrink-0
          h-full
          border-r
          border-zinc-700
          flex
          items-center
          justify-center
          gap-2
          px-2
        ">
          <a
            href={content.Links.GitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View repository"
          >
            <FaGithub className="mx-2 text-3xl md:text-3xl text-zinc-300 hover:text-zinc-100 transition-colors duration-200" />
          </a>

          {content.Links.WebsiteLink && (
            <a
              href={content.Links.WebsiteLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View website"
            >
              <IoIosLink className="mx-2 text-2xl text-zinc-300 hover:text-zinc-100 transition-colors duration-200" />
            </a>
          )}
        </div>

        {/* GitHub link -------------------------------------------------------*/}
        {/* Tech pills - desktop / icon+name - mobile */}
        
        <div className="flex-1 h-full grid grid-cols-2 pl-6 px-4 md:pt-0 pt-2 md:flex md:justify-center md:items-center">
        
          {/* Mobile: icon + name */}
          {content.TechUsed.map((tech, index) => (
            <div
              key={`${tech.TechName}-${index}`}
              className="md:hidden flex items-center gap-x-2"
            >
              <span className="text-zinc-300 text-xl">{tech.Icon}</span>
              <span className="font-hack text-xs text-zinc-400">{tech.TechName}</span>
            </div>
          ))}
          {/* Desktop: single overview */}
          <span className="hidden md:inline font-hack text-lg text-zinc-200 bg-zinc-900 border border-zinc-600 rounded px-2">
            {content.Intro}
          </span>
        </div>
      </div>
    </div>
  )
}
