import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'

 const firebaseConfig = {
    apiKey: "AIzaSyCiwnFh40AA40jbC_BZtk3xEXlCnE-eJS8",
    authDomain: "reactfire-b954e.firebaseapp.com",
    databaseURL: "https://reactfire-b954e-default-rtdb.firebaseio.com",
    projectId: "reactfire-b954e",
    storageBucket: "reactfire-b954e.appspot.com",
    messagingSenderId: "156516101660",
    appId: "1:156516101660:web:289b909c51d9ac831e79d9"
  };
  const app=initializeApp(firebaseConfig);
  export const db =getFirestore(app);