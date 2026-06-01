import { useState } from "react"


function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const defaultOffset = 65 // working for normal laptop and md screen
  const mobileSkillsOffset = 10 // edge case for mobile 
  const mobileAboutOffset = window.outerHeight // edge case for mobile

  const HomeButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToSection = (id: string, offset: number) => {
    const section = document.getElementById(id)
    console.log(Math.round(mobileAboutOffset/6))
  
    if (!section) return
  
    const y =
      section.getBoundingClientRect().top +
      window.scrollY -
      offset
  
    window.scrollTo({
      top: y,
      // behavior: "smooth", // trying to remove smooth scrolling from mobile 
    })
  }

  return (
    <div className="bg-OneDarkGray fixed top-0 left-0 right-0 h-15 flex items-center border-b-2 border-OneGreen z-50">

      {/* Logo */}

      <button onClick={HomeButton} className="ease-in-out duration-300 text-OneGreen text-4xl shrink-0 border-3 border-OneGreen w-15 h-15 flex justify-center items-center font-bold p-1 hover:bg-OneGreen hover:text-black font-display">
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
      <div className="font-semibold hidden md:flex shrink-0 h-15 items-center font-hack text-md">
        <button className="hover:text-OneYellow hover:cursor-pointer px-4 py-2 text-OneGreen font-hack group flex items-center relative border-l border-OneGreen/30" onClick={() => scrollToSection("about", defaultOffset)}>
          <span className="w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100">&gt;</span>
          <span>About</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-OneGreen group-hover:w-full duration-300"></span>
        </button>
        <button className="hover:text-OneBlue hover:cursor-pointer px-4 py-2 text-OneGreen font-hack group flex items-center relative border-x border-OneGreen/30" onClick={() => scrollToSection("projects", defaultOffset)}>
          <span className="w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100">&gt;</span>
          <span>Projects</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-OneGreen group-hover:w-full duration-300"></span>
        </button>
        <button className="hover:text-OneMagenta hover:cursor-pointer px-4 py-2 text-OneGreen font-hack group flex items-center relative border-r border-OneGreen/30" onClick={() => scrollToSection("skills", defaultOffset)}>
          <span className="w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100">&gt;</span>
          <span>Skills</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-OneGreen group-hover:w-full duration-300"></span>
        </button>
        <button className="hover:text-OneRed hover:cursor-pointer px-4 py-2 text-OneGreen font-hack group flex items-center relative border-l border-OneGreen/30" onClick={() => scrollToSection("skills", defaultOffset)}>
          <span className="w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100">&gt;</span>
          <span>Experience</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-OneGreen group-hover:w-full duration-300"></span>
        </button>
      </div>
      {/* Desktop Nav */}

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden shrink-0 w-15 h-15 flex flex-col justify-center items-center gap-1.5 hover:cursor-pointer"
      >
        <span className={`w-6 h-0.5 bg-OneGreen transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`w-6 h-0.5 bg-OneGreen transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
        <span className={`w-6 h-0.5 bg-OneGreen transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* Mobile Menu — stays fixed for a dropdown */}
      <div className={`md:hidden fixed top-15 right-0 w-64 bg-OneDarkGray border-l-2 border-b-2 border-OneGreen transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col p-4 gap-2 font-hack">
          <button onClick={() => {setIsOpen(false) ; scrollToSection("about", Math.round(mobileAboutOffset/6))}} className="hover:cursor-pointer px-4 py-3 text-OneGreen font-hack group flex items-center relative border-b border-OneGreen/30">
            <span className="w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100">&gt;</span>
            <span>About</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-OneGreen group-hover:w-full duration-300"></span>
          </button>
          <button onClick={() => {setIsOpen(false); scrollToSection("projects", defaultOffset)}} className="hover:cursor-pointer px-4 py-3 text-OneGreen font-hack group flex items-center relative border-b border-OneGreen/30">
            <span className="w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100">&gt;</span>
            <span>Projects</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-OneGreen group-hover:w-full duration-300"></span>
          </button>
          <button onClick={() => {setIsOpen(false) ; scrollToSection("skills", mobileSkillsOffset)}} className="hover:cursor-pointer px-4 py-3 text-OneGreen font-hack group flex items-center relative border-b border-OneGreen/30">
            <span className="w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100">&gt;</span>
            <span>Skills</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-OneGreen group-hover:w-full duration-300"></span>
          </button>
          <button onClick={() => {setIsOpen(false) ; scrollToSection("skills", 1)}} className="hover:cursor-pointer px-4 py-3 text-OneGreen font-hack group flex items-center relative">
            <span className="w-0 overflow-hidden group-hover:w-4 duration-300 opacity-0 group-hover:opacity-100">&gt;</span>
            <span>Experience</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-OneGreen group-hover:w-full duration-300"></span>
          </button>
        </div>
      </div>
      {/* Mobile Hamburger */}
    </div>
  )
}

export default Header

