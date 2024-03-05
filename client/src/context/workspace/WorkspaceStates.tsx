import { ReactNode, useState } from "react";
import WorkspaceContext from "./WorkspaceContext";
import { addFileFormValues, filesTab } from "../interfaces/workspaceInterfaces";

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

  const [activeFileTab, setActiveFileTab] = useState<number | null>(null);
  const [allFileTabs, setAllFileTabs] = useState<filesTab[]>([]);

  const handleFileTabActive = (tabIndex: number) => {
    setActiveFileTab((prevActiveFileTab) =>
      prevActiveFileTab === tabIndex ? null : tabIndex,
    );
  };

  const handleAddFileTabs = (values: addFileFormValues) => {
    const newFileTab = {
      ...values,
      _id: `${allFileTabs.length + 1}`,
    };
    // setAllFileTabs(allFileTabs.concat(newFileTab));
    setAllFileTabs((prevFileTabs) => [...prevFileTabs, newFileTab]);
  };

  const handleCloseFileTabs = (tabIndex: number) => {
    const requiredFileTab = `${tabIndex}`;
    const newFileTabs = allFileTabs.filter((fileTab) => {
      return fileTab._id !== requiredFileTab;
    });
    setAllFileTabs(newFileTabs);

    //reset active state
    if (activeFileTab === tabIndex) setActiveFileTab(null);
  };

  return (
    <WorkspaceContext.Provider
      value={{
        isAddNewFileModal,
        closeAddNewFileModal,
        openAddNewFileModal,
        activeFileTab,
        allFileTabs,
        handleAddFileTabs,
        handleCloseFileTabs,
        handleFileTabActive,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

export default WorkspaceStates;
