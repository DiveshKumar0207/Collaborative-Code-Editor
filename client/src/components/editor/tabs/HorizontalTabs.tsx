import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface Props {
  filename: string;
}

const HorizontalTabs: React.FC<Props> = ({ filename }) => {
  const [activeTab, setactiveTab] = useState<number | null>(null);
  const [tabs, setTabs] = useState(["Tab 1"]);

  const handleTabActive = (tabIndex: number) => {
    // if activeTab === tabindex, then makes it null or otherwise make active value to tabindex; tabindex is key of that tab
    // Set the active tab only if clicking on a non-active tab
    setactiveTab((prevActiveTab) =>
      prevActiveTab === tabIndex ? null : tabIndex,
    );
  };

  const handleAddTabs = () => {
    const newTab = `Tab ${tabs.length + 1}`;
    setTabs([...tabs, newTab]);
  };

  const handleCloseTabs = (tabIndex: number) => {
    const requiredTab = `Tab ${tabIndex}`;
    const newTabs = tabs.filter((tab) => {
      return tab !== requiredTab;
    });
    setTabs(newTabs);

    //reset active state
    if (activeTab === tabIndex) setactiveTab(null);
  };

  const renderTabs = () => {
    return tabs.map((tab, index) => {
      return (
        <div
          key={index}
          className={` ${
            activeTab === index
              ? "text-textColor-high"
              : "text-textColor-medium"
          } group box-border flex h-9 cursor-pointer items-center justify-center gap-2 border-[1px] border-b-0 border-[rgba(255,255,255,0.1)] bg-overlayDarkColors-dp01 px-2 text-base `}
          onClick={() => handleTabActive(index)}
        >
          {/* Icon for file type */}
          <span className=" flex h-6 w-6 items-center justify-center p-1 font-semibold">
            m
          </span>

          {/* File's name */}
          <span className="flex h-6 items-center p-1">{filename}</span>

          {/* Close the file */}
          <span
            className="flex h-6 w-6 items-center justify-center rounded-md p-1 font-semibold hover:bg-overlayDarkColors-dp06"
            onClick={() => {
              handleCloseTabs(index);
            }}
          >
            <XMarkIcon
              strokeWidth={2.5}
              className={`h-4 w-4 font-semibold ${
                activeTab === index
                  ? "visible"
                  : "invisible group-hover:visible"
              }`}
            />
          </span>
        </div>
      );
    });
  };

  return (
    <>
      {renderTabs()}

      <div
        className="mx-2 box-border flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm bg-overlayDarkColors-dp01 p-2 text-xl font-semibold text-textColor-high hover:bg-overlayDarkColors-dp06"
        onClick={handleAddTabs}
      >
        +
      </div>
    </>
  );
};

export default HorizontalTabs;
