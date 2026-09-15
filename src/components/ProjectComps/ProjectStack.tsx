import { GoLiveDesc, TeleportDesc, SkillScanDesc}from "./ProjectConsts.ts"
import TechStackCard from "./Cards/StackCard.tsx"

// this file is used for the overveiw components 
// this file is the actuall contnennt in [2] overveiw
export const Stacks = {
    golive: <TechStackCard description={GoLiveDesc}/>,
    teleport: <TechStackCard description={TeleportDesc}/>,
    skillscan: <TechStackCard description={SkillScanDesc}/>,
    // slime: <TechStackCard description={"Slimer"}/>,
}
