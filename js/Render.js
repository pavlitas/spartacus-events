export  class Render {
    
    renderListaGare(gara) {
    return `
        <div class="gara-card" onclick="navigaGara('${gara.id}')">
            <div class="card-img-ph">
                <img class="card-img" src="${gara.immagine}" />
            </div>
            <div class="card-body">
                <div style="flex:1;min-width:0">
                    <div class="card-nome">${gara.nome}</div>
                    <div class="card-meta">
                        <span class="badge">
                            <svg width="11" height="11" fill="none" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" fill="currentColor"/></svg>
                            ${gara.data}
                        </span>
                        <span class="badge">
                            <svg width="11" height="11" fill="none" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/></svg>
                            ${gara.luogo}
                        </span>
                    </div>
                </div>
                <svg class="arrow" width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
        </div>`;
    }

    renderDettaglioGara(gara) {
    return `
        <div class="det-header">
            <button class="btn-back" onclick="window.location.hash='#/'">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Indietro
            </button>
            <span class="det-htitle">${gara.nome}</span>
        </div>

        ${gara.immagine
            ? `<img class="card-img" src="${gara.immagine}" alt="${gara.nome}">`
            : `<div class="det-media-ph">
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="white" opacity="0.12"/></svg>
               </div>`
        }

        <div class="det-body">
            <h1 class="det-nome">${gara.nome}</h1>
            <div class="det-badges">
                <span class="det-badge">
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" fill="currentColor"/></svg>
                    ${gara.data}
                </span>
                <span class="det-badge">
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/></svg>
                    ${gara.luogo}
                </span>
            </div>
            <p class="det-desc">${gara.descrizione}</p>

            ${gara.video ? `
                <div class="det-divider"></div>
                <p class="det-video-label">Video dell'evento</p>
                <div class="det-video-wrap">
                    <iframe src="${gara.video}" allowfullscreen></iframe>
                </div>` 
            : ''}
        </div>`;
}
    
}