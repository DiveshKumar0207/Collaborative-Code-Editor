import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import AddFileForm from "./AddFileForm";
import WorkspaceContext from "../../../context/workspace/WorkspaceContext";

interface Props {}

const HorizontalTabs: React.FC<Props> = () => {
  const workspaceContext = useContext(WorkspaceContext);
  if (!workspaceContext) {
    throw new Error(
      "WorkspaceContext or WorkspaceContextType is undefined. Make sure WorkspaceStates is a parent.",
    );
  }

  const {
    openAddNewFileModal,
    activeFileTab,
    allFileTabs,
    handleCloseFileTabs,
    handleFileTabActive,
  } = workspaceContext;

  const renderTabs = () => {
    return allFileTabs.map((fileTab, index) => {
      return (
        <div
          key={index}
          className={` ${
            activeFileTab === index
              ? "text-textColor-high"
              : "text-textColor-medium"
          } group box-border flex h-9 cursor-pointer items-center justify-center rounded-t-md border-[1px] border-b-0 border-[rgba(255,255,255,0.1)] bg-overlayDarkColors-dp01 px-2 text-base `}
          onClick={() => handleFileTabActive(index)}
        >
          {/* Icon for file type */}
          <span className=" flex h-6 w-6 select-none items-center justify-center p-1 font-semibold">
            m
          </span>

          {/* File's name */}
          <span className="flex h-6 items-center p-1">
            {`${fileTab.filename}.${fileTab.file_extention}`}
          </span>

          {/* Close the file */}
          <span
            className="flex h-6 w-6 select-none items-center justify-center rounded-md p-1 font-semibold hover:bg-overlayDarkColors-dp06"
            onClick={() => {
              handleCloseFileTabs(index);
            }}
          >
            <XMarkIcon
              strokeWidth={2.5}
              className={`h-4 w-4 font-semibold ${
                activeFileTab === index
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

      <AddFileForm />

      <div
        className="mx-2 box-border flex h-7 w-7 cursor-pointer select-none items-center justify-center rounded-sm bg-overlayDarkColors-dp01 p-2 text-xl font-semibold text-textColor-high hover:bg-overlayDarkColors-dp06"
        onClick={openAddNewFileModal}
      >
        +
      </div>
    </>
  );
};

export default HorizontalTabs;
