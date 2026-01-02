import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDyjthTdLMDPhBAtAgo8UfetNEGsnT6Yx8",
  authDomain: "disney--clone-1cdfd.firebaseapp.com",
  projectId: "disney--clone-1cdfd",
  storageBucket: "disney--clone-1cdfd.firebasestorage.app",
  messagingSenderId: "111589879740",
  appId: "1:111589879740:web:fc3f841bb2eae4c484c5b9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
