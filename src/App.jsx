import { Routes, Route } from "react-router-dom"
import DashboardLayout from "./components/layout/DashboardLayout"
import Strategic from "./pages/kpis/Strategic"
import Talent from "./pages/kpis/Talent"
import Business from "./pages/kpis/Business"
import Community from "./pages/kpis/Community"
import Finance from "./pages/Initiatives/Finance"
import Status from "./pages/Initiatives/Status"
import Talentdevelopment from "./pages/Initiatives/Initiatives/Talentdevelopment"

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Strategic />} />
        <Route path="strategic" element={<Strategic />} />
        <Route path="talent" element={<Talent />} />
        <Route path="business" element={<Business />} />
        <Route path="community" element={<Community />} />
        <Route path="status" element={<Status />} />
        <Route path="initiatives" element={<Talentdevelopment />} />
        <Route path="finance" element={<Finance />} />

      </Route>
    </Routes>
  )
}

export default App
