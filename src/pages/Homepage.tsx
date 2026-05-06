import Header from "../components/Header.tsx"
import HeaderPicture from "../components/HeaderPicture.tsx"
import About from "../components/Abouts/About.tsx"
import AboutMobile from "../components/Abouts/AboutMobile.tsx"
import Projects from "../components/Projects.tsx"
import Experience from "../components/Experience.tsx"
import Skills from "../components/Skills.tsx"

function Homepage() {
  return (
    <div className="m-0 flex flex-col">
      <Header />
      <main className="pt-15 w-full flex justify-center items-center">
        {/*Dont know how much i like nothaving other components visible but we will see*/}
        <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-0 pt-5"> 
          <HeaderPicture />
          <AboutMobile/>
          <About />
        </div>
      </main>
      <Projects />
      <div className="flex flex-col md:flex-row items-stretch md:px-15">
        <Skills/>
        <Experience />
      </div>
    </div>
  )
}
export default Homepage


