import React from "react";

interface Props {}

const Button_homePage: React.FC<Props> = () => {
  return (
    <>
      {/* //TODO color dekhna hai active hover states vagarh ka  */}
      <div className="my-20 flex flex-col items-center justify-center px-4">
        <div className=" group inline-flex h-[90px] w-[270px] items-center justify-center rounded-xl border-2 border-gray-900 px-[47px] py-[30px] hover:cursor-pointer hover:border-deep-orange-600 focus:border-blue-800 active:border-blue-800 active:outline-none ">
          <div className="font-['Alliance No.1'] text-center text-[32px] font-medium leading-9 text-gray-900  group-hover:text-deep-orange-600 group-active:text-blue-800">
            sign up
          </div>
        </div>
      </div>
    </>
  );
};

export default Button_homePage;
