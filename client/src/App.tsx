import { Route, Routes } from "react-router-dom";
import './App.css'
import Example from "./components/Example";

function App() {

  return (
   <>
   <Routes>
      <Route path="/" element={ <Example /> } />
   </Routes>

   <p>hello</p>
   </>
  )
}

export default App
