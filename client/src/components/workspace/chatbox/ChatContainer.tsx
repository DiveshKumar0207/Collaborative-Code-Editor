import { FC, useState } from "react";
import ChatItem from "./subcomponents/chatItem";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

interface Props {
  chatRef: React.RefObject<HTMLDivElement>;
}

const ChatContainer: FC<Props> = ({ chatRef }) => {
  const [message, setMesssage] = useState("");
  const onChange = ({ target }) => setMesssage(target.value);
  return (
    <>
      <div
        className="flex h-full flex-grow rounded-lg bg-overlayDarkColors-dp06 font-Nunito text-textColor-medium"
        aria-live="polite"
        ref={chatRef}
      >
        <div className="col flex h-full w-full flex-col">
          {/* header of chatbox */}
          <div className=" select-none p-4 text-textColor-high ">CHATBOX</div>

          <div className="flex min-h-0 flex-grow flex-col">
            {/* chat section */}
            <div className="custom-y-scrollbar-invisible w-full flex-grow bg-overlayDarkColors-dp01 p-4">
              <ChatItem />
              <ChatItem />
            </div>

            {/* message input */}
            <div className=" p-4">
              <div className="relative flex h-11 w-full text-textColor-high">
                <input
                  placeholder="Message"
                  type="text"
                  value={message}
                  onChange={onChange}
                  className="w-full border-b-2 border-teal-800 bg-transparent pr-10 text-sm text-textColor-high outline-none"
                />

                <div
                  role="button"
                  aria-roledescription="Send Message"
                  className={`!absolute right-1 top-3 cursor-pointer `}
                >
                  <PaperAirplaneIcon className="h-5 w-5 text-teal-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
