import React from "react";
import { ChevronLeft } from "lucide-react";

export default function Incubation({ onBack }) {
  return (
    <div className="min-h-screen w-full text-white">
      {/* HEADER */}
      <div className="flex items-start gap-4 mb-6">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex-1 rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10">
          <h2 className="text-lg font-semibold">
            Incubation & acceleration programs
          </h2>
          <p className="text-sm text-white/60 mt-2 max-w-4xl">
            Establish three-phase start-up development programs (venture studio,
            incubator, accelerator) to jumpstart talent funnel and create a path
            to bring startups to Abu Dhabi.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="col-span-9 space-y-6">
          {/* VENTURE STUDIO */}
          <PhaseCard
            title="Venture studio"
            badge="NYU"
            progress={[1, 1, 1, 1, 2]}
          />

          {/* INCUBATION */}
          <PhaseCard title="Incubation" progress={[1, 1, 1, 2, 2]} />

          {/* ACCELERATOR */}
          <PhaseCard
            title="Accelerator"
            badge="Helika"
            progress={[1, 1, 1, 1, 2]}
          />

          {/* LEGEND */}
          <div className="flex gap-6 text-xs text-white/60">
            <Legend color="bg-white/20" label="Not started" />
            <Legend color="bg-blue-400" label="In progress" />
            <Legend color="bg-green-400" label="Completed" />
            <Legend color="bg-yellow-400" label="Risk of delay" />
            <Legend color="bg-red-400" label="Delayed" />
          </div>

          {/* KPIS */}
          <GlassCard title="KPIs">
            <h4 className="text-sm text-white/60 mb-3">Main KPIs</h4>

            <KpiRing
              title="Number of companies enrolled"
              value="0"
              target="2025 target 15"
            />

            <h4 className="text-sm text-white/60 mt-6 mb-3">Supporting KPIs</h4>

            <div className="grid grid-cols-2 gap-4">
              <KpiRing
                title="Number of programs launched"
                value="0"
                target="2025 target TBD"
              />
              <KpiRing
                title="Total investment"
                value="0"
                target="2025 target 0"
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
            <p className="text-sm text-white/70">
              NYU delayed in providing business plan for Venture Studio
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

/* ---------------- DATA ---------------- */

const steps = [
  {
    activity: "Helika Business Case",
    owner: "AD Gaming",
    date: "15/07/25",
    status: "In Progress",
  },
  {
    activity: "Define Partnership Details - NYU",
    owner: "AD Gaming",
    date: "23/07/25",
    status: "Not Started",
  },
  {
    activity: "Alignment With Flatlabs",
    owner: "AD Gaming",
    date: "07/09/25",
    status: "Not Started",
  },
];

/* ---------------- UI ---------------- */

function PhaseCard({ title, badge, progress }) {
  const steps = [
    "Identify Partner",
    "Engage",
    "Partnership Agreements",
    "Co-Design Program",
    "Launch & Operate",
  ];

  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">{title}</h3>
        {badge && (
          <span className="px-2 py-0.5 text-xs bg-red-400/20 text-red-400 rounded-full">
            {badge}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {steps.map((step, i) => (
          <span
            key={i}
            className={`px-3 py-1 rounded-full text-xs ${
              progress[i] === 0
                ? "bg-white/10 text-white/40"
                : progress[i] === 1
                  ? "bg-[#facc15]/20 text-[#facc15]"
                  : "bg-green-400/20 text-green-400"
            }`}
          >
            {step}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}

function GlassCard({ title, children }) {
  return (
    <div className="rounded-2xl p-5 bg-white/5 backdrop-blur-xl border border-white/10">
      {title && <h3 className="text-sm font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
}

function KpiRing({ title, value, target }) {
  return (
    <div className="rounded-xl p-4 bg-white/5 border border-white/10">
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

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full ${color}`} />
      <span>{label}</span>
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
