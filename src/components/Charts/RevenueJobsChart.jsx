import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
} from "recharts";

/* ---------- logo mapping ---------- */
const LOGOS = {
  "My Whoosh": "./Business/My Whoosh.svg",
  Aldebaran: "./Business/Aldebaran.svg",
  Ubisoft: "./Business/Ubisoft.svg",
  Analog: "./Business/Ubisoft.svg",
  "Social Quantum": "./Business/Social Quantum.svg",
  "Nasr eSport": "./Business/Nasr eSport.svg",
};

/* ---------- X Axis ---------- */
const CustomXAxis = ({ x, y, payload, data }) => {
  const item = data[payload.index];

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
    );
  }

  return (
    <image
      href={item.img}
      x={x - 12}
      y={y + 4}
    />
  );
};

/* ---------- Revenue pill ---------- */
const RevenueLabel = ({ x, y, value }) => (
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
);

/* ================================================= */
export default function RevenueJobsChart({ data }) {
  if (!data || !data.length) return null;

  /* ---------- normalize incoming data ---------- */
  const chartData = data.map((item) => ({
    name: item.company,
    fte: item.jobs,
    rev: item.revenue,
    img: LOGOS[item.company],
  }));

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
        <ComposedChart
          data={chartData}
          margin={{ top: 40, right: 30, bottom: 40, left: 10 }}
        >
          {/* ====== DEFINITIONS ====== */}
          <defs>
            <linearGradient id="fteGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#CC3152" />
              <stop offset="100%" stopColor="#CC3152" stopOpacity={0.5} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="rgba(255,255,255,0.12)" vertical={false} />

          <XAxis
            dataKey="name"
            interval={0}
            tick={(props) => (
              <CustomXAxis {...props} data={chartData} />
            )}
          />

          <YAxis hide />

          {/* ====== FTE BARS ====== */}
          <Bar
            dataKey="fte"
            barSize={56}
            radius={[8, 8, 0, 0]}
            fill="url(#fteGradient)"
          >
            <LabelList
              dataKey="fte"
              position="center"
              fill="#fff"
              fontSize={11}
            />
          </Bar>

          {/* ====== REVENUE LINE ====== */}
          <Line
            type="monotone"
            dataKey="rev"
            stroke="#6D5BFF"
            strokeWidth={2}
            dot={{ fill: "#6D5BFF", r: 4 }}
            label={<RevenueLabel />}
            isFront
          />
        </ComposedChart>
      </ResponsiveContainer>

      {/* ====== Legend ====== */}
      <div className="absolute bottom-3 left-6 flex gap-6">
        <div className="flex items-center gap-2">
          <span className="w-[10px] h-[10px] rounded-t-[16px] bg-[#BE3150]" />
          <span className="text-[#BDBDBD] text-[11px]">FTEs</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-[10px] h-[10px] rounded-full bg-[#6755C2]" />
          <span className="text-[#BDBDBD] text-[11px]">Revenues</span>
        </div>
      </div>
    </div>
  );
}
