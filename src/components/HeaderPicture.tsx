function HeaderPicture(){
  const delcastlePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMCOIuRLah8n7W_hmtiH0y22qEaQqZsM3Og&s"
  const deltechPic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xOB8LE6X-nAkmNn3_s-8h7Ac_v6fjNJr1A&s"

  return(
    <div className="flex m-15 w-50 h-100 flex-col">
      <div className="w-50 h-50 border-2 border-OneBlue rounded">
        <img className="w-full h-full" src="https://i.pinimg.com/736x/b4/bb/b2/b4bbb2198b036fe1024571ec6b60f8b8.jpg" alt="headShot" />
      </div>
      <div className="w-full h-100 flex justify-center items-center gap-x-5">
        <div className="w-10 h-10 flex justify-center items-center">
          <a href="https://github.com/Boofny" target="_blank" rel="noopener noreferrer">
            <button className="cursor-pointer">
              <img className="hover:scale-110 hover:-translate-y-1.5 bg-white rounded-xl ease-in-out transition hover:border-OneGreen border-2 border-OneBlue" src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png" alt="github" />
            </button>
          </a>
        </div>
        <div className="w-10 h-10 flex justify-center items-center">
          <a href="https://www.linkedin.com/in/brandon-romero-335241338/" target="_blank" rel="noopener noreferrer">
            <button className="cursor-pointer">
              <img className="bg-white border-2 border-OneBlue hover:scale-110 rounded hover:-translate-y-1.5 ease-in-out transition hover:border-OneGreen" src="https://cdn-icons-png.flaticon.com/128/121/121509.png" alt="linkedin" />
            </button>
          </a>
        </div>
      </div>

      <div className="h-full w-full flex justify-center items-center flex-col">

        <div className="w-full h-full flex">
          <div className="w-20 h-full flex items-center text-white font-hack text-xs ">
            <img className=""src={delcastlePic} alt="delcastle" />
          </div>
          <div className="w-full h-full flex items-center text-white font-hack text-xs ">
            <p className="w-full h-full border flex justify-center items-center p-2">Delcastle Technical High School Graduate</p>
          </div>
        </div>

        <div className="w-full h-full flex flex-row">
          <div className="w-20 h-full font-hack text-xs">
            <img src={deltechPic} alt="deltech" />
          </div>

          <div className="w-full h-full flex items-center text-white font-hack text-xs ">
            <p className="w-full h-full border flex justify-center items-center p-2">Helllo slime</p>
          </div>
        </div>

      </div>
    </div>
  )
}
export default HeaderPicture;


