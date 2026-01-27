import Hompage from "./pages/Normal.tsx"
import Terminal from "./pages/Terminal.tsx"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <body className="bg-[#181818]">
      <BrowserRouter>
        <Routes>
          <Route path="/clasic" element={<Hompage/>} />
          <Route path="/term" element={<Terminal/>} />
          <Route path="*" element={<Navigate to="/clasic" replace />} />
        </Routes>
      </BrowserRouter>
    </body>
  )
}

export default App;
