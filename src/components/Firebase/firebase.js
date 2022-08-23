import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEjn1MJXNH0amNgH3n9YTJ74xx9JVIJyc",
  authDomain: "hotel-31.firebaseapp.com",
  projectId: "hotel-31",
  storageBucket: "hotel-31.appspot.com",
  messagingSenderId: "108028306064",
  appId: "1:108028306064:web:f4692cb4831e13b621ee15",
  measurementId: "G-5XPM887FHK",
};
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
