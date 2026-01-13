import { Routes, Route } from "react-router-dom"
import DashboardLayout from "./components/layout/DashboardLayout"
import Strategic from "./pages/kpis/Strategic"
import Talent from "./pages/kpis/Talent"
import Business from "./pages/kpis/Business"

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Strategic />} />
        <Route path="strategic" element={<Strategic />} />
        <Route path="talent" element={<Talent />} />
        <Route path="business" element={<Business />} />
        <Route path="community" element={<Strategic />} />
        <Route path="status" element={<Strategic />} />
        <Route path="initiatives" element={<Strategic />} />
        <Route path="finance" element={<Strategic />} />

      </Route>
    </Routes>
  )
}

export default App
