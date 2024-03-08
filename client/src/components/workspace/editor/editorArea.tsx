import { FC } from "react";

interface Props {}

const EditorArea: FC<Props> = () => {
  return (
    <>
      <div className="flex h-full w-full bg-overlayDarkColors-dp06 pb-32">
        <div
          spellCheck="false"
          autoCorrect="off"
          autoCapitalize="off"
          translate="no"
          contentEditable={true}
          role="code area"
          aria-placeholder="Enter code here"
          data-language="json"
          data-gramm="false"
          data-gramm_editor="false"
          data-enabled-grammarly="false"
          className="custom-y-scrollbar h-full w-full rounded-tr-lg p-4  text-base text-textColor-high outline-none"
        >
          {/* Your nested div elements and content go here */}
        </div>
      </div>
    </>
  );
};

export default EditorArea;
