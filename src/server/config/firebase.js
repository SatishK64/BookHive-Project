import { initializeApp } from 'firebase/app';
import { get, getDatabase } from 'firebase/database';
import dotenv from 'dotenv';

dotenv.config();
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};
console.log('Firebase Config:', firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
export const db = getDatabase(firebaseApp);