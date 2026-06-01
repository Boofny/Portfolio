import { AboutMeMobile } from "../ProjectComps/ProjectConsts.ts"
function AboutMobile(){
  return(
    <div className="w-full pb-10 flex justify-center items-center pt-5 md:hidden block">
      <fieldset className="bg-OneDarkGray border-3 border-OneGreen rounded mx-2 h-full w-full md:w-full">
        <legend className="ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
          [0]About Me
        </legend>

        {/* Mobile: plain card */}
        <div className="md:hidden px-4 py-2 pt-1 font-hack text-gray-200 leading-relaxed space-y-3 text-sm">
          {/* <p>Hi, I'm Brandon Romero.</p> */}
          {/* <p>about-me content here...</p> */}
          {AboutMeMobile}
        </div>
      </fieldset>
    </div>
  )
}

export default AboutMobile;
