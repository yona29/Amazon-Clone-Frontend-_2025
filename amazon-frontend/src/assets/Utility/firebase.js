
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSoSYQS2-XFr2wc3ZdSSjIXquArtV4O-0",
  authDomain: "clone-2025-d67bf.firebaseapp.com",
  projectId: "clone-2025-d67bf",
  storageBucket: "clone-2025-d67bf.firebasestorage.app",
  messagingSenderId: "562100718812",
  appId: "1:562100718812:web:5c054bf532a524c54ef819",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
