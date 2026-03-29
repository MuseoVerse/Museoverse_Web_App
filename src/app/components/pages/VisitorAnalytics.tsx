import { Users, MapPin, Clock, Repeat } from "lucide-react";
import { SimpleAreaChart, SimpleDonutChart, SimpleBarChart } from "../CustomCharts";

const trendData = [
  { week: "W1", newVisitors: 3200, returning: 1100 },
  { week: "W2", newVisitors: 3800, returning: 1400 },
  { week: "W3", newVisitors: 3500, returning: 1600 },
  { week: "W4", newVisitors: 4200, returning: 1900 },
];

const audienceGeo = [
  { country: "Egypt", pct: 34 },
  { country: "United States", pct: 18 },
  { country: "Germany", pct: 12 },
  { country: "United Kingdom", pct: 9 },
  { country: "France", pct: 8 },
  { country: "Japan", pct: 6 },
  { country: "Others", pct: 13 },
];

const segments = [
  { name: "Tourists", value: 36, color: "#c9a84c" },
  { name: "Students", value: 21, color: "#76593a" },
  { name: "Cultural Enthusiasts", value: 18, color: "#e9c349" },
  { name: "Remote Visitors", value: 13, color: "#a89279" },
  { name: "Other", value: 12, color: "#d8c6ac" },
];

const peakHours = [
  { hour: "8am", value: 120 }, { hour: "9am", value: 340 }, { hour: "10am", value: 580 },
  { hour: "11am", value: 720 }, { hour: "12pm", value: 640 }, { hour: "1pm", value: 510 },
  { hour: "2pm", value: 680 }, { hour: "3pm", value: 790 }, { hour: "4pm", value: 620 },
  { hour: "5pm", value: 380 }, { hour: "6pm", value: 210 },
];

const funnel = [
  { stage: "Discover Museum", value: 48231, pct: 100 },
  { stage: "Open Exhibit", value: 38420, pct: 80 },
  { stage: "Scan Artifact", value: 28100, pct: 58 },
  { stage: "Listen to Story", value: 18400, pct: 38 },
  { stage: "Ask AI", value: 8200, pct: 17 },
  { stage: "Save / Share", value: 5100, pct: 11 },
];

const hallBehavior = [
  { hall: "Tutankhamun Galleries", avgDwell: "18.4 min", bounceRate: "8%", scanRate: "72%", weekday: 1840, weekend: 2210 },
  { hall: "Grand Hall", avgDwell: "12.1 min", bounceRate: "15%", scanRate: "58%", weekday: 1320, weekend: 1680 },
  { hall: "New Kingdom Hall", avgDwell: "15.3 min", bounceRate: "11%", scanRate: "65%", weekday: 1050, weekend: 1340 },
  { hall: "Old Kingdom Hall", avgDwell: "13.2 min", bounceRate: "18%", scanRate: "48%", weekday: 820, weekend: 980 },
  { hall: "Royal Statues", avgDwell: "11.7 min", bounceRate: "14%", scanRate: "54%", weekday: 910, weekend: 1120 },
];

export default function VisitorAnalytics() {
  return (
    <div className="space-y-6 max-w-[1400px]">
      <div>
        <h1 className="text-[#341701] text-[22px]">Visitor Analytics</h1>
        <p className="text-[#a89279] text-[13px] mt-0.5">Understand who uses MuseoVerse at the Grand Egyptian Museum</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { icon: Users, label: "Total Visitors", value: "48,231", sub: "In-museum: 34,120 · Remote: 14,111" },
          { icon: Repeat, label: "Returning Visitors", value: "31%", sub: "14,952 visitors came back" },
          { icon: Clock, label: "Avg. Session Duration", value: "14.2 min", sub: "+2.1 min vs last month" },
          { icon: MapPin, label: "Countries Reached", value: "47", sub: "Top: Egypt, US, Germany" },
        ].map((c) => (
          <div key={c.label} className="bg-white rounded-2xl p-4 border border-[#efe9df]">
            <c.icon className="w-5 h-5 text-[#c9a84c] mb-2" />
            <div className="text-[#341701] text-[20px]">{c.value}</div>
            <div className="text-[#76593a] text-[12px] mt-0.5">{c.label}</div>
            <div className="text-[#a89279] text-[11px] mt-1">{c.sub}</div>
          </div>
        ))}
      </div>

      {/* Trend + Segments */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-2xl p-5 border border-[#efe9df]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[#341701] text-[15px]">New vs Returning Visitors</h2>
            <div className="flex gap-4 text-[11px]">
              <span className="flex items-center gap-1.5 text-[#76593a]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#c9a84c]" />
                New
              </span>
              <span className="flex items-center gap-1.5 text-[#76593a]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#76593a]" />
                Returning
              </span>
            </div>
          </div>
          <SimpleAreaChart
            data={trendData}
            xKey="week"
            height={220}
            series={[
              { key: "newVisitors", stroke: "#c9a84c", fill: "rgba(201,168,76,0.15)", label: "New" },
              { key: "returning", stroke: "#76593a", fill: "rgba(118,89,58,0.1)", label: "Returning" },
            ]}
          />
        </div>
        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-2">Audience Segments</h2>
          <SimpleDonutChart data={segments} innerRadius={40} outerRadius={65} size={160} />
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
            {segments.map((s) => (
              <span key={s.name} className="flex items-center gap-1.5 text-[11px] text-[#5a4633]">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                {s.name} ({s.value}%)
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Peak hours + Geography */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4">Peak Usage Hours</h2>
          <SimpleBarChart
            data={peakHours}
            xKey="hour"
            height={200}
            bars={[{ key: "value", color: "#c9a84c", label: "Active Users" }]}
          />
        </div>
        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4">Audience Geography</h2>
          <div className="space-y-2.5">
            {audienceGeo.map((g) => (
              <div key={g.country} className="flex items-center gap-3">
                <span className="text-[#5a4633] text-[13px] w-[120px]">{g.country}</span>
                <div className="flex-1 h-2 bg-[#f5f0e7] rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#c9a84c] to-[#e9c349]" style={{ width: `${g.pct}%` }} />
                </div>
                <span className="text-[#a89279] text-[12px] w-8 text-right">{g.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visitor Journey Funnel */}
      <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
        <h2 className="text-[#341701] text-[15px] mb-4">Visitor Journey Funnel</h2>
        <div className="flex items-end gap-2">
          {funnel.map((f, i) => (
            <div key={f.stage} className="flex-1 flex flex-col items-center">
              <div className="text-[#341701] text-[14px] mb-1">{f.value.toLocaleString()}</div>
              <div
                className="w-full rounded-t-lg bg-gradient-to-t from-[#c9a84c] to-[#e9c349]"
                style={{ height: `${f.pct * 1.6}px`, opacity: 0.3 + (f.pct / 100) * 0.7 }}
              />
              <div className="text-[#76593a] text-[11px] text-center mt-2 leading-tight">{f.stage}</div>
              <div className="mt-1 min-h-[16px] text-[#a89279] text-[10px]">
                {i < funnel.length - 1 ? `${Math.round((funnel[i + 1].value / f.value) * 100)}%` : ""}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hall Behavior Table */}
      <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
        <h2 className="text-[#341701] text-[15px] mb-4">Hall-by-Hall Visitor Behavior</h2>
        <table className="w-full text-[13px]">
          <thead>
            <tr className="text-[#a89279] text-[11px] uppercase tracking-[1px] border-b border-[#f0ebe3]">
              <th className="text-left pb-3">Hall</th>
              <th className="text-right pb-3">Avg. Dwell</th>
              <th className="text-right pb-3">Bounce Rate</th>
              <th className="text-right pb-3">Scan Rate</th>
              <th className="text-right pb-3">Weekday Avg.</th>
              <th className="text-right pb-3">Weekend Avg.</th>
            </tr>
          </thead>
          <tbody>
            {hallBehavior.map((h) => (
              <tr key={h.hall} className="border-b border-[#f7f3ed] last:border-0">
                <td className="py-3 text-[#341701]">{h.hall}</td>
                <td className="py-3 text-right text-[#5a4633]">{h.avgDwell}</td>
                <td className="py-3 text-right text-[#5a4633]">{h.bounceRate}</td>
                <td className="py-3 text-right text-[#5a4633]">{h.scanRate}</td>
                <td className="py-3 text-right text-[#5a4633]">{h.weekday.toLocaleString()}</td>
                <td className="py-3 text-right text-[#5a4633]">{h.weekend.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
