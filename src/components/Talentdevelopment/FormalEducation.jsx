import React from "react";
import { ChevronLeft } from "lucide-react";

export default function FormalEducation({ onBack }) {
  return (
    <div className="w-full space-y-6 text-white">

      {/* ================= HEADER ================= */}
      <div
        className="rounded-[22px] p-6"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
          boxShadow:
            "0px 10px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12)",
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={onBack}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
          >
            <ChevronLeft size={18} />
          </button>
          <h2 className="text-[18px] font-semibold">Formal education</h2>
        </div>

        <p className="text-[13px] text-white/70 max-w-[900px] leading-relaxed">
          This initiative seeks to cultivate the next generation of gaming
          professionals in Abu Dhabi by building a robust higher education
          ecosystem, driven by strategic partnerships with leading local and
          international institutions
        </p>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-12 gap-6">

        {/* ================= LEFT ================= */}
        <div className="col-span-8 space-y-6">

          {/* -------- Key Companies -------- */}
          <GlassCard title="Key companies">
            <div className="grid grid-cols-6 gap-2 text-[11px] text-white/60 mb-2">
              {["Set up internal program", "Prioritize partners", "Engage", "MOU", "Launch & Operate"].map((t) => (
                <div key={t} className="text-center">{t}</div>
              ))}
            </div>

            {[
              { name: "ADU / Rubika", values: ["100%", "100%", "100%", "100%", "0%"] },
              { name: "NYU", values: ["100%", "100%", "50%", "0%", "0%"] },
              { name: "MBZUH", values: ["100%", "100%", "0%", "0%", "0%"] },
            ].map((row) => (
              <div key={row.name} className="grid grid-cols-6 gap-2 items-center mb-2">
                <div className="text-[11px] text-white/80">{row.name}</div>
                {row.values.map((v, i) => (
                  <ProgressPill key={i} value={v} />
                ))}
              </div>
            ))}
          </GlassCard>

          {/* -------- KPIs -------- */}
          <GlassCard title="KPIs">
            <div className="grid grid-cols-3 gap-4">
              <KPICard title="Employed graduates" value="0" percent="0%" target="40" />
              <KPICard title="Students enrolled in HEIs" value="0" percent="0%" target="TBD" />
              <KPICard title="Graduates" value="0" percent="0%" target="TBD" />
            </div>
          </GlassCard>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="col-span-4 space-y-6">

          {/* -------- Owner -------- */}
          <GlassCard>
            <div className="grid grid-cols-2 gap-3">
              <MiniInfo title="Owner" value="AD Gaming" />
              <MiniInfo title="Responsible" value="Marcos Muller" />
            </div>
          </GlassCard>

          {/* -------- Next Steps -------- */}
          <GlassCard title="Next steps">
            <div className="grid grid-cols-4 gap-2 text-[11px] text-white/60 mb-2">
              <div>Activity</div>
              <div>Owner</div>
              <div>Date</div>
              <div>Status</div>
            </div>

            <NextStepRow
              activity="Finalize Agreement"
              owner="AD Gaming"
              date="07/06/25"
              status="In Progress"
            />
            <NextStepRow
              activity="Obtain Scholarship"
              owner="AD Gaming"
              date="07/06/25"
              status="In Progress"
            />
            <NextStepRow
              activity="Obtain Proposal"
              owner="NYU"
              date="07/06/25"
              status="Delayed"
              danger
            />
            <NextStepRow
              activity="Define Concept For Collaboration"
              owner="AD Gaming"
              date="07/06/25"
              status="Not Started"
            />
          </GlassCard>

          {/* -------- Roadblocks -------- */}
          <GlassCard title="Ecosystem roadblocks">
            <p className="text-[12px] text-white/70">
              Limited engagement from NYU, have not shared business case.
            </p>
          </GlassCard>

        </div>
      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

const GlassCard = ({ title, children }) => (
  <div
    className="rounded-[20px] p-4"
    style={{
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
      boxShadow:
        "inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 30px rgba(0,0,0,0.4)",
    }}
  >
    {title && <div className="text-[13px] font-semibold mb-3">{title}</div>}
    {children}
  </div>
);

const ProgressPill = ({ value }) => (
  <div className="h-[20px] rounded-full bg-black/30 flex items-center justify-center text-[10px] text-green-400">
    {value}
  </div>
);

const KPICard = ({ title, value, percent, target }) => (
  <div className="rounded-[16px] p-4 bg-white/5">
    <div className="text-[11px] text-white/60 mb-2">{title}</div>
    <div className="text-[12px] text-green-400 mb-1">
      {value} ({percent})
    </div>
    <div className="text-[11px] text-white/50">2025 target</div>
    <div className="text-[14px] font-semibold">{target}</div>
  </div>
);

const MiniInfo = ({ title, value }) => (
  <div className="rounded-[14px] p-3 bg-white/5">
    <div className="text-[11px] text-white/60">{title}</div>
    <div className="text-[12px] mt-1">{value}</div>
  </div>
);

const NextStepRow = ({ activity, owner, date, status, danger }) => (
  <div className="grid grid-cols-4 gap-2 text-[11px] items-center mb-2">
    <div>{activity}</div>
    <div>{owner}</div>
    <div>{date}</div>
    <div
      className={`rounded-full px-2 py-0.5 text-center ${
        danger ? "bg-red-500/20 text-red-400" : "bg-white/10"
      }`}
    >
      {status}
    </div>
  </div>
);
