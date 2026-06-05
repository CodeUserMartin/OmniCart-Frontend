import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Clothing from "./pages/Clothing.jsx"
import Groceries from "./pages/Groceries.jsx"
import Electronics from "./pages/Electronic.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
