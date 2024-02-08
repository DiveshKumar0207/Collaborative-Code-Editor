import React, { useRef, useEffect } from "react";
import HorizontalTabs from "../components/editor/tabs/HorizontalTabs";

interface Props {}

const EditorPage: React.FC<Props> = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const setSliderPosition = () => {
    const editorWidth = editorRef.current!.offsetWidth;

    sliderRef.current!.style.left = `${editorWidth + 11}px`;
  };

  useEffect(() => {
    setSliderPosition();
    window.addEventListener("resize", setSliderPosition);
    return () => {
      window.removeEventListener("resize", setSliderPosition);
    };
  }, []);

  const handleMouseDown = () => {
    // Start resizing immediately on double-click
    document.addEventListener("mousemove", moveTo);

    // Remove the mousemove event listener when the mouse button is released
    document.addEventListener("mouseup", handleMouseUp, { once: true });
  };

  function moveTo(e: MouseEvent) {
    // e.stopPropagation();

    editorRef.current!.style.width = e.clientX + "px";
    setSliderPosition();
  }

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", moveTo);
  };

  return (
    <div
      className="font fixed h-full max-h-screen w-full bg-backgroundColor-dark "
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

      <div className="flex h-full w-full flex-auto gap-1 px-2">
        <div
          className=" h-full min-w-[60%] max-w-[80%] flex-grow"
          ref={editorRef}
        >
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
              title="Code editor"
              placeholder="Enter code here"
              className="h-full w-full bg-overlayDarkColors-dp01 p-4 pt-3 text-textColor-medium outline-none"
            ></textarea>
          </div>
        </div>

        {/* Virtual divider to seperate worksapce*/}
        <div className={` flex h-full w-[2px] items-center`}>
          <div
            className={`absolute top-[50%] h-28 w-[1.5px]  cursor-ew-resize bg-blue-800 px-[1px] opacity-70 
            `}
            ref={sliderRef}
            onMouseDown={handleMouseDown}
          ></div>
        </div>

        {/* CHAT AREA, FILES SECTION */}
        <div className="h-full min-w-[20%] max-w-[40%] flex-grow bg-overlayDarkColors-dp01"></div>
      </div>
    </div>
  );
};

export default EditorPage;
