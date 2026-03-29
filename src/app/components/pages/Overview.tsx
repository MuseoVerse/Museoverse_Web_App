import {
  Users, ScanLine, BookOpen, Globe, MessageCircle, Clock,
  TrendingUp, TrendingDown, ArrowRight, Download, Megaphone, AlertTriangle, Lightbulb
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const kpis = [
  { label: "MuseoVerse Visitors", value: "48,231", change: "+12.4%", up: true, icon: Users },
  { label: "Artifact Scans", value: "124,890", change: "+8.7%", up: true, icon: ScanLine },
  { label: "Storytelling Sessions", value: "31,402", change: "+15.2%", up: true, icon: BookOpen },
  { label: "Virtual Tour Starts", value: "9,847", change: "+22.1%", up: true, icon: Globe },
  { label: "Social Mentions", value: "6,312", change: "-3.1%", up: false, icon: MessageCircle },
  { label: "Avg. Engagement Time", value: "14.2 min", change: "+5.8%", up: true, icon: Clock },
];

const engagementData = [
  { day: "Mar 1", visitors: 1420, scans: 3200, stories: 890 },
  { day: "Mar 5", visitors: 1680, scans: 3800, stories: 1050 },
  { day: "Mar 9", visitors: 1540, scans: 3500, stories: 980 },
  { day: "Mar 13", visitors: 1890, scans: 4200, stories: 1200 },
  { day: "Mar 17", visitors: 2100, scans: 4800, stories: 1380 },
  { day: "Mar 21", visitors: 1950, scans: 4400, stories: 1300 },
  { day: "Mar 25", visitors: 2340, scans: 5100, stories: 1520 },
  { day: "Mar 29", visitors: 2180, scans: 4900, stories: 1450 },
];

function SimpleLineChart({ data }: { data: typeof engagementData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [chartWidth, setChartWidth] = useState(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateWidth = () => {
      setChartWidth(element.clientWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const W = Math.max(chartWidth, 640);
  const H = 240;
  const PAD = { top: 12, right: 18, bottom: 34, left: 46 };
  const cw = W - PAD.left - PAD.right;
  const ch = H - PAD.top - PAD.bottom;

  const allValues = data.flatMap((d) => [d.visitors, d.scans, d.stories]);
  const maxVal = Math.max(...allValues);
  const minVal = 0;

  const xScale = (i: number) => PAD.left + (i / (data.length - 1)) * cw;
  const yScale = (v: number) => PAD.top + ch - ((v - minVal) / (maxVal - minVal)) * ch;

  const makePath = (key: "visitors" | "scans" | "stories") =>
    data.map((d, i) => `${i === 0 ? "M" : "L"}${xScale(i).toFixed(1)},${yScale(d[key]).toFixed(1)}`).join(" ");

  const yTicks = [0, 1000, 2000, 3000, 4000, 5000];

  return (
    <div ref={containerRef} className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-[240px] w-full">
        {/* Grid lines */}
        {yTicks.map((t) => (
          <line key={`grid-${t}`} x1={PAD.left} x2={W - PAD.right} y1={yScale(t)} y2={yScale(t)} stroke="#f0ebe3" strokeWidth={1} />
        ))}
        {/* Y axis labels */}
        {yTicks.map((t) => (
          <text key={`y-${t}`} x={PAD.left - 6} y={yScale(t) + 3} textAnchor="end" fill="#a89279" fontSize={10}>{t >= 1000 ? `${t / 1000}k` : t}</text>
        ))}
        {/* X axis labels */}
        {data.map((d, i) => (
          <text key={`x-${d.day}`} x={xScale(i)} y={H - 8} textAnchor="middle" fill="#a89279" fontSize={10}>{d.day}</text>
        ))}
        {/* Lines */}
        <path d={makePath("scans")} fill="none" stroke="#76593a" strokeWidth={2} />
        <path d={makePath("visitors")} fill="none" stroke="#c9a84c" strokeWidth={2} />
        <path d={makePath("stories")} fill="none" stroke="#e9c349" strokeWidth={2} strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

const hallData = [
  { hall: "Tutankhamun Galleries", visitors: 12840, scans: 38200, avgTime: "18.4 min" },
  { hall: "Grand Hall", visitors: 9230, scans: 24100, avgTime: "12.1 min" },
  { hall: "New Kingdom Hall", visitors: 7620, scans: 19800, avgTime: "15.3 min" },
  { hall: "Royal Statues", visitors: 6410, scans: 16200, avgTime: "11.7 min" },
  { hall: "Old Kingdom Hall", visitors: 5890, scans: 14300, avgTime: "13.2 min" },
  { hall: "Funerary Objects", visitors: 4210, scans: 9800, avgTime: "9.8 min" },
];

const topArtifacts = [
  { name: "Golden Mask of Tutankhamun", scans: 18420, hall: "Tutankhamun Galleries" },
  { name: "Rosetta Stone Replica", scans: 12340, hall: "Grand Hall" },
  { name: "Khafre Enthroned", scans: 8920, hall: "Old Kingdom Hall" },
  { name: "Canopic Jars of Tutankhamun", scans: 7840, hall: "Tutankhamun Galleries" },
  { name: "Colossal Statue of Ramesses II", scans: 6210, hall: "New Kingdom Hall" },
];

const insights = [
  { text: "Tutankhamun Gallery engagement increased 18% this week", type: "positive" },
  { text: "Story completion fell 11% in Old Kingdom Hall — consider refreshing content", type: "warning" },
  { text: "Visitor-only feed posts peaked after 2 PM on weekdays", type: "info" },
  { text: "Virtual traffic from Europe increased 34% after campaign launch", type: "positive" },
  { text: "AR activation in Funerary Objects hall dropped below 15%", type: "warning" },
];

const zoneBars = [
  { zone: "Tutankhamun", value: 92 },
  { zone: "Grand Hall", value: 78 },
  { zone: "New Kingdom", value: 71 },
  { zone: "Royal Statues", value: 64 },
  { zone: "Old Kingdom", value: 58 },
  { zone: "Funerary", value: 42 },
];

export default function Overview() {
  return (
    <div className="space-y-6 max-w-[1400px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#341701] text-[22px]">Grand Egyptian Museum Dashboard</h1>
          <p className="text-[#a89279] text-[13px] mt-0.5">Performance overview for March 2026</p>
        </div>
        <div className="flex gap-2">
          {["Review Top Content", "Export Report", "Promote Exhibit"].map((label) => (
            <button
              key={label}
              className="px-3.5 py-2 bg-white border border-[#e8e0d4] text-[#76593a] text-[12px] rounded-xl hover:bg-[#f7f3ed] transition flex items-center gap-1.5"
            >
              {label === "Export Report" && <Download className="w-3.5 h-3.5" />}
              {label === "Promote Exhibit" && <Megaphone className="w-3.5 h-3.5" />}
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-6 gap-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="bg-white rounded-2xl p-4 border border-[#efe9df]">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#faf5eb] flex items-center justify-center">
                <kpi.icon className="w-[18px] h-[18px] text-[#c9a84c]" />
              </div>
              <span className={`text-[11px] flex items-center gap-0.5 ${kpi.up ? "text-[#4ead6b]" : "text-[#c45c4a]"}`}>
                {kpi.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {kpi.change}
              </span>
            </div>
            <div className="text-[#341701] text-[20px]">{kpi.value}</div>
            <div className="text-[#a89279] text-[11px] mt-0.5">{kpi.label}</div>
          </div>
        ))}
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-2xl p-5 border border-[#efe9df]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#341701] text-[15px]">Engagement Trend</h2>
            <div className="flex gap-4 text-[11px]">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#c9a84c]" />Visitors</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#76593a]" />Scans</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#e9c349]" />Stories</span>
            </div>
          </div>
          <SimpleLineChart data={engagementData} />
        </div>

        {/* Activity by Zone */}
        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4">Activity by Zone</h2>
          <div className="space-y-3">
            {zoneBars.map((z) => (
              <div key={z.zone}>
                <div className="flex justify-between text-[12px] mb-1">
                  <span className="text-[#5a4633]">{z.zone}</span>
                  <span className="text-[#a89279]">{z.value}%</span>
                </div>
                <div className="h-2 bg-[#f5f0e7] rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#c9a84c] to-[#e9c349]" style={{ width: `${z.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insights + Top Artifacts */}
      <div className="grid grid-cols-3 gap-4">
        {/* Key Insights */}
        <div className="col-span-2 bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-[#e9c349]" />
            Key Insights
          </h2>
          <div className="space-y-2.5">
            {insights.map((ins, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 p-3 rounded-xl text-[13px] ${
                  ins.type === "positive" ? "bg-[#f4fbf6] text-[#3a7d4f]" :
                  ins.type === "warning" ? "bg-[#fef9ee] text-[#8b6e2f]" :
                  "bg-[#f7f3ed] text-[#76593a]"
                }`}
              >
                {ins.type === "warning" ? <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" /> : <TrendingUp className="w-4 h-4 shrink-0 mt-0.5" />}
                {ins.text}
              </div>
            ))}
          </div>
        </div>

        {/* Top Artifacts */}
        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4">Top Scanned Artifacts</h2>
          <div className="space-y-3">
            {topArtifacts.map((a, i) => (
              <div key={a.name} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-[#faf5eb] flex items-center justify-center text-[#c9a84c] text-[11px]">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[#341701] text-[13px] truncate">{a.name}</div>
                  <div className="text-[#a89279] text-[11px]">{a.hall}</div>
                </div>
                <span className="text-[#76593a] text-[12px]">{a.scans.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hall Performance Table */}
      <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
        <h2 className="text-[#341701] text-[15px] mb-4">Hall Performance Summary</h2>
        <table className="w-full text-[13px]">
          <thead>
            <tr className="text-[#a89279] text-[11px] uppercase tracking-[1px] border-b border-[#f0ebe3]">
              <th className="text-left pb-3">Hall / Zone</th>
              <th className="text-right pb-3">Visitors</th>
              <th className="text-right pb-3">Scans</th>
              <th className="text-right pb-3">Avg. Time</th>
              <th className="text-right pb-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {hallData.map((h) => (
              <tr key={h.hall} className="border-b border-[#f7f3ed] last:border-0">
                <td className="py-3 text-[#341701]">{h.hall}</td>
                <td className="py-3 text-right text-[#5a4633]">{h.visitors.toLocaleString()}</td>
                <td className="py-3 text-right text-[#5a4633]">{h.scans.toLocaleString()}</td>
                <td className="py-3 text-right text-[#5a4633]">{h.avgTime}</td>
                <td className="py-3 text-right">
                  <button className="text-[#c9a84c] text-[12px] hover:underline flex items-center gap-1 ml-auto">
                    View <ArrowRight className="w-3 h-3" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
