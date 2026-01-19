import React from 'react'
import AttendanceChart from '../../components/Charts/AttendanceChart'

export default function Community() {
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
                        <h2 className="text-[24px] text-[#FFFFFF] font-semibold">Community engagement KPIs</h2>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-[21px] text-[#FFFFFF] mt-[24px] font-normal">Attendance per event (k)</p>
                        <div className="text-[21px] text-[#FFFFFF] mt-[24px] font-normal">
                            2025 Target: <span className="font-semibold">60 K</span>
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
                                width: `${50}%`,
                                background: "linear-gradient(180deg, #3BAB78 0%, #2F8F67 100%)",
                            }}
                        >
                            <span>35K</span>
                            <span className="text-[#FFFFFF99] text-[12px]">Actual</span>
                        </div>

                        {/* Gap */}
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-right">
                            <span className="text-white">25K</span>
                            <span className="block text-[#626B73] text-[12px]">Gap</span>
                        </div>

                    </div>
                </div>

                {/* AttendanceChart */}

                <div className='mt-[16pt]'>
                <AttendanceChart/>
                </div>

                 <div className="mt-[16px]">
                    <div className='flex justify-between'>
                        <h2 className="text-[21px] text-[#FFFFFF] font-normal">Digital marketing</h2>
                        <div className='flex gap-[16px] items-center'>
                            <div className='flex gap-[8px] items-center'>
                                <div className='bg-[#433EFB] w-[10px] h-[10px] rounded-[4px]'></div>
                                <span className='text-[#BDBDBD] text-[11px]'>Unique attendance</span>
                            </div>

                            <div className='flex gap-[8px] items-center'>
                                <div className='bg-[#4E5F70] w-[10px] h-[10px] rounded-[4px]'></div>
                                <span className='text-[#BDBDBD] text-[11px]'>Unique attendance</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[16px] p-4  mt-[10px] text-white"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                            backdropFilter: "blur(108px)",
                        }}>
                        <div className="grid grid-cols-2 gap-4 mt-[10px]">
                            <div>
                                <div className="rounded-[16px] p-3 mt-1 text-white"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                                        backdropFilter: "blur(108px)",
                                    }}>

                                    <div className='flex justify-between items-center'>
                                        <h2 className='text-[12px] text-[#FFFFFF]'>Social media impressions (k)</h2>
                                        <h2 className='text-[12px] text-[#FFFFFF]'>Target: 3000</h2>
                                    </div>

                                    <div className="relative h-[40px] rounded-[16px] overflow-hidden mt-[12px]">

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
                                                width: `${50}%`,
                                                background: "#433EFB",
                                            }}
                                        >
                                            <span>2000</span>
                                        </div>

                                        {/* Gap */}
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-right text-[12px]">
                                            <span className="text-white">1000</span>
                                        </div>

                                    </div>

                                </div>
                            </div>  

                            <div>
                                <div className="rounded-[16px] p-3 mt-1 text-white"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                                        backdropFilter: "blur(108px)",
                                    }}>

                                    <div className='flex justify-between items-center'>
                                        <h2 className='text-[12px] text-[#FFFFFF]'>Social media followers (k)</h2>
                                        <h2 className='text-[12px] text-[#FFFFFF]'>Target: 24</h2>
                                    </div>

                                    <div className="relative h-[40px] rounded-[16px] overflow-hidden mt-[12px]">

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
                                                width: `${90}%`,
                                                background: "#433EFB",
                                            }}
                                        >
                                            <span>22</span>
                                        </div>

                                        {/* Gap */}
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-right text-[12px]">
                                            <span className="text-white">2</span>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div>
                                <div className="rounded-[16px] p-3 mt-1 text-white"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                                        backdropFilter: "blur(108px)",
                                    }}>

                                    <div className='flex justify-between items-center'>
                                        <h2 className='text-[12px] text-[#FFFFFF]'>Peak viewership (k)</h2>
                                        <h2 className='text-[12px] text-[#FFFFFF]'>Target: 115</h2>
                                    </div>

                                    <div className="relative h-[40px] rounded-[16px] overflow-hidden mt-[12px]">

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
                                                width: `${10}%`,
                                                background: "#433EFB",
                                            }}
                                        >
                                            <span>10</span>
                                        </div>

                                        {/* Gap */}
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-right text-[12px]">
                                            <span className="text-white">105</span>
                                        </div>

                                    </div>

                                </div>
                            </div> 

                            <div>
                                <div className="rounded-[16px] p-3 mt-1 text-white"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                                        backdropFilter: "blur(108px)",
                                    }}>

                                    <div className='flex justify-between items-center'>
                                        <h2 className='text-[12px] text-[#FFFFFF]'>Website visits (k)</h2>
                                        <h2 className='text-[12px] text-[#FFFFFF]'>Target: 22</h2>
                                    </div>

                                    <div className="relative h-[40px] rounded-[16px] overflow-hidden mt-[12px]">

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
                                                width: `${30}%`,
                                                background: "#433EFB",
                                            }}
                                        >
                                            <span>7</span>
                                        </div>

                                        {/* Gap */}
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-right text-[12px]">
                                            <span className="text-white">15</span>
                                        </div>

                                    </div>

                                </div>
                            </div>                          
                        </div>

                    </div>
                </div>

                 <div className="mt-[16px]">
                    <h2 className="text-[21px] text-[#FFFFFF] font-normal">Total unique attendance per event</h2>
                 </div>
                </div>
    </div>
  )
}
