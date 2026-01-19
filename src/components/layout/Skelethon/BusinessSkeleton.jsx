import React from "react"

export const Skeleton = ({ className = "" }) => (
    <div className={`relative overflow-hidden rounded-[12px] bg-white/10 ${className}`}>
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
)
export default function BusinessSkeleton() {
  return (
    <div className="w-full rounded-[16px] p-6 bg-white/5 backdrop-blur-[108px]">
      
      {/* Title */}
      <Skeleton className="h-[24px] w-[260px] mb-6" />

      {/* KPI CARDS */}
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-[160px] rounded-[16px]" />
        ))}
      </div>

      {/* AVG COST + JOBS SUPPORTED */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Skeleton className="h-[110px]" />
        <Skeleton className="h-[110px]" />
      </div>

      {/* JOBS SUBSIDIZED */}
      <div className="mt-6">
        <Skeleton className="h-[20px] w-[200px] mb-4" />

        <div className="grid grid-cols-2 gap-4">
          {/* By Type */}
          <Skeleton className="h-[260px]" />

          {/* By Nationality */}
          <Skeleton className="h-[260px]" />
        </div>
      </div>

      {/* COMPANIES */}
      <div className="mt-6">
        <Skeleton className="h-[20px] w-[260px] mb-4" />

        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-[70px]" />
          ))}
        </div>
      </div>

      {/* CHART */}
      <div className="mt-6">
        <Skeleton className="h-[20px] w-[260px] mb-4" />
        <Skeleton className="h-[260px]" />
      </div>
    </div>
  );
}
