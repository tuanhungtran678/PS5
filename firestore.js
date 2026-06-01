import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0QbIKtwBF_OYBu5eysagRZIfpkQwCq2g",
  authDomain: "playstation-5-a655a.firebaseapp.com",
  projectId: "playstation-5-a655a",
  storageBucket: "playstation-5-a655a.firebasestorage.app",
  messagingSenderId: "708438469543",
  appId: "1:708438469543:web:3ad4fd2a4901a40428e482",
  measurementId: "G-5VX358RN62"
};

const app = initializeApp(firebaseConfig);

window.DB = getFirestore(app);

window.ProfileDB = {

  async load(uid){

    const ref = doc(DB, "users", uid);
    const snap = await getDoc(ref);

    if(snap.exists()){
      return snap.data();
    }

    return null;
  },

  async create(uid, email){

    const data = {
      username: email.split("@")[0],
      avatar: "",
      level: 1,
      status: "Online",

      trophies:{
        platinum:0,
        gold:0,
        silver:0,
        bronze:0
      }
    };

    await setDoc(doc(DB,"users",uid), data);

    return data;
  }

};