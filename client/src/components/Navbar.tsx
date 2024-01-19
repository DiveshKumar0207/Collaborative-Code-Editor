import React from "react";

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <>
      <div className="mb-16  flex h-[90px] w-[100%] items-center justify-center bg-backgroundColor-dark">
        <div className=" font-['Frank Ruhl Libre'] text-center text-[26px] text-textColor-high">
          <span className=" font-extrabold ">Code</span>
          <span className=" font-medium ">colabs</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
