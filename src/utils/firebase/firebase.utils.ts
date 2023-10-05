import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3dYJmFNLxdf426XMGl5vD-9sQtW3d_dE",
  authDomain: "eshop-furniture-db.firebaseapp.com",
  projectId: "eshop-furniture-db",
  storageBucket: "eshop-furniture-db.appspot.com",
  messagingSenderId: "442203956070",
  appId: "1:442203956070:web:fd06291205779f57b2dea7",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);