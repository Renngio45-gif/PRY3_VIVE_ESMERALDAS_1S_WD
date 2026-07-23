// ===== Buscador de experiencias (catalogo.html) =====
// La página arranca solo con el buscador; las experiencias
// aparecen cuando el usuario escribe o elige un filtro.

const cards = document.getElementById("cards");

function imagenBuscador(exp) {
    if (exp.imagen) {
        return `<img src="${exp.imagen}" alt="${exp.nombre}">`;
    }
    const emoji = EMOJI_CATEGORIA[exp.categoria] || "🌴";
    return `<div class="card-img-placeholder"><span>${emoji}</span><small>Imagen próximamente</small></div>`;
}

function cardBuscador(exp) {
    return `
<div class="card">
${imagenBuscador(exp)}
<div class="card-body">
<h3>${exp.nombre}</h3>
<p>${exp.descripcion}</p>
<p><strong>Categoría:</strong> ${exp.categoria}</p>
<p><strong>Ubicación:</strong> ${exp.ubicacion}</p>
<p><strong>Precio:</strong> $${exp.precio}</p>
<p><strong>Estancia:</strong> ${textoEstancia(exp)}</p>
<a class="btn-detalle btn-detalle-link" href="index.html#reserva">📅 Reservar en la página principal</a>
</div>
</div>
    `;
}

function hayBusquedaActiva() {
    const texto = document.getElementById("busqueda").value.trim();
    const categoria = document.getElementById("filtroCategoria").value;
    const precio = document.getElementById("filtroPrecio").value;
    const duracion = document.getElementById("filtroDuracion").value;
    return texto !== "" || categoria !== "Todas" || precio !== "todos" || duracion !== "todas";
}

function buscar() {
    if (!hayBusquedaActiva()) {
        cards.innerHTML = `<p class="sin-resultados">🔎 Escribe el nombre de una experiencia o elige un filtro para comenzar la búsqueda.</p>`;
        return;
    }

    const texto = document.getElementById("busqueda").value.toLowerCase();
    const categoria = document.getElementById("filtroCategoria").value;
    const precio = document.getElementById("filtroPrecio").value;
    const duracion = document.getElementById("filtroDuracion").value;

    const resultado = experiencias.filter(exp => {
        const okTexto = exp.nombre.toLowerCase().includes(texto) ||
                        exp.descripcion.toLowerCase().includes(texto) ||
                        exp.ubicacion.toLowerCase().includes(texto);
        const okCategoria = categoria === "Todas" || exp.categoria === categoria;
        const okPrecio = precio === "todos" || exp.precio <= Number(precio);
        const okDuracion = duracion === "todas" || exp.duracion <= Number(duracion);
        return okTexto && okCategoria && okPrecio && okDuracion;
    });

    if (resultado.length === 0) {
        cards.innerHTML = `<p class="sin-resultados">😕 No se encontraron experiencias con esos filtros. Intenta con otra búsqueda.</p>`;
        return;
    }

    cards.innerHTML = resultado.map(cardBuscador).join("");
}

document.getElementById("busqueda").addEventListener("input", buscar);
document.getElementById("filtroCategoria").addEventListener("change", buscar);
document.getElementById("filtroPrecio").addEventListener("change", buscar);
document.getElementById("filtroDuracion").addEventListener("change", buscar);

buscar();
