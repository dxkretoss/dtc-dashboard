import React from "react";

export default function CommunityEngagementSkeleton() {
  return (
    <div className="w-full rounded-[16px] p-4 space-y-4 animate-pulse">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div className="h-4 w-48 bg-white/10 rounded" />
        <div className="h-3 w-24 bg-white/10 rounded" />
      </div>

      {/* MAIN PROGRESS BAR */}
      <div className="h-[28px] rounded-[10px] bg-white/10 overflow-hidden">
        <div className="h-full w-[65%] bg-white/20" />
      </div>

      {/* BAR CHART */}
      <div className="rounded-[12px] bg-white/5 p-4 space-y-4">
        <div className="flex justify-between">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className="w-[36px] bg-white/20 rounded"
                style={{ height: `${30 + i * 6}px` }}
              />
              <div className="h-2 w-10 bg-white/10 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* DIGITAL MARKETING */}
      <div className="rounded-[12px] bg-white/5 p-4 space-y-4">
        <div className="h-4 w-36 bg-white/10 rounded" />

        {/* METRIC BARS */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between">
              <div className="h-3 w-32 bg-white/10 rounded" />
              <div className="h-3 w-14 bg-white/10 rounded" />
            </div>
            <div className="h-[22px] rounded bg-white/10">
              <div className="h-full w-[70%] bg-white/20 rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* DONUT + EMPTY PANEL */}
      <div className="grid grid-cols-2 gap-4">
        {/* DONUT */}
        <div className="rounded-[12px] bg-white/5 p-4 flex items-center justify-center">
          <div className="w-[160px] h-[160px] rounded-full border-[10px] border-white/20 relative">
            <div className="absolute inset-6 rounded-full bg-white/10" />
          </div>
        </div>

        {/* EMPTY RIGHT PANEL */}
        <div className="rounded-[12px] bg-white/5" />
      </div>
    </div>
  );
}
