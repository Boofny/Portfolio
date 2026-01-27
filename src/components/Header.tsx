



// COLOR LIST 
// RED          #e06c75	
// YELLOW       #e5c07b	
// GREEN        #98c379	
// CYAN         #56b6c2	
// BLUE         #61afef
// GREY         #181818

function Header(){
  return (
    <div className="fixed top-0 w-screen h-15 bg-[#98c379] flex justify-center items-center gap-y-0 border-2 border-[#98c379]">
      <div className="bg-[#181818] w-15 h-14 border-x-2 border-[#98c379] flex justify-center items-center
      text-[#98c379] font-bold text-4xl font-sans hover:bg-[#98c379] hover:text-[#131313] rounded-sm left-0 fixed">{`>_`}</div>

      <div className="bg-[#181818] w-30 h-full border-x-2 border-[#98c379] flex justify-center items-center 
      text-[#98c379] font-bold text-lg font-sans hover:bg-[#98c379] hover:text-[#131313] rounded-sm">TBD</div>

      <button className="bg-[#181818] w-30 h-full border-x-2 border-[#98c379] flex justify-center items-center 
      text-[#98c379] font-bold text-lg font-sans hover:bg-[#98c379] hover:text-[#131313] rounded-sm">TBD</button>
      {/* <div className="w-40 h-full border-x-3 border-[#98c379] flex justify-center items-center text-[#98c379] font-bold text-lg font-sans hover:bg-[#98c379] hover:text-[#131313]">TBD</div> */}
      {/* <div className="w-40 h-full border-x-3 border-[#98c379] flex justify-center items-center text-[#98c379] font-bold text-lg font-sans hover:bg-[#98c379] hover:text-[#131313]">TBD</div> */}
      {/* <div className="w-40 h-full border-x-3 border-[#98c379] flex justify-center items-center text-[#98c379] font-bold text-lg font-sans hover:bg-[#98c379] hover:text-[#131313]">Contact Me</div> */}
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
