import { ReactNode, useRef, useState } from "react";
import WorkspaceContext from "./WorkspaceContext";
import {
  addFileFormValues,
  filesType,
} from "../interfaces/workspaceInterfaces";

// Create a context provider component
interface MyContextProviderProps {
  children: ReactNode;
}

const WorkspaceStates: React.FC<MyContextProviderProps> = ({ children }) => {
  // ---------------- Add file form ---------------------------
  const [isAddNewFileModal, SetisAddNewFileModal] = useState(false);

  function closeAddNewFileModal() {
    SetisAddNewFileModal(false);
  }
  function openAddNewFileModal() {
    SetisAddNewFileModal(true);
  }

  // --------------- Horizontal files tab  --------------------------------------------------------

  const [activeFile, setActiveFile] = useState<string | null>(null);
  const [allFile, setAllFile] = useState<filesType[]>([]);
  const editorBoxRef = useRef<HTMLDivElement>(null);

  // ----------- EditorArea component file states ---------
  const [noOfCodeLines, setNoOfCodeLines] = useState<number>(1);
  // const editorBoxRef = useRef<HTMLDivElement>(null);

  const handleLineCount = () => {
    const editorArea = editorBoxRef!.current;
    const lineHeight = 26; //should do dynamic in future //for now i checked this in css of code

    if (editorArea) {
      // Use requestAnimationFrame to ensure that any updates to the DOM are applied before the next frame is rendered.
      requestAnimationFrame(() => {
        const editorHeight = editorArea.clientHeight;
        const newLinesNumbers = Math.floor(editorHeight / lineHeight);

        if (newLinesNumbers != noOfCodeLines) {
          setNoOfCodeLines(() => {
            return newLinesNumbers;
          });
        }
      });
    }
  };

  const onPasteHandleLineCount = () => {
    handleLineCount();
  };

  const handleEditorKeys = (e: React.KeyboardEvent): void => {
    switch (e.key) {
      case "Enter":
        handleLineCount();
        break;
      case "Backspace":
        handleLineCount();
        break;
      case "Delete":
        handleLineCount();
        break;
      default:
        return;
    }
  };

  // ----------------------------

  const handleActiveFile = (fileId: string) => {
    setActiveFile((prevActiveFileTab) =>
      prevActiveFileTab == fileId ? null : fileId,
    );
    handleValueOnFileOpen(fileId);
  };

  const handleValueOnFileOpen = (fileId: string) => {
    const editor = editorBoxRef!.current;

    // setting value of editor with respect to file opened/active
    allFile.filter((file) => {
      if (file._id === fileId) {
        if (editor) {
          editor.textContent = file.file_data || "";
        }
      }
    });
  };

  const handleAddFile = (values: addFileFormValues) => {
    const { filename, file_extention, file_data } = values;
    const editor = editorBoxRef!.current;

    const newFile = {
      filename,
      file_extention,
      file_data: file_data || " ",
      _id: `${allFile.length + 1}`,
    };

    setAllFile((prevFiles) => [...prevFiles, newFile]);

    // Make that new tab active
    setActiveFile((prevActiveFile) =>
      prevActiveFile == newFile._id ? null : newFile._id,
    );

    if (editor) {
      editor.textContent = " ";
    }
    handleLineCount();
  };

  // const debounce = (func: Function, delay: number) => {
  //   let timeoutId: ReturnType<typeof setTimeout>;

  //   return (...args: any[]) => {
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => {
  //       func(...args);
  //     }, delay);
  //   };
  // };

  const handleFileData = (
    fileId: string,
    event: React.ChangeEvent<HTMLDivElement>,
  ) => {
    let value = event.currentTarget?.textContent;
    if (value == undefined || value == null) {
      value = "";
    }

    // filter to get the activeFile and setting activeFile's state i.e. file.file_data +=value
    allFile.filter((file) => {
      if (file._id === fileId) {
        file.file_data = value;
      }
    });
  };

  const handleFileClose = (fileId: string) => {
    const requiredFileTabId = `${fileId}`;

    const newFileTabs = allFile.filter((fileTab) => {
      return fileTab._id !== requiredFileTabId;
    });
    setAllFile(() => newFileTabs);

    if (activeFile === fileId) {
      setActiveFile(null); // Reset to null only if the active file matches the closed file
    }
  };

  return (
    <WorkspaceContext.Provider
      value={{
        isAddNewFileModal,
        closeAddNewFileModal,
        openAddNewFileModal,
        activeFile,
        editorBoxRef,
        allFile,
        handleAddFile,
        handleFileData,
        handleFileClose,
        handleActiveFile,
        onPasteHandleLineCount,
        handleEditorKeys,
        handleLineCount,
        noOfCodeLines,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

export default WorkspaceStates;
