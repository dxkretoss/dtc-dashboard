import React from 'react'
import { useEffect, useState } from "react"
import Papa from "papaparse"
import TalentSkeleton from '../../components/layout/Skelethon/TalentSkeleton'

const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/1zwMlxUzU9mQf20IOMYP9cCcnfDcqRYoO/export?format=csv&gid=1211838052"
export default function Talent() {
    const [raw, setRaw] = useState(null)

    useEffect(() => {
        fetch(SHEET_URL)
            .then(res => res.text())
            .then(csv => {
                const parsed = Papa.parse(csv, { header: true })
                setRaw(parsed.data.filter(r => r._1))
            })
    }, [])

    if (!raw) return <TalentSkeleton />

    /* ---------------------------------------
     SECTION 1 – EMPLOYED GRADUATES KPI
  --------------------------------------- */
    const employed = raw.find(r => r._1 === "Employed Graduates") || {}

    const employedActual = Number(employed._2 || 0)
    const employedTarget = Number(employed._3 || 40)
    const employedGap = Number(employed._4 || 0)
    const employedPercent = (employedActual / employedTarget) * 100

    /* ---------------------------------------
       SECTION 2 – COMPANY LIST
    --------------------------------------- */
    const companyRows = raw.filter(
        r => r._2 && !r._3 && !["Employed Graduates"].includes(r._1)
    )

    const companies = companyRows.map(r => ({
        name: r._1,
        value: Number(r._2)
    }))

    const maxCompany = Math.max(...companies.map(c => c.value))

    const logoMap = {
        ubisoft: "./Talent-Company/Ubisoft.svg",
        "my.games": "./Talent-Company/My.Games.svg",
        aldebaran: "./Talent-Company/Aldebaran.svg",
        "social quantum": "./Talent-Company/Social Quantum.svg",
        "esport & gaming agency": "./Talent-Company/eSport & Gaming Agency.svg",
        "zawaya gaming": "./Talent-Company/Zawaya Gaming.svg",
        analog: "./Talent-Company/Analog.svg",
        "nasr esport": "./Talent-Company/Nasr eSport.svg",
        unity: "./Talent-Company/Unity.svg",
        others: null
    }

    const companiesWithLogo = companies.map(c => ({
        ...c,
        img: logoMap[c.name.toLowerCase()] || null
    }))

    /* ---------------------------------------
       SECTION 3 – MONTHLY KPI BLOCK
    --------------------------------------- */
    const getRow = name => raw.find(r => r._1 === name) || {}

    const interns = getRow("Interns")
    const emiratis = getRow("Emirati Interns")
    const students = getRow("Students in HEIs")
    const graduates = getRow("University graduates")

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
                        <h2 className="text-[24px] text-[#FFFFFF] font-semibold">Talent development & attraction KIPs</h2>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-[21px] text-[#FFFFFF] mt-[24px] font-normal">Employed graduates</p>
                        <div className="text-[21px] text-[#FFFFFF] mt-[24px] font-normal">
                            2025 Target: <span className="font-semibold">{employedTarget}</span>
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
                                width: `${employedPercent}%`,
                                background: "linear-gradient(180deg, #3BAB78 0%, #2F8F67 100%)",
                            }}
                        >
                            <span>{employedActual}</span>
                            <span className="text-[#FFFFFF99] text-[12px]">Actual</span>
                        </div>


                        {/* Center text */}
                        {/* <div className="absolute inset-0 z-2 flex flex-col items-center justify-center text-[15px] text-white font-medium">
                            <span> {employedActual}</span>
                            <span className="text-[#FFFFFF99] text-[12px]">Actual</span>
                        </div> */}

                        {/* Gap */}
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-right">
                            <span className="text-white"> {employedGap}</span>
                            <span className="block text-[#626B73] text-[12px]">Gap</span>
                        </div>

                    </div>
                </div>

                <div
                    className="mt-[16px] rounded-[16px] p-2 relative overflow-hidden"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                        boxShadow: "0px 4px 26.9px 0px #00000005",
                        backdropFilter: "blur(108px)",
                    }}
                >
                    <div className="absolute inset-0 flex flex-col justify-between opacity-20">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-full h-[1px] bg-white/30" />
                        ))}
                    </div>

                    <div className="relative z-10 flex items-end justify-between h-[220px] px-4">
                        {companiesWithLogo.map((item) => {
                            const height = (item.value / maxCompany) * 180

                            return (
                                <div key={item.name} className="flex flex-col items-center w-full">

                                    {/* Bar */}
                                    <div className="relative w-[67px] h-[180px] flex items-end">
                                        <div
                                            className="w-full rounded-t-[8px] flex items-center bg-[#F3708C] justify-center text-[10px] text-white font-semibold"
                                            style={{
                                                height: `${height}px`,
                                            }}
                                        >
                                            {item.value}
                                        </div>
                                    </div>

                                    {/* Logo */}
                                    <div className="mt-2 w-[67px] flex items-center justify-center ">
                                        {item.img ? (
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                className="h-8 object-contain"
                                            />
                                        ) : (
                                            <span className="h-8 text-center text-xs text-white font-medium">
                                                {item.name}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="mt-4 rounded-[16px] p-2"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                        backdropFilter: "blur(108px)",
                        WebkitBackdropFilter: "blur(108px)",
                    }}>
                    <div className="grid grid-cols-4 gap-4">
                        {/* 1 Interns */}
                        <div
                            className="rounded-[16px] p-4 text-white flex flex-col items-center"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                                backdropFilter: "blur(108px)",
                                WebkitBackdropFilter: "blur(108px)",

                            }}
                        >
                            <p className="text-[12px] text-white mb-2 text-center">Interns</p>

                            <GamingeventDonut
                                total={Number(interns._4)}
                                green={Number(interns._2)}
                                blue={Number(interns._3) - Number(interns._2)}
                            />


                            <div className='flex gap-2 mt-[16px]'>
                                <p className="text-[#3BAB78] text-[12px] font-semibold">{interns._7} ({interns._6})</p>
                                <p className="text-[#E1E1E199] text-[12px] font-semibold">{interns._5}</p>
                            </div>
                        </div>

                        {/* 2 Emirati interns */}
                        <div
                            className="rounded-[16px] p-4 text-white flex flex-col items-center"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                                backdropFilter: "blur(108px)",
                                WebkitBackdropFilter: "blur(108px)",

                            }}
                        >
                            <p className="text-[12px] text-white mb-2 text-center">Emirati interns</p>

                            <GamingeventDonut
                                total={Number(emiratis._4)}
                                green={Number(emiratis._2)}
                                blue={Number(emiratis._3) - Number(emiratis._2)}
                            />

                            <div className='flex gap-2 mt-[16px]'>
                                <p className="text-[#3BAB78] text-[12px] font-semibold">{emiratis._7} ({emiratis._6})</p>
                                <p className="text-[#E1E1E199] text-[12px] font-semibold">{emiratis._5}</p>
                            </div>
                        </div>

                        {/* 3 Student enrolled in HEIS */}
                        <div
                            className="rounded-[16px] p-4 text-white flex flex-col items-center"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                                backdropFilter: "blur(108px)",
                                WebkitBackdropFilter: "blur(108px)",

                            }}
                        >
                            <p className="text-[12px] text-white mb-2 text-center">Student enrolled in HEIS</p>

                            <GamingeventDonut
                                total={Number(students._4)}
                                green={Number(students._2)}
                                blue={Number(students._3) - Number(students._2)}
                            />

                            <div className='flex gap-2 mt-[16px]'>
                                <p className="text-[#3BAB78] text-[12px] font-semibold">{students._7} ({students._6})</p>
                                <p className="text-[#E1E1E199] text-[12px] font-semibold">{students._5}</p>
                            </div>
                        </div>

                        {/* 4 University graduates */}
                        <div
                            className="rounded-[16px] p-4 text-white flex flex-col items-center"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                                backdropFilter: "blur(108px)",
                                WebkitBackdropFilter: "blur(108px)",

                            }}
                        >
                            <p className="text-[12px] text-white mb-2 text-center">University graduates</p>
                            <GamingeventDonut
                                total={Number(graduates._4)}
                                green={Number(graduates._2)}
                                blue={Number(graduates._3) - Number(graduates._2)}
                            />

                            <div className='flex gap-2 mt-[16px]'>
                                <p className="text-[#3BAB78] text-[12px] font-semibold">{graduates._7} ({graduates._6})</p>
                                <p className="text-[#E1E1E199] text-[12px] font-semibold">{graduates._5}</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[10px] flex gap-2'>
                        <div className='flex gap-1  items-center'>
                            <div className='w-[10px] h-[10px] rounded-[4px] bg-[#3BAB78]'></div>
                            <span className='text-[11px] text-[#BDBDBD]'>Completed</span>
                        </div>
                        <div className='flex gap-1  items-center'>
                            <div className='w-[10px] h-[10px] rounded-[4px] bg-[#E1E1E199]'></div>
                            <span className='text-[11px] text-[#BDBDBD]'>Gap bet. actual and monthly target</span>
                        </div>
                    </div>
                </div>

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
                    stroke="#E1E1E133"
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
                    {total}
                </span>
            </div>

        </div>
    )
}