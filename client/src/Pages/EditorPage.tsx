import React from "react";
// import { useState } from "react";
import HorizontalTabs from "../components/editor/tabs/HorizontalTabs";

interface Props {}

const EditorPage: React.FC<Props> = () => {
  // const [termHeight, setTermHeight] = useState(0);
  // const [chatWidth, setChatWidth] = useState(0);

  // function handleTerminalDrag() {}

  // function handleChatDrag() {}

  return (
    <div
      className="font fixed h-full max-h-screen w-full bg-backgroundColor-dark"
      style={{ fontFamily: "Ubuntu" }}
    >
      {/* Top Tape */}
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

      <div className=" h-full w-8/12 ">
        {/* Files names and selection */}
        <div className="flex h-9 w-full items-center justify-between  bg-backgroundColor-dark">
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
        <div className="p pb-10 pl-7 ">
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
      <div className="absolute right-1/3 h-full w-1 cursor-move bg-black hover:bg-blue-700"></div>

      {/* CHAT AREA, FILES SECTION */}

      {/* Bottom Tape */}
      <div className="absolute bottom-0 left-0 z-50 h-5 w-full bg-overlayDarkColors-dp01">
        {/* Terminal */}
        {/* <div className="w-8/12 h-10 bg-backgroundColor-dark relative -top-6 text-white"></div> */}
        <div className="absolute right-0 h-5 w-12 bg-blue-800"></div>
      </div>
    </div>
  );
};

export default EditorPage;
