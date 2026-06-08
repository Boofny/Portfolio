import Hompage from "./pages/Homepage.tsx"
import Terminal from "./pages/Terminal.tsx"
import Projects from "./pages/Projects.tsx"
import Contact from "./pages/Contact.tsx"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="m-0 w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Hompage/>} />
          <Route path="/homepage/projects" element={<Projects/>} />
          <Route path="/homepage/contact" element={<Contact/>} />
          <Route path="/term" element={<Terminal/>} />
          <Route path="*" element={<Navigate to="/homepage" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
