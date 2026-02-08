function About(){
  return(
    <div className="flex justify-center items-center w-150 h-100 m-20 flex-col gap-0 rounded bg-OneDarkGray border-2 border-OneGreen/75">
      <div className="w-105 h-40 border-b-3 border-OneYellow/75 flex justify-end text-xl items-center flex-col text-OneWhite font-semibold pb-5">
        <p className="font-hack ">Hello, I'm Brandon Romero</p>
      </div>

      <div className="w-full h-full flex justify-center items-top text-OneWhite font-semibold pt-2 text-xl text-center rounded">
        <p className="font-hack"> I am an aspiring backend developer </p>
      </div>
      <div className="w-full h-10 border border-OneGreen mb-5"></div>
    </div>
  )
}

export default About;
