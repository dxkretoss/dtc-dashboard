import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
} from "recharts";

const data = [
  { name: "MFCC", unique: 5.3, recurrent: 0.6 },
  { name: "Mother of the Nation", unique: 4.4, recurrent: 1.0 },
  { name: "Animenia", unique: 3.5, recurrent: 0.5 },
  { name: "Breakroom Games", unique: 2.9, recurrent: 0.2 },
  { name: "Najah Expo", unique: 2.8, recurrent: 0.8 },
  { name: "Tokyo Games Shadow", unique: 2.2, recurrent: 0.3 },
  { name: "BRG - Yas Mall", unique: 1.9, recurrent: 0.1 },
  { name: "Compass Event", unique: 1.6, recurrent: 0.2 },
  { name: "Tawdhif", unique: 0.9, recurrent: 0.1 },
  { name: "Others", unique: 7.0, recurrent: 0 },
];

export default function AttendanceChart() {
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
          <CartesianGrid
            stroke="rgba(255,255,255,0.08)"
            vertical={false}
          />

          <XAxis
            dataKey="name"
            tick={{ fill: "#E5E7EB", fontSize: 11 }}
            interval={0}
          />

          <YAxis hide />

          {/* Recurrent attendance (bottom) */}
          <Bar
            dataKey="recurrent"
            stackId="attendance"
            fill="#FF7A5C"
          />

          {/* Unique attendance (top) */}
          <Bar
            dataKey="unique"
            stackId="attendance"
            fill="#6F687D"
            radius={[8, 8, 0, 0]}
          >
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
