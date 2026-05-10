import { GoLiveDesc, DNYET, SkillScanDesc}from "./ProjectConsts.ts"
import { CompCard  }from "./Cards/CompCard.tsx"

export const CompStack = {
  golive: <CompCard Description={GoLiveDesc} TechUsed="tech used" Image="GoLive" Repo="http://github.com/Boofny"/>,
  asciiIt: <CompCard Description={DNYET} TechUsed="tech used" Image="asciiIt" Repo="http://github.com/Boofny"/>,
  skillscan: <CompCard Description={SkillScanDesc} TechUsed="tech used" Image="skillscan" Repo="http://github.com/Boofny"/>,
}
