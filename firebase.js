import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

async function postTweet(text) {
  await addDoc(collection(db, "tweets"), {
    content: text,
    createdAt: new Date()
  });
}

import { collection, getDocs } from "firebase/firestore";

async function loadTweets() {
  const snapshot = await getDocs(collection(db, "tweets"));

  snapshot.forEach(doc => {
    console.log(doc.data());
  });
}