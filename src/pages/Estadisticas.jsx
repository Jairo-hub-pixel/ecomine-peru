import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function Estadisticas() {
  const calidadData = [
    { mes: "Ene", agua: 85, aire: 78 },
    { mes: "Feb", agua: 75, aire: 82 },
    { mes: "Mar", agua: 65, aire: 70 },
    { mes: "Abr", agua: 80, aire: 88 },
    { mes: "May", agua: 72, aire: 79 },
  ];

  const riesgoData = [
    { name: "Bajo", value: 65 },
    { name: "Medio", value: 25 },
    { name: "Alto", value: 10 },
  ];

  const mercurioData = [
    { zona: "Loreto", valor: 0.8 },
    { zona: "Ucayali", valor: 1.2 },
    { zona: "Madre de Dios", valor: 1.8 },
    { zona: "Puno", valor: 0.6 },
  ];

  const colores = ["#22c55e", "#eab308", "#ef4444"];

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-4xl font-bold">
          Estadísticas Ambientales
        </h1>

        <p className="text-gray-500">
          Análisis de monitoreo ambiental en tiempo real
        </p>
      </div>

      {/* KPI */}
      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">
            Hectáreas afectadas
          </h3>

          <p className="text-4xl font-bold mt-2">
            1051
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">
            Alertas
          </h3>

          <p className="text-4xl font-bold text-red-500 mt-2">
            15
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">
            Reportes
          </h3>

          <p className="text-4xl font-bold mt-2">
            24
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">
            Drones Activos
          </h3>

          <p className="text-4xl font-bold mt-2">
            8
          </p>
        </div>

      </div>

      {/* Graficos */}
      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-bold mb-4">
            Calidad Ambiental
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={calidadData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="agua" stroke="#3b82f6" />
              <Line type="monotone" dataKey="aire" stroke="#22c55e" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-bold mb-4">
            Nivel de Riesgo
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={riesgoData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {riesgoData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={colores[index]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      <div className="bg-white p-6 rounded-2xl shadow">

        <h2 className="font-bold mb-4">
          Concentración de Mercurio
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mercurioData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="zona" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="valor" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}