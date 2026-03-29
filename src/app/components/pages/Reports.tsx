import { FileText, Download, Calendar, Clock, Mail } from "lucide-react";
import { useState } from "react";

import AppDropdown from "../AppDropdown";

const templates = [
  { name: "Executive Summary", description: "High-level overview of museum performance on MuseoVerse", icon: "📊", lastGenerated: "Mar 25, 2026" },
  { name: "Exhibit Performance", description: "Detailed scan, storytelling, and engagement metrics by exhibit and artifact", icon: "🏛️", lastGenerated: "Mar 22, 2026" },
  { name: "Storytelling & AR Report", description: "Scan recognition, story completion, AR activation, and AI usage analysis", icon: "📖", lastGenerated: "Mar 20, 2026" },
  { name: "Social Engagement Report", description: "User-generated content, sentiment analysis, and community highlights", icon: "💬", lastGenerated: "Mar 18, 2026" },
  { name: "Virtual Tour Report", description: "Remote visitor analytics, tour completion, and geographic reach", icon: "🌍", lastGenerated: "Mar 15, 2026" },
  { name: "Visitor Behavior Report", description: "Journey funnels, dwell time, peak hours, and audience segments", icon: "👥", lastGenerated: "Mar 12, 2026" },
];

const recentExports = [
  { name: "Executive Summary — March 2026", format: "PDF", date: "Mar 25, 2026", size: "2.4 MB" },
  { name: "Exhibit Performance — Q1 2026", format: "PDF", date: "Mar 22, 2026", size: "4.1 MB" },
  { name: "Storytelling Data Export", format: "CSV", date: "Mar 20, 2026", size: "1.8 MB" },
  { name: "Social Engagement — February 2026", format: "PDF", date: "Feb 28, 2026", size: "3.2 MB" },
  { name: "Virtual Tour Raw Data", format: "CSV", date: "Feb 15, 2026", size: "890 KB" },
];

const scheduledReports = [
  { name: "Weekly Executive Summary", frequency: "Every Monday", recipient: "dr.hassan@gem.gov.eg", nextRun: "Mar 31" },
  { name: "Monthly Exhibit Performance", frequency: "1st of each month", recipient: "analytics@gem.gov.eg", nextRun: "Apr 1" },
  { name: "Quarterly Board Report", frequency: "Every quarter", recipient: "board@gem.gov.eg", nextRun: "Apr 1" },
];

const reportRangeOptions = ["Custom Date Range", "Last 7 Days", "Last 30 Days", "Last Quarter", "Year to Date"];

export default function Reports() {
  const [selectedRange, setSelectedRange] = useState("Custom Date Range");

  return (
    <div className="space-y-6 max-w-[1400px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#341701] text-[22px]">Reports</h1>
          <p className="text-[#a89279] text-[13px] mt-0.5">Generate, export, and schedule performance reports</p>
        </div>
        <div className="flex gap-2">
          <AppDropdown
            value={selectedRange}
            options={reportRangeOptions}
            onValueChange={setSelectedRange}
          />
          <button className="px-4 py-2 bg-[#341701] text-white text-[12px] rounded-xl hover:bg-[#4a2a10] transition flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5" /> Generate Report
          </button>
        </div>
      </div>

      {/* Report Templates */}
      <div>
        <h2 className="text-[#341701] text-[15px] mb-4">Report Templates</h2>
        <div className="grid grid-cols-3 gap-4">
          {templates.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-5 border border-[#efe9df] hover:border-[#c9a84c] transition cursor-pointer group">
              <div className="text-[24px] mb-3">{t.icon}</div>
              <div className="text-[#341701] text-[14px] mb-1">{t.name}</div>
              <p className="text-[#a89279] text-[12px] mb-3">{t.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-[#a89279] text-[11px]">Last: {t.lastGenerated}</span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button className="px-2.5 py-1 bg-[#faf5eb] text-[#c9a84c] text-[11px] rounded-lg">PDF</button>
                  <button className="px-2.5 py-1 bg-[#faf5eb] text-[#c9a84c] text-[11px] rounded-lg">CSV</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Exports + Scheduled */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4">Recent Exports</h2>
          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-[#a89279] text-[11px] uppercase tracking-[1px] border-b border-[#f0ebe3]">
                <th className="text-left pb-3">Report</th>
                <th className="text-left pb-3">Format</th>
                <th className="text-left pb-3">Date</th>
                <th className="text-right pb-3">Size</th>
                <th className="text-right pb-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentExports.map((e) => (
                <tr key={e.name} className="border-b border-[#f7f3ed] last:border-0">
                  <td className="py-3 text-[#341701]">{e.name}</td>
                  <td className="py-3">
                    <span className="bg-[#faf5eb] text-[#c9a84c] text-[10px] px-2 py-0.5 rounded-full">{e.format}</span>
                  </td>
                  <td className="py-3 text-[#a89279]">{e.date}</td>
                  <td className="py-3 text-right text-[#a89279]">{e.size}</td>
                  <td className="py-3 text-right">
                    <button className="text-[#c9a84c] hover:underline flex items-center gap-1 ml-auto text-[12px]">
                      <Download className="w-3 h-3" /> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#c9a84c]" />
            Scheduled Reports
          </h2>
          <div className="space-y-3">
            {scheduledReports.map((s) => (
              <div key={s.name} className="p-3 bg-[#faf8f3] rounded-xl">
                <div className="text-[#341701] text-[13px]">{s.name}</div>
                <div className="text-[#a89279] text-[11px] mt-0.5">{s.frequency}</div>
                <div className="flex items-center gap-1 text-[11px] text-[#a89279] mt-1">
                  <Mail className="w-3 h-3" /> {s.recipient}
                </div>
                <div className="text-[#76593a] text-[11px] mt-1">Next: {s.nextRun}</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-3 px-3 py-2 bg-[#faf5eb] text-[#c9a84c] text-[12px] rounded-xl hover:bg-[#f5eedd] transition">
            + Schedule Report
          </button>
        </div>
      </div>
    </div>
  );
}
