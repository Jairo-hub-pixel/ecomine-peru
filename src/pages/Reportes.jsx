import { useState } from "react";

export default function Reportes() {
  const [reportes, setReportes] = useState([
    {
      id: 1,
      zona: "Madre de Dios",
      fecha: "15/06/2026",
      estado: "Crítico",
      hectareas: 350,
    },
    {
      id: 2,
      zona: "Loreto",
      fecha: "12/06/2026",
      estado: "Moderado",
      hectareas: 120,
    },
    {
      id: 3,
      zona: "Ucayali",
      fecha: "08/06/2026",
      estado: "Controlado",
      hectareas: 45,
    },
    {
      id: 4,
      zona: "Puno",
      fecha: "05/06/2026",
      estado: "Moderado",
      hectareas: 98,
    },
  ]);

  const eliminarReporte = (id) => {
    if (window.confirm("¿Eliminar este reporte?")) {
      setReportes(reportes.filter((r) => r.id !== id));
    }
  };

  const verReporte = (reporte) => {
    alert(`
Zona: ${reporte.zona}
Fecha: ${reporte.fecha}
Estado: ${reporte.estado}
Hectáreas afectadas: ${reporte.hectareas}
    `);
  };

  const nuevoRegistro = () => {
    const zona = prompt("Ingrese la zona:");

    if (!zona) return;

    const hectareas = prompt(
      "Ingrese hectáreas afectadas:"
    );

    const nuevo = {
      id: reportes.length + 1,
      zona,
      fecha: new Date().toLocaleDateString(),
      estado: "Moderado",
      hectareas: hectareas || 0,
    };

    setReportes([...reportes, nuevo]);
  };

  const exportarCSV = () => {
    const encabezado =
      "ID,Zona,Fecha,Estado,Hectareas\n";

    const filas = reportes
      .map(
        (r) =>
          `${r.id},${r.zona},${r.fecha},${r.estado},${r.hectareas}`
      )
      .join("\n");

    const csv = encabezado + filas;

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download =
      "reportes-ecomine-peru.csv";

    link.click();
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold">
            Reportes Ambientales
          </h1>

          <p className="text-gray-500">
            Gestión de reportes de minería ilegal
          </p>
        </div>

        <div className="flex gap-3">

          <button
            onClick={nuevoRegistro}
            className="bg-emerald-600 text-white px-5 py-3 rounded-xl hover:bg-emerald-700"
          >
            + Nuevo Registro
          </button>

          <button
            onClick={exportarCSV}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"
          >
            Exportar CSV
          </button>

        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">
            Reportes Totales
          </h3>

          <p className="text-4xl font-bold mt-2">
            {reportes.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">
            Casos Críticos
          </h3>

          <p className="text-4xl font-bold text-red-500 mt-2">
            {
              reportes.filter(
                (r) => r.estado === "Crítico"
              ).length
            }
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">
            Hectáreas Afectadas
          </h3>

          <p className="text-4xl font-bold mt-2">
            {reportes.reduce(
              (total, r) =>
                total + Number(r.hectareas),
              0
            )}
          </p>
        </div>

      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">
            Registros Recientes
          </h2>
        </div>

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="text-left p-4">ID</th>
              <th className="text-left p-4">Zona</th>
              <th className="text-left p-4">Fecha</th>
              <th className="text-left p-4">Estado</th>
              <th className="text-left p-4">
                Hectáreas
              </th>
              <th className="text-left p-4">
                Acciones
              </th>
            </tr>

          </thead>

          <tbody>

            {reportes.map((r) => (
              <tr
                key={r.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">
                  {r.id}
                </td>

                <td className="p-4">
                  {r.zona}
                </td>

                <td className="p-4">
                  {r.fecha}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      r.estado === "Crítico"
                        ? "bg-red-500"
                        : r.estado === "Moderado"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  >
                    {r.estado}
                  </span>

                </td>

                <td className="p-4">
                  {r.hectareas}
                </td>

                <td className="p-4">

                  <button
                    onClick={() =>
                      verReporte(r)
                    }
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Ver
                  </button>

                  <button
                    onClick={() =>
                      eliminarReporte(r.id)
                    }
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Eliminar
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}