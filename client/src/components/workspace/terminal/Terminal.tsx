import React, { useRef, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

interface Props {
  editorWidth: string | null;
}

const Terminal: React.FC<Props> = ({ editorWidth }) => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const [isTerminalOpen, SetIsTerminalOpen] = useState<boolean>(false);
  const [terminalHeight, SetTerminalHeight] = useState(240);

  function handleTerminalOpen() {
    const terminalElement = terminalRef.current;
    if (isTerminalOpen == false) {
      terminalElement!.classList.remove("hidden");
      SetIsTerminalOpen(true);
      SetTerminalHeight(240);
    } else {
      terminalElement!.classList.add("hidden");
      SetIsTerminalOpen(false);
    }
  }

  function moveTo(e: MouseEvent) {
    const newTerminalHeight = window.innerHeight - e.clientY;

    if (newTerminalHeight <= 15) {
      SetIsTerminalOpen(() => false);
    }

    if (newTerminalHeight <= 500 && newTerminalHeight >= 0)
      SetTerminalHeight(() => newTerminalHeight);
  }

  function handleMouseDown() {
    document.addEventListener("mousemove", moveTo);

    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", moveTo);
      },
      { once: true },
    );
  }

  return (
    <>
      <div
        className="absolute bottom-0 left-9"
        style={{
          width: `${editorWidth}`,
        }}
      >
        {/* horizontal divider */}
        <div
          className="h-1 w-full cursor-ns-resize hover:bg-blue-700"
          onMouseDown={handleMouseDown}
        ></div>
        {/* ---------------- Terminal ------------------- */}
        <div
          className={`border-t border-[rgba(255,255,255,0.1)] bg-[#212121] px-4 py-2 text-textColor-medium`}
        >
          {/* Terminal Header */}
          <div className=" flex h-6 items-center justify-between font-body text-textColor-high">
            <div className=" select-none text-sm font-thin">TERMINAL</div>

            <div className="cursor-pointer" onClick={handleTerminalOpen}>
              <ChevronUpIcon strokeWidth={2} className="h-5 w-5" />
            </div>
          </div>

          {/* Terminal Workspace */}
          <div
            className="w-full"
            style={{ height: `${terminalHeight}px` }}
            ref={terminalRef}
          >
            <textarea
              name="terminalInput"
              className="h-full w-full resize-none bg-transparent outline-none"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminal;
