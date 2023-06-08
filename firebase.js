import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBM8owbW2Ro3QhD0juhk5gkZnskR1HElvE",
  authDomain: "washwish-95ce8.firebaseapp.com",
  projectId: "washwish-95ce8",
  storageBucket: "washwish-95ce8.appspot.com",
  messagingSenderId: "775943672187",
  appId: "1:775943672187:web:9bdd2d3c21922d55dcadde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};