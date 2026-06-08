import { useNavigate } from "react-router-dom";

function Contact(){
  const navigate = useNavigate()

  const ToHome = () =>{
    navigate("/hompage")
  }

  return (
    <div className="text-xl hover:cursor-pointer" onClick={ToHome}>
      hello world
    </div>
  )
}

export default Contact
