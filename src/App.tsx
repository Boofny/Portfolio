import Hompage from "./pages/Normal.tsx"
import Terminal from "./pages/Terminal.tsx"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen border-green-400">
      <BrowserRouter>
        <Routes>
          <Route path="/classic" element={<Hompage/>} />
          <Route path="/term" element={<Terminal/>} />
          <Route path="*" element={<Navigate to="/classic" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
