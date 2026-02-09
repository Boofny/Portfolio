import { useEffect, useRef, useState } from "react";

const buffer = [
  "This is a fake vim editor",
  "hjkl to move around",
  "No insert mode",
  "No undo",
  "Just vibes",
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
        setRow(r => Math.min(buffer.length - 1, r + 1));
        setCol(0);
        break;
      case "k":
        setRow(r => Math.max(0, r - 1));
        setCol(0);
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
          <div key={lineIdx} className="flex">
            {/* Line number */}
            <span className="w-10 text-gray-400 text-right pr-4">
              {lineIdx + 1}
            </span>

            {/* Line content */}
            <span className="whitespace-pre ">
              {line.split("").map((char, charIdx) => {
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
      <div className="h-8 bg-gray-300 text-black px-3 flex items-center">
        <span className="font-bold">NORMAL</span>
        <span className="ml-4">
          row {row + 1}, col {col + 1}
        </span>
      </div>
    </div>
  );
}
