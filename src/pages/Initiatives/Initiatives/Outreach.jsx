import React from "react";

export default function Outreach() {
  return (
    <div className="min-h-screen w-full text-white">
      {/* HEADER */}
      <div className="flex items-start gap-4 mb-6">
        <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
          ←
        </button>

        <div className="flex-1 rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10">
          <h2 className="text-lg font-semibold">
            Attract large studios, publishers & Ops
          </h2>
          <p className="text-sm text-white/60 mt-2 max-w-4xl">
            Conduct targeted outreach initiatives to attract major game studios,
            publishers, and game ops centres to establish regional offices in Abu Dhabi.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT CONTENT */}
        <div className="col-span-9 space-y-6">
          {/* KEY COMPANIES */}
          <GlassCard title="Key companies">
            {/* Legend */}
            <div className="flex gap-6 text-xs text-white/60 mb-4">
              <Legend color="bg-white/20" label="Not started" />
              <Legend color="bg-blue-400" label="In progress" />
              <Legend color="bg-green-400" label="Completed" />
              <Legend color="bg-yellow-400" label="Risk of delay" />
              <Legend color="bg-red-400" label="Delayed" />
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead className="bg-white/5">
                  <tr>
                    <th className="p-3 text-left"> </th>
                    <th className="p-3">Shortlist of high priority companies</th>
                    <th className="p-3">Conduct initial outreach</th>
                    <th className="p-3">Build business cases</th>
                    <th className="p-3">Negotiate incentive packages</th>
                    <th className="p-3">Support licensing and setup</th>
                    <th className="p-3">Onboarding</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((row, i) => (
                    <tr key={i} className="border-t border-white/10">
                      <td className="p-3 text-white/70 font-medium">
                        {row.name}
                      </td>
                      {row.steps.map((step, idx) => (
                        <td key={idx} className="p-3 text-center">
                          <StatusPill {...step} />
                          {step.due && (
                            <div className="text-[10px] text-white/40 mt-1">
                              Due by: {step.due}
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>

          {/* KPIS */}
          <GlassCard title="KPIs">
            <h4 className="text-sm text-white/60 mb-3">Main KPI</h4>
            <div className="grid grid-cols-3 gap-4">
              <KpiRing
                title="Large companies in the ecosystem"
                value="0"
                target="2025 target 40"
              />
            </div>

            <h4 className="text-sm text-white/60 mt-6 mb-3">
              Supporting KPIs
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <KpiRing
                title="Total FTEs in large companies"
                value="0"
                target="2025 target TBD"
              />
              <KpiRing
                title="Total incentives paid large companies"
                value="0"
                target="2025 target 0"
              />
            </div>
          </GlassCard>
        </div>

        {/* RIGHT SIDEBAR */}
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
                {nextSteps.map((row, i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="py-2">{row.activity}</td>
                    <td className="text-white/70">{row.owner}</td>
                    <td className="text-white/70">{row.date}</td>
                    <td
                      className={
                        row.status === "In Progress"
                          ? "text-blue-400"
                          : "text-white/60"
                      }
                    >
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>

          <GlassCard title="Ecosystem roadblocks">
            <p className="text-sm text-white/70">
              Net ease business case does not meet requirement criteria.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

/* ---------------- DATA ---------------- */

const companies = [
  {
    name: "Gameloft",
    steps: [
      { status: "completed", value: "100%" },
      { status: "completed", value: "100%" },
      { status: "completed", value: "100%", due: "30/04/25" },
      { status: "completed", value: "100%", due: "15/05/25" },
      { status: "not", value: "0%", due: "10/09/25" },
      { status: "not", value: "0%" },
    ],
  },
  {
    name: "Net Ease",
    steps: [
      { status: "completed", value: "100%" },
      { status: "completed", value: "100%" },
      { status: "delayed", value: "50%", due: "30/06/25" },
      { status: "not", value: "0%", due: "07/07/25" },
      { status: "not", value: "0%", due: "01/12/25" },
      { status: "not", value: "0%" },
    ],
  },
  {
    name: "Take Two",
    steps: [
      { status: "completed", value: "100%" },
      { status: "completed", value: "100%" },
      { status: "not", value: "0%", due: "TBD" },
      { status: "not", value: "0%", due: "TBD" },
      { status: "not", value: "0%", due: "TBD" },
      { status: "not", value: "0%" },
    ],
  },
];

const nextSteps = [
  {
    activity: "Support licensing - Gameloft",
    owner: "AD Gaming",
    date: "07/06/25",
    status: "In Progress",
  },
  {
    activity: "Prepare B.C - take two",
    owner: "ADIO",
    date: "23/07/25",
    status: "Not Started",
  },
  {
    activity: "Negotiate incentives packages",
    owner: "ADIO",
    date: "05/08/25",
    status: "Not Started",
  },
  {
    activity: "Align with ADIO on shortlist",
    owner: "AD Gaming / ADIO",
    date: "07/06/25",
    status: "Not Started",
  },
];

/* ---------------- UI PARTS ---------------- */

function GlassCard({ title, children }) {
  return (
    <div className="rounded-2xl p-5 bg-white/5 backdrop-blur-xl border border-white/10">
      {title && <h3 className="text-sm font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
}

function StatusPill({ status, value }) {
  const map = {
    completed: "bg-green-400/20 text-green-400",
    delayed: "bg-red-400/20 text-red-400",
    progress: "bg-blue-400/20 text-blue-400",
    not: "bg-white/10 text-white/40",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs ${map[status]}`}>
      {value}
    </span>
  );
}

function KpiRing({ title, value, target }) {
  return (
    <div className="rounded-xl p-4 bg-white/5 border border-white/10 relative">
      <p className="text-xs text-white/60">{title}</p>
      <div className="flex items-center gap-4 mt-3">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-sm">
          {value}
        </div>
        <p className="text-xs text-white/40">{target}</p>
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

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full ${color}`} />
      <span>{label}</span>
    </div>
  );
}
