import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import EditorPage from "./Pages/EditorPage";
import WorkspaceStates from "./context/workspace/WorkspaceStates";

function App() {
  return (
    <>
      <WorkspaceStates>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/editor" element={<EditorPage />} />
        </Routes>
      </WorkspaceStates>
    </>
  );
}

export default App;
