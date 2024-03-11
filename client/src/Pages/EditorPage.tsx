import React, { useEffect, useRef, useState } from "react";
import Terminal from "../components/workspace/terminal/Terminal";
import EditorArea from "../components/workspace/editor/editorArea";
import EditorHeader from "../components/workspace/editor/fileTabs/EditorHeader";
import {
  Bars3Icon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import ChatContainer from "../components/workspace/chatbox/ChatContainer";

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
      const chatContainerWidth = remainigWidth - 2 - 8; // subtracting divider width and gap given the flexbox
      chatRef.current!.style.width = `${chatContainerWidth}px`;
    }
  }

  useEffect(() => {
    const initialPercentage = 70;
    const containerWidth = containerRef.current!.offsetWidth || 0;
    const initialEditorWidth = (initialPercentage / 100) * containerWidth;
    SetEditorWidth(() => initialEditorWidth);

    // Calculate the initial width of the chat div based on the remaining space
    const remainingWidth = containerWidth - initialEditorWidth;
    const initialChatContainerWidth = remainingWidth - 2 - 8; // subtracting divider width and gap given the flexbox
    chatRef.current!.style.width = `${initialChatContainerWidth}px`;
  }, []);

  return (
    <div
      className="
      font-Ubuntu fixed m-0 box-border flex h-screen w-screen flex-col bg-backgroundColor-dark p-0"
      style={{ fontFamily: "Ubuntu" }}
    >
      {/* Header */}
      <div className="z-50 flex h-10 select-none items-center justify-between bg-backgroundColor-dark px-2 text-textColor-medium">
        <div className="flex">
          <div
            aria-haspopup="true"
            className="flex h-full w-10 cursor-pointer justify-center text-center font-semibold text-textColor-high"
          >
            <Bars3Icon className=" h-6 w-6 font-semibold" />
          </div>
          <ul className="flex h-full items-center justify-start gap-3 pl-1 text-sm ">
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

        <div className="">
          <Button
            placeholder={undefined}
            role="button"
            name="runCode"
            aria-roledescription="Run code"
            size="sm"
            color="green"
          >
            RUN
          </Button>
        </div>

        <div className="hover:text-textColor-high">
          <ArrowLeftOnRectangleIcon className="h-6 w-6 font-semibold" />
        </div>
      </div>

      {/* Container of editor + chatbox */}
      <div
        className="mx-2 flex h-[calc(100%_-_2.5rem)] flex-auto gap-1"
        ref={containerRef}
      >
        {/* IDE Section  */}
        <div
          className="flex rounded-md"
          style={{ width: `${editorWidth}px` }}
          ref={editorRef}
        >
          <div className="h-full w-full ">
            {/* Files names and tabs and selection */}
            <EditorHeader />

            {/* --- MAIN EDITOR --- */}

            <EditorArea />
          </div>

          {/* ------------Terminal Section---------------- */}

          <Terminal editorWidth={`${editorWidth}px`} />
        </div>

        {/* Virtual divider to seperate worksapce*/}
        <div className={` flex h-full w-[2px] items-center`}>
          <div
            className={`h-28 w-[1px]  cursor-ew-resize bg-blue-700 px-[1px] opacity-80 hover:opacity-100
            `}
            onMouseDown={handleMouseDown}
          ></div>
        </div>

        {/* CHAT AREA, FILES SECTION */}

        <ChatContainer chatRef={chatRef} />
      </div>
    </div>
  );
};

export default EditorPage;
