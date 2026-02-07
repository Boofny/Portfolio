import Header from "../components/Header.tsx"
import HeaderPicture from "../components/HeaderPicture.tsx"
import About from "../components/About.tsx"
import Projects from "../components/Projects.tsx"
import Experience from "../components/Experience.tsx"

function Homepage(){
  return(
    <div className="m-0">
      <Header></Header>
      <main className="pt-15">
        <div className="flex justify-center items-center">
          <HeaderPicture></HeaderPicture>
          <About></About>
        </div>
      </main>
      <div>
        <Projects></Projects>
      </div>
      <div>
        <Experience></Experience>
      </div>
    </div>
  )
}

export default Homepage
