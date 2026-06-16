export default function AlertsPanel() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-bold mb-6">
        Alertas
      </h2>

      <div className="space-y-4">

        <div className="bg-red-100 p-4 rounded-xl">
          🚨 Minería ilegal detectada
        </div>

        <div className="bg-yellow-100 p-4 rounded-xl">
          ⚠️ Riesgo de deforestación
        </div>

        <div className="bg-green-100 p-4 rounded-xl">
          ✅ Zona estable
        </div>

      </div>
    </div>
  );
}