import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { mes: "Ene", zonas: 12 },
  { mes: "Feb", zonas: 20 },
  { mes: "Mar", zonas: 25 },
  { mes: "Abr", zonas: 32 },
  { mes: "May", zonas: 18 },
  { mes: "Jun", zonas: 40 },
];

export default function ChartSection() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">

      <h2 className="text-xl font-bold mb-6">
        Tendencia de Deforestación
      </h2>

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="zonas"
              fill="#10b981"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}