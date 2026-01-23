import { useState } from "react"

function Home() { // comps
  return <h2>Home content</h2>
}

function Profile() {
  return <h2>Profile content</h2>
}

function Settings() {
  return <h2>Settings content</h2>
}

type Tab = "home" | "profile" | "settings"

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home")

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      {/* Tab buttons */}
      <div className="flex justify-center items-center gap-2">
        <button onClick={() => setActiveTab("home")}>Home</button>
        <button onClick={() => setActiveTab("profile")}>Profile</button>
        <button onClick={() => setActiveTab("settings")}>Settings</button>
      </div>

      {/* Tab content */}
      <div className="flex justify-center items-center gap-2 text-red-500">
        {activeTab === "home" && <Home />}
        {activeTab === "profile" && <Profile />}
        {activeTab === "settings" && <Settings />}
      </div>
    </div>
  )
}

export default App;
