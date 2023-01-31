import { store } from "./app/store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const firebaseApp = {
   apiKey: process.env.APIKEY,
  authDomain: "socialize-de543.firebaseapp.com",
  projectId: "socialize-de543",
  storageBucket: "socialize-de543.appspot.com",
  messagingSenderId: "1068703961154",
  appId: "1:1068703961154:web:e50605304d52ea0da6dddb",
  measurementId: "G-MNQMSHJ08L"
 }; 

export const app = initializeApp(firebaseApp);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore();
export const auth = getAuth();

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Provider>
   </React.StrictMode>,
   document.getElementById("root")
);
