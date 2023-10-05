import { initializeApp, FirebaseApp } from "firebase/app";
import {
  getAuth,
  Auth,
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  Firestore,
  doc,
  getDoc,
  setDoc,
  DocumentReference,
} from "firebase/firestore";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyA3dYJmFNLxdf426XMGl5vD-9sQtW3d_dE",
  authDomain: "eshop-furniture-db.firebaseapp.com",
  projectId: "eshop-furniture-db",
  storageBucket: "eshop-furniture-db.appspot.com",
  messagingSenderId: "442203956070",
  appId: "1:442203956070:web:fd06291205779f57b2dea7",
};

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

const provider: GoogleAuthProvider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth: Auth = getAuth();
export const signInWithGooglePopup = (): Promise<UserCredential> =>
  signInWithPopup(auth, provider);

export const db: Firestore = getFirestore();

interface UserAuth {
    uid: string;
    displayName?: string | null;
    email?: string | null;
  }
  
  export const createUserDocumentFromAuth = async (
    userAuth: UserAuth
  ): Promise<DocumentReference> => {
    const userDocRef: DocumentReference = doc(db, "users", userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      } catch (error: any) {
        console.log("Error creating the user", error.message);
      }
    }
  
    return userDocRef;
  };