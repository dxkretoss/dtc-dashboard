import { NavLink } from "react-router-dom"

const kpis = [
    { name: "Strategic", icon: "/Sidebar/Strategic.svg", path: "/strategic" },
    { name: "Talent development & attraction", icon: "/Sidebar/Talent.svg", path: "/talent" },
    { name: "Business attraction", icon: "/Sidebar/Business.svg", path: "/business" },
    { name: "Community engagement", icon: "/Sidebar/Community.svg", path: "/community" },
]

const initiatives = [
    { name: "Status", icon: "/Sidebar/Status.svg", path: "/status" },
    { name: "Initiatives", icon: "/Sidebar/initiatives.svg", path: "/initiatives" },
    { name: "Finance", icon: "/Sidebar/Finance.svg", path: "/finance" },
]


function SidebarItem({ item }) {
    return (
        <NavLink
            to={item.path}
            className={({ isActive }) =>
                `
        flex items-center gap-3 px-2 py-2 rounded-lg
        text-[12px]
        transition-all
        ${isActive
                    ? "bg-white/15 text-white shadow-inner"
                    : "text-white/60 hover:bg-white/10"}
        `
            }
        >
            <img src={item.icon} className="w-4 h-4" />
            {item.name}
        </NavLink>
    )
}

export default function Sidebar() {
    return (
        <div
            className="h-screen w-[185px] p-2 flex flex-col rounded-[16px] transition-colors"
            style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)',
                boxShadow: ' 0px 4px 26.9px 0px #00000005',
                backdropFilter: "blur(108px)",
            }}>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
                <img src="./logo.svg" alt="DTC" className="w-full h-full" />
            </div>

            {/* Divider */}
            <div className="w-full h-px mb-6 bg-[#FFFFFF0A]" />

            {/* KPIs */}
            <span className="text-[#FEFEFE99] text-[10px] px-2 mb-2">KPIs</span>
            <div className="flex flex-col gap-1 mb-6">
                {kpis.map((item, index) => (
                    <SidebarItem key={index} item={item} />
                ))}
            </div>

            {/* Initiatives */}
            <span className="text-[#FEFEFE99] text-[10px] px-2 mb-2">
                Initiatives
            </span>
            <div className="flex flex-col gap-1">
                {initiatives.map((item, index) => (
                    <SidebarItem key={index} item={item} />
                ))}
            </div>
        </div>
    )
}
