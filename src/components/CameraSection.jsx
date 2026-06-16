import { useRef } from "react";

export default function CameraSection() {
  const videoRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error(error);
      alert("No se pudo acceder a la cámara");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">
        Cámara Ambiental
      </h2>

      <button
        onClick={startCamera}
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        Activar Cámara
      </button>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full mt-4 rounded-xl"
      />
    </div>
  );
}