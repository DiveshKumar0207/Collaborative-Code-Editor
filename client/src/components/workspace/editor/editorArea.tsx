import { FC, useEffect, useRef, useState } from "react";

interface Props {}

const EditorArea: FC<Props> = () => {
  const [noOfCodeLines, setNoOfCodeLines] = useState<number>(1);
  const editorRef = useRef<HTMLDivElement>(null);

  const handleLineCount = () => {
    const editorArea = editorRef.current;
    const lineHeight = 26; //should do dynamic in future //for now i checked this in css of code

    if (editorArea) {
      // Use requestAnimationFrame to ensure that DOM updates are processed
      requestAnimationFrame(() => {
        const editorHeight = editorArea.clientHeight;
        const newLinesNumbers = Math.floor(editorHeight / lineHeight);

        if (newLinesNumbers != noOfCodeLines) {
          setNoOfCodeLines((prevTotalLines) => {
            // console.log("prev lines : ", prevTotalLines);
            return newLinesNumbers;
          });
        }
      });
    }
  };

  useEffect(() => {
    handleLineCount();
  }, []);

  const handleTabKey = (e: React.KeyboardEvent) => {
    e.preventDefault();
    const syntheticEvent = new KeyboardEvent("keydown", {
      key: "Tab",
      bubbles: true,
      cancelable: true,
      shiftKey: false,
      code: "13",
    });
    // console.log(syntheticEvent);

    window.dispatchEvent(syntheticEvent);

    // const editorArea = editorRef.current;

    // if (editorArea) {
    //   const selectionStart = editorArea.selectionStart || 0;
    //   const selectionEnd = editorArea.selectionEnd || 0;

    //   // Ensure textarea value is not undefined
    //   let editorAreaValue = editorArea.value || "";

    //   const newValue =
    //     editorAreaValue.substring(0, selectionStart) +
    //     `   ` +
    //     editorAreaValue.substring(selectionEnd);

    //   editorAreaValue = newValue;
    //   // editorArea.setSelectionRange(5, 10);

    //   // editorArea.setSelectionRange(selectionStart + 1, selectionEnd + 1);
    // }
  };

  const handleEditorKeys = (e: React.KeyboardEvent): void => {
    switch (e.key) {
      case "Enter":
        handleLineCount();
        break;
      case "Backspace":
        handleLineCount();
        break;
      case "Tab":
        handleTabKey(e);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <div className="flex h-[calc(100%_-_2.25rem)] w-full bg-overlayDarkColors-dp06 pb-12">
        <div className="custom-y-scrollbar flex h-full w-full flex-shrink whitespace-break-spaces  break-words rounded-tr-lg p-4 font-Consola leading-relaxed text-textColor-medium outline-none">
          <div
            className="h-min w-max select-none pl-2 pr-6 text-end text-textColor-medium"
            aria-hidden="true"
          >
            {noOfCodeLines &&
              [...Array(noOfCodeLines)].map((_, index) => (
                <div key={index}>{index + 1}</div>
              ))}
          </div>

          <div
            className="h-min w-full font-Consola outline-none"
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
            ref={editorRef}
          ></div>
        </div>
      </div>
    </>
  );
};

export default EditorArea;
