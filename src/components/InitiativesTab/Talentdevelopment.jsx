import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import FormalEducation from "../Talentdevelopment/FormalEducation";
import MidSchool from "../Talentdevelopment/MidSchool";
import SpecializedSkills from "../Talentdevelopment/SpecializedSkills";
import JobPortal from "../Talentdevelopment/JobPortal";
import InternshipFund from "../Talentdevelopment/InternshipFund";

export default function Talentdevelopment() {
  const [activeView, setActiveView] = useState(null);

  // Render selected component
  if (activeView === "formal") {
    return <FormalEducation onBack={() => setActiveView(null)} />;
  }

  if (activeView === "midSchool") {
    return <MidSchool onBack={() => setActiveView(null)} />;
  }

  if (activeView === "skills") {
    return <SpecializedSkills onBack={() => setActiveView(null)} />;
  }

  if (activeView === "internship") {
    return <InternshipFund onBack={() => setActiveView(null)} />;
  }

  if (activeView === "job") {
    return <JobPortal onBack={() => setActiveView(null)} />;
  }
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT SIDE */}
        <div className="col-span-9 space-y-4">
          {/* ITEM */}
          <Row
            id="1.1"
            title="Formal education"
            partners={["MBZUH"]}
            engage={["NYU"]}
            mou={["ADU / Rubika"]}
            completed
            onClick={() => setActiveView("formal")}
          />

          <Row
            id="1.2"
            title="Mid-school and high school"
            engage={["GEMS", "ENS", "ADEK"]}
            onClick={() => setActiveView("midSchool")}
          />

          <Row
            id="1.3"
            title="Specialized skills program"
            engage={["Unreal / Epic", "42"]}
            mou={["Unity"]}
            onClick={() => setActiveView("skills")}
            risk
          />

          <Row
            id="1.4"
            title="Internship fund"
            engage={["NAFIS", "42"]}
            risk
            onClick={() => setActiveView("internship")}
          />

          <Row
            id="1.5"
            title="Job portal"
            note="Initiative not started, website dependency"
            onClick={() => setActiveView("job")}
            notStarted
          />

          {/* LEGEND */}
          <div className="flex items-center gap-4 pt-2 text-xs text-white/60">
            <Legend color="#445261" label="Not started" />
            <Legend color="#FFFFFF" label="In progress" />
            <Legend color="#3BAB78" label="Completed" />
            <Legend color="#FFA000" label="Risk of delay" />
            <Legend color="#D83432" label="Delayed" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-3 space-y-4">
          <MetricCard title="Employed graduates" target="40" />
          <MetricCard title="Interns with full-time offers" target="TBD" />
          <MetricCard title="University graduates" target="0" />

          <div className="flex flex-col gap-1 items-end justify-end">
            <div className="flex gap-1 items-center justify-end">
              <span className="text-[#BDBDBD] text-[11px]">Completed</span>
              <div className="bg-[#3BAB78] w-[10px] h-[10px] rounded-[4px]"></div>
            </div>
            <div className="flex gap-1 items-center justify-end">
              <span className="text-[#BDBDBD] text-[11px]">
                Gap bet. actual and monthly target
              </span>
              <div className="bg-[#E1E1E199] w-[10px] h-[10px] rounded-[4px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

const STEPS = [
  "Set up program",
  "Prioritize partners",
  "Engage",
  "MOU",
  "Launch & operate",
];

const Row = ({
  id,
  title,
  partners = [],
  engage = [],
  mou = [],
  completed,
  risk,
  notStarted,
  note,
  onClick,
}) => (
  <div
    onClick={onClick}
    className="rounded-[18px] p-4 cursor-pointer"
    style={{
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
    }}
  >
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <span className="text-xs bg-[#FFFFFF33] text-white px-2 py-0.5 rounded-full">
          {id}
        </span>
        <span className="text-sm text-white font-medium">{title}</span>
      </div>
      <span className="text-[#BCC4CC]">
        <ChevronRight />
      </span>
    </div>

    {/* STEPS */}
    <div className="flex gap-[2px] overflow-hidden">
      {STEPS.map((step, i) => (
        <Step
          key={step}
          label={step}
          index={i}
          total={STEPS.length}
          status={i === 4 ? "completed" : i >= 2 ? "progress" : "default"}
        />
      ))}
    </div>

    {note && (
      <div className="flex text-xs text-[#A7A8A9] mt-2 bg-[#d9d9d927] px-2 py-1 rounded-full w-[257px] text-[11px]">
        {note}
      </div>
    )}
  </div>
);

const STEP_GRADIENTS = [
  "linear-gradient(90deg, #D9D9D9 0%, #E8D1AC 100%)", // Step 1
  "linear-gradient(90deg, #E8D1AC 0%, #F7CA7D 100%)", // Step 2
  "linear-gradient(90deg, #F7CA7D 0%, #D7C06A 100%)", // Step 3
  "linear-gradient(90deg, #D7C06A 0%, #89B671 100%)", // Step 4
  "linear-gradient(90deg, #89B671 0%, #3BAB78 100%)", // Step 5
];

const Step = ({ label, index, total }) => {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <div
      className={`flex-1 text-center text-[11px] py-1
        ${isFirst ? "rounded-l-full" : ""}
        ${isLast ? "rounded-r-full" : ""}
      `}
      style={{
        background: STEP_GRADIENTS[index],
        color: "#1B1B1B",
      }}
    >
      {label}
    </div>
  );
};

const Tag = ({ text, success, warn }) => (
  <span
    className="px-2 py-0.5 rounded-full text-xs"
    style={{
      background: success ? "#2F8F67" : warn ? "#9E2A2A" : "#2A2F35",
      color: "#fff",
    }}
  >
    {text}
  </span>
);

const MetricCard = ({ title, target }) => (
  <div
    className="rounded-[18px] p-4 flex flex-col justify-between"
    style={{
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
    }}
  >
    <div className="text-[12px] font-semibold text-white w-[130px]">
      {title}
    </div>

    <div className="flex items-end justify-between">
      <div className="flex gap-2">
        <span className="text-[#3BAB78] font-semibold text-[12px]">
          0 (0%){" "}
        </span>
        <span className="text-[#E1E1E199] font-semibold text-[12px]">0</span>
      </div>
      <div className="w-[116px] h-[116px] rounded-full border-10 border-white/10 flex items-center justify-center">
        <div className="text-xs text-white text-center">
          2025
          <br />
          target
          <br />
          <span className="text-lg font-semibold">{target}</span>
        </div>
      </div>
    </div>
  </div>
);

const Legend = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <span
      className="w-[16px] h-[10px] rounded-full"
      style={{ backgroundColor: color }}
    ></span>
    <span className="text-[11px] text-[#BDBDBD]">{label}</span>
  </div>
);
