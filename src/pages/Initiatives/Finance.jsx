import React from "react";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import FinanceSkeleton from "../../components/layout/Skelethon/FinanceSkeleton";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1zwMlxUzU9mQf20IOMYP9cCcnfDcqRYoO/export?format=csv&gid=40219417";

export default function Finance() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((csv) => {
        const parsed = Papa.parse(csv, { header: true });

        const cleanRows = parsed.data.filter((row) =>
          Object.values(row).some((val) => val && val.trim() !== ""),
        );

        const kpiIndex = cleanRows.findIndex((r) => r._1 === "KPI");
        const kpiRows = cleanRows.slice(kpiIndex + 1, kpiIndex + 3);

        const kpi = kpiRows.map((r) => ({
          name: r._1,
          actual: Number(r._2),
          target: Number(r._3),
          gap: Number(r._4),
          actualPercent: r._5,
          gapPercent: r._6,
        }));

        const projectIndex = cleanRows.findIndex(
          (r) => r._1 === "Projects budget utilization YTD",
        );

        const projects = cleanRows.slice(projectIndex + 1).map((r) => ({
          sector: r._1,
          actual: Number(r._2),
          ytdBudget: Number(r._3),
          gapYear: Number(r._6),
        }));

        setData({ kpi, projects });
      });
  }, []);

  if (!data) return <FinanceSkeleton/>;

  console.log(data);
  return (
    <div className="w-full">
      <div
        className="rounded-[16px] p-6"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)",
          boxShadow: " 0px 4px 26.9px 0px #00000005",
          backdropFilter: "blur(108px)",
        }}
      >
        {/* Header */}
        <div className="mb-4">
          <div>
            <h2 className="text-[24px] text-[#FFFFFF] font-semibold">
              Finance
            </h2>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-[18px] text-[#FFFFFF] mt-[24px] font-normal">
              Total budget utilization (AED)
            </p>
            <div className="text-[18px] text-[#FFFFFF] mt-[24px] font-normal">
              2025 Budget:{" "}
              <span className="font-semibold">{data.kpi[0].target}M</span>
            </div>
          </div>
        </div>

        {/* GDP Bar */}
        <div
          className="h-[60px] rounded-[22px] p-2"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
            boxShadow: "0px 4px 26.9px 0px #00000005",
            backdropFilter: "blur(108px)",
          }}
        >
          <div className="relative h-[44px] rounded-[16px] overflow-hidden">
            {/* Full-width diagonal background */}
            <div
              className="absolute inset-0 z-1"
              style={{
                background: `
                                repeating-linear-gradient(
                                    -45deg,
                                    rgba(255,255,255,0.08) 0px,
                                    rgba(255,255,255,0.08) 6px,
                                    rgba(255,255,255,0.02) 6px,
                                    rgba(255,255,255,0.02) 12px
                                ),
                                linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))
                                `,
              }}
            />

            {/* Green filled progress */}
            <div
              className="absolute left-0 top-0 h-full rounded-[14px] flex flex-col items-center justify-center text-[15px] text-white font-medium"
              style={{
                width: data.kpi[0].actualPercent,
                background: "linear-gradient(180deg, #3BAB78 0%, #2F8F67 100%)",
              }}
            >
              <span>
                {data.kpi[0].actual}M ({data.kpi[0].actualPercent})
              </span>
              <span className="text-[#FFFFFF99] text-[12px]">Actual</span>
            </div>

            {/* Gap */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-right">
              <span className="text-white">
                {data.kpi[0].gap}M ({data.kpi[0].gapPercent})
              </span>
              <span className="block text-[#626B73] text-[12px]">Gap</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-[18x] text-[#FFFFFF] mt-[24px] font-normal">
              YTD budget utilization (AED)
            </p>
            <div className="text-[18px] text-[#FFFFFF] mt-[24px] font-normal">
              YTD Budget:{" "}
              <span className="font-semibold">{data.kpi[1].target}M</span>
            </div>
          </div>
        </div>

        {/* GDP Bar */}
        <div
          className="h-[60px] max-w-[967px] rounded-[22px] p-2"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
            boxShadow: "0px 4px 26.9px 0px #00000005",
            backdropFilter: "blur(108px)",
          }}
        >
          <div className="relative h-[44px] rounded-[16px] overflow-hidden">
            {/* Full-width diagonal background */}
            <div
              className="absolute inset-0 z-1"
              style={{
                background: `
                                repeating-linear-gradient(
                                    -45deg,
                                    rgba(255,255,255,0.08) 0px,
                                    rgba(255,255,255,0.08) 6px,
                                    rgba(255,255,255,0.02) 6px,
                                    rgba(255,255,255,0.02) 12px
                                ),
                                linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))
                                `,
              }}
            />

            {/* Green filled progress */}
            <div
              className="absolute left-0 top-0 h-full rounded-[14px] flex flex-col items-center justify-center text-[15px] text-white font-medium"
              style={{
                width: data.kpi[1].actualPercent,
                background: "linear-gradient(180deg, #3BAB78 0%, #2F8F67 100%)",
              }}
            >
              <span>
                {data.kpi[1].actual}M ({data.kpi[1].actualPercent})
              </span>
              <span className="text-[#FFFFFF99] text-[12px]">Actual</span>
            </div>

            {/* Gap */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-right">
              <span className="text-white">
                {data.kpi[1].gap}M ({data.kpi[1].gapPercent})
              </span>
              <span className="block text-[#626B73] text-[12px]">Gap</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-[18x] text-[#FFFFFF] mt-[24px] font-normal">
              Projects Budget Utilization YTD (AED ‘000)
            </p>
            <div className="mt-[24px] font-normal text-[#BDBDBD] flex gap-3">
              <div className="gap-1 flex items-center">
                <div className="w-[10px] h-[10px] rounded-[4px] bg-[#329F6D]"></div>
                <span className="text-[11px]">Actual</span>
              </div>
              <div className="gap-1 flex items-center">
                <div className="w-[10px] h-[10px] rounded-[4px] bg-[#433EFB]"></div>
                <span className="text-[11px]">YTD budget</span>
              </div>
              <div className="gap-1 flex items-center">
                <div className="w-[10px] h-[10px] rounded-[4px] bg-[#4E5F70]"></div>
                <span className="text-[11px]">Full year budget</span>
              </div>
            </div>
          </div>
        </div>

        {/* GDP Bar */}
        <div
          className="rounded-[22px] p-3"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
            boxShadow: "0px 4px 26.9px 0px #00000005",
            backdropFilter: "blur(108px)",
          }}
        >
          <h2 className="text-[18px] text-white">Business development</h2>

          <div className="relative mt-[12px] h-[32px] rounded-[16px] overflow-hidden">
            {/* Diagonal empty background */}
            <div
              className="absolute inset-0 z-1"
              style={{
                background: `
                                repeating-linear-gradient(
                                    -45deg,
                                    rgba(255,255,255,0.08) 0px,
                                    rgba(255,255,255,0.08) 6px,
                                    rgba(255,255,255,0.02) 6px,
                                    rgba(255,255,255,0.02) 12px
                                ),
                                linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))
                                `,
              }}
            />

            {/* GREEN BAR */}
            <div
              className="absolute left-0 top-0 h-full flex items-center justify-center text-[15px] text-white font-medium"
              style={{
                width: `${(data.projects[1].actual / (data.projects[1].actual + data.projects[1].ytdBudget)) * 100}%`,
                background: "linear-gradient(180deg, #3BAB78 0%, #2F8F67 100%)",
                borderRadius: "16px 0 0 16px",
              }}
            >
              {data.projects[1].actual}
            </div>

            {/* BLUE BAR */}
            <div
              className="absolute top-0 h-full flex items-center justify-center text-[15px] text-white font-medium"
              style={{
                left: "30%",
                width: "30%",
                background: "linear-gradient(180deg, #4C6FFF 0%, #2F4ED8 100%)",
              }}
            >
              {data.projects[1].ytdBudget - data.projects[1].actual}
            </div>

            {/* RIGHT VALUE */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <span className="text-white text-[15px] font-medium">
                {data.projects[1].gapYear}
              </span>
            </div>
          </div>
        </div>

        {/* GDP Bar */}
        <div
          className="rounded-[22px] mt-[16px] p-3"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
            boxShadow: "0px 4px 26.9px 0px #00000005",
            backdropFilter: "blur(108px)",
          }}
        >
          <h2 className="text-[18px] text-white">Sector enablement</h2>

          <div className="mt-[12px]">
            <span className="text-[12px] text-white">Sector Capability</span>
            <div className="relative  max-w-[798px] mt-[12px] h-[32px] rounded-[16px] overflow-hidden">
              {/* Diagonal empty background */}
              <div
                className="absolute inset-0 z-1"
                style={{
                  background: `
                                repeating-linear-gradient(
                                    -45deg,
                                    rgba(255,255,255,0.08) 0px,
                                    rgba(255,255,255,0.08) 6px,
                                    rgba(255,255,255,0.02) 6px,
                                    rgba(255,255,255,0.02) 12px
                                ),
                                linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))
                                `,
                }}
              />

              {/* GREEN BAR */}
              <div
                className="absolute left-0 top-0 h-full flex items-center justify-center text-[15px] text-white font-medium"
                style={{
                  width: "30%",
                  background:
                    "linear-gradient(180deg, #3BAB78 0%, #2F8F67 100%)",
                  borderRadius: "16px 0 0 16px",
                }}
              >
                {data.projects[2].actual}
              </div>

              {/* BLUE BAR */}
              <div
                className="absolute top-0 h-full flex items-center justify-center text-[15px] text-white font-medium"
                style={{
                  left: "30%",
                  width: "30%",
                  background:
                    "linear-gradient(180deg, #4C6FFF 0%, #2F4ED8 100%)",
                }}
              >
                {data.projects[2].ytdBudget - data.projects[2].actual}
              </div>

              {/* RIGHT VALUE */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <span className="text-white text-[15px] font-medium">
                  {data.projects[2].gapYear}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-[12px]">
            <span className="text-[12px] text-white">
              Community eng. (events)
            </span>
            <div className="relative max-w-[427px] mt-[12px] h-[32px] rounded-[16px] overflow-hidden">
              {/* Diagonal empty background */}
              <div
                className="absolute inset-0 z-1"
                style={{
                  background: `
                                repeating-linear-gradient(
                                    -45deg,
                                    rgba(255,255,255,0.08) 0px,
                                    rgba(255,255,255,0.08) 6px,
                                    rgba(255,255,255,0.02) 6px,
                                    rgba(255,255,255,0.02) 12px
                                ),
                                linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))
                                `,
                }}
              />

              {/* GREEN BAR */}
              <div
                className="absolute left-0 top-0 h-full flex items-center justify-center text-[15px] text-white font-medium"
                style={{
                  width: "30%",
                  background:
                    "linear-gradient(180deg, #3BAB78 0%, #2F8F67 100%)",
                  borderRadius: "16px 0 0 16px",
                }}
              >
                {data.projects[3].actual}
              </div>

              {/* BLUE BAR */}
              <div
                className="absolute top-0 h-full flex items-center justify-center text-[15px] text-white font-medium"
                style={{
                  left: "30%",
                  width: "30%",
                  background:
                    "linear-gradient(180deg, #4C6FFF 0%, #2F4ED8 100%)",
                }}
              >
                {data.projects[3].ytdBudget - data.projects[3].actual}
              </div>

              {/* RIGHT VALUE */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <span className="text-white text-[15px] font-medium">
                  {data.projects[3].gapYear}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-[12px]">
            <span className="text-[12px] text-white">Esports</span>
            <div className="relative max-w-[342px] mt-[12px] h-[32px] rounded-[16px] overflow-hidden">
              {/* Diagonal empty background */}
              <div
                className="absolute inset-0 z-1"
                style={{
                  background: `
                                repeating-linear-gradient(
                                    -45deg,
                                    rgba(255,255,255,0.08) 0px,
                                    rgba(255,255,255,0.08) 6px,
                                    rgba(255,255,255,0.02) 6px,
                                    rgba(255,255,255,0.02) 12px
                                ),
                                linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))
                                `,
                }}
              />

              {/* GREEN BAR */}
              <div
                className="absolute left-0 top-0 h-full flex items-center justify-center text-[15px] text-white font-medium"
                style={{
                  width: "30%",
                  background:
                    "linear-gradient(180deg, #3BAB78 0%, #2F8F67 100%)",
                  borderRadius: "16px 0 0 16px",
                }}
              >
                {data.projects[6].actual}
              </div>

              {/* BLUE BAR */}
              <div
                className="absolute top-0 h-full flex items-center justify-center text-[15px] text-white font-medium"
                style={{
                  left: "30%",
                  width: "30%",
                  background:
                    "linear-gradient(180deg, #4C6FFF 0%, #2F4ED8 100%)",
                }}
              >
                {data.projects[6].ytdBudget - data.projects[6].actual}
              </div>

              {/* RIGHT VALUE */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <span className="text-white text-[15px] font-medium">
                  {data.projects[6].gapYear}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-[12px]">
            <span className="text-[12px] text-white">Marketing & Comms</span>
            <div className="relative max-w-[199px] mt-[12px] h-[32px] rounded-[16px] overflow-hidden">
              {/* Diagonal empty background */}
              <div
                className="absolute inset-0 z-1"
                style={{
                  background: `
                                repeating-linear-gradient(
                                    -45deg,
                                    rgba(255,255,255,0.08) 0px,
                                    rgba(255,255,255,0.08) 6px,
                                    rgba(255,255,255,0.02) 6px,
                                    rgba(255,255,255,0.02) 12px
                                ),
                                linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))
                                `,
                }}
              />

              {/* GREEN BAR */}
              <div
                className="absolute left-0 top-0 h-full flex items-center justify-center text-[15px] text-white font-medium"
                style={{
                  width: "30%",
                  background:
                    "linear-gradient(180deg, #3BAB78 0%, #2F8F67 100%)",
                  borderRadius: "16px 0 0 16px",
                }}
              >
                {data.projects[4].actual}
              </div>

              {/* BLUE BAR */}
              <div
                className="absolute top-0 h-full flex items-center justify-center text-[15px] text-white font-medium"
                style={{
                  left: "30%",
                  width: "30%",
                  background:
                    "linear-gradient(180deg, #4C6FFF 0%, #2F4ED8 100%)",
                }}
              >
                {data.projects[4].ytdBudget - data.projects[4].actual}
              </div>

              {/* RIGHT VALUE */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <span className="text-white text-[15px] font-medium">
                  {data.projects[4].gapYear}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* GDP Bar */}
        <div
          className="rounded-[22px] mt-[16px] p-3"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
            boxShadow: "0px 4px 26.9px 0px #00000005",
            backdropFilter: "blur(108px)",
          }}
        >
          <h2 className="text-[18px] text-white">Operations</h2>

          <div className="relative max-w-[211px] mt-[12px] h-[32px] rounded-[16px] overflow-hidden">
            {/* Diagonal empty background */}
            <div
              className="absolute inset-0 z-1"
              style={{
                background: `
                                repeating-linear-gradient(
                                    -45deg,
                                    rgba(255,255,255,0.08) 0px,
                                    rgba(255,255,255,0.08) 6px,
                                    rgba(255,255,255,0.02) 6px,
                                    rgba(255,255,255,0.02) 12px
                                ),
                                linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))
                                `,
              }}
            />

            {/* GREEN BAR */}
            <div
              className="absolute left-0 top-0 h-full flex items-center justify-center text-[15px] text-white font-medium"
              style={{
                width: "30%",
                background: "linear-gradient(180deg, #3BAB78 0%, #2F8F67 100%)",
                borderRadius: "16px 0 0 16px",
              }}
            >
              {data.projects[5].actual}
            </div>

            {/* BLUE BAR */}
            <div
              className="absolute top-0 h-full flex items-center justify-center text-[15px] text-white font-medium"
              style={{
                left: "30%",
                width: "30%",
                background: "linear-gradient(180deg, #4C6FFF 0%, #2F4ED8 100%)",
              }}
            >
              {data.projects[5].ytdBudget - data.projects[5].actual}
            </div>

            {/* RIGHT VALUE */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <span className="text-white text-[15px] font-medium">
                {data.projects[5].gapYear}
              </span>
            </div>
          </div>
          <div className="text-[12px] text-white mt-[12px]">
            Note: Includes office consumables, rent and utilities, logistics /
            travel and IT support
          </div>
        </div>
      </div>
    </div>
  );
}
