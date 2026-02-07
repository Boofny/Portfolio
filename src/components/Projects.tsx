import { useState } from "react"

function GoLive() { // comps
  return <h2>Home content</h2>
}

function AsciiIt() {
  return <h2>Profile content</h2>
}

function UrlShorter() {
  return <h2>Settings content</h2>
}

type Tab = "golive" | "asciiIt" | "urlshorter"

function Projects(){
  const [activeTab, setActiveTab] = useState<Tab>("golive")

  const handleClickOption = (tab: Tab) => {
    setActiveTab(tab);
  };
  const getButtonClasses = (tab: Tab) => 
    activeTab === tab
      ? "blue-500"
      : "red-500";

  return(
    <div className="w-full h-full flex justify-center items-top pl-25 pr-25 pt-1 gap-20 ">
      <div className="w-full h-125 border border-white flex justify-center items-center flex-col bg-OneDarkGray">
        <div className="w-full h-15 flex justify-center items-center text-white">
        {/* Should be on click the color will change for the tab making it seem like the tab is connected to the content and ofc add hover effects and stuff*/}
          <button className={`border border-white w-full h-full bg-${getButtonClasses("golive")}`} onClick={() => handleClickOption("golive")}>Go Live</button> 
          <button className={`border border-white w-full h-full bg-${getButtonClasses("asciiIt")}`} onClick={() => handleClickOption("asciiIt")}>Ascii It</button> 
          <button className={`border border-white w-full h-full bg-${getButtonClasses("urlshorter")}`} onClick={() => handleClickOption("urlshorter")}>URL Shortner</button> 
          {/* <button className="border border-white w-full h-full" onClick={() => setActiveTab("asciiIt")}>Ascii It</button>  */}
          {/* <button className="border border-white w-full h-full" onClick={() => setActiveTab("urlshorter")}>URL Shortner</button>  */}
        </div>
        <div className="w-full h-full text-white flex justify-center items-center">
           {activeTab === "golive" && <GoLive/>}
           {activeTab === "asciiIt" && <AsciiIt/>}
           {activeTab === "urlshorter" && <UrlShorter/>}
        </div>
      </div>
      <div className="w-100 h-125 border border-white bg-OneDarkGray">
        <p className="text-white">Tech stack</p>
      </div>
    </div>
  )
}

export default Projects


// import React, { useState } from 'react';
//
// function ColorToggleButton() {
//   // 1. Use useState to manage the button's active state
//   const [isActive, setIsActive] = useState(false);
//
//   // 2. Define the function that updates the state on click
//   const handleClick = () => {
//     setIsActive(!isActive);
//   };
//
//   // 3. Conditionally apply Tailwind classes
//   // The color will be 'bg-blue-500' when active and 'bg-red-500' when inactive
//   const buttonClasses = isActive
//     ? 'bg-blue-500 hover:bg-blue-700'
//     : 'bg-red-500 hover:bg-red-700';
//
//   return (
//     <button
//       onClick={handleClick}
//       // Combine base classes with the dynamic color classes
//       className={`p-4 text-white font-bold rounded shadow-lg transition duration-150 ease-in-out ${buttonClasses}`}
//     >
//       Click Me to Change Color
//     </button>
//   );
// }
//
// export default ColorToggleButton;
