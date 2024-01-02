// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbmguL0T_GC4MvP6QrFw7ipnD5A9R5Xag",
  authDomain: "qlbanhang-457b3.firebaseapp.com",
  databaseURL: "https://qlbanhang-457b3-default-rtdb.firebaseio.com",
  projectId: "qlbanhang-457b3",
  storageBucket: "qlbanhang-457b3.appspot.com",
  messagingSenderId: "103310912503",
  appId: "1:103310912503:web:a26b9cd4376ce37c35dcf2",
  measurementId: "G-NTR0G838T1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const dbRef = ref(database, "Products");
