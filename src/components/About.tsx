function About(){
  return(
    <div className="flex justify-center items-center p-5 border-OneGreen border-2 w-250 h-100 m-20 flex-col gap-y-5 rounded">
      <div className="w-105 h-40 border-b-3 border-OneYellow flex justify-center text-xl items-center flex-col text-OneWhite font-semibold">
        <p className="font-hack ">Hello, I'm Brandon Romero</p>
        <p className="font-hack">an aspiring backend developer </p>
      </div>

      <div className="w-full h-full flex justify-center items-top text-OneWhite font-semibold p-10 text-xl text-center rounded">
        <p className="font-hack">As an aspiring developer projects and tools I create are out of passion for robust and efficient software</p>
      </div>
    </div>
  )
}

export default About;
