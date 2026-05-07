// import { FaGolang }from "react-icons/fa6"

function Skills(){

  const skills: string[] = ["Go", "Java", "React", "SQL", "Git", "Linux", "TAILWIND", "NEXTJS", "Astro"];
  // const skills: React.ReactElement[] = [<FaGolang/>]

  return(
    <div className="md:h-128 w-full pb-10 flex justify-center items-center pt-10 md:pt-20">
      <fieldset className="bg-OneDarkGray border-3 border-OneGreen rounded mx-10 h-full w-full md:w-full">
        <legend className="ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
          [3]Skills
        </legend>
          <div className="grid grid-cols-3 gap-3 md:w-full p-2 pt-0 text-white md:h-full">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="border flex items-center justify-center rounded aspect-square md:aspect-auto md:px-3 md:py-2"
            >
              {skill}
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}

// potential skills
// go, java, linux, nextjs, react, postgres, mysql, supabase, astrojs, tailwindcss, bash?, python, git?, TS?, graphql? <- strech
export default Skills;
