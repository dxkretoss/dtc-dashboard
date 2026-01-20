import React from "react";
import { ChevronLeft } from "lucide-react";

export default function JobPortal({ onBack }) {
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
          <h2 className="text-[18px] font-semibold">Job portal</h2>
        </div>

        <p className="text-[13px] text-white/70 max-w-[900px] leading-relaxed">
          Establish a centralized gaming industry jobs portal to connect talent
          with jobs, internships, and apprenticeships, streamline recruitment,
          and help companies attract the right talent based on their needs.
        </p>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-12 gap-6">

        {/* ================= LEFT ================= */}
        <div className="col-span-8 space-y-6">

          {/* -------- Build job portal -------- */}
          <GlassCard title="Build job portal">
            <BuildSection
              title="Internal job portal"
              subtitle="Initial portal with website dependency"
              steps={[
                "Requirements definition",
                "Design & development",
                "Build",
                "Test & iterate",
                "Launch & optimize",
              ]}
              progress={[100, 100, 100, 0, 0]}
            />

            <BuildSection
              title="University partners"
              subtitle="Integrate with university career portals"
              steps={[
                "Identify key partners",
                "Agree on UX & portal",
                "Dev & integrate",
                "Test & iterate",
                "Launch & optimize",
              ]}
              progress={[100, 50, 0, 0, 0]}
            />

            <BuildSection
              title="Company partners"
              subtitle="Enable companies to post jobs & internships"
              steps={[
                "Communication to companies",
                "Launch training & portal use",
                "Dev & integrate",
                "Test & iterate",
                "Launch & optimize",
              ]}
              progress={[100, 100, 0, 0, 0]}
            />
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
                title="Number of interns"
                value="13"
                percent="19 (57%)"
                target="65"
              />
              <CircularKPICard
                title="Number of Emirati interns"
                value="13"
                percent="13 (130%)"
                sub="3 ahead of target"
                target="20"
              />
              <SupportingKPICard title="Employed graduates" target="-" />
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
              activity="Finalize website development"
              owner="CDD"
              date="31/07"
              status="In Progress"
            />
            <NextStepRow
              activity="Define portal layout and UX"
              owner="AD Gaming"
              date="TBD"
              status="Not Started"
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

const BuildSection = ({ title, subtitle, steps, progress }) => (
  <div className="mb-4">
    <div className="text-[12px] font-semibold mb-1">{title}</div>
    <div className="text-[11px] text-white/60 mb-2">{subtitle}</div>

    <div className="grid grid-cols-5 gap-2 text-[10px] text-white/60 mb-2">
      {steps.map((s) => (
        <div key={s} className="text-center">{s}</div>
      ))}
    </div>

    <div className="grid grid-cols-5 gap-2">
      {progress.map((p, i) => (
        <ProgressPill key={i} value={p} />
      ))}
    </div>
  </div>
);

const ProgressPill = ({ value }) => (
  <div
    className={`h-[18px] rounded-full flex items-center justify-center text-[10px]
      ${
        value === 100
          ? "bg-[#3BAB78]/30 text-[#3BAB78]"
          : value > 0
          ? "bg-white/20 text-white"
          : "bg-white/10 text-white/40"
      }`}
  >
    {value}%
  </div>
);

const CircularKPICard = ({ title, value, percent, target, sub }) => (
  <div className="rounded-[16px] p-4 bg-white/5 flex justify-between items-center">
    <div>
      <div className="text-[11px] text-white/60 mb-1">{title}</div>
      <div className="text-[12px] text-[#3BAB78]">{percent}</div>
      {sub && <div className="text-[10px] text-[#3BAB78] mt-1">{sub}</div>}
    </div>

    <div className="w-[72px] h-[72px] rounded-full border-[6px] border-[#3BAB78]/60 flex items-center justify-center text-[11px]">
      <div className="text-center">
        <div className="text-white/60">2025</div>
        <div className="font-semibold">{target}</div>
      </div>
    </div>
  </div>
);

const SupportingKPICard = ({ title, target }) => (
  <div className="rounded-[16px] p-4 bg-white/5 flex justify-between items-center">
    <div>
      <div className="text-[11px] text-white/60 mb-1">{title}</div>
      <div className="text-[12px] text-[#3BAB78]">0 (0%)</div>
    </div>

    <div className="w-[72px] h-[72px] rounded-full border-[6px] border-white/20 flex items-center justify-center text-[11px]">
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

const NextStepRow = ({ activity, owner, date, status }) => (
  <div className="grid grid-cols-4 gap-2 text-[11px] items-center mb-2">
    <div>{activity}</div>
    <div>{owner}</div>
    <div>{date}</div>
    <div className="rounded-full px-2 py-0.5 text-center bg-white/10">
      {status}
    </div>
  </div>
);
