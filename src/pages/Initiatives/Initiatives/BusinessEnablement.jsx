import React from "react";
import { ChevronLeft } from "lucide-react";

export default function BusinessEnablement({ onBack }) {
  const displayCompanies = [
    {
      name: "Relocation Support Program",
      items: [
        {
          value: 100,
          status: "Completed",
          color: "Green",
        },
        {
          value: 100,
          status: "Completed",
          color: "Green",
        },
        {
          value: 100,
          due: "30/04/25",
          status: "Completed",
          color: "Green",
        },
        {
          value: 100,
          due: "15/05/25",
          status: "Completed",
          color: "Green",
        },
        {
          value: 0,
          due: "9/10/25",
          status: "Not started",
          color: "White",
        },
      ],
    },
    {
      name: "Housing Support",
      items: [
        {
          value: 100,
          status: "Completed",
          color: "Green",
        },
        {
          value: 100,
          status: "Delayed",
          color: "Pink",
        },
        {
          value: 50,
          due: "30/05/25",
          status: "In progress",
          color: "Grey",
        },
        {
          value: 0,
          due: "7/7/25",
          status: "Not started",
          color: "White",
        },
        {
          value: 0,
          due: "26/1/25",
          status: "Not started",
          color: "White",
        },
      ],
    },
  ];
  return (
    <div className="min-h-screen w-full text-white">
      <div className="flex gap-6">
        {/* LEFT CONTENT */}
        <div className="space-y-6 max-w-[761px]">
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
              <h2 className="text-[22px] font-semibold">One stop shop</h2>
            </div>

            <p className="text-[13px] text-white/70 max-w-[713px] leading-relaxed">
              Establish a one-stop-shop to enable ongoing collaboration across
              the industry, formalise inter-stakeholder MOUs to coordinate
              initiatives and provide comprehensive support for companies.
            </p>
          </div>

          <div className="w-full">
            {/* ITEM */}
            <Row
              id="1.1"
              title="One stop shop platform"
              partners={["MBZUH"]}
              engage={["NYU"]}
              mou={["ADU / Rubika"]}
              img={"./Build.svg"}
              completed
            />
          </div>

          {/* CROSS AGENCY COORDINATION */}
          {/* -------- Key Companies -------- */}
          <GlassCard title="Cross - Agency coordination">
            {/* TABLE CONTAINER */}
            <div className="rounded-[16px] border border-white/10 overflow-hidden">
              {/* HEADER */}
              <div className="grid grid-cols-6 text-[11px] text-white/60">
                <div className="px-3 py-3 border-r border-white/10"></div>

                {[
                  "Define target persona",
                  "Define support partners",
                  "Define selection mechanism",
                  "Promotion of benefit",
                  "Launch & Operate",
                ].map((t, i) => (
                  <div
                    key={t}
                    className={`px-2 py-3 text-[#FFFFFF] text-[12px] text-center ${
                      i !== 4 ? "border-r border-white/10" : ""
                    }`}
                  >
                    {t}
                  </div>
                ))}
              </div>

              {/* GRADIENT PROGRESS BAR */}
              <div className="grid grid-cols-6 border-b border-white/10">
                {/* EMPTY FIRST COLUMN */}
                <div />

                {/* GRADIENT STARTS FROM COLUMN 2 */}
                <div className="col-span-5">
                  <div className="h-[12px] rounded-full overflow-hidden bg-[#43525E]">
                    <div
                      className="h-full w-full"
                      style={{
                        background:
                          "linear-gradient(90deg, #D9D9D9 0%, #FFC666 49.52%, #3BAB78 100%)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* ROWS */}
              {displayCompanies.map((row, rowIndex) => (
                <div
                  key={row.name}
                  className={`grid grid-cols-6 ${
                    rowIndex !== 0 ? "border-t border-white/10" : ""
                  }`}
                >
                  {/* COMPANY CELL */}
                  <div className="px-3 py-4 text-[11px] text-white/80 border-r border-white/10 flex items-center">
                    {row.name}
                  </div>

                  {/* STATUS CELLS */}
                  {row.items.map((item, i) => (
                    <div
                      key={i}
                      className={`px-2 py-3 flex justify-center border-r border-white/10 ${
                        i === row.items.length - 1 ? "border-r-0" : ""
                      }`}
                    >
                      <ProgressCell {...item} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </GlassCard>

          {/* KPIS */}
          <GlassCard title="KPIs">
            <h4 className="text-sm text-white/60 mb-3">Main KPI</h4>
            <KpiBar
              title="Net promoter Score"
              target="Target: 40"
              left="TBD"
              right="TBD"
            />

            <h4 className="text-sm text-white/60 mt-6 mb-3">Supporting KPIs</h4>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <KpiRing
                title="Avg. time for company setup"
                target="2025 target TBD"
              />
              <KpiRing
                title="Gaming IPs Registered"
                subtitle="Target: 2 months"
                target="2025 target TBD"
              />
            </div>

            <KpiBar
              title="Customer satisfaction score (2025, %)"
              target="Target: 70%"
              left="TBD"
              right="TBD"
            />
          </GlassCard>
        </div>

        {/* RIGHT SIDEBAR */}
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

              {/* {nextSteps.map((step, i) => (
                <NextStepRow
                  key={i}
                  activity={step.activity}
                  owner={step.owner}
                  date={step.date}
                  status={step.status}
                  color={step.color}
                />
              ))} */}

              <NextStepRow
                key={1}
                activity={"Define concept plan"}
                owner={"AD Gaming"}
                date={"30/06/25"}
                status={"Not started"}
                color={"PINK"}
              />
            </div>
            {/* </GlassCard> */}

            {/* -------- Roadblocks -------- */}
            {/* <GlassCard title="Ecosystem roadblocks"> */}
            <div className="mt-[24px]">
              <h1 className="text-[18px] font-semibold text-white">
                Ecosystem roadblocks
              </h1>
              <p
                className="text-[11px] text-white mt-[8px] px-2 py-2 rounded-[8px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)",
                }}
              >
                {/* {roadblock} */}
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

/* ---------------- DATA ---------------- */

const agencies = [
  "Abu Dhabi Government",
  "ADGM",
  "Department of Culture & Tourism",
  "Masdar City",
];

const nextSteps = [
  {
    activity: "Define concept plan",
    owner: "AD Gaming",
    date: "30/06/25",
    status: "Not Started",
  },
  {
    activity: "Launch vendor RFP",
    owner: "AD Gaming",
    date: "TBD",
    status: "Not Started",
  },
  {
    activity: "Socialize concept with Incs",
    owner: "AD Gaming",
    date: "TBD",
    status: "Not Started",
  },
];

/* ---------------- UI PARTS ---------------- */

/* ================= REUSABLE COMPONENTS ================= */

const GlassCard = ({ title, children }) => (
  <div
    className="rounded-[20px] p-4 backdrop-blur-xl"
    style={{
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
    }}
  >
    {title && (
      <div className="mb-3 flex justify-between items-center">
        <span className="text-[18px] font-semibold text-white">{title}</span>

        {/* LEGEND */}
        <div className="flex gap-3 text-[11px] text-[#BDBDBD]">
          <Legend label="Not started" border />
          <Legend label="In progress" color="#43525E" />
          <Legend label="Completed" color="#3BAB78" />
          <Legend label="Risk of delay" color="#FFA000" />
          <Legend label="Delayed" color="#EB5757" />
        </div>
      </div>
    )}
    {children}
  </div>
);

const Legend = ({ label, color, border }) => (
  <div className="flex items-center gap-1">
    <div
      className={`w-[16px] h-[10px] rounded-full ${
        border ? "border border-white/30" : ""
      }`}
      style={{ background: color }}
    />
    <span>{label}</span>
  </div>
);

const ProgressCell = ({ value, due, color }) => {
  const getStyles = () => {
    if (color === "Green") return "bg-[#35C07229] text-[#35C072]";
    if (color === "Pink") return "bg-[#F14E4829] text-[#F14E48]";
    if (color === "Grey") return "bg-[#FEFEFE29] text-[#D4D4D4]";
    return "bg-transparent border border-white/20 text-white/60";
  };

  return (
    <div className="w-full max-w-[92px] text-center">
      <div
        className={`h-[22px] rounded-full flex items-center justify-center text-[10px] font-medium ${getStyles()}`}
      >
        {value}%
      </div>
      {due && (
        <div className="text-[10px] text-white/40 mt-1">Due by: {due}</div>
      )}
    </div>
  );
};

function KpiRing({ title, subtitle, target }) {
  return (
    <div className="rounded-xl p-4 bg-white/5 border border-white/10">
      <p className="text-xs text-white/60">{title}</p>
      {subtitle && <p className="text-xs text-green-400 mt-1">{subtitle}</p>}
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

const NextStepRow = ({ activity, owner, date, status, color }) => {
  const getBackground = () => {
    if (color === "Pink") return "#FF747438";
    if (color === "Grey")
      return "linear-gradient(180deg, rgba(255, 255, 255, 0.096) 0%, rgba(255, 255, 255, 0.048) 100%)";
    if (color === "Yellow") return "#FFF53F38";
    return "transparent"; // White
  };

  return (
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
        className={`h-[111px] rounded-[8px] px-2 py-0.5 flex justify-center items-center text-[#DBDBDD] text-center ${
          color === "White" ? "border border-[#FFFFFF14]" : ""
        }`}
        style={{ background: getBackground() }}
      >
        {status}
      </div>
    </div>
  );
};

/* ---------------- COMPONENTS ---------------- */

const STEPS = [
  "Set up program",
  "Select vendor",
  "Build / implement",
  "Test & iterate",
  "Launch & Operate ",
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
  img,
  desc,
}) => (
  <div
    className="rounded-[18px] p-4 cursor-pointer"
    style={{
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
    }}
  >
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-start gap-2">
        <img src={img} />
        <div className="flex flex-col">
          <span className="text-[18px] text-white font-semibold">{title}</span>
        </div>
      </div>
    </div>

    <hr className="text-[#F4F4F40F]" />
    {/* STEPS */}
    <div className="flex gap-[2px] mt-[12px] overflow-hidden">
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
