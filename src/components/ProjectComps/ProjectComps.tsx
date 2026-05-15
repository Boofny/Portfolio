import { GoLiveDesc, DNYET, SkillScanDesc}from "./ProjectConsts.ts"
import { CompCard  }from "./Cards/CompCard.tsx"
import {type CompCardFooter} from "./Cards/Types.ts"

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
  }
]
const SkillScanTech: CompCardFooter[] = [
  {
    techName: "skillllss",
    icon: <FaReact/>,
    descIntro: "Hackathon"
  }
]

export const CompStack = {
  golive: <CompCard Name="GoLive!" Description={GoLiveDesc} Image="GoLive" Repo="http://github.com/Boofny" TechUsed={GoLiveTech}/>,
  asciiIt: <CompCard Name="DN" Description={DNYET} Image="asciiIt" Repo="http://github.com/Boofny" TechUsed={DNTECH}/>,
  skillscan: <CompCard Name="SkillSkann" Description={SkillScanDesc} Image="skillscan" Repo="http://github.com/Boofny" TechUsed={SkillScanTech}/>,
  // slime: <CompCard Description="slimer" TechUsed="tech used" Image="skillscan" Repo="http://github.com/Boofny"/>,
}
