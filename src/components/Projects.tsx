import { useState } from "react"
import { GoLive, AsciiIt, UrlShorter}from "./ProjectComps/ProjectComps.tsx"
import { TechStackGoLive, TechStackAsciiIt, TechStackUrlShorter}from "./ProjectComps/ProjectStack.tsx"

type Tab = "golive" | "asciiIt" | "urlshorter"

function Projects(){
  const [activeTab, setActiveTab] = useState<Tab>("golive")
  // const [color, setColor] = useState<String>("")

  const handleClickOption = (tab: Tab) => {
    setActiveTab(tab);
  };

  const getButtonClasses = (tab: Tab) => 
    activeTab === tab ? "bg-OneGreen text-black" : "bg-OneDarkGray";

  return(
    <div className="w-full h-125 flex justify-center items-top pl-25 pr-25 pt-1 gap-20">
      <fieldset className="w-full h-full bg-OneDarkGray border-3 border-OneGreen justify-center flex items-center flex-col rounded">
        <legend className="ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">[1]Projects</legend>
          <div className="flex flex-col w-full h-full">
            <div className="w-full h-125 flex justify-center items-center flex-col mt-2">
              <div className="w-full h-full text-white flex justify-center items-center">
                 {activeTab === "golive" && <GoLive/>}
                 {activeTab === "asciiIt" && <AsciiIt/>}
                 {activeTab === "urlshorter" && <UrlShorter/>}
              </div>
              <div className="w-full h-15 flex justify-center items-center text-white font-semibold font-hack text-lg border-t-3 border-OneGreen">
              {/* Should be on click the color will change for the tab making it seem like the tab is connected to the content and ofc add hover effects and stuff*/}
              <button className={`hover:text-xl hover:cursor-pointer w-full h-full ${getButtonClasses("golive")}`} onClick={() => handleClickOption("golive")}>Go Live</button> 
              <button className={`border-x-3 border-OneGreen hover:text-xl hover:cursor-pointer w-full h-full ${getButtonClasses("asciiIt")}`} onClick={() => handleClickOption("asciiIt")}>Ascii It</button> 
              <button className={`hover:text-xl hover:cursor-pointer w-full h-full ${getButtonClasses("urlshorter")}`} onClick={() => handleClickOption("urlshorter")}>URL Shortner</button> 
            </div>
          </div>
        </div>
      </fieldset>

      <div className="w-115 h-full">
        <fieldset className="w-full h-full rounded bg-OneDarkGray border-3 border-OneGreen justify-center flex items-center flex-col top-0 pt-0">
          <legend className="ml-10 text-OneYellow font-hack text-lg font-bold uppercase tracking-widest">[2]Tech Stack</legend>
          <div className="flex flex-col w-full h-full">
             {activeTab === "golive" && <TechStackGoLive/>}
             {activeTab === "asciiIt" && <TechStackAsciiIt/>}
             {activeTab === "urlshorter" && <TechStackUrlShorter/>}
          </div>
        </fieldset>
      </div>

    </div>
  )
}

export default Projects
