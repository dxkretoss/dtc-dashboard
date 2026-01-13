import React from 'react'
import RevenueJobsChart from '../../components/Charts/RevenueJobsChart'

export default function Business() {
    const companies = [
        { img: './Business/My Whoosh.svg', name: 'My Whoosh' },
        { img: './Business/Aldebaran.svg', name: 'Aldebaran' },
        { img: './Business/Ubisoft.svg', name: 'Ubisoft' },
        { img: './Business/Ubisoft.svg', name: 'Ubisoft' },
        { img: './Business/Social Quantum.svg', name: 'Social Quantum' },
        { img: './Business/Nasr eSport.svg', name: 'Nasr eSport' },
    ]
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
                <div className="grid grid-cols-3 gap-4 mt-4 rounded-[16px]">

                    <div
                        className="rounded-[16px] p-4 text-white"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                            backdropFilter: "blur(108px)",
                            WebkitBackdropFilter: "blur(108px)",
                        }}
                    >
                        <p className="text-[12px] text-white mb-2 text-center">Jobs</p>

                        <p className="text-[12px] text-white mb-2 text-center">2025 Target:<span className='text-[#4ABF8A]'> 1,100</span></p>

                    </div>

                    <div
                        className="rounded-[16px] p-4 text-white"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                            backdropFilter: "blur(108px)",
                            WebkitBackdropFilter: "blur(108px)",
                        }}
                    >
                        <p className="text-[12px] text-white mb-2 text-center">Revenue AED Mn</p>
                        <p className="text-[12px] text-white mb-2 text-center">2025 Target:<span className='text-[#4ABF8A]'> 600</span></p>

                    </div>

                    <div
                        className="rounded-[16px] p-4 text-white"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                            backdropFilter: "blur(108px)",
                            WebkitBackdropFilter: "blur(108px)",
                        }}
                    >
                        <p className="text-[12px] text-white mb-2 text-center">Emirati workforce</p>
                        <p className="text-[12px] text-white mb-2 text-center">2025 Target:<span className='text-[#4ABF8A]'> 66</span></p>

                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-[16px] rounded-[16px]">
                    <div>
                        <h1 className='text-[21px] text-white mb-1'>Average cost per FTE (AED)</h1>
                        <div className="rounded-[16px] p-4 text-white" style={{
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                            backdropFilter: "blur(108px)",
                            WebkitBackdropFilter: "blur(108px)",
                        }}>
                            <h2 className='text-[#1FCC7D] font-bold text-[32px]'>60k</h2>
                            <p className='text-[14px] font-normal mt-[24px]'>Target: 54k</p>
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
                            <h2 className='text-[#FF4D50] font-bold text-[32px]'>65%</h2>
                            <p className='text-[14px] font-normal mt-[24px]'>Target: 54k</p>
                        </div>
                    </div>
                </div>

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

                            {[
                                { name: "Development", value: 144, pct: 50, bg: '#DBDADA66' },
                                { name: "Operations", value: 106, pct: 37, bg: '#DBDADA4D' },
                                { name: "Publishing", value: 31, pct: 11, bg: '#DBDADA33' },
                                { name: "Esport", value: 6, pct: 2, bg: '#DBDADA1A' },
                            ].map((item) => (
                                <div key={item.name} className="mb-4">
                                    <div className="flex items-center text-[10px] gap-2 mb-1 text-white">
                                        <span className='w-[80px]'>{item.name}</span>

                                        <div className='flex w-full items-center text-center gap-2'>
                                            <div
                                                className="w-full h-[60px] overflow-hidden rounded-[8px]"
                                                style={{
                                                    width: `${item.pct}%`,
                                                    background: `${item.bg}`,
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

                            {[
                                { name: "Russia", value: 107, pct: 50, flag: "🇷🇺", bg: '#DBDADA66' },
                                { name: "Others", value: 79, pct: 50, flag: "🌐", bg: '#DBDADA66' },
                                { name: "India", value: 21, pct: 50, flag: "🇮🇳", bg: '#DBDADA66' },
                                { name: "Egypt", value: 19, pct: 50, flag: "🇪🇬", bg: '#DBDADA66' },
                                { name: "UK", value: 12, pct: 50, flag: "🇬🇧", bg: '#DBDADA66' },
                                { name: "Turkey", value: 10, pct: 50, flag: "🇹🇷", bg: '#DBDADA66' },
                                { name: "Jordan", value: 10, pct: 50, flag: "🇯🇴", bg: '#DBDADA66' },
                                { name: "UAE", value: 8, pct: 50, flag: "🇦🇪", bg: '#F77860' },
                                { name: "Lebanon", value: 8, pct: 50, flag: "🇱🇧", bg: '#DBDADA66' },
                                { name: "Canada", value: 7, pct: 50, flag: "🇨🇦", bg: '#DBDADA66' },
                                { name: "Sudan", value: 6, pct: 50, flag: "🇸🇩", bg: '#DBDADA66' },
                            ].map((item) => (
                                <div key={item.name} className="mb-3">

                                    <div className="flex items-center text-[10px] gap-2 mb-1 text-white">
                                        <span className='w-[80px]'>{item.flag} {item.name}</span>

                                        <div className='flex w-full items-center text-center gap-2'>
                                            <div
                                                className="w-full h-[16px] overflow-hidden rounded-[4px]"
                                                style={{
                                                    width: `${item.pct}%`,
                                                    background: `${item.bg}`,
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
                            <div>
                                <h2 className='text-[12px] text-[#85939F]'>Small companies 2025 target: <span className='text-[15px] text-[#FFFFFF]'>118</span></h2>
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
                                                width: `${70}%`,
                                                background: "linear-gradient(180deg, #3BAB78 0%, #2F8F67 100%)",
                                            }}
                                        >
                                            <span>Actual 113</span>
                                        </div>

                                        {/* Gap */}
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-right text-[12px]">
                                            <span className="text-white">Gap 5</span>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div>
                                <h2 className='text-[12px] text-[#85939F]'>Medium companies 2025 target: <span className='text-[15px] text-[#FFFFFF]'>5</span></h2>
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
                                                width: `${100}%`,
                                                background: "linear-gradient(180deg, #3BAB78 0%, #2F8F67 100%)",
                                            }}
                                        >
                                            <span>Actual 5</span>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div>
                                <h2 className='text-[12px] text-[#85939F]'>Large companies 2025 target: <span className='text-[15px] text-[#FFFFFF]'>0</span></h2>
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
                                                width: `${100}%`,
                                                background: "linear-gradient(180deg, #3BAB78 0%, #2F8F67 100%)",
                                            }}
                                        >
                                            <span>Actual 1</span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-[16px]">
                    <h2 className="text-[21px] text-white font-normal">
                        Revenue & jobs per company
                    </h2>

                    <RevenueJobsChart />
                </div>



            </div>
        </div>
    )
}

