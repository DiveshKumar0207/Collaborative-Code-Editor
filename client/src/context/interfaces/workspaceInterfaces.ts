// Interfaces for workspace context

import React from "react";

export interface WorkspaceContextType {
  isAddNewFileModal: boolean;
  closeAddNewFileModal: () => void;
  openAddNewFileModal: () => void;

  activeFile: string | null;
  editorBoxRef: React.RefObject<HTMLDivElement>;
  allFile: string[];

  handleActiveFile: (tabIndex: string) => void;
  handleAddFile: (values: addFileFormValues) => void;
  handleFileData: (
    fileId: string,
    event: React.ChangeEvent<HTMLDivElement>,
  ) => void;
  handleFileClose: (tabIndex: string) => void;

  handleEditorKeys: (e: React.KeyboardEvent) => void;
  onPasteHandleLineCount: () => void;
  handleLineCount: () => void;
  noOfCodeLines: number;
}

export interface addFileFormValues {
  filename: string;
  file_extention: string;
  file_data: string;
}

export interface filesType {
  filename: string;
  file_extention: string;
  file_data: string;
  _id: string;
}
