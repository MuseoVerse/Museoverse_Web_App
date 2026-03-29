import { ScanLine, BookOpen, Eye, MessageCircle, AlertTriangle, Zap, Check } from "lucide-react";
import { SimpleAreaChart } from "../CustomCharts";

const kpis = [
  { label: "Total Scans", value: "124,890", change: "+8.7%", icon: ScanLine },
  { label: "Recognition Success", value: "94.2%", change: "+1.3%", icon: Check },
  { label: "Storytelling Sessions", value: "31,402", change: "+15.2%", icon: BookOpen },
  { label: "Story Completion", value: "72%", change: "-2.1%", warn: true, icon: BookOpen },
  { label: "AR Activations", value: "8,340", change: "+22%", icon: Eye },
  { label: "Ask AI Queries", value: "12,180", change: "+34%", icon: MessageCircle },
];

const scanTrend = [
  { day: "Mar 1", scans: 3200, stories: 890, ar: 210 },
  { day: "Mar 8", scans: 3800, stories: 1050, ar: 280 },
  { day: "Mar 15", scans: 4200, stories: 1200, ar: 340 },
  { day: "Mar 22", scans: 4800, stories: 1380, ar: 390 },
  { day: "Mar 29", scans: 4900, stories: 1450, ar: 420 },
];

const storyStyles = [
  { style: "Narrative History", usage: 42 },
  { style: "Cultural Context", usage: 28 },
  { style: "Scientific Analysis", usage: 18 },
  { style: "Children's Story", usage: 12 },
];

const topQuestions = [
  { question: "Who is this pharaoh?", count: 3420 },
  { question: "What material is this made of?", count: 2810 },
  { question: "How old is this artifact?", count: 2340 },
  { question: "What was the purpose of this object?", count: 1980 },
  { question: "Explain the hieroglyphs on this piece", count: 1650 },
  { question: "How was this artifact discovered?", count: 1420 },
];

const topAIArtifacts = [
  { name: "Golden Mask of Tutankhamun", queries: 2840, avgFollowUp: 3.2 },
  { name: "Rosetta Stone Replica", queries: 1920, avgFollowUp: 2.8 },
  { name: "Colossal Statue of Ramesses II", queries: 1540, avgFollowUp: 2.1 },
  { name: "Canopic Jars", queries: 1120, avgFollowUp: 2.6 },
  { name: "Narmer Palette", queries: 980, avgFollowUp: 3.4 },
];

const funnel = [
  { stage: "Scan", value: 124890 },
  { stage: "Story Start", value: 31402 },
  { stage: "Story Complete", value: 22610 },
  { stage: "Ask AI", value: 12180 },
];

const alerts = [
  { type: "warning", text: "Story completion in Old Kingdom Hall dropped to 48% — content may need refreshing" },
  { type: "warning", text: "AR activation in Funerary Objects hall is only 11% — consider adding AR prompts" },
  { type: "info", text: "Unrecognized artifact rate increased to 5.8% in Monumental Sculpture zone" },
  { type: "warning", text: "Annotation interaction rate for Royal Statues fell below 30%" },
];

export default function StorytellingAR() {
  return (
    <div className="space-y-6 max-w-[1400px]">
      <div>
        <h1 className="text-[#341701] text-[22px]">Storytelling / Scan / AR</h1>
        <p className="text-[#a89279] text-[13px] mt-0.5">Track MuseoVerse's most innovative features</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-6 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white rounded-2xl p-4 border border-[#efe9df]">
            <k.icon className="w-5 h-5 text-[#c9a84c] mb-2" />
            <div className="text-[#341701] text-[20px]">{k.value}</div>
            <div className="text-[#76593a] text-[12px]">{k.label}</div>
            <span className={`text-[11px] ${k.warn ? "text-[#c45c4a]" : "text-[#4ead6b]"}`}>{k.change}</span>
          </div>
        ))}
      </div>

      {/* Trend + Story Styles */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-2xl p-5 border border-[#efe9df]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[#341701] text-[15px]">Scan & Story Trend</h2>
            <div className="flex gap-4 text-[11px]">
              <span className="flex items-center gap-1.5 text-[#76593a]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#c9a84c]" />
                Scans
              </span>
              <span className="flex items-center gap-1.5 text-[#76593a]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#76593a]" />
                Stories
              </span>
              <span className="flex items-center gap-1.5 text-[#76593a]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#e9c349]" />
                AR
              </span>
            </div>
          </div>
          <SimpleAreaChart
            data={scanTrend}
            xKey="day"
            height={280}
            series={[
              { key: "scans", stroke: "#c9a84c", fill: "rgba(201,168,76,0.15)", label: "Scans" },
              { key: "stories", stroke: "#76593a", fill: "rgba(118,89,58,0.1)", label: "Stories" },
              { key: "ar", stroke: "#e9c349", fill: "none", label: "AR", dashed: true },
            ]}
          />
        </div>
        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4">Storytelling Styles</h2>
          <div className="space-y-4">
            {storyStyles.map((s) => (
              <div key={s.style}>
                <div className="flex justify-between text-[12px] mb-1">
                  <span className="text-[#5a4633]">{s.style}</span>
                  <span className="text-[#a89279]">{s.usage}%</span>
                </div>
                <div className="h-2.5 bg-[#f5f0e7] rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#c9a84c] to-[#e9c349]" style={{ width: `${s.usage}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-[#f0ebe3]">
            <div className="text-[#76593a] text-[12px] mb-1">Avg. Session Duration</div>
            <div className="text-[#341701] text-[20px]">3.8 min</div>
            <div className="text-[#a89279] text-[11px]">Annotation interaction: 47%</div>
          </div>
        </div>
      </div>

      {/* Funnel */}
      <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
        <h2 className="text-[#341701] text-[15px] mb-4">Scan → Story → AI Funnel</h2>
        <div className="flex items-center gap-3">
          {funnel.map((f, i) => (
            <div key={f.stage} className="flex items-center gap-3 flex-1">
              <div className="flex-1 bg-[#faf5eb] rounded-xl p-4 text-center">
                <div className="text-[#341701] text-[18px]">{f.value.toLocaleString()}</div>
                <div className="text-[#76593a] text-[12px]">{f.stage}</div>
                {i > 0 && (
                  <div className="text-[#a89279] text-[11px] mt-1">
                    {Math.round((f.value / funnel[i - 1].value) * 100)}% conversion
                  </div>
                )}
              </div>
              {i < funnel.length - 1 && <Zap className="w-4 h-4 text-[#c9a84c] shrink-0" />}
            </div>
          ))}
        </div>
      </div>

      {/* Questions + AI Artifacts + Alerts */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4">Most Asked Questions</h2>
          <div className="space-y-2.5">
            {topQuestions.map((q, i) => (
              <div key={q.question} className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#faf8f3]">
                <span className="w-5 h-5 rounded bg-[#faf5eb] flex items-center justify-center text-[#c9a84c] text-[10px] shrink-0 mt-0.5">{i + 1}</span>
                <div className="flex-1">
                  <div className="text-[#341701] text-[12px]">"{q.question}"</div>
                  <div className="text-[#a89279] text-[11px]">{q.count.toLocaleString()} queries</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4">Top Artifacts by AI Interaction</h2>
          <div className="space-y-3">
            {topAIArtifacts.map((a) => (
              <div key={a.name} className="p-3 bg-[#faf8f3] rounded-xl">
                <div className="text-[#341701] text-[13px]">{a.name}</div>
                <div className="flex gap-4 mt-1 text-[11px] text-[#a89279]">
                  <span>{a.queries.toLocaleString()} queries</span>
                  <span>{a.avgFollowUp} avg. follow-ups</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#c45c4a]" />
            Alerts & Actions
          </h2>
          <div className="space-y-2.5">
            {alerts.map((a, i) => (
              <div key={i} className={`p-3 rounded-xl text-[12px] ${a.type === "warning" ? "bg-[#fef9ee] text-[#8b6e2f]" : "bg-[#f7f3ed] text-[#76593a]"}`}>
                {a.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
