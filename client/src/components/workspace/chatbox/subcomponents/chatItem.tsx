import { FC } from "react";

interface Props {}

const ChatItem: FC<Props> = () => {
  return (
    <>
      <div className="box-border flex w-full justify-start py-2">
        <div className=" min-w-min max-w-[80%] gap-12 whitespace-break-spaces break-words rounded-md bg-overlayDarkColors-dp06  p-2 shadow-sm">
          <div className="pb-1 text-left text-xs font-semibold text-green-500">
            Raman
          </div>

          <div className=" text-sm ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, sit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, id.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
            possimus?
          </div>

          <div className="text-right text-xs">9-jul</div>
        </div>
      </div>

      <div className="box-border flex w-full justify-end py-2">
        <div className="min-w-min max-w-[80%] gap-12 whitespace-break-spaces break-words rounded-md bg-overlayDarkColors-dp06  p-2 shadow-sm">
          <div className="pb-1 text-left text-xs font-semibold text-green-500">
            Raman
          </div>

          <div className=" text-sm ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, sit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, id.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
            possimus?
          </div>

          <div className="text-right text-xs">9-jul</div>
        </div>
      </div>
    </>
  );
};

export default ChatItem;
