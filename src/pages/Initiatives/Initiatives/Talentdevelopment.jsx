import React, { useRef, useState } from "react";
import Talentdevelopment from "../../../components/InitiativesTab/Talentdevelopment";
import Talentattraction from "./Talentattraction";
import Outreach from "./Outreach";
import BusinessEnablement from "./BusinessEnablement";
import Regulationlicensing from "./Regulationlicensing";
import MarketingPR from "./MarketingPR";
import Incentivesfunding from "./Incentivesfunding";

const TABS = [
  "Talent development",
  "Talent attraction",
  "Outreach",
  "Business enablement",
  "Regulation & licensing",
  "Marketing & PR",
  "Incentives & funding",
  "Communities",
  "Teams & athletes",
  "Events & facilities",
];

export default function InitiativesTabs() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const scrollRef = useRef(null);

  /* -------- DRAG SCROLL LOGIC -------- */
  let isDown = false;
  let startX;
  let scrollLeft;

  const onMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown = false;
  };

  const onMouseUp = () => {
    isDown = false;
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full">
        {/* ---------------- TABS ---------------- */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="
            flex gap-2 p-2 rounded-[14px]
            overflow-x-auto overflow-y-hidden
            scrollbar-hide
            cursor-grab active:cursor-grabbing
            select-none
            max-w-[1200px] overflow-hidden
          "
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
            backdropFilter: "blur(20px)",
          }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-[12px] whitespace-nowrap text-[13px] transition-all duration-200
                  ${
                    isActive
                      ? "text-white"
                      : "text-white/50 hover:text-white/80"
                  }
                `}
                style={
                  isActive
                    ? {
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.2), 0 6px 16px rgba(0,0,0,0.4)",
                      }
                    : {}
                }
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* ---------------- TAB CONTENT ---------------- */}
        <div className="mt-4">
          {activeTab === "Talent development" && <Talentdevelopment />}
          {activeTab === "Talent attraction" && <Talentattraction />}
          {activeTab === "Outreach" && <Outreach />}
          {activeTab === "Business enablement" && <BusinessEnablement />}
          {activeTab === "Regulation & licensing" && <Regulationlicensing />}
          {activeTab === "Marketing & PR" && <MarketingPR />}
          {activeTab === "Incentives & funding" && <Incentivesfunding />}
          
        </div>
      </div>
    </div>
  );
}
