import { FC, useContext, useEffect } from "react";
import WorkspaceContext from "../../../context/workspace/WorkspaceContext";

interface Props {}

const EditorArea: FC<Props> = () => {
  const workspaceContext = useContext(WorkspaceContext);
  if (!workspaceContext) {
    throw new Error(
      "WorkspaceContext or WorkspaceContextType is undefined. Make sure WorkspaceStates is a parent.",
    );
  }

  const {
    onPasteHandleLineCount,
    handleEditorKeys,
    handleLineCount,
    editorBoxRef,
    activeFile,
    handleFileData,
    noOfCodeLines,
  } = workspaceContext;

  useEffect(() => {
    handleLineCount();
  }, []);

  return (
    <>
      <div className="flex h-[calc(100%_-_2.25rem)] w-full bg-overlayDarkColors-dp06 pb-12">
        {activeFile !== null ? (
          <div className="custom-y-scrollbar flex h-full w-full flex-shrink whitespace-break-spaces break-words  rounded-tr-lg p-4 font-Consola leading-relaxed text-textColor-medium outline-none">
            <div className="flex w-full">
              <div
                className="h-min w-12 select-none pr-4 text-end text-sm text-textColor-medium"
                aria-hidden="true"
              >
                {noOfCodeLines &&
                  [...Array(noOfCodeLines)].map((_, index) => (
                    <div key={index}>{index + 1}</div>
                  ))}
              </div>

              <div
                className="custom-x-scrollbar h-min w-full whitespace-pre-wrap bg-red-300 font-Consola  outline-none"
                role="code input"
                contentEditable="true"
                spellCheck="false"
                autoCorrect="off"
                autoCapitalize="off"
                translate="no"
                aria-placeholder="Enter code here"
                data-language="json"
                data-gramm="false"
                data-gramm_editor="false"
                data-enabled-grammarly="false"
                onKeyDown={handleEditorKeys}
                onInput={(event: React.ChangeEvent<HTMLDivElement>) =>
                  handleFileData(activeFile, event)
                }
                onPaste={onPasteHandleLineCount}
                ref={editorBoxRef}
              ></div>
            </div>
          </div>
        ) : (
          <div className="flex h-full w-full flex-shrink items-center justify-center rounded-tr-lg p-4 font-Consola leading-relaxed text-textColor-medium outline-none">
            <div className="cursor-default select-none border-2 border-teal-700 p-4 text-sm">
              Add/Choose A file
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EditorArea;
