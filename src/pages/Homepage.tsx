import { useNavigate } from "react-router-dom";
import Header from "../components/Header.tsx"
import HeaderPicture from "../components/HeaderPicture.tsx"
import About from "../components/Abouts/About.tsx"
import AboutMobile from "../components/Abouts/AboutMobile.tsx"
import Projects from "../components/Projects.tsx"
import Experience from "../components/Experience.tsx"
import Skills from "../components/Skills.tsx"
import Card from "../components/Card.tsx"

function Homepage() {
  const navigate = useNavigate();

  const ToContact = () =>{
    navigate("/homepage/contact");
  }

  const ToProjectPage = () =>{
    navigate("/homepage/projects");
  }

  return (
    <div className="m-0 flex flex-col">
      <Header></Header>
      <main className="pt-15 w-full flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-0 pt-5"> 
          <HeaderPicture />
          {/* Section 1 */}
          <div id="about">
            <AboutMobile/>
            <About />
          </div>
        </div>
      </main>

        {/* Section 2*/}
      <div className="2xl:px-30 md:px-5" id="projects">
        <Projects />
      </div>
      <div className="flex justify-center items-center md:w-11/16 px-10">
        <button className="md:w-1/4 px-1.5 text-white bg-OneDarkGray hover:bg-OneGreen hover:text-black md:font-bold font-hack rounded border-3 border-OneGreen md:text-xl" onClick={ToProjectPage}>See More.</button>
      </div>

        {/* Section 3*/}
        {/* md:flex-col in order to change the layout for exp and skills and changing each width */}
      <div className="flex flex-col md:flex-col items-stretch md:px-25 2xl:px-70 pt-7 md:pb-24" id="skills">
        <div className="w-full">
          <Skills/>
        </div>
        <Card title="[4]Experience" mobileTitle="[3]Experience" xPadding={"px-20"}>
          {/* thinking of getting rid of this in place of having something like a contact me or  */}
          <Experience /> 
        </Card>
        <div className="flex justify-center items-center pb-10">
          <button className="md:w-1/5 p-3 text-white bg-OneDarkGray hover:bg-OneGreen hover:text-black font-bold font-hack rounded border-3 border-OneGreen md:text-xl" onClick={ToContact}>Contact Me.</button>
        </div>
      </div>
    </div>
  )
}
export default Homepage


