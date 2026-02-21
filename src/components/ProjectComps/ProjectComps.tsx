// import goliveImage from "../../assets/GoLive.png"

export function GoLive() { // comps
  return(
    <div className="w-full h-full bg-OneDarkGray flex justify-items items-center flex-col">
      <div className="w-full h-full flex flex-row">
        <div className="w-full h-70 flex justify-items items-center">
          <img className="w-full h-full" src="" alt="golive" />
        </div>
        <div className="w-125 h-full border border-white">
          <p className="text-white">projects explain</p>
        </div>
      </div>
      <div className="bg-OneLightGray w-full h-20 flex">
        <div className="w-20 h-full border border-white">Git pic</div>
        <div className="w-full h-full border border-white text-white"><p className="text-white">hello</p> </div>
      </div>
    </div>
  )
}

export function AsciiIt() {
  return(
    <div className="w-full h-full bg-OneDarkGray">
      <p>AsciiIt</p>
    </div>
  )
}

export function UrlShorter() {
  return(
    <div className="w-full h-full bg-OneDarkGray">
      <p>UrlShorter</p>
    </div>
  )
}

