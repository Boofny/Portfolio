// import { FaGolang }from "react-icons/fa6"
import type { ReactElement } from "react"

import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa"

import {
  SiGnubash,
  SiGo,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si"

function Skills(){

type Skill = {
  name: string
  icon: ReactElement
  styles: string
}

// NOTE: could do a cool if clicked explain how i use each skill like golang click and a card shows how i make backends with dbs and or frameworks
const globalCSS = `
  relative
  group
  hover:cursor-pointer
  border
  bg-zinc-900
  flex items-center
  justify-center
  rounded-sm
  aspect-square
  md:aspect-auto
  md:px-3 md:py-2
  md:text-5xl
  text-4xl
  transition-all
  duration-150
  hover:scale-103
`
const skills: Skill[] = [
  {
    name: "Go",
    icon: <SiGo />,
    styles: `
      border-zinc-700
      hover:text-cyan-400
      hover:border-cyan-400
      hover:bg-cyan-400/5
    `,
  },
  {
    name: "Java",
    icon: <FaJava />,
    styles: `
      border-zinc-700
      hover:text-red-500
      hover:border-red-500
      hover:bg-red-500/5
    `,
  },
  {
    name: "React",
    icon: <FaReact />,
    styles: `
      border-zinc-700
      hover:text-cyan-300
      hover:border-cyan-300
      hover:bg-cyan-300/5
    `,
  },
  {
    name: "Postgresql",
    icon: <SiPostgresql />,
    styles: `
      border-zinc-700
      hover:text-blue-400
      hover:border-blue-400
      hover:bg-blue-400/5
    `,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    styles: `
      border-zinc-700
      hover:text-orange-500
      hover:border-orange-500
      hover:bg-orange-500/5
    `,
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    styles: `
      border-zinc-700
      hover:text-black
      hover:border-white
      hover:bg-white/50
    `,
  },
  {
    name: "TailWindCSS",
    icon: <SiTailwindcss />,
    styles: `
      border-zinc-700
      hover:text-sky-400
      hover:border-sky-400
      hover:bg-sky-400/5
    `,
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs />,
    styles: `
      border-zinc-700
      hover:text-black
      hover:border-white
      hover:bg-white/50
    `,
  },
  {
    name: "Bash",
    icon: <SiGnubash/>,
    styles: `
      border-zinc-700
      hover:text-green-400
      hover:border-green-400
      hover:bg-green-400/5
    `,
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
              className={`${skill.styles} ${globalCSS}`}
            >
              <span className="
                absolute -top-7 left-1/2 -translate-x-1/2
                font-hack text-sm text-zinc-300
                bg-OneDarkGray border border-zinc-700 px-2 py-0.5 rounded-sm
                opacity-0 group-hover:opacity-100
                transition-opacity duration-150
                whitespace-nowrap
                pointer-events-none
              ">
                {skill.name}
              </span>
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
