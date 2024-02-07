import React, { useState, useRef, useEffect } from "react";
import HorizontalTabs from "../components/editor/tabs/HorizontalTabs";

interface Props {}

const EditorPage: React.FC<Props> = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [chatBotWidth, setChatBotWidth] = useState<number | null>(null);
  const [isResizing, SetIsResizing] = useState<boolean>(false);

  const setSliderPosition = () => {
    const editorWidth = editorRef.current!.offsetWidth;

    sliderRef.current!.style.left = `${editorWidth + 1.38}px`;
    console.log("w : " + editorWidth);
  };

  useEffect(() => {
    setSliderPosition();
    window.addEventListener("resize", setSliderPosition);
    return () => {
      window.removeEventListener("resize", setSliderPosition);
    };
  }, []);

  const handleMouseUp = () => {
    SetIsResizing(false);
  };

  const handleMouseDown = () => {
    SetIsResizing(true);
  };

  const handleResizeOnMove = (e: MouseEvent) => {
    if (isResizing) {
      console.log(e.clientX);
      // const newWidth =
      //   e.clientX - editorRef.current!.getBoundingClientRect().left;

      editorRef.current!.style.width = e.clientX + "px";
      sliderRef.current!.style.left = `${e.clientX + 1.38}px`;
    }
  };

  return (
    <div
      className="font fixed h-full max-h-screen w-full bg-backgroundColor-dark"
      style={{ fontFamily: "Ubuntu" }}
    >
      {/* Header */}
      <div className="z-50 h-10 bg-backgroundColor-dark">
        <div className="absolute left-0 h-5 w-12 bg-blue-800 text-center font-semibold text-textColor-high">
          CCE
        </div>
        <ul className="flex h-full items-center justify-start px-16 text-sm text-textColor-medium">
          <li className="inline cursor-pointer pr-4 hover:text-textColor-high">
            New File
          </li>
          <li className="inline cursor-pointer pr-4 hover:text-textColor-high">
            Share
          </li>
          <li className="inline cursor-pointer pr-4 hover:text-textColor-high">
            Sync
          </li>
        </ul>
      </div>

      <div className="flex h-full w-full flex-auto gap-2" ref={containerRef}>
        <div className=" h-full min-w-[60%] max-w-[80%]" ref={editorRef}>
          {/* Files names and selection */}
          <div className="flex h-9 w-full items-center justify-between">
            <div className="flex items-center">
              <span className=" flex h-9 w-7 cursor-pointer items-center justify-center bg-overlayDarkColors-dp01 text-center text-xl font-semibold text-textColor-medium hover:bg-black hover:text-textColor-high">
                {"<"}
              </span>
              {/* ------------Tab Horizontal section---------------- */}

              <HorizontalTabs filename="helo.c" />

              {/* ----------- Tab Horizontal section closed ------------- */}
            </div>

            <div>
              <span className="flex h-9 w-7 cursor-pointer items-center justify-center  bg-overlayDarkColors-dp01 text-center text-xl font-semibold text-textColor-medium hover:bg-black hover:text-textColor-high">
                {">"}
              </span>
            </div>
          </div>

          {/* Textarea */}
          <div className=" pb-10 pl-7 ">
            <div className="absolute left-0 h-full w-7   shadow-lg"></div>
            <textarea
              name="code"
              id="ta"
              rows={70}
              cols={95}
              className="h-full w-full bg-overlayDarkColors-dp01 p-4 pt-3 text-textColor-medium outline-none"
            ></textarea>
          </div>
        </div>

        {/* VERTICAL RULER OR SEPERATOR OF CHAT AND CODE */}
        <div
          className=" absolute left-10 h-full w-1 cursor-col-resize bg-overlayDarkColors-dp24 hover:bg-blue-700"
          ref={sliderRef}
          // onClick={handleCheck}
          onMouseMove={handleResizeOnMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        ></div>

        {/* CHAT AREA, FILES SECTION */}
        <div
          className=" h-full min-w-[20%] max-w-[40%] bg-overlayDarkColors-dp01"
          ref={chatBoxRef}
        ></div>
      </div>
    </div>
  );
};

export default EditorPage;
