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
  },
]

const DNTECH: CompCardFooter[] = [
  {
    techName: "DN",
    icon: <FaGitAlt/>,
  }
]
const SkillScanTech: CompCardFooter[] = [
  {
    techName: "skillllss",
    icon: <FaReact/>,
  }
]

export const CompStack = {
  golive: <CompCard Description={GoLiveDesc} Image="GoLive" Repo="http://github.com/Boofny" TechUsed={GoLiveTech}/>,
  asciiIt: <CompCard Description={DNYET} Image="asciiIt" Repo="http://github.com/Boofny" TechUsed={DNTECH}/>,
  skillscan: <CompCard Description={SkillScanDesc} Image="skillscan" Repo="http://github.com/Boofny" TechUsed={SkillScanTech}/>,
  // slime: <CompCard Description="slimer" TechUsed="tech used" Image="skillscan" Repo="http://github.com/Boofny"/>,
}
