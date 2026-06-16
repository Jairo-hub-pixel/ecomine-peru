import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuGbLcemEbYDFQpd6slfGuvPFi12ppnIY",
  authDomain: "ecomine-peru.firebaseapp.com",
  projectId: "ecomine-peru",
  storageBucket: "ecomine-peru.firebasestorage.app",
  messagingSenderId: "507047426003",
  appId: "1:507047426003:web:9a4762211da69c09b06126"
};

// Inicializar app
const app = initializeApp(firebaseConfig);

// Servicios
export const auth = getAuth(app);
export const db = getFirestore(app);