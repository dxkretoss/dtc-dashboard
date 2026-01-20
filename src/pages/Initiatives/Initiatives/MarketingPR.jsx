import React from "react";

export default function MarketingPR() {
  return (
    <div className="min-h-screen w-full text-white">
      {/* HEADER */}
      <div className="flex items-start gap-4 mb-6">
        <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
          ←
        </button>

        <div className="flex-1 rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10">
          <h2 className="text-lg font-semibold">
            Video games marketing & PR program
          </h2>
          <p className="text-sm text-white/60 mt-2 max-w-4xl">
            Run targeted marketing and PR to raise awareness of gaming careers,
            promote Abu Dhabi’s gaming strengths globally and build its brand as
            a regional hub.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-12 gap-6">
        {/* MAIN KPI */}
        <GlassCard className="col-span-4" title="Main KPI">
          <p className="text-xs text-white/60 mb-4">
            Advertising equivalent value <span className="block">2025, AED</span>
          </p>

          <div className="flex justify-center mt-6">
            <div className="w-40 h-40 rounded-full bg-white/5 border border-white/10 flex flex-col items-center justify-center">
              <span className="text-xs text-white/40">2025 target</span>
              <span className="text-lg font-semibold mt-1">N/A</span>
            </div>
          </div>

          <p className="text-xs text-green-400 text-center mt-4">
            0 (0%)
          </p>
        </GlassCard>

        {/* SOCIAL */}
        <GlassCard className="col-span-4" title="Social">
          <KpiBar
            label="Social media followers (2025, thousands)"
            left="12"
            right="12"
            max="24"
          />

          <KpiBar
            label="Impressions (2025, Millions)"
            left="TBD"
            right="TBD"
            max="3"
          />

          <KpiBar
            label="Engagement rate (2025, %)"
            left="TBD"
            right="TBD"
            max="TBD"
          />

          <KpiBar
            label="Share of voice (2025, %)"
            left="TBD"
            right="TBD"
            max="TBD"
          />
        </GlassCard>

        {/* PR */}
        <GlassCard className="col-span-4" title="PR">
          <KpiBar
            label="PR mentions (2025)"
            left="TBD"
            right="TBD"
            max="1,000"
          />

          <KpiBar
            label="Reach (2025, Millions)"
            left="TBD"
            right="TBD"
            max="150"
          />

          {/* SENTIMENT */}
          <div className="mt-6">
            <p className="text-xs text-white/60 mb-3">
              Sentiment analysis (2025, %)
            </p>

            <div className="flex justify-center">
              <div className="relative w-32 h-32 rounded-full">
                <div className="absolute inset-0 rounded-full border-[12px] border-green-400 rotate-[120deg] border-b-yellow-400 border-r-red-400"></div>
                <div className="absolute inset-6 rounded-full bg-[#07131D]"></div>

                <div className="absolute inset-0 flex items-center justify-center text-xs">
                  <div className="flex gap-2">
                    <span className="text-green-400">33%</span>
                    <span className="text-yellow-400">33%</span>
                    <span className="text-red-400">33%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MESSAGE PENETRATION */}
          <div className="mt-6">
            <p className="text-xs text-white/60 mb-2">
              Message penetration (2025, %)
            </p>

            <div className="relative h-16 overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-8 rounded-t-full bg-white/10" />
              <div className="absolute inset-x-0 bottom-0 h-8 w-[80%] rounded-t-full bg-gradient-to-r from-indigo-500 to-indigo-600" />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs">
                Target: 80%
              </span>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function GlassCard({ title, children, className = "" }) {
  return (
    <div
      className={`rounded-2xl p-5 bg-white/5 backdrop-blur-xl border border-white/10 ${className}`}
    >
      {title && <h3 className="text-sm font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
}

function KpiBar({ label, left, right, max }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs text-white/60 mb-2">
        <span>{label}</span>
        <span>{max}</span>
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
