// import { FaGolang }from "react-icons/fa6"
import type { ReactElement } from "react"

import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa"

import {
  SiGo,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiAstro,
} from "react-icons/si"

function Skills(){

  // const skills: string[] = ["Go", "Java", "React", "Postgresql", "Git", "Linux", "TAILWIND", "NEXTJS", "Astro"];
  // const skillsIcons: React.ReactElement[] = [<FaGolang/>]

type Skill = {
  name: string
  icon: ReactElement
}

// const iconSize: number = 48;

const skills: Skill[] = [
  {
    name: "Go",
    icon: <SiGo  />,
  },
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Postgresql",
    icon: <SiPostgresql  />,
  },
  {
    name: "Git",
    icon: <FaGitAlt/>,
  },
  {
    name: "Linux",
    icon: <FaLinux/>,
  },
  {
    name: "TAILWIND",
    icon: <SiTailwindcss/>,
  },
  {
    name: "NEXTJS",
    icon: <SiNextdotjs />,
  },
  {
    name: "Astro",
    icon: <SiAstro/>,
  },
]
// skills component will be excluded from using the Card comp due to the amount of imports used
  return(
    <div className="md:h-128 w-full pb-10 flex justify-center items-center pt-10 md:pt-20">
      <fieldset className="bg-OneDarkGray border-3 border-OneGreen rounded mx-10 h-full w-full md:w-full">
        <legend className="md:block hidden ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
          [3]Skills
        </legend>
        <legend className="md:hidden block ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
          [2]Skills
        </legend>
          <div className="grid grid-cols-3 gap-3 md:w-full p-2 pt-0 text-white md:h-full">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="border border-OneYellow flex items-center justify-center rounded aspect-square md:aspect-auto md:px-3 md:py-2 md:text-5xl text-4xl ease-in-out transition hover:text-OneCyan"
            >
              {skill.icon}
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
