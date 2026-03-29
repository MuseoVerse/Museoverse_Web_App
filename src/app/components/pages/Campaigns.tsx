import { Megaphone, Eye, MousePointer, ArrowRight, Calendar, Star, Play, ExternalLink } from "lucide-react";

const activeCampaigns = [
  { name: "Tutankhamun Discovery Week", type: "Featured Exhibit", status: "Active", impressions: 42800, clicks: 3420, ctr: "8.0%", conversions: 1240, start: "Mar 20", end: "Mar 29" },
  { name: "Virtual Egypt from Europe", type: "Virtual Tour Promo", status: "Active", impressions: 28400, clicks: 2180, ctr: "7.7%", conversions: 890, start: "Mar 15", end: "Apr 5" },
  { name: "Ancient Lecture Series", type: "Event Banner", status: "Active", impressions: 18200, clicks: 1540, ctr: "8.5%", conversions: 620, start: "Mar 22", end: "Mar 30" },
  { name: "Old Kingdom Spotlight", type: "Recommendation", status: "Paused", impressions: 12400, clicks: 680, ctr: "5.5%", conversions: 210, start: "Mar 10", end: "Mar 20" },
];

const promotedExhibits = [
  { name: "Tutankhamun Galleries", placement: "Home Feed Feature", views: 18400, scanIncrease: "+24%" },
  { name: "New Kingdom Hall", placement: "Explore Recommendation", views: 12200, scanIncrease: "+15%" },
  { name: "Royal Sculpture Tour", placement: "Virtual Tour Spotlight", views: 8400, scanIncrease: "+18%" },
];

const recommendations = [
  { artifact: "Narmer Palette", currentRank: 12, suggestion: "Feature in Explore feed to increase awareness", impact: "High" },
  { artifact: "Funerary Objects Hall", currentRank: 8, suggestion: "Promote with refreshed storytelling content", impact: "Medium" },
  { artifact: "Book of the Dead Papyrus", currentRank: 15, suggestion: "Add AR experience to boost engagement", impact: "High" },
];

const upcomingEvents = [
  { name: "Dr. Rossi: Ancient Egypt Lecture", date: "Mar 30, 2:00 PM", location: "Main Hall", rsvps: 180 },
  { name: "Children's Discovery Workshop", date: "Apr 2, 10:00 AM", location: "Education Wing", rsvps: 42 },
  { name: "Virtual Curator Q&A", date: "Apr 5, 6:00 PM", location: "Online", rsvps: 320 },
];

export default function Campaigns() {
  return (
    <div className="space-y-6 max-w-[1400px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#341701] text-[22px]">Campaigns & Recommendations</h1>
          <p className="text-[#a89279] text-[13px] mt-0.5">Manage visibility and promoted content in MuseoVerse</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[#341701] text-white text-[12px] rounded-xl hover:bg-[#4a2a10] transition flex items-center gap-1.5">
            <Megaphone className="w-3.5 h-3.5" /> New Campaign
          </button>
          <button className="px-4 py-2 bg-white border border-[#e8e0d4] text-[#76593a] text-[12px] rounded-xl hover:bg-[#f7f3ed] transition">
            Preview Mobile
          </button>
        </div>
      </div>

      {/* Summary KPIs */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { icon: Megaphone, label: "Active Campaigns", value: "3" },
          { icon: Eye, label: "Total Impressions", value: "101.8K" },
          { icon: MousePointer, label: "Avg. CTR", value: "7.4%" },
          { icon: Star, label: "Conversions", value: "2,960" },
        ].map((k) => (
          <div key={k.label} className="bg-white rounded-2xl p-4 border border-[#efe9df]">
            <k.icon className="w-5 h-5 text-[#c9a84c] mb-2" />
            <div className="text-[#341701] text-[20px]">{k.value}</div>
            <div className="text-[#76593a] text-[12px]">{k.label}</div>
          </div>
        ))}
      </div>

      {/* Active Campaigns Table */}
      <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
        <h2 className="text-[#341701] text-[15px] mb-4">Active Campaigns</h2>
        <table className="w-full text-[13px]">
          <thead>
            <tr className="text-[#a89279] text-[11px] uppercase tracking-[1px] border-b border-[#f0ebe3]">
              <th className="text-left pb-3">Campaign</th>
              <th className="text-left pb-3">Type</th>
              <th className="text-right pb-3">Impressions</th>
              <th className="text-right pb-3">Clicks</th>
              <th className="text-right pb-3">CTR</th>
              <th className="text-right pb-3">Conversions</th>
              <th className="text-right pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {activeCampaigns.map((c) => (
              <tr key={c.name} className="border-b border-[#f7f3ed] last:border-0">
                <td className="py-3">
                  <div className="text-[#341701]">{c.name}</div>
                  <div className="text-[#a89279] text-[11px]">{c.start} – {c.end}</div>
                </td>
                <td className="py-3 text-[#76593a]">{c.type}</td>
                <td className="py-3 text-right text-[#5a4633]">{c.impressions.toLocaleString()}</td>
                <td className="py-3 text-right text-[#5a4633]">{c.clicks.toLocaleString()}</td>
                <td className="py-3 text-right text-[#5a4633]">{c.ctr}</td>
                <td className="py-3 text-right text-[#5a4633]">{c.conversions.toLocaleString()}</td>
                <td className="py-3 text-right">
                  <span className={`text-[11px] px-2.5 py-1 rounded-full ${c.status === "Active" ? "bg-[#e8f5ec] text-[#3a7d4f]" : "bg-[#f0ebe3] text-[#76593a]"}`}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Promoted + Events + Recommendations */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4">Promoted Exhibits</h2>
          <div className="space-y-3">
            {promotedExhibits.map((p) => (
              <div key={p.name} className="p-3 bg-[#faf8f3] rounded-xl">
                <div className="text-[#341701] text-[13px]">{p.name}</div>
                <div className="text-[#a89279] text-[11px]">{p.placement}</div>
                <div className="flex gap-3 mt-2 text-[11px]">
                  <span className="text-[#5a4633]">{p.views.toLocaleString()} views</span>
                  <span className="text-[#4ead6b]">{p.scanIncrease} scans</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#c9a84c]" />
            Upcoming Events
          </h2>
          <div className="space-y-3">
            {upcomingEvents.map((e) => (
              <div key={e.name} className="p-3 bg-[#faf8f3] rounded-xl">
                <div className="text-[#341701] text-[13px]">{e.name}</div>
                <div className="text-[#a89279] text-[11px]">{e.date} · {e.location}</div>
                <div className="text-[#76593a] text-[11px] mt-1">{e.rsvps} RSVPs</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-3 px-3 py-2 bg-[#faf5eb] text-[#c9a84c] text-[12px] rounded-xl hover:bg-[#f5eedd] transition">
            + Add Event
          </button>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4">Suggested Actions</h2>
          <div className="space-y-3">
            {recommendations.map((r) => (
              <div key={r.artifact} className="p-3 bg-[#fef9ee] rounded-xl">
                <div className="text-[#341701] text-[13px]">{r.artifact}</div>
                <div className="text-[#8b6e2f] text-[12px] mt-1">{r.suggestion}</div>
                <div className="flex justify-between items-center mt-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${r.impact === "High" ? "bg-[#e9c349] text-[#341701]" : "bg-[#f0ebe3] text-[#76593a]"}`}>
                    {r.impact} Impact
                  </span>
                  <button className="text-[#c9a84c] text-[11px] flex items-center gap-1 hover:underline">
                    Apply <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
