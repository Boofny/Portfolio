import Hompage from "./pages/Normal.tsx"
import Terminal from "./pages/Terminal.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hompage/>} />
        <Route path="/term" element={<Terminal/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
