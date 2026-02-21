import {useRef, useState, useEffect} from "react";

const buffer = [
  "Hello All",
  "hjkl to move around",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

export default function VimLikeEditor() {
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.preventDefault();

    switch (e.key) {
      case "h":
        setCol(c => Math.max(0, c - 1));
        break;
      case "l":
        setCol(c => Math.min(buffer[row].length, c + 1));
        break;
      case "j":
        // console.log(buffer[0][0])
        setRow(r => Math.min(buffer.length - 1, r + 1));
        setCol(0);
        break;
      case "k":
        setRow(r => Math.max(0, r - 1));
        setCol(0);
        break;
      case "G":
        setRow(buffer.length - 1)
        break;
      case "g":
        setRow(0)
        break;
      case "A":
        setCol(buffer[row].length);
        break;
      case "I":
        setCol(0);
        break;
      case "q":
        containerRef.current?.blur();
        break;
      case "w":
        setCol(c => {
          const line = buffer[row];
          const nextSpace = line.slice(c).search(/\s/);
          if (nextSpace === -1) {
            return line.length - 1;
          }
          return Math.min(c + nextSpace + 1, line.length);
        })
        break;
    }
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="outline-none font-hack gap-0 bg-OneDarkGray text-white h-full w-full flex flex-col"
    >
      {/* Editor */}
      <div className="flex-1 pl-1 space-y-1">
        {buffer.map((line, lineIdx) => (
          <div key={lineIdx} className={`flex ${lineIdx === row ? "bg-[#2c323c]" : ""}`}>
            {/* Line number */}
            <span className={`w-10 text-gray-400 text-right pr-4 ${lineIdx === row ? "text-white font-bold pr-6" : ""}`}>
              {lineIdx === row ? lineIdx + 1 : Math.abs(lineIdx - row)}
            </span>

            {/* Line content */}
            <span className="whitespace-pre">
              {[...line, " "].map((char, charIdx) => {
                const isCursor =
                  lineIdx === row && charIdx === col;

                return (
                  <span
                    key={charIdx}
                    className={
                      isCursor
                        ? "bg-white text-black"
                        : ""
                    }
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          </div>
        ))}
      </div>

      {/* Status line */}
      <div className="h-5 bg-[#2c323c] text-gray-300 flex items-center ">
        <span className="h-full font-bold text-black bg-OneGreen px-3 flex items-center justify-center">NORMAL</span>
        <div className="flex justify-end items-center w-0 h-0 border-l-OneGreen border-[10px] border-r-0 border-y-transparent"></div>
        <span className="ml-4 font-bold pr-4">
          row {row + 1}, col {col + 1}
        </span>
      </div>
    </div>
  );
}
