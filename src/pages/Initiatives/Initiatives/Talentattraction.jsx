import React from "react";

export default function Talentattraction() {
  return (
    <div className="min-h-screen w-full text-white">
      {/* HEADER */}
      <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 mb-6">
        <h2 className="text-lg font-semibold">
          Attract leadership with proven track record / Attract experienced talent
        </h2>
        <p className="text-sm text-white/60 mt-2 max-w-4xl">
          Attract top gaming talent, including leaders with track record through
          strategic recruitment and financial support to accelerate IP development
          and industry growth in Abu Dhabi.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT SECTION */}
        <div className="col-span-9 space-y-6">
          {/* Talent with Proven Track Record */}
          <GlassCard title="Talent with proven track record">
            <div className="flex flex-wrap gap-3">
              {[
                "Identify Priority Talent",
                "Shortlist Targets",
                "Define Integration Mechanism",
                "Negotiate Package",
                "Support Relocation",
              ].map((item, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-1 rounded-full text-xs ${
                    idx === 0
                      ? "bg-white/10"
                      : idx <= 3
                      ? "bg-[#4ade80]/20 text-[#4ade80]"
                      : "bg-white/10"
                  }`}
                >
                  {item} {idx === 1 && "TBD"}
                  {idx === 2 && " Alex Dale"}
                  {idx === 3 && " Michail Katkoff"}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* ATTRACT EXPERIENCED TALENT */}
          <GlassCard title="Attract Experienced talent">
            <div className="overflow-hidden rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead className="bg-white/5">
                  <tr>
                    <th className="p-3 text-left"> </th>
                    <th className="p-3">Define target persona</th>
                    <th className="p-3">Define support partners</th>
                    <th className="p-3">Define selection mechanism</th>
                    <th className="p-3">Promotion of benefit</th>
                    <th className="p-3">Launch & Operate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      label: "Relocation",
                      values: ["100%", "100%", "100%", "100%", "0%"],
                    },
                    {
                      label: "Housing support",
                      values: ["100%", "50%", "50%", "0%", "0%"],
                    },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-white/10">
                      <td className="p-3 text-white/70">{row.label}</td>
                      {row.values.map((val, idx) => (
                        <td key={idx} className="p-3 text-center">
                          <span
                            className={`px-3 py-1 rounded-full text-xs ${
                              val === "100%"
                                ? "bg-[#4ade80]/20 text-[#4ade80]"
                                : val === "50%"
                                ? "bg-[#facc15]/20 text-[#facc15]"
                                : "bg-white/10 text-white/40"
                            }`}
                          >
                            {val}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="flex gap-6 mt-4 text-xs text-white/60">
              <Legend color="bg-white/20" label="Not started" />
              <Legend color="bg-blue-400" label="In progress" />
              <Legend color="bg-green-400" label="Completed" />
              <Legend color="bg-yellow-400" label="Risk of delay" />
              <Legend color="bg-red-400" label="Delayed" />
            </div>
          </GlassCard>

          {/* KPIs */}
          <GlassCard title="KPIs">
            <h4 className="text-sm text-white/60 mb-3">Main KPIs</h4>
            <div className="grid grid-cols-3 gap-4">
              <KpiCard
                title="Talent with proven track record"
                value="0"
                target="2025 target 3"
              />
            </div>

            <h4 className="text-sm text-white/60 mt-6 mb-3">
              Supporting KPIs
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <KpiCard
                title="Total support given (2025, K AED)"
                value="0"
                target="2025 target TBD"
              />
              <KpiCard
                title="Number of relocated talent supported"
                value="0"
                target="2025 target TBD"
              />
            </div>
          </GlassCard>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-3 space-y-6">
          <GlassCard>
            <div className="flex justify-between mb-4">
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
              <tbody className="space-y-2">
                {[
                  ["Negotiate Final Offer - Michail", "AD Gaming", "07/06/25", "In Progress"],
                  ["Finalize Housing Mechanism", "AD Gaming", "23/07/25", "Not Started"],
                  ["Launch Relocation Support", "AD Gaming", "05/08/25", "Delayed"],
                  ["Negotiate With Alex", "AD Gaming", "07/06/25", "Not Started"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/10">
                    {row.map((cell, idx) => (
                      <td
                        key={idx}
                        className={`py-2 ${
                          cell === "Delayed"
                            ? "text-red-400"
                            : cell === "In Progress"
                            ? "text-blue-400"
                            : "text-white/70"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>

          <GlassCard title="Ecosystem roadblocks">
            <p className="text-sm text-white/70">
              Approval of budget for relocation support pending
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function GlassCard({ title, children }) {
  return (
    <div className="rounded-2xl p-5 bg-white/5 backdrop-blur-xl border border-white/10">
      {title && <h3 className="text-sm font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
}

function KpiCard({ title, value, target }) {
  return (
    <div className="rounded-xl p-4 bg-white/5 border border-white/10">
      <p className="text-xs text-white/60">{title}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
      <p className="text-xs text-white/40 mt-1">{target}</p>
    </div>
  );
}

function Tag({ label, value }) {
  return (
    <div className="text-xs">
      <p className="text-white/40">{label}</p>
      <p className="font-medium">{value}</p>
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
