import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import AddFileForm from "./AddFileForm";
import WorkspaceContext from "../../../context/workspace/WorkspaceContext";

interface Props {}

const EditorHeader: React.FC<Props> = () => {
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
    return allFileTabs.map((fileTab) => {
      console.log("id and length : ", fileTab._id, allFileTabs.length);
      return (
        <div
          key={fileTab._id}
          className={` ${
            activeFileTab === fileTab._id
              ? "active-top-border bg-overlayDarkColors-dp06 text-textColor-high"
              : "text-textColor-medium"
          }
           group box-border flex h-9 cursor-pointer items-center justify-center border-r border-t border-[rgba(255,255,255,0.2)]  p-2 text-sm`}
          onClick={() => handleFileTabActive(fileTab._id)}
        >
          {/* Icon for file type */}
          <span className=" flex h-full w-6 select-none items-center justify-center font-semibold">
            m
          </span>

          {/* File's name */}
          <span className="flex h-full items-center">
            {`${fileTab.filename}.${fileTab.file_extention}`}
          </span>

          {/* Close the file */}
          <div
            className="ml-2 flex h-full select-none items-center justify-center rounded-md p-1 font-semibold hover:bg-overlayDarkColors-dp06"
            onClick={() => {
              handleCloseFileTabs(fileTab._id);
            }}
          >
            <XMarkIcon
              strokeWidth={2.5}
              className={`h-4 w-4 font-semibold ${
                activeFileTab === fileTab._id
                  ? "visible"
                  : "invisible group-hover:visible"
              }`}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="flex h-9 w-full items-center">
        {/* ------------Tab Horizontal section---------------- */}
        <div className="custom-x-scrollbar flex w-full">{renderTabs()}</div>

        {/* ----------- Tab Horizontal section closed ------------- */}

        <AddFileForm />

        <div
          className="mx-2 box-border flex h-7 w-7 cursor-pointer select-none items-center justify-center rounded-sm bg-overlayDarkColors-dp01 p-2 text-xl font-semibold text-textColor-high hover:bg-overlayDarkColors-dp06"
          onClick={openAddNewFileModal}
        >
          +
        </div>
      </div>
    </>
  );
};

export default EditorHeader;
