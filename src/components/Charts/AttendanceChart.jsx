import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Cell,
} from "recharts";

export default function AttendanceChart({ data = [] }) {
  return (
    <div
      className="relative rounded-[16px] p-4 h-[340px] text-white"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
        backdropFilter: "blur(108px)",
      }}
    >
      {/* Legend */}
      <div className="flex gap-4 mb-3 text-[12px] text-white/70">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#6F687D]" />
          Unique attendance
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-[4px] bg-[#FF7A5C]" />
          Recurrent attendance
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 40, left: 10 }}
          barGap={8}
        >
          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />

          <XAxis
            dataKey="name"
            tick={{ fill: "#E5E7EB", fontSize: 11 }}
            interval={0}
          />

          <YAxis hide />

          {/* Recurrent attendance (bottom) */}
          <Bar dataKey="recurrent" stackId="attendance">
            {data.map((entry, index) => (
              <Cell
                key={`recurrent-${index}`}
                fill={entry.name === "Others" ? "#9B92AD" : "#FF7A5C"}
                radius={entry.remaining === 0 ? [8, 8, 0, 0] : [0, 0, 0, 0]}
              />
            ))}
          </Bar>

          {/* Unique attendance (top) */}
          <Bar dataKey="remaining" stackId="attendance" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`remaining-${index}`}
                fill={entry.name === "Others" ? "#9B92AD" : "#6F687D"}
              />
            ))}

            {/* Label shows UNIQUE value */}
            <LabelList
              dataKey="unique"
              position="top"
              fill="#fff"
              fontSize={11}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
