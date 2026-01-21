import React from "react";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import FormalEducationSkeleton from "../layout/Skelethon/FormalEducationSkeleton";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1zwMlxUzU9mQf20IOMYP9cCcnfDcqRYoO/export?format=csv&gid=234077410";

function parseNextSteps(rows) {
  const startIndex = rows.findIndex((r) => r._1 === "Activity");
  const endIndex = rows.findIndex((r) => r._1 === "KPI");

  if (startIndex === -1) return [];

  return rows
    .slice(startIndex + 1, endIndex !== -1 ? endIndex : undefined)
    .filter((r) => r._1 && r._2 && r._3 && r._4)
    .map((r) => ({
      activity: r._1,
      owner: r._2,
      date: r._3,
      status: r._4,
      color: r._5,
    }));
}
const STAGES_COUNT = 5;

function parseKeyCompanies(rows) {
  const companies = [];
  let current = null;

  const startIndex = rows.findIndex((r) => r._1 === "Partner");
  const endIndex = rows.findIndex((r) => r._1 === "Activity");

  if (startIndex === -1) return [];

  rows
    .slice(startIndex + 1, endIndex !== -1 ? endIndex : undefined)
    .forEach((row) => {
      const label = row._1?.trim();

      // Company name
      if (
        label &&
        ![
          "% completion in each stage",
          "Status",
          "Color of status bubble",
          "Due by",
        ].includes(label)
      ) {
        current = { name: label, items: [] };
        companies.push(current);
        return;
      }

      // % completion
      if (label === "% completion in each stage" && current) {
        current.items = Array.from({ length: STAGES_COUNT }, (_, i) => ({
          value: Number((row[`_${i + 2}`] || "0").replace("%", "")),
        }));
      }

      // Status
      if (label === "Status" && current) {
        current.items = current.items.map((item, i) => ({
          ...item,
          status: row[`_${i + 2}`], // Completed / Delayed / Not started
        }));
      }

      // Color
      if (label === "Color of status bubble" && current) {
        current.items = current.items.map((item, i) => ({
          ...item,
          color: row[`_${i + 2}`], // Green / Pink / White
        }));
      }

      // Due dates
      if (label === "Due by" && current) {
        current.items = current.items.map((item, i) => ({
          ...item,
          due: row[`_${i + 2}`] || null,
        }));
      }
    });

  return companies;
}

function parseKPIs(rows) {
  const startIndex = rows.findIndex((r) => r._1 === "KPI");
  if (startIndex === -1) return [];

  return rows
    .slice(startIndex + 1)
    .filter((r) => r._1 && r._2 !== undefined)
    .map((r) => ({
      name: r._1,
      actual: Number(r._2),
      monthlyTarget: Number(r._3),
      yearlyTarget: Number(r._4),
      gapMonthly: Number(r._5),
      percentMonthly: r._6,
      gapYearly: Number(r._7),
    }));
}

function parseRoadblock(rows) {
  const index = rows.findIndex((r) => r._1?.trim() === "Ecosystem roadblocks");

  if (index === -1) return "";

  // Find next non-empty row after the header
  for (let i = index + 1; i < rows.length; i++) {
    if (rows[i]._1 && rows[i]._1.trim()) {
      return rows[i]._1;
    }
  }

  return "";
}

export default function InternshipFund({ onBack }) {
  const [nextSteps, setNextSteps] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [kpis, setKpis] = useState([]);
  const [roadblock, setRoadblock] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((csv) => {
        const parsed = Papa.parse(csv, { header: true });
        const rows = parsed.data.filter((r) => r._1);
        setCompanies(parseKeyCompanies(rows));
        setNextSteps(parseNextSteps(rows));
        setKpis(parseKPIs(rows));
        setRoadblock(parseRoadblock(rows));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <FormalEducationSkeleton />;
  }

  const displayCompanies = companies.map((company) => ({
    name: company.name,
    items: company.items.map((item) => ({
      value: item.value,
      ...(item.due ? { due: item.due } : {}),
      status: item.status, // available if needed later
      color: item.color, // available if needed later
    })),
  }));

  const mainKPI = kpis.filter(
    (k) => k.name !== "Fund allocated to intern placement",
  );

  const supportingKPIs = kpis.filter(
    (k) => k.name === "Fund allocated to intern placement",
  );

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
              <h2 className="text-[22px] font-semibold">Internship fund</h2>
            </div>

            <p className="text-[13px] text-white/70 max-w-[713px] leading-relaxed">
              Establish an Internship Fund and structured placement program to
              help gaming companies offset hiring costs, expand internship
              opportunities for students (especially Emirati students) and make
              it easier for companies to bring in and train new gaming talent.
            </p>
          </div>

          {/* -------- Key Companies -------- */}
          <GlassCard title="Key companies">
            {/* TABLE CONTAINER */}
            <div className="rounded-[16px] border border-white/10 overflow-hidden">
              {/* HEADER */}
              <div className="grid grid-cols-6 text-[11px] text-white/60">
                <div className="px-3 py-3 border-r border-white/10"></div>

                {[
                  "Set up internal program",
                  "Prioritize partners",
                  "Engage",
                  "MOU",
                  "Launch & Operate",
                ].map((t, i) => (
                  <div
                    key={t}
                    className={`px-2 py-3 text-center ${
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

          {/* -------- KPIs -------- */}
          <div
            className="rounded-t-[16px] p-3"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
            }}
          >
            <div className="flex justify-between">
              <h1 className="text-[18px] font-semibold">KPIS</h1>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <div className="bg-[#3BAB78] h-[10px] w-[10px] rounded-[4px]"></div>
                  <span className="text-[11px] text-[#BDBDBD]">Completed</span>
                </div>

                <div className="flex gap-1 items-center">
                  <div className="bg-[#E1E1E199] h-[10px] w-[10px] rounded-[4px]"></div>
                  <span className="text-[11px] text-[#BDBDBD]">
                    Gap bet. actual and monthly target
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="p-3 -mt-2"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
            }}
          >
            <h2 className="text-[14px] text-[#FFFFFF] font-semibold">
              Main KPI
            </h2>
            <div
              className="mt-[8px] grid grid-cols-2 gap-[10px] rounded-[18px] p-2"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
              }}
            >
               {mainKPI.map((kpi) => (
                <div
                  key={kpi.name}
                  className="rounded-[18px] p-4 flex flex-col justify-between"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  }}
                >
                  <div className="text-[12px] font-semibold text-white ">
                    {kpi.name}
                  </div>

                  <div className="flex items-end justify-between">
                    <div className="flex gap-2">
                      <span className="text-[#3BAB78] font-semibold text-[12px]">
                        {kpi.actual} ({kpi.percentMonthly})
                      </span>
                      <span className="text-[#E1E1E199] font-semibold text-[12px]">
                        {kpi.gapMonthly}
                      </span>
                    </div>

                    <div className="w-[116px] h-[116px] rounded-full border-10 border-white/10 flex items-center justify-center">
                      <div className="text-xs text-white text-center">
                        2025
                        <br />
                        target
                        <br />
                        <span className="text-lg font-semibold">
                          {kpi.yearlyTarget || "TBD"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-b-[16px] -mt-2 p-3"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
            }}
          >
            <h2 className="text-[14px] text-[#FFFFFF] font-semibold">
              Supporting KPIS
            </h2>
            <div
              className="mt-[8px] grid grid-cols-2 gap-[10px] rounded-[18px] p-2"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
              }}
            >
               {supportingKPIs.map((kpi) => (
                <div
                  key={kpi.name}
                  className="rounded-[18px] p-4 flex flex-col justify-between"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  }}
                >
                  <div className="text-[12px] font-semibold text-white ">
                    {kpi.name}
                  </div>

                  <div className="flex items-end justify-between">
                    <div className="flex gap-2">
                      <span className="text-[#3BAB78] font-semibold text-[12px]">
                        {kpi.actual} ({kpi.percentMonthly})
                      </span>
                      <span className="text-[#E1E1E199] font-semibold text-[12px]">
                        {kpi.gapMonthly}
                      </span>
                    </div>

                    <div className="w-[116px] h-[116px] rounded-full border-10 border-white/10 flex items-center justify-center">
                      <div className="text-xs text-white text-center">
                        2025
                        <br />
                        target
                        <br />
                        <span className="text-lg font-semibold">
                          {kpi.yearlyTarget || "TBD"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

              {nextSteps.map((step, i) => (
                <NextStepRow
                  key={i}
                  activity={step.activity}
                  owner={step.owner}
                  date={step.date}
                  status={step.status}
                  color={step.color}
                />
              ))}
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
                {roadblock}
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
