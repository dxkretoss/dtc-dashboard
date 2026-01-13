import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
    return (
        <div className="flex h-screen gap-[16px] p-6">
            <Sidebar />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    )
}
