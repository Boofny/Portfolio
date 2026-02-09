import Vimer from "./vimer.tsx"
function About(){
  return(
    <fieldset className="w-150 h-105 m-20 rounded bg-OneDarkGray border-2 border-OneGreen justify-center flex items-center flex-col">
      <legend className="ml-10 text-OneYellow font-hack text-ms font-bold uppercase tracking-widest">About Me</legend>
      <div className="flex flex-col w-full h-full">
        <Vimer></Vimer>
      </div>
      <div className="h-5 text-white flex justify-center pr-125 items-center font-bold">: About me</div>
    </fieldset>
  )
}

export default About;

//
// <div className="relative w-150 h-100 m-20 rounded bg-OneDarkGray border-2 border-OneGreen border-t-0 flex flex-col items-center pt-6">
//
//   {/* Title */}
//   <div className="absolute top-0 left-0 w-full flex items-center text-gray-400 text-sm font-hack font-bold uppercase tracking-widest">
//     <div className="flex-grow border-t border-OneGreen" />
//     <span className="px-3 bg-OneDarkGray text-gray-300">
//       About Me
//     </span>
//     <div className="flex-grow border-t border-OneGreen" />
//   </div>
//
//   {/* Content */}
//   <div className="w-105 h-40 border-b-2 border-OneYellow/75 flex flex-col justify-end items-center text-xl text-OneWhite font-semibold pb-5">
//     Content goes here
//   </div>
//
// </div>
