import { Building, MapPin, Users, Bell, Shield, Link, CreditCard, HelpCircle, ChevronRight } from "lucide-react";

const halls = [
  { name: "Grand Hall", artifacts: 142, status: "Active" },
  { name: "Tutankhamun Galleries", artifacts: 86, status: "Active" },
  { name: "Old Kingdom Hall", artifacts: 124, status: "Active" },
  { name: "New Kingdom Hall", artifacts: 98, status: "Active" },
  { name: "Royal Statues", artifacts: 64, status: "Active" },
  { name: "Funerary Objects", artifacts: 78, status: "Active" },
  { name: "Monumental Sculpture", artifacts: 52, status: "Active" },
  { name: "Education Wing", artifacts: 18, status: "Limited" },
];

const team = [
  { name: "Dr. Ahmed Hassan", role: "Museum Director", email: "dr.hassan@gem.gov.eg", status: "Admin" },
  { name: "Fatima El-Sayed", role: "Head of Digital", email: "f.elsayed@gem.gov.eg", status: "Admin" },
  { name: "Omar Khalil", role: "Curator, Ancient Egypt", email: "o.khalil@gem.gov.eg", status: "Editor" },
  { name: "Nour Abdel-Rahim", role: "Analytics Lead", email: "n.abdelrahim@gem.gov.eg", status: "Viewer" },
  { name: "Sara Mansour", role: "Marketing Manager", email: "s.mansour@gem.gov.eg", status: "Editor" },
];

const settingsSections = [
  { icon: Bell, label: "Notification Preferences", desc: "Configure alerts for performance thresholds, content flags, and weekly digests" },
  { icon: Shield, label: "Privacy & Data Settings", desc: "Manage data retention, anonymization, and visitor consent policies" },
  { icon: Link, label: "Integration & Content Sync", desc: "Connect artifact databases, CMS, and third-party analytics platforms" },
];

export default function MuseumSettings() {
  return (
    <div className="w-full max-w-[1400px] space-y-6">
      <div>
        <h1 className="text-[#341701] text-[22px]">Museum Settings</h1>
        <p className="text-[#a89279] text-[13px] mt-0.5">Institutional configuration and account management</p>
      </div>

      {/* Museum Profile */}
      <div className="bg-white rounded-2xl p-6 border border-[#efe9df]">
        <h2 className="text-[#341701] text-[15px] mb-4 flex items-center gap-2">
          <Building className="w-4 h-4 text-[#c9a84c]" />
          Museum Profile
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-[#a89279] text-[11px] uppercase tracking-[1px] block mb-1">Museum Name</label>
              <div className="text-[#341701] text-[14px] bg-[#faf8f3] px-4 py-2.5 rounded-xl">Grand Egyptian Museum</div>
            </div>
            <div>
              <label className="text-[#a89279] text-[11px] uppercase tracking-[1px] block mb-1">Location</label>
              <div className="text-[#341701] text-[14px] bg-[#faf8f3] px-4 py-2.5 rounded-xl">Al Remaya Square, Giza, Cairo, Egypt</div>
            </div>
            <div>
              <label className="text-[#a89279] text-[11px] uppercase tracking-[1px] block mb-1">Operating Hours</label>
              <div className="text-[#341701] text-[14px] bg-[#faf8f3] px-4 py-2.5 rounded-xl">9:00 AM – 6:00 PM (Sat–Thu) · Closed Friday</div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-[#a89279] text-[11px] uppercase tracking-[1px] block mb-1">MuseoVerse Partner ID</label>
              <div className="text-[#341701] text-[14px] bg-[#faf8f3] px-4 py-2.5 rounded-xl font-mono">MV-GEM-2024-0001</div>
            </div>
            <div>
              <label className="text-[#a89279] text-[11px] uppercase tracking-[1px] block mb-1">Partnership Status</label>
              <div className="flex items-center gap-2 bg-[#faf8f3] px-4 py-2.5 rounded-xl">
                <span className="w-2 h-2 bg-[#4ead6b] rounded-full" />
                <span className="text-[#341701] text-[14px]">Active — Premium Plan</span>
              </div>
            </div>
            <div>
              <label className="text-[#a89279] text-[11px] uppercase tracking-[1px] block mb-1">Contact Email</label>
              <div className="text-[#341701] text-[14px] bg-[#faf8f3] px-4 py-2.5 rounded-xl">digital@gem.gov.eg</div>
            </div>
          </div>
        </div>
      </div>

      {/* Halls */}
      <div className="bg-white rounded-2xl p-6 border border-[#efe9df]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#341701] text-[15px] flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#c9a84c]" />
            Halls & Zones
          </h2>
          <button className="px-3 py-1.5 bg-[#faf5eb] text-[#c9a84c] text-[12px] rounded-lg">+ Add Zone</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {halls.map((h) => (
            <div key={h.name} className="flex items-center justify-between p-3 bg-[#faf8f3] rounded-xl">
              <div>
                <div className="text-[#341701] text-[13px]">{h.name}</div>
                <div className="text-[#a89279] text-[11px]">{h.artifacts} artifacts</div>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${h.status === "Active" ? "bg-[#e8f5ec] text-[#3a7d4f]" : "bg-[#f0ebe3] text-[#76593a]"}`}>
                {h.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="bg-white rounded-2xl p-6 border border-[#efe9df]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#341701] text-[15px] flex items-center gap-2">
            <Users className="w-4 h-4 text-[#c9a84c]" />
            Team Members
          </h2>
          <button className="px-3 py-1.5 bg-[#faf5eb] text-[#c9a84c] text-[12px] rounded-lg">+ Invite Member</button>
        </div>
        <table className="w-full text-[13px]">
          <thead>
            <tr className="text-[#a89279] text-[11px] uppercase tracking-[1px] border-b border-[#f0ebe3]">
              <th className="text-left pb-3">Name</th>
              <th className="text-left pb-3">Role</th>
              <th className="text-left pb-3">Email</th>
              <th className="text-right pb-3">Access</th>
            </tr>
          </thead>
          <tbody>
            {team.map((t) => (
              <tr key={t.name} className="border-b border-[#f7f3ed] last:border-0">
                <td className="py-3 text-[#341701]">{t.name}</td>
                <td className="py-3 text-[#76593a]">{t.role}</td>
                <td className="py-3 text-[#a89279]">{t.email}</td>
                <td className="py-3 text-right">
                  <span className={`text-[11px] px-2.5 py-1 rounded-full ${t.status === "Admin" ? "bg-[#faf5eb] text-[#c9a84c]" : t.status === "Editor" ? "bg-[#f0ebe3] text-[#76593a]" : "bg-[#f7f3ed] text-[#a89279]"}`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Other Settings */}
      <div className="space-y-3">
        {settingsSections.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#efe9df] flex items-center gap-4 cursor-pointer hover:border-[#c9a84c] transition group">
            <div className="w-10 h-10 rounded-xl bg-[#faf5eb] flex items-center justify-center shrink-0">
              <s.icon className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <div className="flex-1">
              <div className="text-[#341701] text-[14px]">{s.label}</div>
              <div className="text-[#a89279] text-[12px]">{s.desc}</div>
            </div>
            <ChevronRight className="w-5 h-5 text-[#c9a84c] opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>

      {/* Billing + Support */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-3 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-[#c9a84c]" />
            Partnership Plan
          </h2>
          <div className="bg-[#faf8f3] rounded-xl p-4">
            <div className="text-[#341701] text-[16px]">Premium Plan</div>
            <div className="text-[#a89279] text-[12px] mt-1">Billed annually · Renewed Jan 2027</div>
            <div className="mt-3 space-y-1 text-[12px] text-[#5a4633]">
              <div>Unlimited artifact catalog</div>
              <div>Advanced analytics & AI insights</div>
              <div>Priority support & custom reports</div>
              <div>Virtual tour hosting (up to 10)</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-3 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#c9a84c]" />
            Help & Support
          </h2>
          <div className="space-y-3">
            <div className="p-3 bg-[#faf8f3] rounded-xl cursor-pointer hover:bg-[#f5eedd] transition">
              <div className="text-[#341701] text-[13px]">Documentation & Guides</div>
              <div className="text-[#a89279] text-[11px]">Access the full MuseoVerse partner knowledge base</div>
            </div>
            <div className="p-3 bg-[#faf8f3] rounded-xl cursor-pointer hover:bg-[#f5eedd] transition">
              <div className="text-[#341701] text-[13px]">Contact Support</div>
              <div className="text-[#a89279] text-[11px]">partner-support@museoverse.com</div>
            </div>
            <div className="p-3 bg-[#faf8f3] rounded-xl cursor-pointer hover:bg-[#f5eedd] transition">
              <div className="text-[#341701] text-[13px]">Request Feature</div>
              <div className="text-[#a89279] text-[11px]">Submit ideas for the MuseoVerse platform roadmap</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
