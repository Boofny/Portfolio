import {useState} from "react"
import {CompStack} from "./ProjectComps/ProjectComps.tsx"
import {Stacks} from "./ProjectComps/ProjectStack.tsx"

//TODO: need to make the code here more moduler and find some alternatives if needed
type Tab = "golive" | "asciiIt" | "skillscan" 

function Projects() {
  const tabs: Tab[] = [ "golive", "asciiIt", "skillscan"]
  const [activeTab, setActiveTab] = useState<Tab>("golive")

  const handleClickOption = (tab: Tab) => setActiveTab(tab)

  const getButtonClasses = (tab: Tab) =>
    activeTab === tab ? "bg-OneGreen text-black" : "bg-OneDarkGray"

  return (
    <div className="w-full 2xl:w-15/16 2xl:pl-50 box-border flex flex-col md:flex-row justify-center items-stretch px-4 md:px-25 md:pt-20 gap-6 md:gap-20 py-6 md:overflow-hidden">
      <div className="w-full flex justify-center items-center">
        <fieldset className="bg-OneDarkGray border-3 border-OneGreen rounded h-full w-full md:w-full">
          <legend className="ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
            [1]Projects
          </legend>
          <div className="flex flex-col w-full h-full">
            {/* Project content */}
            <div className="flex-1 text-white flex justify-center items-center p-2 pt-0">
              {CompStack[activeTab]} {/* WAY better  */}
            </div>
            <div className="w-full h-15 flex justify-center items-center text-white font-bold font-hack border-t-3 border-OneGreen md:text-lg text-md">

              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => handleClickOption(tab)}
                  className={`
                    text-md hover:cursor-pointer w-full h-full group flex items-center justify-center relative transition-colors duration-300
                    ${getButtonClasses(tab)}
                    ${
                      index === 0
                        ? "border-r border-OneGreen/30"
                        : index === 1
                        ? "border-x-3 border-OneGreen"
                        : "border-l border-OneGreen/30"
                    }
                  `}
                >
                  <span className={` w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100
                      ${ activeTab === tab ? "text-black" : "text-OneGreen" }
                    `}
                  >
                    [
                  </span>

                  <span>
                    {{
                      golive: "GoLive!",
                      asciiIt: "IDK YET",
                      skillscan: "Skill Scan",
                    }[tab]}
                  </span>

                  <span className={` w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100
                      ${
                        activeTab === tab
                          ? "text-black"
                          : "text-OneGreen"
                      }
                    `}
                  >
                    ]
                  </span>
                </button>
              ))}

            </div>
          </div>
        </fieldset>
      </div>

      {/* Tech Stack fieldset — below on mobile, beside on desktop */}
      {/* do NOT listen to the evil lsp */}
      <fieldset className="md:block hidden md:w-80 md:h-125 md:shrink-0 bg-OneDarkGray border-3 border-OneGreen flex flex-col rounded">
        <legend className="ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
          [2]Overview
        </legend>
        <div className="flex flex-col w-full h-full items-center">
          <div>
            <h1 className="text-2xl font-header my-4 p-1 px-8 pb-4 text-OneBlue border-b-2 border-zinc-700">In Depth</h1>
          </div>
          <div className="flex justify-center items-center px-5">
            {Stacks[activeTab]}
          </div>
        </div>
      </fieldset>

    </div>
  )
}

export default Projects
