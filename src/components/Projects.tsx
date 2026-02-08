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
    <div className="w-full h-full flex justify-center items-top pl-25 pr-25 pt-1 gap-20 ">
      <div className="w-full h-125 flex justify-center items-center flex-col rounded">
        <div className="w-full h-15 flex justify-center items-center text-white font-bold font-hack text-lg rounded">
        {/* Should be on click the color will change for the tab making it seem like the tab is connected to the content and ofc add hover effects and stuff*/}
          <button className={`w-full h-full ${getButtonClasses("golive")}`} onClick={() => handleClickOption("golive")}>Go Live</button> 
          <button className={`w-full h-full ${getButtonClasses("asciiIt")} border-x`} onClick={() => handleClickOption("asciiIt")}>Ascii It</button> 
          <button className={`w-full h-full ${getButtonClasses("urlshorter")}`} onClick={() => handleClickOption("urlshorter")}>URL Shortner</button> 
        </div>
        <div className="w-full h-full text-white flex justify-center items-center">
           {activeTab === "golive" && <GoLive/>}
           {activeTab === "asciiIt" && <AsciiIt/>}
           {activeTab === "urlshorter" && <UrlShorter/>}
        </div>
      </div>
      <div className="w-100 h-125 border border-white bg-OneDarkGray">
         {activeTab === "golive" && <TechStackGoLive/>}
         {activeTab === "asciiIt" && <TechStackAsciiIt/>}
         {activeTab === "urlshorter" && <TechStackUrlShorter/>}
      </div>
    </div>
  )
}

export default Projects
