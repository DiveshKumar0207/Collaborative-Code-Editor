import React from "react";
import { useState } from "react";

interface Props {}

const EditorPage: React.FC<Props> = () => {

    const [termHeight, setTermHeight] = useState(0);
    const [chatWidth, setChatWidth] = useState(0);

    function handleTerminalDrag(){
        
    }

    function handleChatDrag(){
        
    }
    
    return <div className="h-full w-full max-h-screen fixed bg-backgroundColor-dark font" style={{fontFamily : "Ubuntu"}}>
        {/* Top Tape */}
        <div className="h-5 bg-black z-50">
            <div className="w-12 h-5 absolute left-0 bg-blue-800 text-center font-semibold text-textColor-high">CCE</div>
            <ul className="h-full flex justify-start items-center text-textColor-medium px-16 text-sm">
                <li className="inline pr-4 hover:text-textColor-high cursor-pointer">New File</li>
                <li className="inline pr-4 hover:text-textColor-high cursor-pointer">Share</li>
                <li className="inline pr-4 hover:text-textColor-high cursor-pointer">Sync</li>
            </ul>
        </div>

        <div className="w-8/12 h-full bg-backgroundColor-dark absolute">
            {/* Files names and selection */}
            <div className="w-full h-11 bg-gray-900 flex items-center border-t-2 border-b-2 border-t-black border-b-blue-700 px-9">
                <span className="w-7 h-11 bg-backgroundColor-dark absolute left-0 hover:bg-black hover:text-textColor-high font-semibold text-xl text-textColor-medium flex text-center items-center justify-center">{"<"}</span>
                <span className="w-7 h-11 bg-backgroundColor-dark absolute right-0 hover:bg-black hover:text-textColor-high text-center font-semibold text-xl text-textColor-medium flex items-center justify-center">{">"}</span>
                <div className="h-9 flex bg-backgroundColor-dark box-border p-3 rounded-2xl text-textColor-medium items-center justify-center mx-1 cursor-pointer">main.rs</div>
                <div className="h-9 flex bg-backgroundColor-dark box-border p-3 rounded-2xl text-textColor-high items-center justify-center mx-1 cursor-pointer border-blue-700 border">check.c</div>
                <div className="h-9 flex bg-backgroundColor-dark box-border p-3 rounded-2xl text-textColor-medium items-center justify-center mx-1 cursor-pointer">sum.cpp</div>
                <div className="h-9 w-9 flex bg-backgroundColor-dark box-border p-3 rounded-full text-textColor-high items-center justify-center mx-1 cursor-pointer">+</div>
            </div>
            {/* Textarea */}
            <div className="p pl-7 pr-2 pb-10">
                <div className="h-full w-7 bg-black absolute left-0 shadow-lg"></div>
                <textarea name="code" id="ta" rows={70} cols={95} className="bg-backgroundColor-dark h-full w-full pl-6 pb-8 text-textColor-medium outline-none"></textarea>
            </div>
        </div>
        
        {/* VERTICAL RULER OR SEPERATOR OF CHAT AND CODE */}
        <div className="w-1 bg-black h-full absolute right-1/3 hover:bg-blue-700 cursor-move"></div>

        {/* CHAT AREA, FILES SECTION */}

        {/* Bottom Tape */}
        <div className="w-full h-5 bg-black absolute bottom-0 left-0 z-50">
            {/* Terminal */}
            {/* <div className="w-8/12 h-10 bg-backgroundColor-dark relative -top-6 text-white"></div> */}
            <div className="w-12 h-5 bg-blue-800 absolute right-0"></div>
        </div>
    </div>
}

export default EditorPage;