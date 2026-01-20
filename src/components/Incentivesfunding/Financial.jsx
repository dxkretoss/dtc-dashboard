import React from "react";
import { ChevronLeft } from "lucide-react";

export default function Financial({ onBack }) {
  return (
    <div className="min-h-screen w-full text-white">
      {/* HEADER */}
      <div className="flex items-start gap-4 mb-6">
        {/* BACK BUTTON */}
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex-1 rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10">
          <h2 className="text-lg font-semibold">Financial incentives</h2>
          <p className="text-sm text-white/60 mt-2 max-w-4xl">
            Offer leading financial incentives (including salary rebates, user
            acquisition support, and R&amp;D grant) to attract and support the
            growth of gaming companies in the ecosystem.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="col-span-9 space-y-6">
          {/* CHART */}
          <GlassCard title="Total incentives in the ecosystem (Top 10 companies)">
            {/* Legend */}
            <div className="flex gap-6 text-xs text-white/60 mb-4">
              <Legend color="bg-red-500" label="Total salary subsidies" />
              <Legend
                color="bg-orange-400"
                label="User acquisition incentives"
              />
              <Legend color="bg-sky-400" label="R&D Grants" />
            </div>

            {/* Fake chart – pixel matched */}
            <div className="relative h-[260px]">
              {/* line */}
              <div className="absolute top-4 left-0 right-0 h-[2px] bg-white/10" />

              <div className="absolute bottom-0 w-full flex justify-between items-end gap-3 px-2">
                {bars.map((b, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className="relative w-12">
                      <div
                        className="bg-red-500 rounded-t-md"
                        style={{ height: b.salary }}
                      />
                      <div className="bg-orange-400" style={{ height: b.ua }} />
                      <div
                        className="bg-sky-400 rounded-b-md"
                        style={{ height: b.rd }}
                      />
                    </div>
                    <span className="text-[10px] text-white/60 text-center">
                      {b.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* KPIS */}
          <GlassCard title="KPIs">
            <h4 className="text-sm text-white/60 mb-3">Main KPIs</h4>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <KpiSimple
                title="Average cost per FTE (AED)"
                value="60K"
                target="Target: 64K"
                success
              />
              <KpiSimple
                title="% of jobs supported"
                value="40%"
                target="Target: 65%"
                danger
              />
            </div>

            <h4 className="text-sm text-white/60 mb-3">Supporting KPIs</h4>

            <div className="grid grid-cols-3 gap-4">
              <KpiRing
                title="Total salary rebates"
                value="13"
                unit="AED M"
                target="2025 target 50M"
                progress={26}
              />
              <KpiRing
                title="Total user acquisition incentives"
                value="6"
                unit="AED M"
                target="2025 target 24M"
                progress={25}
              />
              <KpiRing
                title="Total R&D Grants"
                value="3.4"
                unit="AED M"
                target="2025 target 6.6M"
                progress={52}
              />
            </div>
          </GlassCard>
        </div>

        {/* RIGHT */}
        <div className="col-span-3 space-y-6">
          <GlassCard>
            <div className="flex justify-between">
              <Tag label="Owner" value="AD Gaming" />
              <Tag label="Responsible" value="BD Director" />
            </div>
          </GlassCard>

          <GlassCard title="Next steps">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-white/60">
                  <th className="pb-2 text-left">Activity</th>
                  <th>Owner</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {steps.map((s, i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="py-2">{s.activity}</td>
                    <td className="text-white/70">{s.owner}</td>
                    <td className="text-white/70">{s.date}</td>
                    <td
                      className={
                        s.status === "In Progress"
                          ? "text-blue-400"
                          : "text-white/60"
                      }
                    >
                      {s.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>

          <GlassCard title="Ecosystem roadblocks">
            <p className="text-sm text-white/70">NA</p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

/* ---------------- DATA ---------------- */

const bars = [
  { name: "Alderaan", salary: 120, ua: 40, rd: 20 },
  { name: "ADIO/ADGM", salary: 160, ua: 60, rd: 30 },
  { name: "Lovelic Studio", salary: 110, ua: 40, rd: 20 },
  { name: "MENA Games", salary: 130, ua: 50, rd: 20 },
  { name: "Yoom", salary: 90, ua: 30, rd: 20 },
  { name: "Pyramedia", salary: 140, ua: 60, rd: 30 },
  { name: "Subtil", salary: 100, ua: 40, rd: 20 },
  { name: "Zeh Media", salary: 120, ua: 50, rd: 20 },
];

const steps = [
  {
    activity: "Half Year Subsidies Report",
    owner: "AD Gaming",
    date: "15/07/25",
    status: "In Progress",
  },
  {
    activity: "Finalize Incentive Agreement",
    owner: "AD Gaming",
    date: "26/08/25",
    status: "Not Started",
  },
  {
    activity: "Assessment of R&D Grant request",
    owner: "AD Gaming",
    date: "07/09/25",
    status: "Not Started",
  },
];

/* ---------------- COMPONENTS ---------------- */

function GlassCard({ title, children }) {
  return (
    <div className="rounded-2xl p-5 bg-white/5 backdrop-blur-xl border border-white/10">
      {title && <h3 className="text-sm font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full ${color}`} />
      <span>{label}</span>
    </div>
  );
}

function KpiSimple({ title, value, target, success, danger }) {
  return (
    <div className="rounded-xl p-4 bg-white/5 border border-white/10">
      <p className="text-xs text-white/60">{title}</p>
      <p
        className={`text-xl font-semibold mt-2 ${
          success ? "text-green-400" : danger ? "text-red-400" : ""
        }`}
      >
        {value}
      </p>
      <p className="text-xs text-white/40 mt-1">{target}</p>
    </div>
  );
}

function KpiRing({ title, value, unit, target, progress }) {
  return (
    <div className="rounded-xl p-4 bg-white/5 border border-white/10">
      <p className="text-xs text-white/60">{title}</p>
      <div className="flex items-center gap-4 mt-3">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-sm"
          style={{
            background: `conic-gradient(#4ade80 ${progress}%, rgba(255,255,255,0.1) 0)`,
          }}
        >
          {value}
        </div>
        <div>
          <p className="text-xs">{unit}</p>
          <p className="text-[10px] text-white/40">{target}</p>
        </div>
      </div>
    </div>
  );
}

function Tag({ label, value }) {
  return (
    <div>
      <p className="text-xs text-white/40">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}
