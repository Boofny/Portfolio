import { useState } from "react"
import { GoLive, AsciiIt, UrlShorter } from "./ProjectComps/ProjectComps.tsx"
import { TechStackGoLive, TechStackAsciiIt, TechStackUrlShorter } from "./ProjectComps/ProjectStack.tsx"

type Tab = "golive" | "asciiIt" | "urlshorter"

function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("golive")

  const handleClickOption = (tab: Tab) => setActiveTab(tab)

  const getButtonClasses = (tab: Tab) =>
    activeTab === tab ? "bg-OneGreen text-black" : "bg-OneDarkGray"

  return (
    <div className="w-full 2xl:w-15/16 2xl:pl-50 flex flex-col md:flex-row justify-center items-stretch px-4 md:px-25 md:pt-20 gap-6 md:gap-20 py-6">
      
      {/* Projects fieldset */}
      <fieldset className="w-full md:h-125 bg-OneDarkGray border-3 border-OneGreen flex flex-col rounded">
        <legend className="ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
          [1]Projects
        </legend>
        <div className="flex flex-col w-full h-full">
          {/* Project content */}
          <div className="flex-1 text-white flex justify-center items-center p-2">
            {activeTab === "golive" && <GoLive />}
            {activeTab === "asciiIt" && <AsciiIt />}
            {activeTab === "urlshorter" && <UrlShorter />}
          </div>
          {/*Buttons bellow need better hover effects not just copying the headers effect*/}
          <div className="w-full h-15 flex justify-center items-center text-white font-bold font-hack border-t-3 border-OneGreen md:text-lg text-md">
            <button
              className={`hover:cursor-pointer w-full h-full group flex items-center justify-center relative border-r border-OneGreen/30 transition-colors duration-300 ${getButtonClasses("golive")}`}
              onClick={() => handleClickOption("golive")}
            >
              <span className={`w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100 ${activeTab === "golive" ? "text-black" : "text-OneGreen"}`}>&gt;</span>
              <span>Go Live</span>
            </button>
          
            <button
              className={`hover:cursor-pointer w-full h-full group flex items-center justify-center relative border-x-3 border-OneGreen transition-colors duration-300 ${getButtonClasses("asciiIt")}`}
              onClick={() => handleClickOption("asciiIt")}
            >
              <span className={`w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100 ${activeTab === "asciiIt" ? "text-black" : "text-OneGreen"}`}>&gt;</span>
              <span>Ascii It</span>
            </button>
          
            <button
              className={`hover:cursor-pointer w-full h-full group flex items-center justify-center relative border-l border-OneGreen/30 transition-colors duration-300 ${getButtonClasses("urlshorter")}`}
              onClick={() => handleClickOption("urlshorter")}
            >
              <span className={`w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100 ${activeTab === "urlshorter" ? "text-black" : "text-OneGreen"}`}>&gt;</span>
              <span>URL Shortner</span>
            </button>
          </div>
        </div>
      </fieldset>

      {/* Tech Stack fieldset — below on mobile, beside on desktop */}
      <fieldset className="md:w-80 md:h-125 md:shrink-0 bg-OneDarkGray border-3 border-OneGreen flex flex-col rounded">
        <legend className="ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
          [2]Tech Stack
        </legend>
        <div className="flex flex-col w-full h-full">
          {activeTab === "golive" && <TechStackGoLive />}
          {activeTab === "asciiIt" && <TechStackAsciiIt />}
          {activeTab === "urlshorter" && <TechStackUrlShorter />}
        </div>
      </fieldset>

    </div>
  )
}

export default Projects
