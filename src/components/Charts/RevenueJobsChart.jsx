import {
    ResponsiveContainer,
    ComposedChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    LabelList
} from "recharts"

/* X Axis with logos + Other text */
const CustomXAxis = ({ x, y, payload, data }) => {
    const item = data[payload.index]

    if (item.name === "Other") {
        return (
            <text
                x={x}
                y={y + 18}
                fill="#fff"
                fontSize="12"
                textAnchor="middle"
            >
                Other
            </text>
        )
    }

    return (
        <image
            href={item.img}
            x={x - 12}
            y={y + 4}
            width="32"
            height="32"
        />
    )
}

/* Purple revenue pill */
const RevenueLabel = ({ x, y, value }) => {
    return (
        <g>
            <rect
                x={x - 20}
                y={y - 34}
                rx="6"
                ry="6"
                width="40"
                height="22"
                fill="#6D5BFF"
            />
            <text
                x={x}
                y={y - 18}
                fill="#fff"
                fontSize="11"
                textAnchor="middle"
            >
                {value}
            </text>
        </g>
    )
}

export default function RevenueJobsChart() {
    const data = [
        { img: "./Business/My Whoosh.svg", name: "My Whoosh", fte: 190, rev: 100 },
        { img: "./Business/Aldebaran.svg", name: "Aldebaran", fte: 64, rev: 36 },
        { img: "./Business/Ubisoft.svg", name: "Ubisoft", fte: 63, rev: 38 },
        { img: "./Business/Ubisoft.svg", name: "Analog", fte: 41, rev: 30 },
        { img: "./Business/Social Quantum.svg", name: "Social Quantum", fte: 28, rev: 20 },
        { img: "./Business/Nasr eSport.svg", name: "Nasr eSport", fte: 27, rev: 17 },
        { name: "Other", fte: 517, rev: 150 },
    ]

    return (
        <div
            className="relative mt-[10px] rounded-[16px] p-4 text-white h-[320px]"
            style={{
                background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                backdropFilter: "blur(108px)",
            }}
        >
            <div className="absolute top-3 left-4 text-[11px] text-white/50">
                Units in AED '000
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={data} margin={{ top: 40, right: 30, bottom: 40, left: 10 }}>

                    <CartesianGrid stroke="rgba(255,255,255,0.12)" vertical={false} />

                    <XAxis
                        dataKey="name"
                        tick={(props) => <CustomXAxis {...props} data={data} />}
                        interval={0}
                    />

                    <YAxis hide />

                    {/* FTE bars */}
                    <Bar dataKey="fte" barSize={56} radius={[8, 8, 0, 0]} fill="#FF4D6D">
                        <LabelList dataKey="fte" position="insideTop" fill="#fff" fontSize={11} />
                    </Bar>

                    {/* Revenue line */}
                    <Line
                        type="monotone"
                        dataKey="rev"
                        stroke="#6D5BFF"
                        strokeWidth={2}
                        dot={{ fill: "#6D5BFF", r: 4 }}
                        label={<RevenueLabel />}
                        isFront={true}
                    />

                </ComposedChart>
            </ResponsiveContainer>

            {/* Legend */}
            <div className="absolute bottom-3 left-6 flex gap-6 text-[12px] text-white/60">
                <div className="flex items-center gap-2">
                    <span className="w-[10px] h-[10px] rounded-full bg-[#FF4D6D]" />
                    FTEs
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-[10px] h-[10px] rounded-full bg-[#6D5BFF]" />
                    Revenues
                </div>
            </div>
        </div>
    )
}
