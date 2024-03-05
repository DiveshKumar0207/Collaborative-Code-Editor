import { createContext } from "react";
import { WorkspaceContextType } from "../interfaces/workspaceInterfaces";

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(
  undefined,
);

export default WorkspaceContext;
