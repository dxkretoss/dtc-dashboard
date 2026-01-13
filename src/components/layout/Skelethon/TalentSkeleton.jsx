import React from "react"

export default function TalentSkeleton() {
    return (
        <div className="w-full animate-pulse">
            <div
                className="rounded-[16px] p-6"
                style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                    backdropFilter: "blur(108px)",
                }}
            >

                {/* ===== HEADER ===== */}
                <div className="mb-6">
                    <div className="h-6 w-[420px] rounded bg-white/10 mb-3" />
                    <div className="h-4 w-[220px] rounded bg-white/10" />
                </div>

                {/* ===== KPI BAR ===== */}
                <div className="h-[80px] rounded-[16px] p-2 bg-white/5 mb-6">
                    <div className="h-full rounded-[14px] bg-white/10 relative overflow-hidden">
                        <div className="absolute left-0 top-0 h-full w-[20%] bg-emerald-400/20 rounded-[14px]" />
                    </div>
                </div>

                {/* ===== BAR CHART ===== */}
                <div className="h-[280px] rounded-[20px] bg-white/5 p-6 mb-6">
                    <div className="flex items-end justify-between h-full gap-6">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="flex flex-col items-center w-full">
                                <div
                                    className="w-[42px] rounded-lg bg-white/15"
                                    style={{ height: `${80 + i * 10}px` }}
                                />
                                <div className="mt-4 h-[16px] w-[40px] rounded bg-white/10" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== DONUT KPIs ===== */}
                <div className="grid grid-cols-4 gap-4">

                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="rounded-[20px] p-6 bg-white/5 flex flex-col items-center"
                        >
                            <div className="h-4 w-[120px] bg-white/10 rounded mb-4" />

                            {/* donut placeholder */}
                            <div className="w-[110px] h-[110px] rounded-full border-[10px] border-white/10 mb-4" />

                            <div className="flex gap-4">
                                <div className="h-3 w-[60px] bg-emerald-400/30 rounded" />
                                <div className="h-3 w-[40px] bg-white/20 rounded" />
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}
