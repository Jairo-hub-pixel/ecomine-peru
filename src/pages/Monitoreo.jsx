import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function Monitoreo() {
  const [datos, setDatos] = useState([
    {
      id: 1,
      zona: "Zona desconocida",
      fecha: "30/04/2026",
      agua: "20%",
      aire: "35%",
      mercurio: "1.05 ppm",
      deforestacion: "148 ha",
      temperatura: "27.8°C",
    },
    {
      id: 2,
      zona: "Cuenca del Santiago",
      fecha: "30/04/2026",
      agua: "75%",
      aire: "80%",
      mercurio: "0.08 ppm",
      deforestacion: "4.5 ha",
      temperatura: "24.5°C",
    },
    {
      id: 3,
      zona: "Zona desconocida",
      fecha: "30/04/2026",
      agua: "15%",
      aire: "30%",
      mercurio: "0.88 ppm",
      deforestacion: "280 ha",
      temperatura: "27.9°C",
    },
    {
      id: 4,
      zona: "Zona desconocida",
      fecha: "19/04/2026",
      agua: "28%",
      aire: "42%",
      mercurio: "1.35 ppm",
      deforestacion: "18 ha",
      temperatura: "4.8°C",
    },
    {
      id: 5,
      zona: "Zona desconocida",
      fecha: "14/04/2026",
      agua: "50%",
      aire: "60%",
      mercurio: "0.42 ppm",
      deforestacion: "35.5 ha",
      temperatura: "31°C",
    },
    {
      id: 6,
      zona: "Zona desconocida",
      fecha: "09/04/2026",
      agua: "60%",
      aire: "70%",
      mercurio: "0.15 ppm",
      deforestacion: "12 ha",
      temperatura: "26.5°C",
    },
    {
      id: 7,
      zona: "Zona desconocida",
      fecha: "31/03/2026",
      agua: "18%",
      aire: "32%",
      mercurio: "0.75 ppm",
      deforestacion: "250 ha",
      temperatura: "28.5°C",
    },
    {
      id: 8,
      zona: "Zona desconocida",
      fecha: "31/03/2026",
      agua: "22%",
      aire: "38%",
      mercurio: "0.92 ppm",
      deforestacion: "135.2 ha",
      temperatura: "29.1°C",
    },
  ]);

  const [paginaActual, setPaginaActual] = useState(1);

  const registrosPorPagina = 5;

  const ultimoRegistro =
    paginaActual * registrosPorPagina;

  const primerRegistro =
    ultimoRegistro - registrosPorPagina;

  const datosActuales = datos.slice(
    primerRegistro,
    ultimoRegistro
  );

  const totalPaginas = Math.ceil(
    datos.length / registrosPorPagina
  );

  const eliminar = (id) => {
    setDatos(datos.filter((d) => d.id !== id));
  };

  const nuevoRegistro = () => {
    const zona = prompt("Ingrese la zona");

    if (!zona) return;

    setDatos([
      {
        id: Date.now(),
        zona,
        fecha: new Date().toLocaleDateString(),
        agua: "70%",
        aire: "75%",
        mercurio: "0.05 ppm",
        deforestacion: "5 ha",
        temperatura: "25°C",
      },
      ...datos,
    ]);
  };

  const exportarCSV = () => {
    const encabezado =
      "Zona,Fecha,Agua,Aire,Mercurio,Deforestacion,Temperatura\n";

    const filas = datos
      .map(
        (d) =>
          `${d.zona},${d.fecha},${d.agua},${d.aire},${d.mercurio},${d.deforestacion},${d.temperatura}`
      )
      .join("\n");

    const csv = encabezado + filas;

    const blob = new Blob([csv], {
      type: "text/csv",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "monitoreo.csv";
    a.click();
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold">
            Monitoreo Ambiental
          </h1>

          <p className="text-gray-500">
            Registro de indicadores ambientales por zona
          </p>
        </div>

        <div className="flex gap-3">

          <button
            onClick={exportarCSV}
            className="border px-5 py-3 rounded-xl"
          >
            Exportar CSV
          </button>

          <button
            onClick={nuevoRegistro}
            className="bg-green-600 text-white px-5 py-3 rounded-xl"
          >
            + Nuevo Registro
          </button>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>
              <th className="p-4 text-left">Zona</th>
              <th className="p-4 text-left">Fecha</th>
              <th className="p-4 text-left">Agua</th>
              <th className="p-4 text-left">Aire</th>
              <th className="p-4 text-left">Mercurio</th>
              <th className="p-4 text-left">Deforest.</th>
              <th className="p-4 text-left">Temp.</th>
              <th className="p-4 text-left">Acciones</th>
            </tr>

          </thead>

          <tbody>

            {datosActuales.map((d) => (

              <tr
                key={d.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4 font-medium">
                  {d.zona}
                </td>

                <td className="p-4">
                  {d.fecha}
                </td>

                <td className="p-4">
                  🔴 {d.agua}
                </td>

                <td className="p-4">
                  🔴 {d.aire}
                </td>

                <td className="p-4">
                  {d.mercurio}
                </td>

                <td className="p-4">
                  {d.deforestacion}
                </td>

                <td className="p-4">
                  {d.temperatura}
                </td>

                <td className="p-4">
                  <FaTrash
                    onClick={() => eliminar(d.id)}
                    className="cursor-pointer text-red-500"
                  />
                </td>

              </tr>

            ))}

          </tbody>

        </table>

        <div className="flex justify-center gap-2 py-5">

          <button
            onClick={() =>
              setPaginaActual((prev) =>
                Math.max(prev - 1, 1)
              )
            }
            className="px-4 py-2 border rounded"
          >
            Anterior
          </button>

          {[...Array(totalPaginas)].map(
            (_, index) => (
              <button
                key={index}
                onClick={() =>
                  setPaginaActual(index + 1)
                }
                className={`px-4 py-2 rounded ${
                  paginaActual === index + 1
                    ? "bg-green-600 text-white"
                    : "border"
                }`}
              >
                {index + 1}
              </button>
            )
          )}

          <button
            onClick={() =>
              setPaginaActual((prev) =>
                Math.min(
                  prev + 1,
                  totalPaginas
                )
              )
            }
            className="px-4 py-2 border rounded"
          >
            Siguiente
          </button>

        </div>

      </div>

    </div>
  );
}