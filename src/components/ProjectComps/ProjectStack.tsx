import { GoLiveDesc, DNYET, SkillScanDesc}from "./ProjectConsts.ts"
import TechStackCard from "./Cards/StackCard.tsx"

// this file is used for the overveiw components 
// this file is the actuall contnennt in [2] overveiw
export const Stacks = {
    golive: <TechStackCard description={GoLiveDesc}/>,
    asciiIt: <TechStackCard description={DNYET}/>,
    skillscan: <TechStackCard description={SkillScanDesc}/>,
    // slime: <TechStackCard description={"Slimer"}/>,
}
