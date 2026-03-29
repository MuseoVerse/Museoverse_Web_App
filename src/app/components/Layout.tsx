import { Outlet, NavLink, useLocation } from "react-router";
import {
  LayoutDashboard, Users, Landmark, BookOpen, MessageCircle,
  Globe, Megaphone, FileText, Settings, Bell, Search, ChevronDown, Wifi
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Overview" },
  { to: "/analytics", icon: Users, label: "Visitor Analytics" },
  { to: "/exhibits", icon: Landmark, label: "Exhibits & Artifacts" },
  { to: "/storytelling", icon: BookOpen, label: "Storytelling / Scan / AR" },
  { to: "/social", icon: MessageCircle, label: "Social Feed" },
  { to: "/virtual-tours", icon: Globe, label: "Virtual Tours" },
  { to: "/campaigns", icon: Megaphone, label: "Campaigns" },
  { to: "/reports", icon: FileText, label: "Reports" },
  { to: "/settings", icon: Settings, label: "Museum Settings" },
];

export default function Layout() {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  return (
    <div className="flex h-screen bg-[#fbf9f4] font-['Manrope',sans-serif]">
      {/* Sidebar */}
      <aside className="w-[260px] bg-[#341701] flex flex-col shrink-0">
        <div className="p-6 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#e9c349] flex items-center justify-center">
              <Landmark className="w-4 h-4 text-[#341701]" />
            </div>
            <div>
              <span className="text-white text-[16px] tracking-[-0.3px]">MuseoVerse</span>
              <span className="text-[#e9c349] text-[10px] tracking-[1px] uppercase block">Partner Platform</span>
            </div>
          </div>
        </div>
        <div className="px-4 pb-3">
          <div className="h-px bg-[rgba(255,224,136,0.15)]" />
        </div>
        <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] transition-all ${
                  isActive
                    ? "bg-[rgba(255,224,136,0.15)] text-[#ffe088]"
                    : "text-[rgba(255,255,255,0.6)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                }`
              }
            >
              <item.icon className="w-[18px] h-[18px]" />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 mt-auto">
          <div className="h-px bg-[rgba(255,224,136,0.15)] mb-4" />
          <div className="flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-full bg-[#76593a] flex items-center justify-center text-white text-[12px]">
              AH
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-[13px] truncate">Dr. Ahmed Hassan</div>
              <div className="text-[rgba(255,255,255,0.4)] text-[11px]">Museum Director</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top header */}
        <header className="h-[64px] bg-white border-b border-[#e8e0d4] flex items-center px-6 gap-4 shrink-0">
          <div className="flex items-center gap-2 mr-auto">
            <Landmark className="w-5 h-5 text-[#76593a]" />
            <span className="text-[#341701] text-[15px]">Grand Egyptian Museum</span>
            <span className="text-[#76593a] text-[12px]">Cairo, Egypt</span>
            <span className="ml-3 inline-flex items-center gap-1.5 bg-[#f0ebe3] text-[#76593a] text-[11px] px-2.5 py-1 rounded-full">
              <Wifi className="w-3 h-3 text-[#4ead6b]" />
              Live Data Sync
            </span>
          </div>
          <div className="flex items-center gap-1 bg-[#f7f3ed] rounded-lg px-3 py-1.5 w-[220px]">
            <Search className="w-4 h-4 text-[#a89279]" />
            <input
              className="bg-transparent text-[13px] text-[#341701] placeholder-[#a89279] outline-none flex-1"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select className="bg-[#f7f3ed] text-[#76593a] text-[12px] px-3 py-1.5 rounded-lg border-none outline-none cursor-pointer">
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>
          <select className="bg-[#f7f3ed] text-[#76593a] text-[12px] px-3 py-1.5 rounded-lg border-none outline-none cursor-pointer">
            <option>All Halls</option>
            <option>Grand Hall</option>
            <option>Tutankhamun Galleries</option>
            <option>Old Kingdom Hall</option>
            <option>New Kingdom Hall</option>
          </select>
          <button className="relative p-2 text-[#76593a] hover:bg-[#f7f3ed] rounded-lg transition">
            <Bell className="w-[18px] h-[18px]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#e9c349] rounded-full" />
          </button>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
