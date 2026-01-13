import React from "react"

export const Skeleton = ({ className = "" }) => (
    <div className={`relative overflow-hidden rounded-[12px] bg-white/10 ${className}`}>
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
)

export const StrategicSkeleton = () => {
    return (
        <div className="w-full">
            <div
                className="rounded-[16px] p-6"
                style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                    backdropFilter: "blur(108px)",
                }}
            >
                {/* Header */}
                <div className="flex justify-between mb-6">
                    <div>
                        <Skeleton className="h-[24px] w-[200px]" />
                        <Skeleton className="h-[20px] w-[160px] mt-4" />
                    </div>
                    <Skeleton className="h-[20px] w-[220px] mt-6" />
                </div>

                {/* ===== KPI BAR ===== */}
                <div className="h-[80px] rounded-[16px] p-2 bg-white/5 mb-6">
                    <div className="h-full rounded-[14px] bg-white/10 relative overflow-hidden">
                        <div className="absolute left-0 top-0 h-full w-[20%] bg-emerald-400/20 rounded-[14px]" />
                    </div>
                </div>

                {/* KPI cards */}
                <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map(i => (
                        <div
                            key={i}
                            className="rounded-[16px] p-4"
                            style={{
                                background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                            }}
                        >
                            <Skeleton className="h-[14px] w-[120px] mx-auto mb-4" />
                            <Skeleton className="h-[120px] w-[120px] mx-auto rounded-full" />
                            <Skeleton className="h-[12px] w-[80px] mx-auto mt-4" />
                            <Skeleton className="h-[10px] w-full mt-4" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
