import { Globe, Play, Clock, MapPin, TrendingUp, Eye, ArrowRight } from "lucide-react";
import { SimpleBarChart, SimpleDonutChart } from "../CustomCharts";

const kpis = [
  { label: "Tour Starts", value: "9,847", change: "+22.1%", icon: Play },
  { label: "Completions", value: "6,120", change: "+18%", icon: Globe },
  { label: "Avg. Completion Time", value: "24.3 min", icon: Clock },
  { label: "Countries", value: "38", icon: MapPin },
];

const tours = [
  { name: "Grand Hall Walkthrough", starts: 3420, completions: 2180, avgTime: "18 min", dropOff: "Room 3 Transition", status: "Active", premium: false },
  { name: "Tutankhamun Immersive Journey", starts: 2840, completions: 2010, avgTime: "32 min", dropOff: "Burial Chamber", status: "Active", premium: true },
  { name: "Royal Sculpture Tour", starts: 1580, completions: 920, avgTime: "22 min", dropOff: "Colossal Hall", status: "Active", premium: false },
  { name: "Ancient Egypt Essentials", starts: 1210, completions: 780, avgTime: "15 min", dropOff: "Timeline Section", status: "Active", premium: false },
  { name: "Curator Highlights", starts: 797, completions: 490, avgTime: "28 min", dropOff: "Q&A Section", status: "Active", premium: true },
];

const topCountries = [
  { country: "United States", viewers: 2840 },
  { country: "Germany", viewers: 1420 },
  { country: "United Kingdom", viewers: 1180 },
  { country: "France", viewers: 920 },
  { country: "Japan", viewers: 680 },
  { country: "Italy", viewers: 540 },
  { country: "Brazil", viewers: 380 },
];

const modeComparison = [
  { name: "Guided", value: 62, color: "#c9a84c" },
  { name: "Free Explore", value: 38, color: "#76593a" },
];

const topScenes = [
  { scene: "Tutankhamun's Golden Mask Close-up", interactions: 4210 },
  { scene: "Grand Hall Panoramic View", interactions: 3180 },
  { scene: "Ramesses II Colossus 360°", interactions: 2420 },
  { scene: "Burial Chamber Walkthrough", interactions: 1890 },
  { scene: "Hieroglyph Wall Interactive", interactions: 1540 },
];

const tourPerformance = [
  { name: "Grand Hall", starts: 3420, completions: 2180 },
  { name: "Tutankhamun", starts: 2840, completions: 2010 },
  { name: "Royal Sculpture", starts: 1580, completions: 920 },
  { name: "Essentials", starts: 1210, completions: 780 },
  { name: "Curator", starts: 797, completions: 490 },
];

export default function VirtualTours() {
  return (
    <div className="space-y-6 max-w-[1400px]">
      <div>
        <h1 className="text-[#341701] text-[22px]">Virtual Tours</h1>
        <p className="text-[#a89279] text-[13px] mt-0.5">Remote and immersive experience tracking</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white rounded-2xl p-4 border border-[#efe9df]">
            <k.icon className="w-5 h-5 text-[#c9a84c] mb-2" />
            <div className="text-[#341701] text-[20px]">{k.value}</div>
            <div className="text-[#76593a] text-[12px]">{k.label}</div>
            {k.change && <span className="text-[#4ead6b] text-[11px]">{k.change}</span>}
          </div>
        ))}
      </div>

      {/* Chart + Mode */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4">Performance by Tour</h2>
          <SimpleBarChart
            data={tourPerformance}
            xKey="name"
            height={220}
            bars={[
              { key: "starts", color: "#c9a84c", label: "Starts" },
              { key: "completions", color: "#76593a", label: "Completions" },
            ]}
          />
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
            <h2 className="text-[#341701] text-[15px] mb-2">Guided vs Free Explore</h2>
            <SimpleDonutChart data={modeComparison} innerRadius={30} outerRadius={50} size={120} />
            <div className="flex justify-center gap-4 text-[11px]">
              {modeComparison.map((m) => (
                <span key={m.name} className="flex items-center gap-1.5 text-[#5a4633]">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />{m.name} ({m.value}%)
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
            <h2 className="text-[#341701] text-[15px] mb-3">Top Scenes</h2>
            <div className="space-y-2">
              {topScenes.slice(0, 4).map((s, i) => (
                <div key={s.scene} className="flex items-center gap-2 text-[12px]">
                  <span className="w-5 h-5 rounded bg-[#faf5eb] flex items-center justify-center text-[#c9a84c] text-[10px]">{i + 1}</span>
                  <span className="text-[#5a4633] flex-1 truncate">{s.scene}</span>
                  <span className="text-[#a89279]">{s.interactions.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tour Catalog + Countries */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4">Tour Catalog</h2>
          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-[#a89279] text-[11px] uppercase tracking-[1px] border-b border-[#f0ebe3]">
                <th className="text-left pb-3">Tour</th>
                <th className="text-right pb-3">Starts</th>
                <th className="text-right pb-3">Completions</th>
                <th className="text-right pb-3">Avg. Time</th>
                <th className="text-right pb-3">Drop-off Point</th>
                <th className="text-right pb-3">Type</th>
              </tr>
            </thead>
            <tbody>
              {tours.map((t) => (
                <tr key={t.name} className="border-b border-[#f7f3ed] last:border-0">
                  <td className="py-3 text-[#341701]">{t.name}</td>
                  <td className="py-3 text-right text-[#5a4633]">{t.starts.toLocaleString()}</td>
                  <td className="py-3 text-right text-[#5a4633]">{t.completions.toLocaleString()}</td>
                  <td className="py-3 text-right text-[#5a4633]">{t.avgTime}</td>
                  <td className="py-3 text-right text-[#a89279]">{t.dropOff}</td>
                  <td className="py-3 text-right">
                    {t.premium && <span className="bg-[#faf5eb] text-[#c9a84c] text-[10px] px-2 py-0.5 rounded-full">Premium</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4">Top Countries</h2>
          <div className="space-y-2.5">
            {topCountries.map((c) => (
              <div key={c.country} className="flex items-center gap-3">
                <span className="text-[#5a4633] text-[13px] w-[110px]">{c.country}</span>
                <div className="flex-1 h-2 bg-[#f5f0e7] rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#c9a84c] to-[#e9c349]" style={{ width: `${(c.viewers / 2840) * 100}%` }} />
                </div>
                <span className="text-[#a89279] text-[12px] w-12 text-right">{c.viewers.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}