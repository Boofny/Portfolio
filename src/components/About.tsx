// import Vimer from "./vimer.tsx"
// function About(){
//   return(
//     <fieldset className="w-150 h-105 m-20 rounded bg-OneDarkGray border-2 border-OneGreen justify-center flex items-center flex-col">
//       <legend className="ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">[0]About Me</legend>
//       {/* <div className="flex flex-col w-full h-full"> */}
//       {/*   <Vimer></Vimer> */}
//       {/* </div> */}
//       <div className="hidden md:flex flex-col w-full h-full">
//         <Vimer />
//       </div>
//       <div className="md:hidden p-4 font-hack text-gray-300 leading-relaxed space-y-3">
//         <p>Hi, I'm David Brown.</p>
//         <p>Your about-me content here...</p>
//       </div>
//       <div className="h-5 text-white flex justify-center pr-128 items-center "></div>
//     </fieldset>
//   )
// }
//
// export default About;
// <div className="md:h-128 w-full pb-10 flex justify-center items-center pt-10 md:pt-20">
//   <fieldset className="bg-OneDarkGray border-3 border-OneGreen rounded mx-10 h-full w-full md:w-full">
// import Vimer from "./vimer.tsx"
//
// function About() {
//   return (
//       <fieldset className="w-full md:w-150 md:h-106 mx-4 my-6 md:m-20 rounded bg-OneDarkGray border-3 border-OneGreen flex flex-col box-border">
//         <legend className="ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
//           [0]About Me
//         </legend>
//
//         {/* Desktop: Vim editor */}
//         <div className="hidden md:flex flex-col w-full">
//           <Vimer />
//         </div>
//
//         {/* Mobile: plain card */}
//         <div className="md:hidden p-4 font-hack text-gray-300 leading-relaxed space-y-3">
//           <p>Hi, I'm Brandon Romero.</p>
//           <p>Your about-me content here...</p>
//         </div>
//       </fieldset>
//   )
// }
//
// export default About
//

import Vimer from "./vimer.tsx"

function About() {
  return (
    // <div className="w-full flex justify-center items-center px-4 my-6 md:m-0 border-white border">
    // <div className="w-full md:w-auto flex justify-center items-center px-4 md:p-0 my-6 md:m-0">
    <div className="w-full md:w-auto box-border flex justify-center items-center px-4 md:p-0 my-6 md:m-0">
      <fieldset className="w-full md:w-150 md:h-106 md:m-20 rounded bg-OneDarkGray border-3 border-OneGreen flex flex-col box-border">
        <legend className="ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
          [0]About Me
        </legend>
        {/* Desktop: Vim editor */}
        <div className="hidden md:flex flex-col w-full">
          <Vimer />
        </div>
        {/* Mobile: plain card */}
        <div className="md:hidden p-4 font-hack text-gray-300 leading-relaxed space-y-3">
          <p>Hi, I'm Brandon Romero.</p>
          <p>Your about-me content here...</p>
        </div>
      </fieldset>
    </div>
  )
}

export default About;



