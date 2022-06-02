// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBopPCSge0pf3PvWAMVJgkz_zmb_cz3eK8",
  authDomain: "sparta-react-basic-a3d91.firebaseapp.com",
  projectId: "sparta-react-basic-a3d91",
  storageBucket: "sparta-react-basic-a3d91.appspot.com",
  messagingSenderId: "320412729298",
  appId: "1:320412729298:web:ee60c3244d496c7116120b",
  measurementId: "G-QSW8HTWXKR"
};

// firebaseConfig 정보로 firebase 시작
initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = getFirestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { db };