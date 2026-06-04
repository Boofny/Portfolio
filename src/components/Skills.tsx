// // import { FaGolang }from "react-icons/fa6"
// import type { ReactElement } from "react"
//
// import {
//   FaDocker,
//   FaReact,
//   FaGitAlt,
//   FaLinux,
// } from "react-icons/fa"
//
// import {
//   SiGnubash,
//   SiGo,
//   SiPostgresql,
//   SiTailwindcss,
//   SiNextdotjs,
// } from "react-icons/si"
//
// function Skills(){
//
// type Skill = {
//   name: string
//   icon: ReactElement
//   styles: string
//   link: string
// }
//
// // NOTE: could do a cool if clicked explain how i use each skill like golang click and a card shows how i make backends with dbs and or frameworks
// const globalCSS = `
//   relative
//   group
//   hover:cursor-pointer
//   border
//   bg-zinc-900
//   flex items-center
//   justify-center
//   rounded-sm
//   aspect-square
//   md:aspect-auto
//   md:px-3 md:py-2
//   md:text-5xl
//   text-4xl
//   transition-all
//   duration-150
//   hover:scale-103
// `
// const skills: Skill[] = [
//   {
//     name: "Go",
//     icon: <SiGo />,
//     styles: `
//       border-zinc-700
//       hover:text-cyan-400
//       hover:border-cyan-400
//       hover:bg-cyan-400/5
//     `,
//     link: "https://go.dev/"
//   },
//   {
//     name: "Docker",
//     icon: <FaDocker/>,
//     styles: `
//       border-zinc-700
//       hover:text-blue-600
//       hover:border-blue-600
//       hover:bg-blue-600/5
//     `,
//     link: "https://www.java.com/en/"
//   },
//   {
//     name: "React",
//     icon: <FaReact />,
//     styles: `
//       border-zinc-700
//       hover:text-cyan-300
//       hover:border-cyan-300
//       hover:bg-cyan-300/5
//     `,
//     link: "https://react.dev/"
//   },
//   {
//     name: "Postgresql",
//     icon: <SiPostgresql />,
//     styles: `
//       border-zinc-700
//       hover:text-blue-400
//       hover:border-blue-400
//       hover:bg-blue-400/5
//     `,
//     link: "https://www.postgresql.org/"
//   },
//   {
//     name: "Git",
//     icon: <FaGitAlt />,
//     styles: `
//       border-zinc-700
//       hover:text-orange-500
//       hover:border-orange-500
//       hover:bg-orange-500/5
//     `,
//     link: "https://git-scm.com/"
//   },
//   {
//     name: "Linux",
//     icon: <FaLinux />,
//     styles: `
//       border-zinc-700
//       hover:text-black
//       hover:border-white
//       hover:bg-white/50
//     `,
//     link: "https://github.com/torvalds/linux"
//   },
//   {
//     name: "TailWindCSS",
//     icon: <SiTailwindcss />,
//     styles: `
//       border-zinc-700
//       hover:text-sky-400
//       hover:border-sky-400
//       hover:bg-sky-400/5
//     `,
//     link: "https://tailwindcss.com/"
//   },
//   {
//     name: "NextJS",
//     icon: <SiNextdotjs />,
//     styles: `
//       border-zinc-700
//       hover:text-black
//       hover:border-white
//       hover:bg-white/50
//     `,
//     link: "https://nextjs.org/"
//   },
//   {
//     name: "Bash",
//     icon: <SiGnubash/>,
//     styles: `
//       border-zinc-700
//       hover:text-green-400
//       hover:border-green-400
//       hover:bg-green-400/5
//     `,
//     link: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)"
//   },
// ]
//
// // skills component will be excluded from using the Card comp due to the amount of imports used
//   return(
//     <div className="md:h-128 w-full pb-10 flex justify-center items-center pt-10 md:pt-20">
//       <fieldset className="bg-OneDarkGray border-3 border-OneGreen rounded mx-10 h-full w-full md:w-full">
//         <legend className="md:block hidden ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
//           [3]Skills
//         </legend>
//         <legend className="md:hidden block ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
//           [2]Skills
//         </legend>
//         <div className="grid grid-cols-3 gap-3 md:w-full p-2 pt-0 text-white md:h-full">
//             {skills.map((skill) => (
//               <a key={skill.name} className={`${skill.styles} ${globalCSS}`} href={skill.link} target="_blank" rel="noopener noreferrer"
//               >
//                 <span className="
//                   absolute -top-7 left-1/2 -translate-x-1/2
//                   font-hack text-sm text-zinc-300
//                   bg-OneDarkGray border border-zinc-700 px-2 py-0.5 rounded-sm
//                   opacity-0 group-hover:opacity-100
//                   transition-opacity duration-150
//                   whitespace-nowrap
//                   pointer-events-none
//                 ">
//                   {skill.name}
//                 </span>
//                   {skill.icon}
//                 {/* <a href="https://github.com/Boofny" target="_blank" rel="noopener noreferrer">{skill.icon}</a> */}
//               </a>
//             ))}
//         </div>
//       </fieldset>
//     </div>
//   )
// }
//
// // potential skills
// // go, java, linux, nextjs, react, postgres, mysql, supabase, astrojs, tailwindcss, bash?, python, git?, TS?, graphql? <- strech
// export default Skills;
//
//
// NOTE: from v0 and is a big change for the skills div making a new branch to test this 
import type { ReactElement } from "react"

import {
  FaDocker,
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

import {
  GrMysql
} from "react-icons/gr"

type Skill = {
  name: string
  icon: ReactElement
  description: string
  link: string
  hoverClass: string
}

type SkillCategory = {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      {
        name: "Go",
        icon: <SiGo />,
        description: "REST APIs, CLI tools, microservices",
        link: "https://go.dev/",
        hoverClass: "hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/5"
      },
    ]
  },
  {
    title: "Backend",
    skills: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        description: "Database design, queries, optimization",
        link: "https://www.postgresql.org/",
        hoverClass: "hover:text-blue-400 hover:border-blue-400 hover:bg-blue-400/5"
      },
      {
        name: "Mysql",
        icon: <GrMysql/>,
        description: "Database",
        link: "https://www.mysql.com/",
        hoverClass: "hover:text-blue-400 hover:border-blue-400 hover:bg-blue-400/5"
      },
    ]
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: <FaReact />,
        description: "Component architecture, hooks, state management",
        link: "https://react.dev/",
        hoverClass: "hover:text-cyan-300 hover:border-cyan-300 hover:bg-cyan-300/5"
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        description: "SSR, API routes, full-stack apps",
        link: "https://nextjs.org/",
        hoverClass: "hover:text-white hover:border-white hover:bg-white/10"
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss />,
        description: "Utility-first styling, responsive design",
        link: "https://tailwindcss.com/",
        hoverClass: "hover:text-sky-400 hover:border-sky-400 hover:bg-sky-400/5"
      },
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      {
        name: "Docker",
        icon: <FaDocker />,
        description: "Containerization, multi-stage builds",
        link: "https://www.docker.com/",
        hoverClass: "hover:text-blue-500 hover:border-blue-500 hover:bg-blue-500/5"
      },
      {
        name: "Git",
        icon: <FaGitAlt />,
        description: "Version control, branching strategies",
        link: "https://git-scm.com/",
        hoverClass: "hover:text-orange-500 hover:border-orange-500 hover:bg-orange-500/5"
      },
      {
        name: "Linux",
        icon: <FaLinux />,
        description: "Server administration, scripting",
        link: "https://github.com/torvalds/linux",
        hoverClass: "border-zinc-700 hover:text-black hover:border-white hover:bg-white/50"
      },
      {
        name: "Bash",
        icon: <SiGnubash />,
        description: "Shell scripting, automation",
        link: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
        hoverClass: "hover:text-green-400 hover:border-green-400 hover:bg-green-400/5"
      },
    ]
  },
]

function Skills() {
  return (
    <div className="w-full pb-10 flex justify-center items-center pt-10 md:pt-20">
      <fieldset className="bg-OneDarkGray border-3 border-OneGreen rounded mx-10 w-full">
        <legend className="md:block hidden ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
          [3]Skills
        </legend>
        <legend className="md:hidden block ml-4 md:ml-10 text-OneYellow font-hack text-lg font-bold tracking-widest">
          [2]Skills
        </legend>

        <div className="p-4 md:p-6 divide-y divide-zinc-800">
          {skillCategories.map((category) => (
            <div 
              key={category.title} 
              className="flex flex-col md:flex-row py-4 first:pt-0 last:pb-0 gap-2 md:gap-0"
            >
              <div className="w-full md:w-36 shrink-0 text-zinc-500 font-hack text-sm">
                {category.title}
              </div>
              <div className="flex-1 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <a
                    key={skill.name}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group relative flex items-center gap-2 
                      px-3 py-2 
                      bg-zinc-900 border border-zinc-700 rounded
                      text-white 
                      transition-all duration-150
                      ${skill.hoverClass}
                    `}
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-hack text-sm">{skill.name}</span>

                    {/* Hover tooltip with description */}
                    <span className="
                      absolute left-0 top-full mt-2 z-10
                      px-3 py-2 
                      bg-zinc-900 border border-zinc-700 rounded
                      text-xs text-zinc-400 font-hack
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-150
                      whitespace-nowrap
                      pointer-events-none
                    ">
                      {skill.description}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}

export default Skills
