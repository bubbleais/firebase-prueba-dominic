import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyAloW_rl5BBjkTI93oYbrR5aXebzbubldM",
  authDomain: "practica-firebase-20220211.firebaseapp.com",
  projectId: "practica-firebase-20220211",
  storageBucket: "practica-firebase-20220211.appspot.com",
  messagingSenderId: "539286496709",
  appId: "1:539286496709:web:6a415858a563b6484917ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (app) {
  console.log('Firebase initialized successfully');
} else {
  console.log('Firebase initialization failed');
}

const database = getFirestore(app);
if (database) {
  console.log('Firestore initialized correctly');
} else {
  console.log('Firestore initialization failed');
}

const storage = getStorage(app);

if (storage) {
  console.log('storage initialized correctly');
} else {
  console.log('storage initialization failed');
}

export { database,storage };
