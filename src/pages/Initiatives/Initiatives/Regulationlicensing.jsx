import React from "react";

export default function Regulationlicensing() {
  return (
    <div className="min-h-screen w-full text-white">
      {/* HEADER */}
      <div className="flex items-start gap-4 mb-6">
        <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
          ←
        </button>

        <div className="flex-1 rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10">
          <h2 className="text-lg font-semibold">
            Ecosystem experience and quality of life
          </h2>
          <p className="text-sm text-white/60 mt-2 max-w-4xl">
            Implement an agile regulatory framework that streamlines the setup of
            video game companies and launch a CX improvement program to address
            pain points and define best practices with feedback loops.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="col-span-9 space-y-6">
          {/* CEX PROGRAM */}
          <GlassCard title="CEX program">
            <div className="flex gap-2">
              {[
                "Diagnose Pain Points",
                "Define CEX Initiatives",
                "Launch & Operate",
                "Launch & Operate",
              ].map((step, i) => (
                <span
                  key={i}
                  className={`px-4 py-1 rounded-full text-xs ${
                    i < 3
                      ? "bg-[#facc15]/20 text-[#facc15]"
                      : "bg-green-400/20 text-green-400"
                  }`}
                >
                  {step}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* SLA WITH AGENCIES */}
          <GlassCard title="SLAs with agencies">
            <LegendRow />

            <div className="overflow-hidden rounded-xl border border-white/10 mt-4">
              <table className="w-full text-sm">
                <thead className="bg-white/5">
                  <tr>
                    <th className="p-3 text-left"></th>
                    <th className="p-3">Map Customer Journey</th>
                    <th className="p-3">Identify Processes</th>
                    <th className="p-3">Negotiate SLAs</th>
                    <th className="p-3">Define SLA Governance</th>
                    <th className="p-3">Launch Feedback Tool</th>
                  </tr>
                </thead>
                <tbody>
                  {agencies.map((agency, i) => (
                    <tr key={i} className="border-t border-white/10">
                      <td className="p-3 font-medium text-white/70">
                        {agency.name}
                      </td>
                      {agency.steps.map((step, idx) => (
                        <td key={idx} className="p-3 text-center">
                          <StatusPill {...step} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>

          {/* KPIs */}
          <GlassCard title="KPIs">
            <h4 className="text-sm text-white/60 mb-3">Main KPIs</h4>
            <KpiBar
              title="Net promoter score"
              target="Target: 40"
              left="TBD"
              right="TBD"
            />

            <h4 className="text-sm text-white/60 mt-6 mb-3">
              Supporting KPIs
            </h4>

            <div className="grid grid-cols-2 gap-4">
              <KpiRing
                title="Avg. time for company setup"
                subtitle="Target: 2 months"
                target="2025 target TBD"
              />
              <KpiBar
                title="Customer satisfaction score (2025, %)"
                target="Target: 70%"
                left="TBD"
                right="TBD"
              />
            </div>
          </GlassCard>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-3 space-y-6">
          <GlassCard>
            <div className="flex justify-between">
              <Tag label="Owner" value="AD Gaming" />
              <Tag label="Responsible" value="Marcos Müller" />
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
                {nextSteps.map((step, i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="py-2">{step.activity}</td>
                    <td className="text-white/70">{step.owner}</td>
                    <td className="text-white/70">{step.date}</td>
                    <td
                      className={
                        step.status === "Paused"
                          ? "text-yellow-400"
                          : "text-red-400"
                      }
                    >
                      {step.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>

          <GlassCard title="Ecosystem roadblocks">
            <p className="text-sm text-white/70">
              Collaboration from all Abu Dhabi Incs. for SLA definition and
              adherence.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

/* ---------------- DATA ---------------- */

const agencies = [
  {
    name: "Abu Dhabi Government",
    steps: [
      { status: "completed", value: "100%" },
      { status: "delayed", value: "50%" },
      { status: "not", value: "0%" },
      { status: "not", value: "0%" },
      { status: "not", value: "0%" },
    ],
  },
  {
    name: "ADGM",
    steps: [
      { status: "not", value: "0%" },
      { status: "not", value: "0%" },
      { status: "not", value: "0%" },
      { status: "not", value: "0%" },
      { status: "not", value: "0%" },
    ],
  },
  {
    name: "Masdar City",
    steps: [
      { status: "not", value: "0%" },
      { status: "not", value: "0%" },
      { status: "not", value: "0%" },
      { status: "not", value: "0%" },
      { status: "not", value: "0%" },
    ],
  },
  {
    name: "twofour54",
    steps: [
      { status: "not", value: "0%" },
      { status: "not", value: "0%" },
      { status: "not", value: "0%" },
      { status: "not", value: "0%" },
      { status: "not", value: "0%" },
    ],
  },
];

const nextSteps = [
  {
    activity: "Identify Painpoints",
    owner: "AD Gaming",
    date: "30/05/25",
    status: "Not Started",
  },
  {
    activity: "Define Initiatives",
    owner: "AD Gaming",
    date: "30/05/25",
    status: "Not Started",
  },
  {
    activity: "Continue SLA Discussion With CMA",
    owner: "AD Gaming",
    date: "TBD",
    status: "Paused",
  },
];

/* ---------------- UI COMPONENTS ---------------- */

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

function LegendRow() {
  return (
    <div className="flex gap-6 text-xs text-white/60">
      <Legend color="bg-white/20" label="Not started" />
      <Legend color="bg-blue-400" label="In progress" />
      <Legend color="bg-green-400" label="Completed" />
      <Legend color="bg-yellow-400" label="Risk of delay" />
      <Legend color="bg-red-400" label="Delayed" />
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

function KpiRing({ title, subtitle, target }) {
  return (
    <div className="rounded-xl p-4 bg-white/5 border border-white/10">
      <p className="text-xs text-white/60">{title}</p>
      {subtitle && (
        <p className="text-xs text-green-400 mt-1">{subtitle}</p>
      )}
      <div className="flex items-center gap-4 mt-3">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-sm">
          0
        </div>
        <p className="text-xs text-white/40">{target}</p>
      </div>
    </div>
  );
}

function KpiBar({ title, target, left, right }) {
  return (
    <div className="rounded-xl p-4 bg-white/5 border border-white/10 mb-4">
      <div className="flex justify-between text-xs text-white/60 mb-2">
        <span>{title}</span>
        <span>{target}</span>
      </div>
      <div className="h-6 rounded-full bg-white/10 overflow-hidden flex">
        <div className="w-1/2 bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-xs">
          {left}
        </div>
        <div className="w-1/2 flex items-center justify-center text-xs text-white/40">
          {right}
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
