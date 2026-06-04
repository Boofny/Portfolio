import { useNavigate } from "react-router-dom";

// NOTE: going to make this page that a button called "see more" leads to, in order to see more projects and having a whole page for it
function Projects(){

  const navigate = useNavigate();

  const BackToHome = () =>{
    navigate("/homepage");
  }

  return (
    <div>
      <button onClick={BackToHome} className="font-bold hover:cursor-pointer">HOME</button>
    </div>
  )
}

export default Projects
