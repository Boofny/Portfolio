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
    TechName: <span className="text-base">Golang</span>,
    Icon: <SiGo className="text-3xl text-cyan-400"/>,
  },
]

const DNTECH: CompCardFooter[] = [
  {
    TechName: "DN",
    Icon: <FaGitAlt/>,
  },
  {
    TechName: "DN",
    Icon: <FaGitAlt/>,
  },
  {
    TechName: "DN",
    Icon: <FaGitAlt/>,
  },
  {
    TechName: "DN",
    Icon: <FaGitAlt/>,
  }
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
  "Group routing",
  "Middleware handling",
  "Custom Logging",
  "CORS handling"
]

const SkilScanSpecs: string[] = [
  "Gemini API powered",
  "Bulk file analysis",
  "Skill detection",
  "Resume parsing",
  "Candidate feedback",
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
  Intro="Http Framework"
  Description={GoLiveDesc} 
  Image={goliveImage} 
  Links={
    {GitHubLink: goliveRepo, 
      Docker: "id",  // goiing to add a readme file to the example in golive with the docker file and will have a one liner docker for the image on docker hub
      WebsiteLink: "https://github.com/Boofny"} // for now its just my github before i get the api up and running 
  } 
  TechUsed={GoLiveTech}/>,

  asciiIt: <CompCard 
  Specifications={IDKSpecs} 
  Name="DN" 
  Intro="idk yet"
  Description={DNYET} 
  Image="DN"
  Links={{
    GitHubLink: "http://github.com/Boofny", WebsiteLink: "https://github.com/Boofny"
  }}
  TechUsed={DNTECH}/>,

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
