import Hompage from "./pages/Homepage.tsx"
import Terminal from "./pages/Terminal.tsx"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="m-0 w-full h-screen border-green-400">
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Hompage/>} />
          <Route path="/term" element={<Terminal/>} />
          <Route path="*" element={<Navigate to="/homepage" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
