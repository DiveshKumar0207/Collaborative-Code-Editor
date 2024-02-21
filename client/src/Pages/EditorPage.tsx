import React, { useEffect, useRef, useState } from "react";
import HorizontalTabs from "../components/workspace/fileTabs/HorizontalFileTabs";
import Terminal from "../components/workspace/terminal/Terminal";

interface Props {}

const EditorPage: React.FC<Props> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const [editorWidth, SetEditorWidth] = useState<number>(0);
  const minPercentage = 60;
  const maxPercentage = 80;

  const handleMouseDown = () => {
    // Start resizing immediately on double-click
    document.addEventListener("mousemove", moveTo);

    // Remove the mousemove event listener when the mouse button is released
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", moveTo);
      },
      { once: true },
    );
  };

  function moveTo(e: MouseEvent) {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const newWidthPercentage = (e.clientX / containerWidth) * 100;

    if (
      newWidthPercentage >= minPercentage &&
      newWidthPercentage <= maxPercentage
    ) {
      const newEditorWdith = e.clientX;

      SetEditorWidth(() => newEditorWdith);

      const remainigWidth = containerWidth - newEditorWdith;
      const chatContainerWidth = remainigWidth - 2; // subtracting divider width
      chatRef.current!.style.width = `${chatContainerWidth}px`;
    }
  }

  useEffect(() => {
    const initialPercentage = 60;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const initialWidth = (initialPercentage / 100) * containerWidth;
    SetEditorWidth(initialWidth);

    console.log(initialPercentage);
    console.log("initial width" + initialWidth);

    // Calculate the initial width of the second div based on the remaining space
    const remainingWidth = containerWidth - initialWidth;
    const chatContainerWidth = remainingWidth - 2;
    chatRef.current!.style.width = `${chatContainerWidth}px`;
  }, []);

  return (
    <div
      className="font fixed h-full max-h-screen w-[100vw] bg-backgroundColor-dark "
      style={{ fontFamily: "Ubuntu" }}
    >
      {/* Header */}
      <div className="z-50 h-10 select-none bg-backgroundColor-dark">
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

      {/* Container of editor + textbox */}
      <div
        className="flex h-full w-full flex-auto gap-1 px-2"
        ref={containerRef}
      >
        {/* Editor Section  */}
        <div
          className=" h-full rounded-md "
          style={{ width: `${editorWidth}px` }}
          ref={editorRef}
        >
          {/* Files names and tabs and selection */}
          <div className="flex h-9 w-full items-center justify-between">
            <div className="flex items-center">
              <span className=" invisible flex h-9 w-7 cursor-pointer items-center justify-center bg-overlayDarkColors-dp01 text-center text-xl font-semibold text-textColor-medium hover:bg-black hover:text-textColor-high">
                {"<"}
              </span>
              {/* ------------Tab Horizontal section---------------- */}

              <HorizontalTabs filename="helo.c" />

              {/* ----------- Tab Horizontal section closed ------------- */}
            </div>

            <div>
              <span className="invisible flex h-9 w-7 cursor-pointer items-center justify-center  bg-overlayDarkColors-dp01 text-center text-xl font-semibold text-textColor-medium hover:bg-black hover:text-textColor-high">
                {">"}
              </span>
            </div>
          </div>

          {/* Textarea --- MAIN EDITOR */}
          <div className="flex pb-10 ">
            <div className="invisible w-7  bg-overlayDarkColors-dp01 "></div>
            <div className="w-full border-l border-[rgba(255,255,255,0.1)] bg-transparent">
              <textarea
                name="code"
                id="ta"
                rows={70}
                cols={95}
                title="Code editor"
                placeholder="Enter code here"
                className="h-full w-full rounded-r-lg bg-overlayDarkColors-dp01 p-4 text-textColor-medium outline-none"
              ></textarea>
            </div>
          </div>

          {/* ------------Terminal Section---------------- */}

          <Terminal editorWidth={`${editorWidth - 42}px`} />

          {/* ------------Terminal Section---------------- */}
        </div>

        {/* Virtual divider to seperate worksapce*/}
        <div className={` flex h-full w-[2px] items-center`}>
          <div
            className={`h-28 w-[1.5px]  cursor-ew-resize bg-blue-700 px-[1px] opacity-70 hover:opacity-100
            `}
            onMouseDown={handleMouseDown}
          ></div>
        </div>

        {/* CHAT AREA, FILES SECTION */}
        <div
          className="h-full min-w-[20%] rounded-lg bg-overlayDarkColors-dp01"
          ref={chatRef}
        ></div>
      </div>
    </div>
  );
};

export default EditorPage;
