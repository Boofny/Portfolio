function HeaderPicture(){
  return(
    <div className="flex flex-col mt-15 ml-15 w-50 h-70">
      <div className="w-50 h-50 border-4 border-OneBlue rounded">
        <img className="w-full h-full" src="https://media.tenor.com/oUidUwmb3YIAAAAe/cat.png" alt="placeholder" />
      </div>
      <div className="w-full h-full flex justify-center items-center gap-5">
        <div className="w-10 h-10 flex justify-center items-center">
          <img className="bg-white rounded-2xl border-2 border-OneBlue" src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png" alt="github" />
        </div>
        <div className="w-10 h-10 flex justify-center items-center">
          <img className="bg-white border-2 border-OneBlue" src="https://cdn-icons-png.flaticon.com/128/121/121509.png" alt="linkedin" />
        </div>
      </div>
    </div>
  )
}
export default HeaderPicture;
