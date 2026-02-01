



// COLOR LIST 
// RED          #e06c75	
// YELLOW       #e5c07b	
// GREEN        #98c379	
// CYAN         #56b6c2	
// BLUE         #61afef
// GREY         #181818
// WHITE        #CCCCCC

function Header(){
  return (
    <div className="bg-[#131313] fixed top-0 w-screen h-15 flex justify-center items-center gap-y-0 border-b-2 border-[#98c379]">
      <button className="text-[#98c379] text-4xl fixed left-0 border-3 border-[#98c379] w-15 h-15 flex justify-center items-center rounded font-bold p-1 hover:bg-[#98c379] hover:text-black ani">
        {">_"}
      </button>

      <div className="left-50 fixed w-100 h-15 flex items-center justify-center flex-row">
        {/* <p className="font-header text-[#e5c07b] text-2xl opacity-70">Brandon Romero</p> */}

        <p className="relative w-max font-header text-2xl opacity-70
        before:absolute before:inset-0 before:animate-typewriter before:bg-[#141414] text-[#e5c07b]
        after:absolute after:inset-0 after:w-0 after:content-['█'] after:animate-caret after:bg-[#e5c07b]">Brandon Romero
        </p>
        {/* <p className="text-[#e5c07b] font-mono text-2xl animate-caret">█</p> */}

      </div>
      <div className="fixed right-0 w-150 h-15 flex justify-center items-center rounded font-semibold p-1 gap-x-20">
        <button className=" hover:text-white text-[#98c379] text-1xl font-hack">About</button>
        <button className=" hover:text-white text-[#98c379] text-1xl font-hack">Projects</button>
        <button className=" hover:text-white text-[#98c379] text-1xl font-hack">Experience</button>
      </div>
    </div>
  )
}

export default Header

// unsing buttons on the header will allow interactivity in the header like this in tabs
// import { useState } from "react"
// import Header from "../components/Header.tsx"
//
// function Home() { // comps
//   return <h2>Home content</h2>
// }
//
// function Profile() {
//   return <h2>Profile content</h2>
// }
//
// function Settings() {
//   return <h2>Settings content</h2>
// }
//
// type Tab = "home" | "profile" | "settings"
//
// function Normal() {
//   const [activeTab, setActiveTab] = useState<Tab>("home")
//
//   return (
//     <div className="flex justify-center items-center flex-col">
//     <Header></Header>
//       <div className="flex justify-center items-center h-screen flex-col">
//         <div className="flex justify-center items-center gap-2 text-white">
//           <button onClick={() => setActiveTab("home")}>Home</button>
//           <button onClick={() => setActiveTab("profile")}>Profile</button>
//           <button onClick={() => setActiveTab("settings")}>Settings</button>
//         </div>
//         <div className="flex justify-center items-center gap-2 text-red-500">
//           {activeTab === "home" && <Home />}
//           {activeTab === "profile" && <Profile />}
//           {activeTab === "settings" && <Settings />}
//         </div>
//       </div>
//     </div>
//   )
// }
//
// export default Normal;
