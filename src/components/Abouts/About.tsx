import Vimer from "../vimer.tsx"

function About() {
  return (
    <div className="w-full md:w-auto box-border flex justify-center items-center px-4 md:p-0 my-6 md:m-0 md:block hidden">
      <fieldset className="w-full md:w-150 md:h-106 md:m-20 rounded bg-OneDarkGray border-3 border-OneGreen flex flex-col box-border">
        <legend className="ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
          [0]About Me
        </legend>

        {/* Desktop: Vim editor */}
        <div className="hidden md:flex flex-col w-full">
          <Vimer />
        </div>
      </fieldset>
    </div>
  )
}

export default About;



