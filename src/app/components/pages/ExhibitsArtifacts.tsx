import { ArrowRight, TrendingUp, TrendingDown, AlertTriangle, Star } from "lucide-react";
import { useState } from "react";

import AppDropdown from "../AppDropdown";
import { SimpleBarChart } from "../CustomCharts";

const topExhibits = [
  { name: "Tutankhamun Galleries", scans: 38200, stories: 12400, completion: 82, avgTime: "18.4 min", saves: 4200, shares: 2100, trend: 18 },
  { name: "Grand Hall", scans: 24100, stories: 8900, completion: 76, avgTime: "12.1 min", saves: 2800, shares: 1400, trend: 5 },
  { name: "New Kingdom Hall", scans: 19800, stories: 7200, completion: 71, avgTime: "15.3 min", saves: 2100, shares: 980, trend: 12 },
  { name: "Royal Statues", scans: 16200, stories: 5800, completion: 68, avgTime: "11.7 min", saves: 1600, shares: 720, trend: -3 },
  { name: "Old Kingdom Hall", scans: 14300, stories: 4100, completion: 54, avgTime: "13.2 min", saves: 980, shares: 410, trend: -11 },
  { name: "Funerary Objects", scans: 9800, stories: 2800, completion: 48, avgTime: "9.8 min", saves: 620, shares: 280, trend: -8 },
  { name: "Monumental Sculpture", scans: 8400, stories: 3100, completion: 62, avgTime: "10.5 min", saves: 840, shares: 390, trend: 2 },
];

const topArtifacts = [
  { name: "Golden Mask of Tutankhamun", hall: "Tutankhamun Galleries", scans: 18420, storyCompletion: 91, avgTime: "4.2 min", saves: 3100 },
  { name: "Colossal Statue of Ramesses II", hall: "New Kingdom Hall", scans: 12340, storyCompletion: 78, avgTime: "3.1 min", saves: 1800 },
  { name: "Khafre Enthroned", hall: "Old Kingdom Hall", scans: 8920, storyCompletion: 72, avgTime: "2.8 min", saves: 1200 },
  { name: "Canopic Jars of Tutankhamun", hall: "Tutankhamun Galleries", scans: 7840, storyCompletion: 85, avgTime: "3.6 min", saves: 980 },
  { name: "Narmer Palette", hall: "Old Kingdom Hall", scans: 6210, storyCompletion: 68, avgTime: "2.5 min", saves: 720 },
  { name: "Wooden Model Boats", hall: "Funerary Objects", scans: 4120, storyCompletion: 44, avgTime: "1.8 min", saves: 310 },
  { name: "Hatshepsut Sphinx", hall: "New Kingdom Hall", scans: 3890, storyCompletion: 71, avgTime: "2.4 min", saves: 580 },
  { name: "Book of the Dead Papyrus", hall: "Funerary Objects", scans: 3210, storyCompletion: 52, avgTime: "2.1 min", saves: 420 },
];

const comparisonData = [
  { name: "Tutankhamun", scans: 38200, stories: 12400 },
  { name: "Grand Hall", scans: 24100, stories: 8900 },
  { name: "New Kingdom", scans: 19800, stories: 7200 },
  { name: "Royal Statues", scans: 16200, stories: 5800 },
  { name: "Old Kingdom", scans: 14300, stories: 4100 },
  { name: "Funerary", scans: 9800, stories: 2800 },
];

const underperforming = [
  { artifact: "Wooden Model Boats", hall: "Funerary Objects", issue: "44% story completion", action: "Improve storytelling depth" },
  { artifact: "Book of the Dead Papyrus", hall: "Funerary Objects", issue: "52% story completion", action: "Strengthen annotations" },
  { artifact: "Alabaster Canopic Chest", hall: "Old Kingdom Hall", issue: "Low scan rate", action: "Feature in recommendations" },
  { artifact: "Limestone Relief Fragment", hall: "Grand Hall", issue: "1.2 min avg time", action: "Promote in museum feed" },
];

const hallFilterOptions = ["All Halls", "Tutankhamun Galleries", "Grand Hall", "Old Kingdom Hall"];
const eraFilterOptions = ["All Eras", "Old Kingdom", "New Kingdom", "Late Period"];
const typeFilterOptions = ["All Types", "Sculpture", "Funerary", "Relief"];

export default function ExhibitsArtifacts() {
  const [selectedHall, setSelectedHall] = useState("All Halls");
  const [selectedEra, setSelectedEra] = useState("All Eras");
  const [selectedType, setSelectedType] = useState("All Types");

  return (
    <div className="space-y-6 max-w-[1400px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#341701] text-[22px]">Exhibits & Artifacts</h1>
          <p className="text-[#a89279] text-[13px] mt-0.5">Performance across all halls and collections</p>
        </div>
        <div className="flex gap-2">
          <AppDropdown
            value={selectedHall}
            options={hallFilterOptions}
            onValueChange={setSelectedHall}
          />
          <AppDropdown
            value={selectedEra}
            options={eraFilterOptions}
            onValueChange={setSelectedEra}
          />
          <AppDropdown
            value={selectedType}
            options={typeFilterOptions}
            onValueChange={setSelectedType}
          />
        </div>
      </div>

      {/* Exhibit Comparison */}
      <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[#341701] text-[15px]">Exhibit Comparison</h2>
          <div className="flex gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 text-[#76593a]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#c9a84c]" />
              Scans
            </span>
            <span className="flex items-center gap-1.5 text-[#76593a]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#76593a]" />
              Story Starts
            </span>
          </div>
        </div>
        <SimpleBarChart
          data={comparisonData}
          xKey="name"
          height={220}
          bars={[
            { key: "scans", color: "#c9a84c", label: "Scans" },
            { key: "stories", color: "#76593a", label: "Story Starts" },
          ]}
        />
      </div>

      {/* Exhibit Performance Table */}
      <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
        <h2 className="text-[#341701] text-[15px] mb-4">Exhibit Performance</h2>
        <table className="w-full text-[13px]">
          <thead>
            <tr className="text-[#a89279] text-[11px] uppercase tracking-[1px] border-b border-[#f0ebe3]">
              <th className="text-left pb-3">Exhibit</th>
              <th className="text-right pb-3">Scans</th>
              <th className="text-right pb-3">Stories</th>
              <th className="text-right pb-3">Completion</th>
              <th className="text-right pb-3">Avg. Time</th>
              <th className="text-right pb-3">Saves</th>
              <th className="text-right pb-3">Shares</th>
              <th className="text-right pb-3">Trend</th>
            </tr>
          </thead>
          <tbody>
            {topExhibits.map((e) => (
              <tr key={e.name} className="border-b border-[#f7f3ed] last:border-0">
                <td className="py-3 text-[#341701]">{e.name}</td>
                <td className="py-3 text-right text-[#5a4633]">{e.scans.toLocaleString()}</td>
                <td className="py-3 text-right text-[#5a4633]">{e.stories.toLocaleString()}</td>
                <td className="py-3 text-right">
                  <span className={`${e.completion >= 70 ? "text-[#4ead6b]" : e.completion >= 55 ? "text-[#c9a84c]" : "text-[#c45c4a]"}`}>
                    {e.completion}%
                  </span>
                </td>
                <td className="py-3 text-right text-[#5a4633]">{e.avgTime}</td>
                <td className="py-3 text-right text-[#5a4633]">{e.saves.toLocaleString()}</td>
                <td className="py-3 text-right text-[#5a4633]">{e.shares.toLocaleString()}</td>
                <td className="py-3 text-right">
                  <span className={`flex items-center gap-0.5 justify-end text-[12px] ${e.trend >= 0 ? "text-[#4ead6b]" : "text-[#c45c4a]"}`}>
                    {e.trend >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {e.trend >= 0 ? "+" : ""}{e.trend}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Top Artifacts + Underperforming */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4">Top Scanned Artifacts</h2>
          <div className="space-y-2">
            {topArtifacts.map((a, i) => (
              <div key={a.name} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#faf8f3] transition">
                <span className="w-7 h-7 rounded-lg bg-[#faf5eb] flex items-center justify-center text-[#c9a84c] text-[12px] shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[#341701] text-[13px]">{a.name}</div>
                  <div className="text-[#a89279] text-[11px]">{a.hall}</div>
                </div>
                <div className="text-right text-[12px] text-[#5a4633] space-y-0.5">
                  <div>{a.scans.toLocaleString()} scans</div>
                  <div className="text-[#a89279] text-[11px]">{a.storyCompletion}% completion</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#c45c4a]" />
            Needs Attention
          </h2>
          <div className="space-y-3">
            {underperforming.map((u) => (
              <div key={u.artifact} className="p-3 bg-[#fef9ee] rounded-xl">
                <div className="text-[#341701] text-[13px]">{u.artifact}</div>
                <div className="text-[#a89279] text-[11px]">{u.hall} · {u.issue}</div>
                <button className="text-[#c9a84c] text-[11px] mt-1.5 flex items-center gap-1 hover:underline">
                  {u.action} <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
