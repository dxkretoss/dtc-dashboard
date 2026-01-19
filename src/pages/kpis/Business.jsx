import React from 'react'
import { useEffect, useState } from "react"
import Papa from "papaparse"
import RevenueJobsChart from '../../components/Charts/RevenueJobsChart'
import BusinessSkeleton from '../../components/layout/Skelethon/BusinessSkeleton'

const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/1zwMlxUzU9mQf20IOMYP9cCcnfDcqRYoO/export?format=csv&gid=622587557"

/* ---------- helpers ---------- */
const toNumber = (v) =>
  v ? Number(v.toString().replace(/,/g, "").replace("%", "")) : 0;

const DoubleCircle = ({ value }) => {
  return (
    <div className="relative flex items-center justify-center my-6">
      {/* Outer Circle */}
      <div className="relative w-[110px] h-[110px] rounded-full bg-[#4ABF8A33] flex items-center justify-center">
        
        {/* Inner Circle */}
        <div className="absolute bottom-0 w-[70px] h-[70px] rounded-full bg-[#4ABF8A] flex flex-col items-center justify-center">
          <span className="text-[11px] text-white/80">Actual</span>
          <span className="text-[14px] font-semibold text-white">
            {value}
          </span>
        </div>

      </div>
    </div>
  );
};

export default function Business() {
const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((csv) => {
        const parsed = Papa.parse(csv, { header: true });
        setRows(parsed.data.filter((r) => r._1));
      });
  }, []);

  if (rows.length === 0) {
    return <BusinessSkeleton />;
    }

  /* ---------- KPI DATA ---------- */
  const jobs = rows.find((r) => r._1 === "Jobs");
  const revenue = rows.find((r) => r._1 === "Revenue (AED M)");
  const emirati = rows.find((r) => r._1 === "Emirati Workforce (%)");

  const avgCost = rows.find((r) => r._1 === "Average cost per FTE");
  const jobsSupported = rows.find((r) => r._1 === "% of Jobs supported");

  /* ---------- Subsidized by type ---------- */
  const TYPE_BG = ["#DBDADA66", "#DBDADA4D", "#DBDADA33", "#DBDADA1A"];

  const typeStart = rows.findIndex((r) => r._1 === "Jobs subsidized - by type");
  const byType = rows.slice(typeStart + 1, typeStart + 5).map((r) => ({
    name: r._1,
    value: toNumber(r._2),
    pct: toNumber(r._3),
  }));

  /* ---------- Subsidized by nationality ---------- */
  const nationalityStart = rows.findIndex(
    (r, i) => r._1 === "Jobs subsidized - by type" && rows[i + 1]?._3 === ""
  );
  const byNationality = rows
    .slice(nationalityStart + 1, nationalityStart + 12)
    .map((r) => ({
      name: r._1,
      value: toNumber(r._2),
    }));

    const maxNationalityValue = Math.max(
    ...byNationality.map((i) => i.value)
    );

    const nationalityData = byNationality.map((item) => ({
    ...item,
    pct: Math.round((item.value / maxNationalityValue) * 100),
    }));

  /* ---------- Companies ---------- */
  const companiesStart = rows.findIndex((r) => r._1 === "Number of companies");
  const companies = rows.slice(companiesStart + 1).map((r) => ({
    type: r._1,
    actual: toNumber(r._2),
    target: toNumber(r._3),
    gap: toNumber(r._4),
  }));

  /* ---------- Revenue & Jobs per company ---------- */
const revenueJobsStart = rows.findIndex(
  (r) => r._1 === "Revenue & jobs per company"
);

const revenueJobsEnd = rows.findIndex(
  (r, i) =>
    i > revenueJobsStart &&
    [
      "Jobs subsidized - by type",
      "Number of companies"
    ].includes(r._1)
);


const revenueJobsData = rows
  .slice(revenueJobsStart + 1, revenueJobsEnd)
  .filter((r) => r._1 && r._2 && r._3)
  .map((r) => ({
    company: r._1,
    jobs: toNumber(r._2),
    revenue: toNumber(r._3),
  }));

console.log(revenueJobsData);



    return (
        <div className="w-full">
            <div className="rounded-[16px] p-6" style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)',
                boxShadow: ' 0px 4px 26.9px 0px #00000005',
                backdropFilter: "blur(108px)",
            }}>
                {/* Header */}
                <div className="mb-4">
                    <h2 className="text-[24px] text-[#FFFFFF] font-semibold">Business attraction KIPs</h2>
                </div>
                {/* ================= KPIs ================= */}
                <div className="grid grid-cols-3 gap-4">
                {[jobs, revenue, emirati].map((kpi) => (
                    <div
                    key={kpi?._1}
                    className="rounded-[16px] p-4 text-white bg-white/5"
                    >
                    <p className="text-[12px] text-center">{kpi?._1}</p>
                    <DoubleCircle value={toNumber(kpi?._2)} />
                    <p className="text-[12px] text-center">
                        2025 Target:
                        <span className="text-[#4ABF8A]"> {kpi?._3}</span>
                    </p>
                    </div>
                ))}
                </div>

                {/* ================= Avg Cost / Jobs Supported ================= */}
                <div className="grid grid-cols-2 gap-4 mt-[16px] rounded-[16px]">
                    <div>
                        <h1 className='text-[21px] text-white mb-1'>Average cost per FTE (AED)</h1>
                        <div className="rounded-[16px] p-4 text-white" style={{
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                            backdropFilter: "blur(108px)",
                            WebkitBackdropFilter: "blur(108px)",
                        }}>
                            <h2 className='text-[#1FCC7D] font-bold text-[32px]'>{toNumber(avgCost?._2) / 1000}k</h2>
                            <p className='text-[14px] font-normal mt-[24px]'>Target: {toNumber(avgCost?._3) / 1000}k</p>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-[21px] text-white mb-1'>% of jobs supported</h1>
                        <div className="rounded-[16px] p-4 text-white" style={{
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                            backdropFilter: "blur(108px)",
                            WebkitBackdropFilter: "blur(108px)",
                        }}>
                            <h2 className='text-[#FF4D50] font-bold text-[32px]'>{jobsSupported?._2}</h2>
                            <p className='text-[14px] font-normal mt-[24px]'>Target: {jobsSupported?._3}</p>
                        </div>
                    </div>
                </div>

                {/* ================= Jobs subsidized ================= */}
                <div className="mt-[16px]">
                    <h2 className="text-[21px] text-[#FFFFFF] font-normal">Jobs subsidized</h2>

                    <div className="grid grid-cols-2 gap-4 mt-[10px]">

                        {/* ================= BY TYPE ================= */}
                        <div
                            className="rounded-[16px] p-4 text-white"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                                backdropFilter: "blur(108px)",
                            }}
                        >
                            <h2 className="text-[15px] font-semibold mb-4">By Type</h2>

                            {byType?.map((item, index) => (
                                <div key={item.name} className="mb-4">
                                    <div className="flex items-center text-[10px] gap-2 mb-1 text-white">
                                        <span className='w-[80px]'>{item.name}</span>

                                        <div className='flex w-full items-center text-center gap-2'>
                                            <div
                                                className="w-full h-[60px] overflow-hidden rounded-[8px]"
                                                style={{
                                                    width: `${item.pct}%`,
                                                    background: TYPE_BG[index] || TYPE_BG[TYPE_BG.length - 1],
                                                }}
                                            />
                                            <span>
                                                {item.value} ({item.pct}%)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        

                        {/* ================= BY NATIONALITY ================= */}
                        <div
                            className="rounded-[16px] p-4 text-white"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                                backdropFilter: "blur(108px)",
                            }}
                        >
                            <h2 className="text-[15px] font-semibold mb-4">By Nationality</h2>

                            {nationalityData.map((item) => (
                            <div key={item.name} className="mb-3">
                                <div className="flex items-center text-[10px] gap-2 text-white">
                                
                                {/* Label */}
                                <span className="w-[60px] flex items-center gap-1">
                                    {item.flag} {item.name}
                                </span>

                                {/* Bar */}
                                <div className="flex w-full items-center gap-2">
                                    
                                    {/* Track */}
                                    <div className="w-full h-[14px] rounded-[4px] overflow-hidden">
                                    
                                    {/* Fill */}
                                    <div
                                        className="h-full rounded-[4px]"
                                        style={{
                                        width: `${item.pct}%`,
                                        background:
                                            item.name === "UAE" ? "#F77860" : "#DBDADA66",
                                        }}
                                    />
                                    </div>

                                    {/* Value */}
                                    <span className="min-w-[50px] text-right text-white/80">
                                        {item.value} ({item.pct}%)
                                    </span>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>

                    </div>
                </div>


                <div className="mt-[16px]">
                    <h2 className="text-[21px] text-[#FFFFFF] font-normal">Number of companies in the ecosystem</h2>

                    <div className="rounded-[16px] p-4  mt-[10px] text-white"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                            backdropFilter: "blur(108px)",
                        }}>
                            
                        <div className="grid grid-cols-3 gap-4 mt-[10px]">
                            {companies.map((c) => (
                            <div key={c.type}>
                                <h2 className='text-[12px] text-[#85939F]'>{c.type} companies 2025 target: <span className='text-[15px] text-[#FFFFFF]'>{c.target}</span></h2>
                                <div className="rounded-[16px] p-1 mt-1 text-white"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                                        backdropFilter: "blur(108px)",
                                    }}>

                                    <div className="relative h-[40px] rounded-[16px] overflow-hidden">

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
                                            className="absolute left-0 top-0 h-full rounded-[14px] flex flex-col text-[12px] items-center justify-center text-white font-medium"
                                            style={{
                                                width: `${(c.actual / (c.target || c.actual)) * 100}%`,
                                                background: "linear-gradient(180deg, #3BAB78 0%, #2F8F67 100%)",
                                            }}
                                        >
                                            <span>Actual {c.actual}</span>
                                        </div>

                                        {/* Gap */}
                                        {c.gap > 0 && (
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-right text-[12px]">
                                            <span className="text-white">Gap {c.gap}</span>
                                        </div>
                                        )}

                                    </div>

                                </div>
                            </div>
                            ))}
                           
                        </div>

                    </div>
                </div>

                <div className="mt-[16px]">
                    <h2 className="text-[21px] text-white font-normal">
                        Revenue & jobs per company
                    </h2>

                    <RevenueJobsChart data={revenueJobsData}/>
                </div>



            </div>
        </div>
    )
}

