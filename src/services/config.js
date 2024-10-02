import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
 // apiKey: "AIzaSyDL2NNTnOw0a2bKJ0tjVfYtGJe-PDI_EwU",
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "odora-59615.firebaseapp.com",
  projectId: "odora-59615",
  storageBucket: "odora-59615.appspot.com",
  messagingSenderId: "43137488601",
  appId: "1:43137488601:web:e130e2777a2893da0890c8"
};

const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)

