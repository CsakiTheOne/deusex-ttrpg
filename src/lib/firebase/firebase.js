import { initializeApp } from "firebase/app";

/**
 * @returns {import("firebase/app").FirebaseApp}
*/
export function init() {
    const firebaseConfig = {
        apiKey: "AIzaSyDdnD9YfASTnLQeBB4-IDNt1pjysrcYIHE",
        authDomain: "deusex-ttrpg.firebaseapp.com",
        projectId: "deusex-ttrpg",
        storageBucket: "deusex-ttrpg.appspot.com",
        messagingSenderId: "216158899456",
        appId: "1:216158899456:web:f58345fafad8c8d920b7e5",
        measurementId: "G-LNZE2LPG6E"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    return app;
}