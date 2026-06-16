import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuGbLcemEbYDFQpd6slfGuvPFi12ppnIY",
  authDomain: "ecomine-peru.firebaseapp.com",
  projectId: "ecomine-peru",
  storageBucket: "ecomine-peru.firebasestorage.app",
  messagingSenderId: "507047426003",
  appId: "1:507047426003:web:9a4762211da69c09b06126"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);