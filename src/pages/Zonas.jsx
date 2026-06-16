import { useState } from "react";
import { FaHeart, FaEdit, FaTrash } from "react-icons/fa";

export default function Zonas() {
  const [zonas, setZonas] = useState([
    {
      id: 1,
      nombre: "Cuenca del Santiago",
      region: "Amazonas",
      coordenadas: "-4.0000, -77.8000",
      fecha: "19/01/2026",
      riesgo: "Bajo",
      favorito: false,
    },
  ]);

  const nuevaZona = () => {
    const nombre = prompt("Nombre de la zona");

    if (!nombre) return;

    setZonas([
      ...zonas,
      {
        id: Date.now(),
        nombre,
        region: "Amazonas",
        coordenadas: "-4.0000, -77.8000",
        fecha: new Date().toLocaleDateString(),
        riesgo: "Bajo",
        favorito: false,
      },
    ]);
  };

  const eliminarZona = (id) => {
    setZonas(zonas.filter((z) => z.id !== id));
  };

  const favoritoZona = (id) => {
    setZonas(
      zonas.map((z) =>
        z.id === id
          ? { ...z, favorito: !z.favorito }
          : z
      )
    );
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold">
            Zonas Afectadas
          </h1>

          <p className="text-gray-500">
            Registro y gestión de zonas de minería ilegal
          </p>
        </div>

        <button
          onClick={nuevaZona}
          className="bg-green-600 text-white px-5 py-3 rounded-xl"
        >
          + Nueva Zona
        </button>

      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>
              <th className="text-left p-4">Zona</th>
              <th className="text-left p-4">Región</th>
              <th className="text-left p-4">Coordenadas</th>
              <th className="text-left p-4">Fecha</th>
              <th className="text-left p-4">Riesgo</th>
              <th className="text-left p-4"></th>
              <th className="text-left p-4">Acciones</th>
            </tr>

          </thead>

          <tbody>

            {zonas.map((z) => (
              <tr
                key={z.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-4 font-medium">
                  {z.nombre}
                </td>

                <td className="p-4">
                  {z.region}
                </td>

                <td className="p-4 font-mono text-sm">
                  {z.coordenadas}
                </td>

                <td className="p-4">
                  {z.fecha}
                </td>

                <td className="p-4">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Riesgo Bajo
                  </span>

                </td>

                <td className="p-4">

                  <button
                    onClick={() =>
                      favoritoZona(z.id)
                    }
                  >
                    <FaHeart
                      className={
                        z.favorito
                          ? "text-red-500"
                          : "text-gray-300"
                      }
                    />
                  </button>

                </td>

                <td className="p-4 flex gap-4">

                  <FaEdit className="cursor-pointer text-gray-600" />

                  <FaTrash
                    onClick={() =>
                      eliminarZona(z.id)
                    }
                    className="cursor-pointer text-red-500"
                  />

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}