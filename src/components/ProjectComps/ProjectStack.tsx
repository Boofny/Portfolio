import { GoLiveDesc, DNYET, SkillScanDesc}from "./ProjectConsts.ts"

export function TechStackGoLive() { // comps
  return(
    <div className="w-full h-full text-white">
      <p>{GoLiveDesc}</p>
    </div>
  )
}

export function TechStackAsciiIt() {
  return(
    <div className="w-full h-full text-white">
      <p>{DNYET}</p>
    </div>
  )
}

export function TechStackUrlShorter() {
  return(
    <div className="w-full h-full text-white">
      <p>{SkillScanDesc}</p>
    </div>
  )
}
