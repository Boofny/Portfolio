import { GoLiveDesc, SkillScanDesc, TeleportDesc}from "./ProjectConsts.ts"
import { CompCard  }from "./Cards/CompCard.tsx"
import {type CompCardFooter} from "./Cards/Types.ts"
import skillImage from "../../assets/SkillScanMob.png"
import goliveImage from "../../assets/GoLiveCode.png" // work fine for desktop but mobile is weird
import teleportImage from "../../assets/Teleport.png"

const goliveRepo = "https://github.com/Boofny/golive"
// const asciiCamImage = "https://admin.itsnicethat.com/images/VtnJNzUAflWHNadqzeaCAD006Lw=/269508/format-webp%7Cwidth-1440/fight_me_2._-_Copyright__enigmatriz_2025.jpg"

import {
  FaReact,
} from "react-icons/fa"

import {
  SiGo,
  SiTailwindcss,
  SiNextdotjs,
  SiLua,
  SiNeovim,
} from "react-icons/si"

// this file is the actuall contnennt in [1] pojects
const GoLiveTech: CompCardFooter[] = [
  {
    TechName: <span className="text-base">Golang</span>,
    Icon: <SiGo className="text-3xl text-cyan-400"/>,
  },
]

const TeleportTech: CompCardFooter[] = [
  {
    TechName: "Lua",
    Icon: <SiLua className="text-blue-500"/>,
  },
  {
    TechName: "Neovim",
    Icon: <SiNeovim className="text-green-300"/>,
  },
]

const SkillScanTech: CompCardFooter[] = [
  {
    TechName: "React",
    Icon: <FaReact className="text-cyan-300"/>,
  },
  {
    TechName: "NextJS",
    Icon: <SiNextdotjs />,
  },
  {
    TechName: "Tailwind",
    Icon: <SiTailwindcss className="text-sky-400"/>,
  },
  {
    TechName: "Gemini",
    Icon: <img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/gemini-color.png" alt="gemini" className="md:w-6 md:h-6 w-5 h-5 object-cover md:pr-0 my-2"/>
  },
]

const goliveSpecs: string[] = [
  "Custom router",
  "Route grouping",
  "Middleware system",
  "Structured logging",
  "CORS support",
]

const SkilScanSpecs: string[] = [
  "Gemini API powered",
  "Bulk file analysis",
  "Skill detection",
  "Resume parsing",
  "Candidate feedback",
]

const TeleportSpecs: string[] = [
  "Per project configuration",
  "Fast file/buffer navigation",
  "Marks outlive project session",
  "Simple file mark management",
  "Automated keymaps per file",
]

export const CompStack = {
  golive: <CompCard 
  Specifications={goliveSpecs} 
  Name="GoLive" 
  Intro="Http Framework"
  Description={GoLiveDesc} 
  Image={goliveImage} 
  Links={
    {GitHubLink: goliveRepo, 
      Docker: "https://github.com/Boofny/PortfolioApi/blob/main/docs/DOCKER.md",  // goiing to add a readme file to the example in golive with the docker file and will have a one liner docker for the image on docker hub
      WebsiteLink: "https://railway.com"} // for now its just my github before i get the api up and running not website but live api 
  } 
  TechUsed={GoLiveTech}/>,

  teleport: <CompCard 
  Specifications={TeleportSpecs} 
  Name="Teleport Neovim" 
  Intro="Neovim Plugin"
  Description={TeleportDesc} 
  Image={teleportImage}
  Links={{
    GitHubLink: "https://github.com/Boofny/teleport.nvim",
  }}
  TechUsed={TeleportTech}/>,

  skillscan: <CompCard 
  Specifications={SkilScanSpecs} 
  Name="SkillScan" 
  Intro="AI Resume Analyzer"
  Description={SkillScanDesc} 
  Image={skillImage}
  Links={{
    GitHubLink: "https://github.com/Boofny/SkillScan", WebsiteLink: "https://skill-scan-six.vercel.app/"
  }}
  TechUsed={SkillScanTech}/>,
  // slime: <CompCard Description="slimer" TechUsed="tech used" Image="skillscan" Repo="http://github.com/Boofny"/>,
}
