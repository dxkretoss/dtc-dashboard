import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import StatusSkeleton from "../../components/layout/Skelethon/StatusSkeleton";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1zwMlxUzU9mQf20IOMYP9cCcnfDcqRYoO/export?format=csv&gid=247509383";

/* ---------------- STYLES ---------------- */

const GREY_STYLE = {
  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.048) 0%, rgba(255, 255, 255, 0.024) 100%)",
  border: "1px solid",
  borderImageSource:
    "linear-gradient(94.15deg, rgba(255, 255, 255, 0.12) 5.91%, rgba(255, 255, 255, 0.00003) 42.47%, rgba(255, 255, 255, 0.00003) 60.75%, rgba(255, 255, 255, 0.03) 97.31%)",
  borderImageSlice: 1,
};

const GREY_BADGE_STYLE = {
  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)",
  border: "1px solid",
  borderImageSource:
    "linear-gradient(94.15deg, rgba(255, 255, 255, 0.12) 5.91%, rgba(255, 255, 255, 0.00003) 42.47%, rgba(255, 255, 255, 0.00003) 60.75%, rgba(255, 255, 255, 0.03) 97.31%)",
  borderImageSlice: 1,
};

const STATUS_COLOR_MAP = {
  Green: { backgroundColor: "#59F97C4D" },
  Yellow: { backgroundColor: "#FBCF324D" },
  Red: { backgroundColor: "#9E2A2A4D" },
  Grey: GREY_STYLE,
};

const BADGE_COLOR_MAP = {
  Green: { backgroundColor: "#264D3B" },
  Yellow: { backgroundColor: "#4D4526" },
  Grey: GREY_BADGE_STYLE,
  Red: { backgroundColor: "#5A1F1F" },
};

/* ---------------- UI COMPONENTS ---------------- */

const Badge = ({ label, color }) => (
  <div className="flex items-center gap-1">
    <div
      className="rounded-full w-[16px] h-[16px]"
      style={{ backgroundColor: color }}
    />
    <span className="text-[11px] text-[#BDBDBD]">{label}</span>
  </div>
);

const Card = ({ number, title, items = [] }) => (
  <div className="max-w-[101px] rounded-[18px] bg-white/5 backdrop-blur-xl p-2 border border-white/10">
    <div className="flex flex-col items-center mb-3">
      <span className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-md w-full text-center">
        {number}
      </span>

      <h4 className="text-white text-[12px] font-semibold text-center mt-[8px]">
        {title}
      </h4>
    </div>

    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex flex-col text-[10px] items-start text-white/90 px-1.5 py-2 rounded-[8px]"
          style={STATUS_COLOR_MAP[item.status] || {}}
        >
          <span
            className="px-1 mb-1 rounded-[4px]"
            style={BADGE_COLOR_MAP[item.status] || BADGE_COLOR_MAP.Grey}
          >
            {number}.{i + 1}
          </span>

          <span>{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ---------------- MAIN COMPONENT ---------------- */

export default function Status() {
  const [sections, setSections] = useState(null);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((csv) => {
        const parsed = Papa.parse(csv, { header: true });

        const rows = parsed.data.filter((row) =>
          Object.values(row).some((v) => v && v.trim() !== "")
        );

        const result = [];
        let currentSection = null;
        let currentCard = null;

        rows.forEach((row) => {
          // Section headers (A, B, C)
          if (["A", "B", "C"].includes(row._1)) {
            currentSection = {
              section: row._2,
              cards: [],
            };
            result.push(currentSection);
          }

          // Card headers (1,2,3...)
          else if (/^\d+$/.test(row._1)) {
            currentCard = {
              number: row._1,
              title: row._2,
              items: [],
            };
            currentSection?.cards.push(currentCard);
          }

          // Items (1.1, 2.3, etc.)
          else if (/^\d+\.\d+$/.test(row._2)) {
            currentCard?.items.push({
              label: row._3,
              status: row._5 || "Grey",
            });
          }
        });

        setSections(result);
      });
  }, []);

  if (!sections) return <StatusSkeleton/>;

  return (
    <div>
      {/* STATUS LEGEND */}
      <div className="flex justify-end gap-3 mb-6">
        <Badge label="Not started" color="#5A5A5A" />
        <Badge label="In progress" color="#2F8F67" />
        <Badge label="Risk of delay" color="#C88A2E" />
        <Badge label="Delayed" color="#9E2A2A" />
      </div>

      <div className="flex gap-[12px] overflow-x-auto">
        {sections.map((section, i) => (
          <div
            key={i}
            className="rounded-[16px] p-2"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
              boxShadow: "0px 4px 26.9px 0px #00000005",
              backdropFilter: "blur(108px)",
            }}
          >
            <h3 className="text-white text-[15px] text-center flex justify-center items-center font-semibold mb-4 px-3 h-[48px]">
              {section.section}
            </h3>

            <div className="flex gap-2">
              {section.cards.map((card) => (
                <Card
                  key={card.number}
                  number={card.number}
                  title={card.title}
                  items={card.items}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
