import React, { useEffect, useRef, useState } from "react";
import Terminal from "../components/workspace/terminal/Terminal";
import EditorArea from "../components/workspace/editor/editorArea";
import EditorHeader from "../components/workspace/fileTabs/EditorHeader";
import { Bars3Icon } from "@heroicons/react/24/outline";

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

      // calculating chat-section width and setting its width
      const remainigWidth = containerWidth - newEditorWdith;
      const chatContainerWidth = remainigWidth - 2; // subtracting divider width
      chatRef.current!.style.width = `${chatContainerWidth}px`;
    }
  }

  useEffect(() => {
    const initialPercentage = 60;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const initialEditorWidth = (initialPercentage / 100) * containerWidth;
    SetEditorWidth(initialEditorWidth);

    // Calculate the initial width of the chat div based on the remaining space
    const remainingWidth = containerWidth - initialEditorWidth;
    const initialChatContainerWidth = remainingWidth - 2;
    chatRef.current!.style.width = `${initialChatContainerWidth}px`;
  }, []);

  return (
    <div
      className="font fixed h-full max-h-screen w-[100vw] bg-backgroundColor-dark "
      style={{ fontFamily: "Ubuntu" }}
    >
      {/* Header */}
      <div className="z-50 flex h-10 select-none bg-backgroundColor-dark px-2">
        <div className="flex h-full w-10 cursor-pointer items-center justify-center text-center font-semibold text-textColor-high">
          <Bars3Icon className=" h-6 w-6 font-semibold" />
        </div>
        <ul className="flex h-full items-center justify-start gap-3 pl-1 text-sm text-textColor-medium">
          <li className="inline cursor-pointer hover:text-textColor-high">
            New File
          </li>
          <li className="inline cursor-pointer hover:text-textColor-high">
            Share
          </li>
          <li className="inline cursor-pointer hover:text-textColor-high">
            Sync
          </li>
        </ul>
      </div>

      {/* Container of editor + chatbox */}
      <div className="flex h-full w-full gap-1 px-2" ref={containerRef}>
        {/* IDE Section  */}
        {/* //! //TODO  why its not taking its full width ? causes trouble in new file tab adds. then this extends its original width   */}
        <div
          className="flex h-full rounded-md"
          style={{ width: `${editorWidth}px` }}
          ref={editorRef}
        >
          {/* aside - Vertical tabs*/}
          {/*  TODO - change this minimum width in future and give proper width. give tailwind w-10 */}

          <div className="flex h-full min-w-[48px] border-r border-t border-[rgba(255,255,255,0.1)]  bg-overlayDarkColors-dp06"></div>

          <div className="h-full w-full">
            {/* Files names and tabs and selection */}
            <EditorHeader />

            {/* --- MAIN EDITOR --- */}

            <EditorArea />
          </div>

          {/* ------------Terminal Section---------------- */}

          {/* <Terminal editorWidth={`${editorWidth - 62.5}px`} /> */}
          <Terminal editorWidth={`${editorWidth}px`} />
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
          className="flex h-full flex-grow rounded-lg bg-overlayDarkColors-dp06"
          ref={chatRef}
        ></div>
      </div>
    </div>
  );
};

export default EditorPage;
