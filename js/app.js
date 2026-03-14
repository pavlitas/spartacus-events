
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { FirebaseService } from './FirebaseService.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFf4EAdj4fsVj4R8FVa0LgUmCHnap65RE",
    authDomain: "spartacus-events.firebaseapp.com",
    projectId: "spartacus-events",
    storageBucket: "spartacus-events.firebasestorage.app",
    messagingSenderId: "751426998433",
    appId: "1:751426998433:web:e2fb851f42477bfd6820e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const service = new FirebaseService(app)

//Pages
import { Home } from "./pages/Home.js";
import { Dettaglio } from "./pages/Dettaglio.js";

// In ascolto sulla pagina

window.addEventListener('load', () => {
    router();
    setTimeout(() => {
        document.getElementById('app').classList.add('visible');
    }, 1100);
});

window.addEventListener('hashchange', router)

function router() {
    const hash = window.location.hash || '#/';
    
    if (hash === '#/') {
        // carica Home
        Home(service);
        
    } else if (hash === '#/login') {
        // carica Login
    } else if (hash === '#/admin') {
        // carica Admin
    } else if (hash.startsWith('#/gara/')) {
        // carica Dettaglio — ma come prendi l'id?
        const id = hash.split("/")[2];
        Dettaglio(service, id);
    }
}

function navigaGara(id) { window.location.hash = `#/gara/${id}`; }
window.navigaGara = navigaGara;

