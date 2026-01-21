import React from "react";

export default function FormalEducationSkeleton() {
  return (
    <div className="w-full space-y-6 text-white animate-pulse">
      <div className="flex gap-[16px]">
        {/* ================= LEFT ================= */}
        <div className="space-y-3 max-w-[761px] w-full">
          {/* HEADER */}
          <SkeletonCard height="120px" />

          {/* KEY COMPANIES */}
          <SkeletonCard>
            <SkeletonTitle />
            <div className="rounded-[16px] border border-white/10 overflow-hidden">
              <div className="grid grid-cols-6 h-[40px] bg-white/5" />
              <div className="grid grid-cols-6 h-[12px] bg-white/5" />

              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="grid grid-cols-6 border-t border-white/10"
                >
                  <SkeletonCell />
                  {[1, 2, 3, 4, 5].map((_, j) => (
                    <SkeletonCell key={j} />
                  ))}
                </div>
              ))}
            </div>
          </SkeletonCard>

          {/* KPIS HEADER */}
          <SkeletonBar />

          {/* MAIN KPI */}
          <SkeletonCard height="160px" />

          {/* SUPPORTING KPIS */}
          <SkeletonCard>
            <div className="grid grid-cols-2 gap-3">
              <SkeletonCard height="140px" />
              <SkeletonCard height="140px" />
            </div>
          </SkeletonCard>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="space-y-3 max-w-[430px] w-full">
          {/* OWNER */}
          <SkeletonCard height="90px" />

          {/* NEXT STEPS */}
          <SkeletonCard>
            <SkeletonTitle />
            <div className="grid grid-cols-4 gap-2 mb-2">
              {[1, 2, 3, 4].map((i) => (
                <SkeletonBlock key={i} height="36px" />
              ))}
            </div>

            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="grid grid-cols-4 gap-2 mb-2">
                {[1, 2, 3, 4].map((j) => (
                  <SkeletonBlock key={j} height="111px" />
                ))}
              </div>
            ))}
          </SkeletonCard>

          {/* ROADBLOCKS */}
          <SkeletonCard height="80px" />
        </div>
      </div>
    </div>
  );
}

/* ================= SKELETON PARTS ================= */

const SkeletonCard = ({ children, height }) => (
  <div
    className="rounded-[20px] p-4 bg-white/5 backdrop-blur-xl"
    style={{ height }}
  >
    {children}
  </div>
);

const SkeletonTitle = () => (
  <div className="h-[18px] w-[160px] bg-white/10 rounded mb-4" />
);

const SkeletonBar = () => (
  <div className="rounded-[16px] h-[48px] bg-white/5" />
);

const SkeletonCell = () => (
  <div className="h-[56px] border-r border-white/10 bg-white/5" />
);

const SkeletonBlock = ({ height }) => (
  <div
    className="rounded-[8px] bg-white/5"
    style={{ height }}
  />
);
