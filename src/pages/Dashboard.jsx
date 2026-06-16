import StatsCards from "../components/StatsCards";
import ChartSection from "../components/ChartSection";
import AlertsPanel from "../components/AlertsPanel";

export default function Dashboard() {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-2">
        Dashboard Ambiental
      </h1>

      <p className="text-gray-500 mb-8">
        Monitoreo de minería ilegal en Perú
      </p>

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        <div className="lg:col-span-2">
          <ChartSection />
        </div>

        <AlertsPanel />

      </div>

    </div>
  );
}