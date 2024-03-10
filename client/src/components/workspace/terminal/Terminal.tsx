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
    if (isTerminalOpen == false && terminalHeight == 0) {
      terminalElement!.classList.remove("hidden");
      SetIsTerminalOpen(true);
      SetTerminalHeight(240);
    } else {
      terminalElement!.classList.add("hidden");
      SetTerminalHeight(0);
      SetIsTerminalOpen(false);
    }
  }

  function moveTo(e: MouseEvent) {
    const terminalElement = terminalRef.current;
    const newTerminalHeight = window.innerHeight - e.clientY;

    terminalElement!.classList.remove("hidden");

    if (newTerminalHeight <= 15) {
      terminalElement!.classList.add("hidden");
      SetTerminalHeight(() => 0);
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
        // className="absolute bottom-0 left-[56px]"
        className="absolute bottom-0 left-2"
        role="Terminal"
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
          className={`border-t border-[rgba(255,255,255,0.2)] bg-backgroundColor-dark-secondary  text-textColor-medium`}
        >
          {/* Terminal Header */}
          <div className=" flex items-center justify-between border-b border-[rgba(255,255,255,0.2)] px-4 py-2 font-body text-textColor-high">
            <div className="h-full select-none text-sm font-thin">TERMINAL</div>

            <div className="cursor-pointer" onClick={handleTerminalOpen}>
              <ChevronUpIcon strokeWidth={2} className="h-5 w-5" />
            </div>
          </div>

          {/* Terminal Workspace */}
          <div
            spellCheck="false"
            autoCorrect="off"
            autoCapitalize="off"
            data-gramm="false"
            data-gramm_editor="false"
            data-enabled-grammarly="false"
            translate="no"
            role="terminal"
            className="custom-y-scrollbar w-full whitespace-break-spaces break-words px-4 py-2 font-Consola text-sm outline-none"
            contentEditable="true"
            style={{ height: `${terminalHeight}px` }}
            ref={terminalRef}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Terminal;
