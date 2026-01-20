import React, { useState, useEffect } from "react";
import AttendanceChart from "../../components/Charts/AttendanceChart";
import UniqueAttendanceChart from "../../components/Charts/UniqueAttendanceChart";
import Papa from "papaparse";
import CommunityEngagementSkeleton from "../../components/layout/Skelethon/CommunitySkeleton";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1zwMlxUzU9mQf20IOMYP9cCcnfDcqRYoO/export?format=csv&gid=309630118";

export default function Community() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((csv) => {
        const parsed = Papa.parse(csv, {
          header: false,
          skipEmptyLines: true,
        });

        const map = {};

        parsed.data.forEach((row) => {
          const kpi = row[1]?.trim();
          const actualRaw = row[2];
          const targetRaw = row[3];
          const gapRaw = row[4];

          // Skip section headers / empty rows
          if (!kpi) return;
          if (["KPI", "Event", "Actual"].includes(kpi)) return;
          if (kpi.includes("KPIs")) return;

          const toNumber = (val) =>
            Number(String(val || "0").replace(/,/g, ""));

          map[kpi.toLowerCase()] = {
            actual: toNumber(actualRaw),
            target: toNumber(targetRaw),
            gap: toNumber(gapRaw),
          };
        });

        setData(map);
      });
  }, []);

  if (!data) return <CommunityEngagementSkeleton/>;

  console.log(data);

  const attendance = data["attendance per event"] || {
    actual: 0,
    target: 1,
    gap: 0,
  };

  const fillPercent = Math.min(
    (attendance.actual / attendance.target) * 100,
    100,
  );

  const attendanceChartData = [
    "mefcc",
    "mother of the nation",
    "animenia",
    "brakdroom games",
    "najah expo",
    "tokyo games show",
    "brg - yas mall",
    "compass",
    "tawdheef",
    "others",
  ]
    .map((key) => {
      const item = data[key];
      if (!item) return null;

      return {
        name: key.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        unique: item.target || 0,
        recurrent: item.actual || 0,
        remaining: Math.max((item.target || 0) - (item.actual || 0), 0),
      };
    })
    .filter(Boolean);

  const cards = [
    {
      title: "Social media impressions (k)",
      ...data["social media impressions"],
    },
    {
      title: "Social media followers (k)",
      ...data["social media followers"],
    },
    {
      title: "Peak viewership (k)",
      ...data["peak viewership"],
    },
    {
      title: "Website visits (k)",
      ...data["website visits"],
    },
  ];

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
              Community engagement KPIs
            </h2>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-[21px] text-[#FFFFFF] mt-[24px] font-normal">
              Attendance per event (k)
            </p>
            <div className="text-[21px] text-[#FFFFFF] mt-[24px] font-normal">
              2025 Target:{" "}
              <span className="font-semibold">
                {attendance.target / 1000} K
              </span>
            </div>
          </div>
        </div>

        {/* GDP Bar */}
        <div
          className="h-[77px] rounded-[16px] p-2"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
            boxShadow: "0px 4px 26.9px 0px #00000005",
            backdropFilter: "blur(108px)",
          }}
        >
          <div className="relative h-[61px] rounded-[16px] overflow-hidden">
            {/* Full-width diagonal background (represents TOTAL = 60K) */}
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

            {/* Green filled progress = 35K */}
            <div
              className="absolute left-0 top-0 h-full rounded-[14px] flex flex-col items-center justify-center text-[15px] text-white font-medium"
              style={{
                width: `${fillPercent}%`,
                background: "linear-gradient(180deg, #3BAB78 0%, #2F8F67 100%)",
              }}
            >
              <span>{attendance.actual / 1000}K</span>
              <span className="text-[#FFFFFF99] text-[12px]">Actual</span>
            </div>

            {/* Gap = remaining 25K */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-right">
              <span className="text-white">{attendance.gap / 1000}K</span>
              <span className="block text-[#626B73] text-[12px]">Gap</span>
            </div>
          </div>
        </div>

        {/* AttendanceChart */}

        <div className="mt-[16pt]">
          <AttendanceChart data={attendanceChartData} />
        </div>

        <div className="mt-[16px]">
          <div className="flex justify-between">
            <h2 className="text-[21px] text-[#FFFFFF] font-normal">
              Digital marketing
            </h2>
            <div className="flex gap-[16px] items-center">
              <div className="flex gap-[8px] items-center">
                <div className="bg-[#433EFB] w-[10px] h-[10px] rounded-[4px]"></div>
                <span className="text-[#BDBDBD] text-[11px]">
                  Unique attendance
                </span>
              </div>

              <div className="flex gap-[8px] items-center">
                <div className="bg-[#4E5F70] w-[10px] h-[10px] rounded-[4px]"></div>
                <span className="text-[#BDBDBD] text-[11px]">
                  Unique attendance
                </span>
              </div>
            </div>
          </div>

          <div
            className="rounded-[16px] p-4  mt-[10px] text-white"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
              backdropFilter: "blur(108px)",
            }}
          >
            <div className="grid grid-cols-2 gap-4 mt-[10px]">
              {cards.map((item, index) => (
                <ProgressCard
                  key={index}
                  title={item.title}
                  actual={item.actual}
                  target={item.target}
                  gap={item.gap}
                />
              ))}
            </div>            
          </div>
        </div>

        <div className="mt-[16px]">
          <h2 className="text-[21px] text-[#FFFFFF] font-normal">
            Total unique attendance per event
          </h2>

          <div className="grid grid-cols-2 mt-[8px]">
            <div
              className="p-3 rounded-[16px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                backdropFilter: "blur(108px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input type="checkbox" />
                <span
                  style={{ opacity: 0.8 }}
                  className="text-[#BDBDBD] text-[11px]"
                >
                  Gap to target
                </span>
              </div>

              <UniqueAttendanceChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressCard({ title, actual, target, gap }) {
  const percentage = target ? Math.min((actual / target) * 100, 100) : 0;

  return (
    <div
      className="rounded-[16px] p-3 mt-1 text-white"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
        backdropFilter: "blur(108px)",
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-[12px] text-white">{title}</h2>
        <h2 className="text-[12px] text-white">Target: {target}</h2>
      </div>

      {/* Progress Bar */}
      <div className="relative h-[40px] rounded-[16px] overflow-hidden mt-[12px]">
        {/* Background */}
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

        {/* Filled */}
        <div
          className="absolute left-0 top-0 h-full rounded-[14px] flex items-center justify-center text-[12px] font-medium"
          style={{
            width: `${percentage}%`,
            background: "#433EFB",
          }}
        >
          {actual}
        </div>

        {/* Gap */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px]">
          {gap}
        </div>
      </div>
    </div>
  );
}
