import {
  FaTree,
  FaExclamationTriangle,
  FaMapMarkedAlt,
  FaCamera,
} from "react-icons/fa";

export default function StatsCards() {
  const cards = [
    {
      title: "Zonas Detectadas",
      value: "48",
      icon: <FaMapMarkedAlt size={28} />,
    },
    {
      title: "Alertas Activas",
      value: "12",
      icon: <FaExclamationTriangle size={28} />,
    },
    {
      title: "Monitoreos",
      value: "8",
      icon: <FaCamera size={28} />,
    },
    {
      title: "Hectáreas",
      value: "1051",
      icon: <FaTree size={28} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow"
        >
          <div className="flex justify-between items-center">
            {card.icon}
            <span className="text-4xl font-bold">
              {card.value}
            </span>
          </div>

          <p className="mt-4 text-gray-500">
            {card.title}
          </p>
        </div>
      ))}
    </div>
  );
}