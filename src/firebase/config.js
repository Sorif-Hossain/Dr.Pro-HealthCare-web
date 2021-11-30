import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBgfGHvls59gI-apglee5-BlTofjYf000o",
  authDomain: "dr-pro-health-care.firebaseapp.com",
  projectId: "dr-pro-health-care",
  storageBucket: "dr-pro-health-care.appspot.com",
  messagingSenderId: "184291185030",
  appId: "1:184291185030:web:bfd7947c49dc868bf65c07"
};

  const initilizeFirebase = () => {
    initializeApp(firebaseConfig);
  };
  export default initilizeFirebase;