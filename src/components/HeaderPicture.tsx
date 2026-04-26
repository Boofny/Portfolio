function HeaderPicture() {
  const delcastlePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMCOIuRLah8n7W_hmtiH0y22qEaQqZsM3Og&s"
  const deltechPic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xOB8LE6X-nAkmNn3_s-8h7Ac_v6fjNJr1A&s"

  return (
    <div className="flex mx-4 my-6 md:m-15 w-full md:w-50 md:h-100 flex-col items-center">
      
      {/* Headshot */}
      <div className="w-40 h-40 md:w-50 md:h-50 border-2 border-OneBlue rounded shrink-0">
        <img className="w-full h-full object-cover" src="https://i.pinimg.com/736x/b4/bb/b2/b4bbb2198b036fe1024571ec6b60f8b8.jpg" alt="headShot" />
      </div>

      {/* Social links */}
      <div className="w-full flex justify-center items-center gap-x-5 py-4">
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

      {/* School entries */}
      <div className="flex flex-col gap-2 ">
        <div className="w-80 flex items-center gap-2 bg-OneDarkGray md:w-full">
          <div className="w-16 shrink-0 border-OneBlue border-2 rounded">
            <img className="w-full rounded" src={delcastlePic} alt="delcastle" />
          </div>
          <p className="flex-1 text-white font-hack text-xs flex justify-center items-center p-2 border md:w-50 border-OneBlue h-20 rounded">
            Delcastle Technical High School Graduate
          </p>
        </div>
        <div className="w-80 flex items-center gap-2 bg-OneDarkGray md:w-full">
          <div className="w-16 shrink-0 border-2 border-OneBlue rounded">
            <img className="w-full border-2 border-black" src={deltechPic} alt="deltech" />
          </div>
          <p className="flex-1 border text-white font-hack text-xs flex justify-center items-center md:w-50 p-2 border-OneBlue h-20 rounded">
            Delaware Technical Community College Electronics Engineering Tech
          </p>
        </div>
      </div>

    </div>
  )
}

export default HeaderPicture
