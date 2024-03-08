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

  const handleFileTabActive = (tabId: number) => {
    setActiveFileTab((prevActiveFileTab) =>
      prevActiveFileTab === tabId ? null : tabId,
    );
  };

  const handleAddFileTabs = (values: addFileFormValues) => {
    const newFileTab = {
      ...values,
      _id: `${allFileTabs.length + 1}`,
    };

    // setAllFileTabs(allFileTabs.concat(newFileTab));
    setAllFileTabs((prevFileTabs) => [...prevFileTabs, newFileTab]);

    // Make that new tab active
    setActiveFileTab((prevActiveFileTab) =>
      prevActiveFileTab === newFileTab._id ? null : newFileTab._id,
    );
  };

  const handleCloseFileTabs = (tabId: number) => {
    const requiredFileTabId = `${tabId}`;

    const newFileTabs = allFileTabs.filter((fileTab) => {
      return fileTab._id !== requiredFileTabId;
    });
    setAllFileTabs(newFileTabs);

    //reset active state
    if (activeFileTab === tabId) setActiveFileTab(null);
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
