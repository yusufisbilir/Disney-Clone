import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIOC1gvzGP6AMEXKdxQ9cRhPYeM1zIttM",
  authDomain: "disney-clone-a532a.firebaseapp.com",
  projectId: "disney-clone-a532a",
  storageBucket: "disney-clone-a532a.appspot.com",
  messagingSenderId: "219550947884",
  appId: "1:219550947884:web:75a572509c8623f4f14f89",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { storage };
export default db;
