import React from "react";
import Navbar from "../components/Navbar";
import FeaturePart from "../components/homePage/Feature";
import Button_homePage from "../components/homePage/Button-HomePage";

interface Props {}

const LandingPage: React.FC<Props> = () => {
  return (
    <>
      <Navbar />

      <div>
        <div>
          {/* intro part of website */}
          <div className="flex flex-col gap-8 px-4">
            <div className="text-neutral-800 item-center inline-flex justify-center gap-3 text-5xl font-bold">
              Unlock the Power of Seamless Collaboration and Instant Code
              Execution!
            </div>
            <div className=" p-3 text-center text-lg">
              <span className="font-['Frank Ruhl Libre',serif] font-bold text-pink-600">
                RUST
              </span>
              <span className="font-['Inter'] font-semibold text-pink-600">
                {" "}
              </span>
              <span className=" font-['Nunito'] font-medium text-gray-900">
                powered servers for fast and seamless experiences.
              </span>
              <span className="font-['Inter'] font-medium text-black"> </span>
            </div>
          </div>
          {/* END INTRO */}

          <Button_homePage />
        </div>

        {/* SVG HERE */}
        <div className="hidden"> svg div</div>
      </div>

      <div className=" w-full bg-backgroundColor-dark px-4 py-6 text-textColor-high">
        <FeaturePart />

        {/* Collaborators */}
        <div className="mt-4 flex flex-col gap-8 px-4">
          <div className="text-4xl font-bold">Collaborator</div>

          <div className="flex justify-between">
            <div className="flex h-[305px] w-[248px] flex-col items-center  rounded-lg border-4 border-white">
              <div className="clipPath-homePage h-4/6 w-full overflow-hidden "></div>
              hy
            </div>
            <div className="flex w-12 flex-col justify-end gap-8 border-2 border-red-300">
              <div className="h-8 w-8">hy</div>
              <div className="h-8 w-8">hy</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
