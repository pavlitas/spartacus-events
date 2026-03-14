// Home.js - Home.js → FirebaseService → Gara → Render.js

import { Render } from "../Render.js";
import { showLoader, hideLoader } from '../utils.js';
const app = document.getElementById("app");

export async function Home(service) {
    app.className = 'page-home';
    let html = "";
    const render = new Render();
    showLoader();
    const gare = await service.getGare();
    for(let gara of gare) { html += render.renderListaGare(gara); }
    hideLoader();
    
    app.innerHTML = html;
    
}