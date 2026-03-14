import { Render } from "../Render.js";
import { showLoader, hideLoader } from '../utils.js';
const app = document.getElementById("app");

export async function Dettaglio(service, id) {
    app.className = 'page-dettaglio';
    const render = new Render();
    showLoader();
    let html = "";
    
    const gara = await service.getGara(id);
    html = render.renderDettaglioGara(gara);

    hideLoader();
    app.innerHTML = html;
    
}