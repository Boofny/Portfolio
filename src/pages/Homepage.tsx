import Header from "../components/Header.tsx"
import HeaderPicture from "../components/HeaderPicture.tsx"
import About from "../components/About.tsx"
import Projects from "../components/Projects.tsx"

// COLOR LIST 
// RED          #e06c75	
// YELLOW       #e5c07b	
// GREEN        #98c379	
// CYAN         #56b6c2	
// BLUE         #61afef
// GREY         #181818


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

function Homepage(){
  return(
    <div className="m-0">
      <Header></Header>
      <main className="pt-15">
        <div className="flex justify-center items-center">
          <HeaderPicture></HeaderPicture>
          <About></About>
        </div>
      </main>
      <Projects></Projects>
    </div>
  )
}

export default Homepage
