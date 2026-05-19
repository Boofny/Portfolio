import { AboutMe } from "../ProjectComps/ProjectConsts.ts"
function AboutMobile(){
  return(
    <div className="w-full pb-10 flex justify-center items-center pt-5 md:hidden block">
      <fieldset className="bg-OneDarkGray border-3 border-OneGreen rounded mx-5 h-full w-full md:w-full">
        <legend className="ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
          [0]About Me
        </legend>

        {/* Mobile: plain card */}
        <div className="md:hidden p-4 font-hack text-gray-300 leading-relaxed space-y-3">
          {/* <p>Hi, I'm Brandon Romero.</p> */}
          {/* <p>about-me content here...</p> */}
          {AboutMe}
        </div>
      </fieldset>
    </div>
  )
}

export default AboutMobile;
