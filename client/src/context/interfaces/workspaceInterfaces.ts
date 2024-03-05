// Interfaces for workspace context

export interface WorkspaceContextType {
  isAddNewFileModal: boolean;
  closeAddNewFileModal: () => void;
  openAddNewFileModal: () => void;

  activeFileTab: number | null;
  allFileTabs: string[];
  handleFileTabActive: (tabIndex: number) => void;
  handleAddFileTabs: (values: addFileFormValues) => void;
  handleCloseFileTabs: (tabIndex: number) => void;
}

export interface addFileFormValues {
  filename: string;
  file_extention: string;
}

export interface filesTab {
  filename: string;
  file_extention: string;
  _id: string;
}
