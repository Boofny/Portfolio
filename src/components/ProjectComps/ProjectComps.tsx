import { GoLiveDesc, DNYET, SkillScanDesc}from "./ProjectConsts.ts"
import { CompCard  }from "./Cards/CompCard.tsx"
import {type CompCardFooter} from "./Cards/Types.ts"
import skillImage from "../../assets/SkillScanMob.png"

const goliveImage = "https://neonxp.gallerycdn.vsassets.io/extensions/neonxp/gotools/0.1.5/1691451648679/Microsoft.VisualStudio.Services.Icons.Default"
const goliveRepo = "https://github.com/Boofny/golive"
const asciiCamImage = "https://admin.itsnicethat.com/images/VtnJNzUAflWHNadqzeaCAD006Lw=/269508/format-webp%7Cwidth-1440/fight_me_2._-_Copyright__enigmatriz_2025.jpg"

import {
  FaReact,
} from "react-icons/fa"

import {
  SiGo,
  SiTailwindcss,
  SiNextdotjs,
  // SiOpencv,
} from "react-icons/si"
// this file is the actuall contnennt in [1] pojects
const GoLiveTech: CompCardFooter[] = [
  {
    TechName: <span className="text-base">Golang</span>,
    Icon: <SiGo className="text-3xl text-cyan-400"/>,
  },
]

const AsciiCam: CompCardFooter[] = [
  {
    TechName: "Python",
    Icon: <img className="ml-2.5 text-3xl md:w-6 md:h-6 w-5 h-5 object-cover md:ml-1.5 md:pr-0" src="https://www.svgrepo.com/show/452091/python.svg" alt="python" />,
  },
  {
    TechName: "Opencv",
    Icon: <img src="https://www.svgrepo.com/show/354139/opencv.svg" alt="opencv" className="md:w-7 md:h-7 w-6 h-6 object-cover md:pr-0 my-0"/>
  },
  {
    TechName: "Golang",
    Icon: <SiGo className="text-3xl text-cyan-400"/>,
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

const IDKSpecs: string[] = [
  "placeholder",
  "placeholder",
  "placeholder",
  "placeholder",
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

  asciiIt: <CompCard 
  Specifications={IDKSpecs} 
  Name="Ascii Cam" 
  Intro="Ascii Camera Engine"
  Description={DNYET} 
  Image={asciiCamImage}
  Links={{
    GitHubLink: "https://github.com/Boofny/AsciiCamera.git", WebsiteLink: "https://github.com/Boofny",
  }}
  TechUsed={AsciiCam}/>,

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
