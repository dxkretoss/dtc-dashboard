import React from "react";
import { ChevronLeft } from "lucide-react";

export default function SpecializedSkills({ onBack }) {
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
          <h2 className="text-[18px] font-semibold">
            Specialized skills program
          </h2>
        </div>

        <p className="text-[13px] text-white/70 max-w-[900px] leading-relaxed">
          Develop specialized, hands-on vocational and upskilling programs in
          emerging technologies, engines, and AI for game development with
          certificates to boost employability
        </p>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-12 gap-6">

        {/* ================= LEFT ================= */}
        <div className="col-span-8 space-y-6">

          {/* -------- Key companies -------- */}
          <GlassCard title="Key companies">
            <KeyCompaniesTable />
          </GlassCard>

          {/* -------- KPIs -------- */}
          <GlassCard title="KPIs">
            <div className="mb-4 text-[11px] text-white/60 flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#3BAB78]" /> Completed
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-white/30" />
                Gap bet. actual and monthly target
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <CircularKPICard
                title="Partnerships with engines"
                value="1"
                percent="100%"
                target="1"
              />
              <CircularKPICard
                title="Certifications issued"
                value="0"
                percent="0%"
                target="TBD"
              />
              <CircularKPICard
                title="Engine credits used"
                value="0"
                percent="0%"
                target="TBD"
              />
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

          {/* -------- Next steps -------- */}
          <GlassCard title="Next steps">
            <div className="grid grid-cols-4 gap-2 text-[11px] text-white/60 mb-2">
              <div>Activity</div>
              <div>Owner</div>
              <div>Date</div>
              <div>Status</div>
            </div>

            <NextStepRow
              activity="Approval Unity Process Revamp"
              owner="AD Gaming / GDCT"
              date="TBD"
              status="Risk Of Delay"
              warn
            />
            <NextStepRow
              activity="Propose Alternative Deal To Epic"
              owner="AD Gaming"
              date="TBD"
              status="Delayed"
              danger
            />
            <NextStepRow
              activity="Obtain Legal Approval For 42 MOU"
              owner="DCT Legal"
              date="31/07"
              status="Delayed"
              danger
            />
          </GlassCard>

          {/* -------- Roadblocks -------- */}
          <GlassCard title="Ecosystem roadblocks">
            <p className="text-[12px] text-white/70">N/A</p>
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

const KeyCompaniesTable = () => {
  const headers = [
    "Set up internal program",
    "Prioritize partners",
    "Engage",
    "MOU",
    "Launch & Operate",
  ];

  const rows = [
    {
      name: "Unity",
      values: ["100%", "100%", "100%", "100%", "100%"],
    },
    {
      name: "Unreal / EPIC",
      values: ["100%", "100%", "50%", "0%", "0%"],
    },
    {
      name: "42",
      values: ["100%", "100%", "100%", "60%", "0%"],
    },
  ];

  return (
    <>
      <div className="grid grid-cols-6 gap-2 text-[11px] text-white/60 mb-2">
        <div />
        {headers.map((h) => (
          <div key={h} className="text-center">{h}</div>
        ))}
      </div>

      {rows.map((r) => (
        <div
          key={r.name}
          className="grid grid-cols-6 gap-2 items-center mb-2"
        >
          <div className="text-[11px] text-white/80">{r.name}</div>
          {r.values.map((v, i) => (
            <ProgressPill key={i} value={v} />
          ))}
        </div>
      ))}
    </>
  );
};

const ProgressPill = ({ value }) => (
  <div
    className={`h-[20px] rounded-full flex items-center justify-center text-[10px]
      ${
        value === "100%"
          ? "bg-[#3BAB78]/30 text-[#3BAB78]"
          : value === "60%" || value === "50%"
          ? "bg-[#FFA000]/30 text-[#FFA000]"
          : "bg-white/10 text-white/40"
      }`}
  >
    {value}
  </div>
);

const CircularKPICard = ({ title, value, percent, target }) => (
  <div className="rounded-[16px] p-4 bg-white/5 flex justify-between items-center">
    <div>
      <div className="text-[11px] text-white/60 mb-1">{title}</div>
      <div className="text-[12px] text-[#3BAB78]">
        {value} ({percent})
      </div>
    </div>

    <div className="w-[72px] h-[72px] rounded-full border-[6px] border-[#3BAB78]/60 flex items-center justify-center text-[11px]">
      <div className="text-center">
        <div className="text-white/60">2025</div>
        <div className="font-semibold">{target}</div>
      </div>
    </div>
  </div>
);

const MiniInfo = ({ title, value }) => (
  <div className="rounded-[14px] p-3 bg-white/5">
    <div className="text-[11px] text-white/60">{title}</div>
    <div className="text-[12px] mt-1">{value}</div>
  </div>
);

const NextStepRow = ({ activity, owner, date, status, danger, warn }) => (
  <div className="grid grid-cols-4 gap-2 text-[11px] items-center mb-2">
    <div>{activity}</div>
    <div>{owner}</div>
    <div>{date}</div>
    <div
      className={`rounded-full px-2 py-0.5 text-center
        ${
          danger
            ? "bg-red-500/20 text-red-400"
            : warn
            ? "bg-yellow-500/20 text-yellow-400"
            : "bg-white/10"
        }`}
    >
      {status}
    </div>
  </div>
);
