import Hompage from "./pages/Normal.tsx"
import Terminal from "./pages/Terminal.tsx"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <body className="bg-[#181818]">
      <BrowserRouter>
        <Routes>
          <Route path="/classic" element={<Hompage/>} />
          <Route path="/term" element={<Terminal/>} />
          <Route path="*" element={<Navigate to="/classic" replace />} />
        </Routes>
      </BrowserRouter>
    </body>
  )
}

export default App;
