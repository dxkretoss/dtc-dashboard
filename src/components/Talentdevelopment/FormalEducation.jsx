import React from "react";
import { ChevronLeft } from "lucide-react";

export default function FormalEducation({ onBack }) {
  return (
    <div className="w-full space-y-6 text-white">
      {/* ================= MAIN GRID ================= */}
      <div className="flex gap-[16px]">
        {/* ================= LEFT ================= */}
        <div className="space-y-3 max-w-[761px]">
          {/* ================= HEADER ================= */}
          <div
            className="rounded-[22px] p-6"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <button
                onClick={onBack}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              >
                <ChevronLeft size={18} />
              </button>
              <h2 className="text-[22px] font-semibold">Formal education</h2>
            </div>

            <p className="text-[13px] text-white/70 max-w-[713px] leading-relaxed">
              This initiative seeks to cultivate the next generation of gaming
              professionals in Abu Dhabi by building a robust higher education
              ecosystem, driven by strategic partnerships with leading local and
              international institutions
            </p>
          </div>

          {/* -------- Key Companies -------- */}
          <GlassCard title="Key companies">
            <div className="grid grid-cols-6 gap-2 text-[11px] text-white/60 mb-2">
              {[
                "Set up internal program",
                "Prioritize partners",
                "Engage",
                "MOU",
                "Launch & Operate",
              ].map((t) => (
                <div key={t} className="text-center">
                  {t}
                </div>
              ))}
            </div>

            {[
              {
                name: "ADU / Rubika",
                values: ["100%", "100%", "100%", "100%", "0%"],
              },
              { name: "NYU", values: ["100%", "100%", "50%", "0%", "0%"] },
              { name: "MBZUH", values: ["100%", "100%", "0%", "0%", "0%"] },
            ].map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-6 gap-2 items-center mb-2"
              >
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
              <KPICard
                title="Employed graduates"
                value="0"
                percent="0%"
                target="40"
              />
              <KPICard
                title="Students enrolled in HEIs"
                value="0"
                percent="0%"
                target="TBD"
              />
              <KPICard title="Graduates" value="0" percent="0%" target="TBD" />
            </div>
          </GlassCard>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="space-y-3 max-w-[430px]">
          {/* -------- Owner -------- */}
          <GlassCard>
            <div className="grid grid-cols-2 gap-3">
              <MiniInfo title="Owner" value="AD Gaming" />
              <MiniInfo title="Responsible" value="Marcos Muller" />
            </div>
            {/* </GlassCard> */}

            {/* -------- Next Steps -------- */}
            {/* <GlassCard title="Next steps"> */}

            <div className="mt-[24px]">
              <h1 className="text-[18px] font-semibold text-white">
                Next steps
              </h1>
              <div className="grid grid-cols-4 gap-2 text-[11px] text-white font-semibold mt-[8px] mb-2">
                <div className="bg-[#2C2A33] px-2 py-4 text-center rounded-[8px]">
                  Activity
                </div>
                <div className="bg-[#2C2A33] px-2 py-4 text-center rounded-[8px]">
                  Owner
                </div>
                <div className="bg-[#2C2A33] px-2 py-4 text-center rounded-[8px]">
                  Date
                </div>
                <div className="bg-[#2C2A33] px-2 py-4 text-center rounded-[8px]">
                  Status
                </div>
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
            </div>
            {/* </GlassCard> */}

            {/* -------- Roadblocks -------- */}
            {/* <GlassCard title="Ecosystem roadblocks"> */}
            <div className="mt-[24px]">
              <h1 className="text-[18px] font-semibold text-white">
                Ecosystem roadblocks
              </h1>
              <p className="text-[11px] text-white mt-[8px] px-2 py-2 rounded-[8px]" style={{ background :"linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)"}}>
                Limited engagement from NYU, have not shared business case.
              </p>
            </div>
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
  <div
    className="rounded-[14px] p-3 "
    style={{
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)",
    }}
  >
    <div
      className="text-[11px] text-white text-center font-semibold p-1 rounded-[8px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)",
      }}
    >
      {title}
    </div>
    <div className="text-[13px] mt-2 text-center text-[#BDBDBD]">{value}</div>
  </div>
);

const NextStepRow = ({ activity, owner, date, status, danger }) => (
  <div className="grid grid-cols-4 gap-2 text-[11px] items-center mb-2">
    <div className="h-[111px] rounded-[8px] border border-[#FFFFFF14] text-center text-[#DBDBDD] flex justify-center items-center">
      <span className="w-[76px]">{activity}</span>
    </div>
    <div className="h-[111px] rounded-[8px] border border-[#FFFFFF14] text-center text-[#DBDBDD] flex justify-center items-center">
      <span className="w-[76px]">{owner}</span>
    </div>
    <div className="h-[111px] rounded-[8px] border border-[#FFFFFF14] text-center text-[#DBDBDD] flex justify-center items-center">
      <span className="w-[76px]">{date}</span>
    </div>
    <div
      className={`h-[111px] rounded-[8px] px-2 py-0.5 text-cente flex justify-center items-center text-[#DBDBDD] text-center`}
      style={{
        background: danger
          ? "rgba(255, 116, 116, 0.22)"
          : "linear-gradient(180deg, rgba(255, 255, 255, 0.096) 0%, rgba(255, 255, 255, 0.048) 100%)",
      }}
    >
      {status}
    </div>
  </div>
);
