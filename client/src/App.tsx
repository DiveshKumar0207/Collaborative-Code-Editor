import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import EditorPage from "./Pages/EditorPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </>
  );
}

export default App;
