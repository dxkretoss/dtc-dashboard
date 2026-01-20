import React from 'react'
import { useEffect, useState } from "react"
import Papa from "papaparse"
import { StrategicSkeleton } from '../../components/layout/Skelethon/StrategicSkeleton'

const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/1zwMlxUzU9mQf20IOMYP9cCcnfDcqRYoO/export?format=csv&gid=1338125721"


export default function Strategic() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(SHEET_URL)
            .then(res => res.text())
            .then(csv => {
                const parsed = Papa.parse(csv, { header: true })

                const clean = parsed.data
                    .filter(r => r._1)  // remove empty rows
                    .map(r => ({
                        kpi: r._1.trim(),
                        actual: Number(r._2.replace(/,/g, "")) || 0,
                        target: Number(r._3.replace(/,/g, "")) || 0,
                        gap: Number(r._4.replace(/,/g, "")) || 0,
                    }))

                setData(clean)
            })
    }, [])

    if (!data) return <StrategicSkeleton />


    const get = name => data.find(d => d.kpi === name)

    const totalGDP = get("Total GDP")
    const gamingJobs = get("Gaming Jobs")
    const small = get("Small companies")
    const medium = get("Medium companies")
    const large = get("Large companies")
    const costJob = get("Cost per Job (AED)")

    const revenue = get("Revenues (AED M)")
    const revenueFTE = get("Revenue per FTE (AED)")

    const attendance = get("Event Attendees (k)")
    const newAtt = get("Event Attendees (k) new")
    const recAtt = get("Event Attendees (k) rec.")


    const gdpPercent = (totalGDP.actual / totalGDP.target) * 100

    const pending =
        gamingJobs.actual - small.actual - medium.actual - large.actual

    const BAR_HEIGHT = 182

    // Only include pending if it exists
    const activeTotal =
        (pending > 0 ? pending : 0) +
        small.actual +
        medium.actual +
        large.actual

    const hPending = pending > 0 ? (pending / activeTotal) * BAR_HEIGHT : 0
    const hSmall = (small.actual / activeTotal) * BAR_HEIGHT
    const hMedium = (medium.actual / activeTotal) * BAR_HEIGHT
    const hLarge = (large.actual / activeTotal) * BAR_HEIGHT

    return (
        <div className="w-full">
            <div className="rounded-[16px] p-6" style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)',
                boxShadow: ' 0px 4px 26.9px 0px #00000005',
                backdropFilter: "blur(108px)",
            }}>
                {/* Header */}
                <div className="mb-4">
                    <div>
                        <h2 className="text-[24px] text-[#FFFFFF] font-semibold">Strategic KPIs</h2>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-[21px] text-[#FFFFFF] mt-[24px] font-normal">Total GDP</p>
                        <div className="text-[21px] text-[#FFFFFF] mt-[24px] font-normal">
                            2025 Target: <span className="font-semibold">AED {totalGDP.target}M</span>
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
                                width: `${gdpPercent}%`,
                                background: "linear-gradient(180deg, #3BAB78 0%, #2F8F67 100%)",
                            }}
                        >
                            <span>AED {totalGDP.actual}M</span>
                            <span className="text-[#FFFFFF99] text-[12px]">Actual</span>
                        </div>

                        {/* Gap */}
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-right">
                            <span className="text-white">{totalGDP.gap}</span>
                            <span className="block text-[#626B73] text-[12px]">Gap</span>
                        </div>

                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4 rounded-[16px] p-2"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                        backdropFilter: "blur(108px)",
                        WebkitBackdropFilter: "blur(108px)",
                    }}>

                    {/* 1️⃣ Gaming Jobs */}
                    <div
                        className="rounded-[16px] p-4 text-white"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                            backdropFilter: "blur(108px)",
                            WebkitBackdropFilter: "blur(108px)",
                        }}
                    >
                        <p className="text-[12px] text-white mb-2 text-center">Gaming Jobs</p>

                        <div className="flex gap-4 mt-[24px]">

                            {/* STACKED BAR */}
                            <div className="w-[97px] h-[182px] bg-white/10 rounded-t-[16px] overflow-hidden flex flex-col">

                                {/* Pending */}
                                {pending > 0 && (
                                    <div style={{ height: `${hPending}px` }} className="flex">
                                        <div
                                            className="w-full"
                                            style={{
                                                background: `
                                                        repeating-linear-gradient(
                                                            -45deg,
                                                            #FFFFFF1A 0px,
                                                            #FFFFFF1A 1px,
                                                            transparent 1px,
                                                            transparent 8px
                                                        ),
                                                        linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))
                                                        `,
                                            }}
                                        />
                                    </div>
                                )}

                                {/* Small */}
                                <div
                                    className="bg-[#CD3152]"
                                    style={{ height: `${hSmall}px` }}
                                />

                                {/* Medium */}
                                <div
                                    className="bg-[#F77860]"
                                    style={{ height: `${hMedium}px` }}
                                />

                                {/* Large */}
                                <div
                                    className="bg-[#E3DCD3]"
                                    style={{ height: `${hLarge}px` }}
                                />
                            </div>


                            {/* labels */}
                            <div className="flex flex-col justify-between h-[182px] text-[10px] text-white relative">

                                {pending > 0 && (
                                    <div className="flex items-center relative" style={{ height: `${hPending}px` }}>
                                        <div className="w-[30px] border-t border-dashed border-[#C7CACC]" />
                                        <div className="pl-3 whitespace-nowrap">
                                            Pending <span className="text-white">{pending}</span>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center" style={{ height: `${hSmall}px` }}>
                                    <div className="w-[30px] border-t border-dashed border-[#C7CACC]" />
                                    <div className="pl-3 whitespace-nowrap">
                                        Small companies <span className="text-white">{small.actual}</span>
                                    </div>
                                </div>

                                <div className="flex items-center" style={{ height: `${hMedium}px` }}>
                                    <div className="w-[30px] border-t border-dashed border-[#C7CACC]" />
                                    <div className="pl-3 whitespace-nowrap">
                                        Medium companies <span className="text-white">{medium.actual}</span>
                                    </div>
                                </div>

                                <div className="flex items-center" style={{ height: `${hLarge}px` }}>
                                    <div className="w-[30px] border-t border-dashed border-[#C7CACC]" />
                                    <div className="pl-3 whitespace-nowrap">
                                        Large companies <span className="text-white">{large.actual}</span>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="flex justify-between text-[11px] mt-[24px]">
                            <div className='flex'>
                                <span className='text-white'>Cost per job: </span>&nbsp;
                                <span className='text-[#929BA4]'> AED 60K</span>
                            </div>
                            <div className='flex'>
                                <span className='text-white'>Target: </span>&nbsp;
                                <span className='text-[#929BA4]'> AED 50K</span>
                            </div>
                        </div>
                    </div>

                    {/* 2️⃣ Revenue */}
                    <div
                        className="rounded-[16px] p-4 text-white flex flex-col items-center"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                            backdropFilter: "blur(108px)",
                            WebkitBackdropFilter: "blur(108px)",

                        }}
                    >
                        <p className="text-[12px] text-white mb-2 text-center">Revenue (AED, M)</p>

                        {/* donut */}
                        <Donut
                            percent={(revenue.actual / revenue.target) * 100}
                            value={`${revenue.target}M`}
                        />

                        <p className="text-[#3BAB78] text-[12px] font-semibold mt-[16px]">{revenue.actual}M</p>

                        <div className='flex gap-1 items-center mt-[16px]'>
                            <span className='bg-[#3BAB78] h-[10px] w-[16px] rounded-[4px]'></span>
                            <p className="text-[11px] text-white  ">Complete</p>
                        </div>

                        <div className="flex justify-between w-full text-[11px] text-white mt-[16px]">
                            <div className='flex'>
                                <span className='text-white'>Revenue per FTE: </span>&nbsp;
                                <span className='text-[#929BA4]'> AED  {revenueFTE.actual.toLocaleString()}</span>
                            </div>
                            <div className='flex'>
                                <span className='text-white'>Target: </span>&nbsp;
                                <span className='text-[#929BA4]'> AED {revenueFTE.target.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    {/* 3️⃣ Attendance */}
                    <div
                        className="rounded-[16px] p-4 text-white flex flex-col items-center"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                            backdropFilter: "blur(108px)",
                            WebkitBackdropFilter: "blur(108px)",
                        }}
                    >
                        <p className="text-[12px] text-white mb-2 text-center">
                            Total gaming event attendance
                        </p>

                        {/* donut */}
                        <GamingeventDonut
                            total={attendance.target}
                            green={newAtt.actual}
                            blue={recAtt.actual}
                        />

                        <div className="flex font-semibold gap-4 mt-[16px] text-[12px]">
                            <span className="text-[#3BAB78]">{newAtt.actual / 1000}K</span>
                            <span className="text-[#548DF6]">{recAtt.actual / 1000}K</span>
                        </div>

                        <div className="flex gap-4 text-[11px] mt-[64px] text-white">
                            <div className='flex gap-1 items-center'>
                                <span className='bg-[#3BAB78] h-[10px] w-[16px] rounded-[4px]'></span>
                                <span>New attendees</span>
                            </div>

                            <div className='flex gap-1 items-center'>
                                <span className='bg-[#548DF6] h-[10px] w-[16px] rounded-[4px]'></span>
                                <span>Recurrent attendees</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Donut({ percent, value, label }) {
    const radius = 46
    const stroke = 10
    const normalizedRadius = radius - stroke * 0.5
    const circumference = normalizedRadius * 2 * Math.PI
    const strokeDashoffset =
        circumference - (percent / 100) * circumference

    return (
        <div className="relative w-[116px] h-[116px]">
            <svg height="116" width="116" className="rotate-[-90deg]">
                {/* background ring */}
                <circle
                    stroke="rgba(255,255,255,0.1)"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx="58"
                    cy="58"
                />

                {/* progress ring */}
                <circle
                    stroke="#3BAB78"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={`${circumference} ${circumference}`}
                    style={{
                        strokeDashoffset,
                        transition: "stroke-dashoffset 0.6s ease",
                    }}
                    r={normalizedRadius}
                    cx="58"
                    cy="58"
                />
            </svg>

            {/* center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[#929BA4] text-[12px]">2025</span>
                <span className="text-[#929BA4] text-[12px]">target</span>
                <span className="text-white font-semibold text-[15px]">{value}</span>
            </div>
        </div>
    )
}

function GamingeventDonut({ total, green, blue }) {
    const radius = 46
    const stroke = 10
    const normalizedRadius = radius - stroke / 2
    const circumference = normalizedRadius * 2 * Math.PI

    const greenPct = green / total
    const bluePct = blue / total

    const greenLen = greenPct * circumference
    const blueLen = bluePct * circumference

    return (
        <div className="relative w-[116px] h-[116px]">
            <svg width="116" height="116" className="rotate-[-90deg]">

                {/* background */}
                <circle
                    stroke="rgba(255,255,255,0.12)"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx="58"
                    cy="58"
                />

                {/* BLUE — full base arc */}
                <circle
                    stroke="#548DF6"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={`${blueLen} ${circumference}`}
                    strokeDashoffset={-greenLen}
                    r={normalizedRadius}
                    cx="58"
                    cy="58"
                />

                {/* GREEN — drawn last to overlap blue */}
                <circle
                    stroke="#3BAB78"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={`${greenLen} ${circumference}`}
                    strokeDashoffset={0}
                    r={normalizedRadius}
                    cx="58"
                    cy="58"
                />
            </svg>

            {/* center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[#929BA4] text-[12px]">2025</span>
                <span className="text-[#929BA4] text-[12px]">target</span>
                <span className="text-white font-semibold text-[15px]">
                    {Math.round(total / 1000)}K
                </span>
            </div>

        </div>
    )
}

