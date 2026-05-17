import { GoLiveDesc, DNYET, SkillScanDesc}from "./ProjectConsts.ts"
import { CompCard  }from "./Cards/CompCard.tsx"
import {type CompCardFooter} from "./Cards/Types.ts"

const goliveImage = "https://neonxp.gallerycdn.vsassets.io/extensions/neonxp/gotools/0.1.5/1691451648679/Microsoft.VisualStudio.Services.Icons.Default"
const goliveRepo = "https://github.com/Boofny/golive"
import {
  FaReact,
  FaGitAlt,
} from "react-icons/fa"

import {
  SiGo,
} from "react-icons/si"

// this file is the actuall contnennt in [1] pojects
const GoLiveTech: CompCardFooter[] = [
  {
    techName: "Golang",
    icon: <SiGo className="text-cyan-400"/>,
    descIntro: "Http frame work"
  },
]

const DNTECH: CompCardFooter[] = [
  {
    techName: "DN",
    icon: <FaGitAlt/>,
    descIntro: "IDK"
  },
  {
    techName: "DN",
    icon: <FaGitAlt/>,
    descIntro: "IDK"
  },
  {
    techName: "DN",
    icon: <FaGitAlt/>,
    descIntro: "IDK"
  },
  {
    techName: "DN",
    icon: <FaGitAlt/>,
    descIntro: "IDK"
  }
]
const SkillScanTech: CompCardFooter[] = [
  {
    techName: "skillllss",
    icon: <FaReact/>,
    descIntro: "Hackathon"
  }
]

const goliveSpecs: string[] = [
  "Custom router",
  "Group routing",
  "Middleware",
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
  Description={GoLiveDesc} 
  Image={goliveImage} 
  Repo={goliveRepo} 
  TechUsed={GoLiveTech}/>,

  asciiIt: <CompCard Specifications={IDKSpecs} Name="DN" Description={DNYET} Image="asciiIt" Repo="http://github.com/Boofny" TechUsed={DNTECH}/>,
  skillscan: <CompCard Specifications={SkilScanSpecs} Name="SkillSkann" Description={SkillScanDesc} Image="skillscan" Repo="http://github.com/Boofny" TechUsed={SkillScanTech}/>,
  // slime: <CompCard Description="slimer" TechUsed="tech used" Image="skillscan" Repo="http://github.com/Boofny"/>,
}
