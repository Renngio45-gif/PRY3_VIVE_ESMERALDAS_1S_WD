// ===== Galería de experiencias (experiencias.html) =====

const ORDEN_CATEGORIAS = ["Playas", "Cultura", "Música y Danza", "Gastronomía", "Recorridos", "Naturaleza", "Eventos", "Familia"];

function slugCategoria(cat) {
    return "cat-" + cat.toLowerCase()
        .normalize("NFD").replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9]+/g, "-");
}

function imagenGaleria(exp) {
    if (exp.imagen) {
        return `<img src="${exp.imagen}" alt="${exp.nombre}">`;
    }
    const emoji = EMOJI_CATEGORIA[exp.categoria] || "🌴";
    return `<div class="card-img-placeholder"><span>${emoji}</span><small>Imagen próximamente</small></div>`;
}

function cardGaleria(exp) {
    return `
<div class="card">
${imagenGaleria(exp)}
<div class="card-body">
<h3>${exp.nombre}</h3>
<p>${exp.descripcion}</p>
<p><strong>Ubicación:</strong> ${exp.ubicacion}</p>
<p><strong>Horario:</strong> ${exp.horario}</p>
<p><strong>Estancia:</strong> ${textoEstancia(exp)}</p>
<p><strong>Precio:</strong> $${exp.precio}</p>
<p><strong>Recomendaciones:</strong> ${exp.recomendaciones}</p>
<a class="btn-detalle btn-detalle-link" href="index.html#reserva">📅 Reservar en la página principal</a>
</div>
</div>
    `;
}

function renderGaleria() {
    const contenedor = document.getElementById("galeria");
    let html = "";

    ORDEN_CATEGORIAS.forEach(cat => {
        const items = experiencias.filter(exp => exp.categoria === cat);
        if (items.length === 0) return;
        const emoji = EMOJI_CATEGORIA[cat] || "🌴";
        html += `
<section id="${slugCategoria(cat)}" class="galeria-seccion">
<h2>${emoji} ${cat}</h2>
<div class="cards">
${items.map(cardGaleria).join("")}
</div>
</section>
        `;
    });

    contenedor.innerHTML = html;
}

renderGaleria();
