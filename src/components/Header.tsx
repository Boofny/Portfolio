import { useState } from "react"

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-OneDarkGray fixed top-0 left-0 right-0 h-15 flex items-center border-b-2 border-OneGreen z-50">
      
      {/* Logo */}
      <button className="ease-in-out duration-300 text-OneGreen text-4xl shrink-0 border-3 border-OneGreen w-15 h-15 flex justify-center items-center rounded font-bold p-1 hover:bg-OneGreen hover:text-black font-display">
        {">_"}
      </button>

      {/* Name — takes remaining space, centers itself */}
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <p className="relative w-max font-header md:text-2xl text-base opacity-70 whitespace-nowrap
          before:absolute before:inset-0 before:animate-typewriter before:bg-OneDarkGray text-OneYellow
          after:absolute after:inset-0 after:w-[0.75em] after:animate-caret after:bg-OneYellow">
          Brandon Romero
        </p>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex shrink-0 h-15 items-center font-hack text-lg">
        <button className="hover:cursor-pointer px-4 py-2 text-OneGreen font-mono group flex items-center relative border-l border-OneGreen/30">
          <span className="w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100">&gt;</span>
          <span>about</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-OneGreen group-hover:w-full duration-300"></span>
        </button>
        <button className="hover:cursor-pointer px-4 py-2 text-OneGreen font-mono group flex items-center relative border-x border-OneGreen/30">
          <span className="w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100">&gt;</span>
          <span>projects</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-OneGreen group-hover:w-full duration-300"></span>
        </button>
        <button className="hover:cursor-pointer px-4 py-2 text-OneGreen font-mono group flex items-center relative border-r border-OneGreen/30">
          <span className="w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100">&gt;</span>
          <span>experience</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-OneGreen group-hover:w-full duration-300"></span>
        </button>
        <button className="hover:cursor-pointer px-4 py-2 text-OneGreen font-mono group flex items-center relative border-l border-OneGreen/30">
          <span className="w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100">&gt;</span>
          <span>skills</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-OneGreen group-hover:w-full duration-300"></span>
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden shrink-0 w-15 h-15 flex flex-col justify-center items-center gap-1.5 hover:cursor-pointer"
      >
        <span className={`w-6 h-0.5 bg-OneGreen transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`w-6 h-0.5 bg-OneGreen transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
        <span className={`w-6 h-0.5 bg-OneGreen transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* Mobile Menu — this one stays fixed, which is correct for a dropdown */}
      <div className={`md:hidden fixed top-15 right-0 w-64 bg-OneDarkGray border-l-2 border-b-2 border-OneGreen transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col p-4 gap-2 font-hack">
          <button onClick={() => setIsOpen(false)} className="hover:cursor-pointer px-4 py-3 text-OneGreen font-mono group flex items-center relative border-b border-OneGreen/30">
            <span className="w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100">&gt;</span>
            <span>about</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-OneGreen group-hover:w-full duration-300"></span>
          </button>
          <button onClick={() => setIsOpen(false)} className="hover:cursor-pointer px-4 py-3 text-OneGreen font-mono group flex items-center relative border-b border-OneGreen/30">
            <span className="w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100">&gt;</span>
            <span>projects</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-OneGreen group-hover:w-full duration-300"></span>
          </button>
          <button onClick={() => setIsOpen(false)} className="hover:cursor-pointer px-4 py-3 text-OneGreen font-mono group flex items-center relative">
            <span className="w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100">&gt;</span>
            <span>experience</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-OneGreen group-hover:w-full duration-300"></span>
          </button>
          <button onClick={() => setIsOpen(false)} className="hover:cursor-pointer px-4 py-3 text-OneGreen font-mono group flex items-center relative">
            <span className="w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100">&gt;</span>
            <span>skills</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-OneGreen group-hover:w-full duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
