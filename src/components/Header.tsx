// for now the button do nothing but will change in the near future 
function Header(){
  return (
    <div className="bg-OneDarkGray fixed top-0 w-screen h-15 flex justify-center items-center gap-y-0 border-b-2 border-OneGreen">
      <button className="ease-in-out duration-300 text-OneGreen text-4xl fixed left-0 border-3 border-OneGreen w-15 h-15 flex justify-center items-center rounded font-bold p-1 hover:bg-OneGreen hover:text-black ani font-display">
        {">_"}
      </button>

      <div className="left-50 fixed w-100 h-15 flex items-center justify-center flex-row">

        <p className="relative w-max font-header text-2xl opacity-70
        before:absolute before:inset-0 before:animate-typewriter before:bg-OneDarkGray text-OneYellow
        after:absolute after:inset-0 after:w-[0.75em] after:animate-caret after:bg-OneYellow">Brandon Romero
        </p>

      </div>
      <div className="fixed right-0 w-130 h-15 flex justify-center items-center rounded wp-1 gap-0 font-header text-sm">
        <button className=" hover:cursor-pointer h-full w-full duration-300 ease-in-out hover:text-black text-OneGreen hover:bg-OneGreen border-l font-bold">About</button>
        <button className=" hover:cursor-pointer w-full h-full duration-300 ease-in-out hover:text-black text-OneGreen hover:bg-OneGreen border-x font-bold">Projects</button>
        <button className=" hover:cursor-pointer w-full h-full duration-300 ease-in-out hover:text-black text-OneGreen hover:bg-OneGreen font-bold">Experience</button>
      </div>
    </div>
  )
}

export default Header
