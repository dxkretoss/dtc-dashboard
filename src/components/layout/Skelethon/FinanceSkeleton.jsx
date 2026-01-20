import React from "react";

export default function FinanceSkeleton() {
  return (
    <div
      className="w-full rounded-[16px] p-6 animate-pulse"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
        boxShadow: "0px 4px 26.9px 0px #00000005",
        backdropFilter: "blur(108px)",
      }}
    >
      {/* HEADER */}
      <div className="mb-6">
        <div className="h-6 w-32 bg-white/15 rounded mb-4" />

        <div className="flex justify-between items-center">
          <div className="h-4 w-56 bg-white/10 rounded" />
          <div className="h-4 w-36 bg-white/10 rounded" />
        </div>
      </div>

      {/* TOTAL BUDGET BAR */}
      <SkeletonProgressBar height="h-[44px]" />

      {/* YTD HEADER */}
      <div className="flex justify-between items-center mt-6 mb-2">
        <div className="h-4 w-56 bg-white/10 rounded" />
        <div className="h-4 w-40 bg-white/10 rounded" />
      </div>

      {/* YTD BAR */}
      <SkeletonProgressBar height="h-[44px]" />

      {/* PROJECTS HEADER */}
      <div className="flex justify-between items-center mt-8 mb-4">
        <div className="h-4 w-72 bg-white/10 rounded" />
        <div className="flex gap-3">
          <LegendSkeleton />
          <LegendSkeleton />
          <LegendSkeleton />
        </div>
      </div>

      {/* BUSINESS DEVELOPMENT */}
      <SectionSkeleton titleWidth="w-56">
        <StackedBarSkeleton />
      </SectionSkeleton>

      {/* SECTOR ENABLEMENT */}
      <SectionSkeleton titleWidth="w-44">
        <MiniBarSkeleton />
        <MiniBarSkeleton />
        <MiniBarSkeleton />
        <MiniBarSkeleton />
      </SectionSkeleton>

      {/* OPERATIONS */}
      <SectionSkeleton titleWidth="w-36">
        <MiniBarSkeleton />
        <div className="h-3 w-96 bg-white/10 rounded mt-4" />
      </SectionSkeleton>
    </div>
  );
}

/* ---------------- SUB COMPONENTS ---------------- */

function SkeletonProgressBar({ height }) {
  return (
    <div
      className="rounded-[22px] p-2 mb-4"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
      }}
    >
      <div className={`relative ${height} rounded-[16px] overflow-hidden`}>
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute left-0 top-0 h-full w-[65%] bg-white/20 rounded-[14px]" />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-24 bg-white/15 rounded" />
      </div>
    </div>
  );
}

function SectionSkeleton({ titleWidth, children }) {
  return (
    <div
      className="rounded-[22px] p-4 mb-4"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
      }}
    >
      <div className={`h-4 ${titleWidth} bg-white/15 rounded mb-4`} />
      {children}
    </div>
  );
}

function StackedBarSkeleton() {
  return (
    <div className="relative h-[32px] rounded-[16px] overflow-hidden">
      <div className="absolute inset-0 bg-white/10" />
      <div className="absolute left-0 h-full w-[30%] bg-white/20 rounded-l-[16px]" />
      <div className="absolute left-[30%] h-full w-[30%] bg-white/25" />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-10 bg-white/15 rounded" />
    </div>
  );
}

function MiniBarSkeleton() {
  return (
    <div className="mb-4">
      <div className="h-3 w-40 bg-white/10 rounded mb-2" />
      <div className="relative h-[28px] rounded-[16px] overflow-hidden">
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute left-0 h-full w-[25%] bg-white/20 rounded-l-[16px]" />
        <div className="absolute left-[25%] h-full w-[20%] bg-white/25" />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 h-3 w-8 bg-white/15 rounded" />
      </div>
    </div>
  );
}

function LegendSkeleton() {
  return (
    <div className="flex items-center gap-1">
      <div className="w-[10px] h-[10px] rounded bg-white/20" />
      <div className="h-3 w-16 bg-white/10 rounded" />
    </div>
  );
}
