import { GoLiveDesc, DNYET, SkillScanDesc}from "./ProjectConsts.ts"
import TechStackCard from "./Cards/StackCard.tsx"

export const stacks = {
    golive: <TechStackCard description={GoLiveDesc}/>,
    asciiIt: <TechStackCard description={DNYET}/>,
    skillscan: <TechStackCard description={SkillScanDesc}/>,
}
