import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const env = import.meta.env;
const hasAllEnv =
  env.VITE_FIREBASE_API_KEY &&
  env.VITE_FIREBASE_AUTH_DOMAIN &&
  env.VITE_FIREBASE_PROJECT_ID &&
  env.VITE_FIREBASE_STORAGE_BUCKET &&
  env.VITE_FIREBASE_MESSAGING_SENDER_ID &&
  env.VITE_FIREBASE_APP_ID;

let app = null;
let auth = null;
let db = null;
let storage = null;

if (!hasAllEnv) {
  console.warn(
    "Missing one or more VITE_FIREBASE_* env vars. Firebase not initialized. " +
      "Place .env.local into the fenivi/ folder and remove surrounding quotes from values."
  );
} else {
  try {
    const firebaseConfig = {
      apiKey: env.VITE_FIREBASE_API_KEY,
      authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: env.VITE_FIREBASE_APP_ID,
    };

    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    console.info("Firebase initialized:", {
      projectId: firebaseConfig.projectId,
      authDomain: firebaseConfig.authDomain,
    });
  } catch (err) {
    console.error("Firebase initialization error:", err);
  }
}

// Export a simple flag consumers can check
export const isFirebaseInitialized = !!app;
export { auth, db, storage };
