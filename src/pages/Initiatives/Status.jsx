import React from "react";

const Badge = ({ label, color }) => (
    <>
        <div
            className="rounded-full w-[16px] h-[16px]"
            style={{ backgroundColor: color }}
        >
        </div>
        <span className="text-[11px] text-[#BDBDBD]">{label}</span>
    </>
);

const Card = ({ number, title, items = [] }) => (
    <div className="w-[101px] rounded-[18px] bg-white/5 backdrop-blur-xl p-2 border border-white/10">
        <div className="flex flex-col items-center mb-3">
            <span className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-md w-full text-center">
                {number}
            </span>

            <h4 className="text-white text-[12px] font-semibold text-center mt-[8px]">{title}</h4>

        </div>

        <div className="space-y-2">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="flex flex-col text-[10px] items-start text-white/90 px-1.5 py-2 rounded-[8px]"
                    style={{ backgroundColor: item.color }}
                >
                    <span className="bg-[#264D3B] px-1  mb-1 rounded-[4px]">{number}.{i + 1} </span>
                    <span>{item.label}</span>
                </div>
            ))}
        </div>
    </div>
);

export default function Status() {
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

                {/* TALENT DEVELOPMENT */}
                <div className="rounded-[16px] p-2" style={{
                    background:
                        "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                    boxShadow: "0px 4px 26.9px 0px #00000005",
                    backdropFilter: "blur(108px)",
                }}>
                    <h3 className="text-white text-[15px] text-center flex justify-center items-center font-semibold mb-4 px-3 h-[48px]">
                        Talent development & attraction
                    </h3>

                    <div className="flex gap-2">
                        <Card
                            number="1"
                            title="Talent development"
                            items={[
                                { label: "Formal education", color: "#59F97C4D" },
                                { label: "Mid-school and high school", color: "#59F97C4D" },
                                { label: "Specialized skills programs", color: "#59F97C4D" },
                                { label: "Internship fund", color: "#59F97C4D" },
                                { label: "Job portal", color: "#FBCF324D" },
                            ]}
                        />

                        <Card
                            number="2"
                            title="Talent attraction"
                            items={[
                                { label: "Attract leadership with proven track record", color: "#59F97C4D" },
                                { label: "Attract experienced talent", color: "" },
                                { label: "Digital wellbeing program", color: "" },
                            ]}
                        />
                    </div>
                </div>

                {/* BUSINESS ATTRACTION */}
                <div className="rounded-[16px] p-2" style={{
                    background:
                        "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                    boxShadow: "0px 4px 26.9px 0px #00000005",
                    backdropFilter: "blur(108px)",
                }}>
                    <h3 className="text-white text-[15px] text-center flex justify-center items-center font-semibold mb-4 px-3 h-[48px]">
                        Business attraction
                    </h3>

                    <div className="flex gap-2">
                        <Card
                            number="3"
                            title="Outreach"
                            items={[
                                { label: "Attract large studios, publishers and ops", color: "#59F97C4D" },
                                { label: "Twin city program", color: "" },
                            ]}
                        />

                        <Card
                            number="4"
                            title="Business enablement"
                            items={[
                                { label: "One stop shop", color: "" },
                                { label: "Launch office, PMO and sector dashboard", color: "#59F97C4D" },
                            ]}
                        />

                        <Card
                            number="5"
                            title="Regulation & Ecosystem"
                            items={[
                                { label: "Ecosystem experience & quality of life", color: "#59F97C4D" },
                                { label: "Enhance IP protection & enforcement", color: "" },
                                { label: "Robust data privacy & protection ", color: "" },
                                { label: "Dedicated esports & events framework", color: "" },
                            ]}
                        />

                        <Card
                            number="6"
                            title="Marketing & PR"
                            items={[
                                { label: "Video games marketing & PR program", color: "#59F97C4D" },
                            ]}
                        />

                        <Card
                            number="7"
                            title="Incentives & Funding"
                            items={[
                                { label: "Financial incentives", color: "#59F97C4D" },
                                { label: "Incubation & acceleration programs", color: "#59F97C4D" },
                                { label: "Equity and debt investment", color: "" },
                            ]}
                        />
                    </div>
                </div>

                {/* COMMUNITIES & ESPORTS */}
                <div className="rounded-[16px] p-2" style={{
                    background:
                        "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                    boxShadow: "0px 4px 26.9px 0px #00000005",
                    backdropFilter: "blur(108px)",
                }}>
                    <h3 className="text-white text-[15px] text-center flex justify-center items-center font-semibold mb-4 px-3 h-[48px]">
                        Communities & esports
                    </h3>

                    <div className="flex gap-2">
                        <Card
                            number="8"
                            title="Community tools"
                            items={[
                                { label: "Local superstars: empower content creation", color: "" },
                                { label: "Build local esports brand", color: "" },
                            ]}
                        />

                        <Card
                            number="9"
                            title="Teams & athletes"
                            items={[
                                { label: "Local superstars: world class athletes", color: "" },
                                { label: "Esports teams and trainers support", color: "" },
                            ]}
                        />

                        <Card
                            number="10"
                            title="Events & facilities"
                            items={[
                                { label: "Grassroots events (communities) and community events calendar", color: "#FBCF324D" },
                                { label: "Esports facilities expansion", color: "" },
                            ]}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
