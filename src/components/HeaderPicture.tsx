function HeaderPicture(){
  return(
    <div className="flex flex-col m-15 w-50 h-70">
      <div className="w-50 h-50 border-2 border-OneBlue rounded">
        <img className="w-full h-full" src="https://media.tenor.com/oUidUwmb3YIAAAAe/cat.png" alt="placeholder" />
      </div>
      <div className="w-full h-full flex justify-center items-center gap-5">
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
              <img className="bg-white border-2 border-OneBlue hover:scale-110 hover:-translate-y-1.5 ease-in-out transition hover:border-OneGreen" src="https://cdn-icons-png.flaticon.com/128/121/121509.png" alt="linkedin" />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
export default HeaderPicture;
