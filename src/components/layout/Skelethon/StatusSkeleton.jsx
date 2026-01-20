import React from "react";

export default function StatusSkeleton() {
  return (
    <div className="w-full animate-pulse">
      {/* LEGEND */}
      <div className="flex justify-end gap-4 mb-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-[14px] h-[14px] rounded-full bg-white/20" />
            <div className="h-3 w-20 bg-white/10 rounded" />
          </div>
        ))}
      </div>

      {/* MAIN SECTIONS */}
      <div className="flex gap-4 overflow-x-auto">
        {/* SECTION 1 */}
        <SectionSkeleton titleWidth="w-64">
          <CardSkeleton items={5} />
          <CardSkeleton items={3} />
        </SectionSkeleton>

        {/* SECTION 2 */}
        <SectionSkeleton titleWidth="w-48">
          <CardSkeleton items={2} />
          <CardSkeleton items={2} />
          <CardSkeleton items={1} />
          <CardSkeleton items={6} />
        </SectionSkeleton>

        {/* SECTION 3 */}
        <SectionSkeleton titleWidth="w-56">
          <CardSkeleton items={2} />
          <CardSkeleton items={2} />
          <CardSkeleton items={2} />
        </SectionSkeleton>
      </div>
    </div>
  );
}

/* ---------------- SUB COMPONENTS ---------------- */

function SectionSkeleton({ children, titleWidth }) {
  return (
    <div
      className="rounded-[16px] p-3 min-w-[320px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
        boxShadow: "0px 4px 26.9px 0px #00000005",
        backdropFilter: "blur(108px)",
      }}
    >
      <div className={`h-5 ${titleWidth} bg-white/15 rounded mx-auto mb-6`} />

      <div className="flex gap-3">{children}</div>
    </div>
  );
}

function CardSkeleton({ items = 3 }) {
  return (
    <div className="w-[110px] rounded-[18px] bg-white/5 backdrop-blur-xl p-2 border border-white/10">
      {/* NUMBER */}
      <div className="h-6 w-full bg-white/20 rounded mb-3" />

      {/* TITLE */}
      <div className="h-4 w-20 bg-white/15 rounded mx-auto mb-4" />

      {/* ITEMS */}
      <div className="space-y-2">
        {Array.from({ length: items }).map((_, i) => (
          <div
            key={i}
            className="rounded-[8px] px-2 py-2 bg-white/10"
          >
            <div className="h-3 w-6 bg-white/20 rounded mb-1" />
            <div className="h-3 w-full bg-white/15 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
