import { Outlet, NavLink, useLocation } from "react-router";
import {
  LayoutDashboard, Users, Landmark, BookOpen, MessageCircle,
  Globe, Megaphone, FileText, Settings, Bell, Search, ChevronDown, Wifi
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import lightLogo from "../../assets/light_logo.png";
import profilePhoto from "../../assets/9daab04414367d49254977be5b6fb20e0c511e1b.png";

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

const periodOptions = ["Last 30 Days", "Last 7 Days", "Last 90 Days", "This Year"];
const hallOptions = ["All Halls", "Grand Hall", "Tutankhamun Galleries", "Old Kingdom Hall", "New Kingdom Hall"];

function HeaderDropdown({
  label,
  value,
  options,
  onValueChange,
  triggerClassName,
}: {
  label: string;
  value: string;
  options: string[];
  onValueChange: (value: string) => void;
  triggerClassName?: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`group min-w-[172px] cursor-pointer rounded-xl border border-[#e4dbcf] bg-[linear-gradient(180deg,#ffffff_0%,#f7f2ea_100%)] px-3 py-1.5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_24px_rgba(52,23,1,0.05)] transition hover:border-[#d6c7b0] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_14px_28px_rgba(52,23,1,0.08)] data-[state=open]:border-[#c9a84c] data-[state=open]:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_16px_32px_rgba(52,23,1,0.1)] outline-none ${triggerClassName ?? ""}`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[9px] uppercase tracking-[1.4px] text-[#a89279]">{label}</div>
            <div className="mt-0.5 truncate text-[12px] font-medium text-[#5a4633]">{value}</div>
          </div>
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/75 text-[#a89279] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition group-hover:text-[#76593a] group-data-[state=open]:bg-[#faf5eb] group-data-[state=open]:text-[#c9a84c]">
            <ChevronDown className="h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="w-[240px] rounded-2xl border border-[#e8e0d4] bg-[#fffdf9] p-2 shadow-[0_20px_48px_rgba(52,23,1,0.14)]"
      >
        <DropdownMenuLabel className="px-3 pb-2 pt-1 text-[10px] uppercase tracking-[1.2px] text-[#a89279]">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-[#f1e9dd]" />
        <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
          {options.map((option) => (
            <DropdownMenuRadioItem
              key={option}
              value={option}
              className="mt-1 cursor-pointer rounded-xl py-2.5 pl-9 pr-3 text-[13px] text-[#5a4633] focus:bg-[#faf5eb] focus:text-[#341701] data-[state=checked]:bg-[#faf5eb] data-[state=checked]:text-[#341701]"
            >
              {option}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Layout() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("Last 30 Days");
  const [selectedHall, setSelectedHall] = useState("All Halls");
  const location = useLocation();

  useEffect(() => {
    if (!isSyncing) return;

    const timeoutId = window.setTimeout(() => {
      setIsSyncing(false);
    }, 1400);

    return () => window.clearTimeout(timeoutId);
  }, [isSyncing]);

  return (
    <div className="flex h-screen bg-[#fbf9f4] font-['Manrope',sans-serif]">
      {/* Sidebar */}
      <aside className="w-[260px] bg-[#341701] flex flex-col shrink-0">
        <div className="p-6 pb-4">
          <div className="flex items-center gap-2.5">
            <img src={lightLogo} alt="MuseoVerse logo" className="h-8 w-8 object-contain shrink-0" />
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
            <img
              src={profilePhoto}
              alt="Dr. Ahmed Hassan"
              className="w-9 h-9 rounded-full object-cover shrink-0"
            />
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
          <div className="flex items-center gap-5 mr-auto">
            <div className="flex items-center gap-2.5">
              <Landmark className="w-5 h-5 text-[#76593a]" />
              <span className="text-[#341701] text-[15px]">Grand Egyptian Museum</span>
            </div>
            <span className="text-[#76593a] text-[12px]">Cairo, Egypt</span>
            <button
              type="button"
              aria-busy={isSyncing}
              onClick={() => setIsSyncing(true)}
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] transition cursor-pointer ${
                isSyncing
                  ? "bg-[#eadfca] text-[#5a4633]"
                  : "bg-[#f0ebe3] text-[#76593a] hover:bg-[#e8dfd4]"
              }`}
            >
              <Wifi className={`w-3 h-3 ${isSyncing ? "text-[#c9a84c] animate-pulse" : "text-[#4ead6b]"}`} />
              {isSyncing ? "Syncing..." : "Live Data Sync"}
            </button>
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
          <HeaderDropdown
            label="Date Range"
            value={selectedPeriod}
            options={periodOptions}
            onValueChange={setSelectedPeriod}
          />
          <HeaderDropdown
            label="Museum Hall"
            value={selectedHall}
            options={hallOptions}
            onValueChange={setSelectedHall}
          />
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
