import { GoLiveDesc, DNYET, SkillScanDesc}from "./ProjectConsts.ts"
import { CompCard  }from "./Cards/CompCard.tsx"
import {type CompCardFooter} from "./Cards/Types.ts"
import skillImage from "../../assets/SkillScanMob.png"

const goliveImage = "https://neonxp.gallerycdn.vsassets.io/extensions/neonxp/gotools/0.1.5/1691451648679/Microsoft.VisualStudio.Services.Icons.Default"
const goliveRepo = "https://github.com/Boofny/golive"

import {
  FaReact,
  FaGitAlt,
} from "react-icons/fa"

import {
  SiGo,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si"
// this file is the actuall contnennt in [1] pojects
const GoLiveTech: CompCardFooter[] = [
  {
    techName: <span className="text-base">Golang</span>,
    icon: <SiGo className="text-3xl text-cyan-400"/>,
  },
]

const DNTECH: CompCardFooter[] = [
  {
    techName: "DN",
    icon: <FaGitAlt/>,
  },
  {
    techName: "DN",
    icon: <FaGitAlt/>,
  },
  {
    techName: "DN",
    icon: <FaGitAlt/>,
  },
  {
    techName: "DN",
    icon: <FaGitAlt/>,
  }
]

const SkillScanTech: CompCardFooter[] = [
  {
    techName: "React",
    icon: <FaReact className="text-cyan-300"/>,
  },
  {
    techName: "NextJS",
    icon: <SiNextdotjs />,
  },
  {
    techName: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400"/>,
  },
  {
    techName: "Gemini",
    icon: <img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/gemini-color.png" alt="gemini" className="md:w-6 md:h-6 w-5 h-5 object-cover md:pr-0 my-2"/>
  },
]

const goliveSpecs: string[] = [
  "Custom router",
  "Group routing",
  "Middleware",
  "Custom Logging",
  "CORS handling"
]

const SkilScanSpecs: string[] = [
  "Using Gemini Api",
  "placeholder",
]

const IDKSpecs: string[] = [
  "placeholder",
  "placeholder",
  "placeholder",
  "placeholder",
]

export const CompStack = {
  golive: <CompCard 
  Specifications={goliveSpecs} 
  Name="GoLive!" 
  Intro="Http frame work"
  Description={GoLiveDesc} 
  Image={goliveImage} 
  Repo={goliveRepo} 
  TechUsed={GoLiveTech}/>,

  asciiIt: <CompCard 
  Specifications={IDKSpecs} 
  Name="DN" 
  Intro="idk yet"
  Description={DNYET} 
  Image="DN"
  Repo="http://github.com/Boofny" 
  TechUsed={DNTECH}/>,

  skillscan: <CompCard 
  Specifications={SkilScanSpecs} 
  Name="SkillScan" 
  Intro="AI powered resume analyzer"
  Description={SkillScanDesc} 
  Image={skillImage}
  Repo="http://github.com/Boofny" 
  TechUsed={SkillScanTech}/>,
  // slime: <CompCard Description="slimer" TechUsed="tech used" Image="skillscan" Repo="http://github.com/Boofny"/>,
}
