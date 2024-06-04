import { initializeApp } from "@firebase/app";
import { getDatabase } from "@firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDEKNnBNmipXLaN20zaJLrL3S6MuOM-BlE",
    authDomain: "ce-meb.firebaseapp.com",
    databaseURL: "https://ce-meb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ce-meb",
    storageBucket: "ce-meb.appspot.com",
    messagingSenderId: "514173044969",
    appId: "1:514173044969:web:79a3aef59d9b3be0ee4878"
};

const app = initializeApp(firebaseConfig);
export const databaseJson = getDatabase(app);

