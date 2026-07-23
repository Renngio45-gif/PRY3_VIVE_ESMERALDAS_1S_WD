// ===== Supuestos de cálculo (visibles para poder defenderlos) =====
// Velocidades promedio por medio de transporte (km/h)
const VELOCIDADES = { pie: 4, bus: 30, moto: 40, auto: 50 };
// Gasolina en Ecuador: galón Extra/Ecopaís aprox. $2.50 - $3.00
const PRECIO_GALON = { min: 2.50, max: 3.00 };
// Rendimiento aproximado (km por galón)
const RENDIMIENTO = { moto: 90, auto: 35 };
// Pasaje de bus estimado por km (mínimo $0.35 por tramo)
const BUS_POR_KM = { min: 0.05, max: 0.08 };
const BUS_MINIMO = 0.35;
// Punto de respaldo si el usuario no comparte su ubicación: centro de Esmeraldas
const CENTRO_ESMERALDAS = { lat: 0.9682, lng: -79.6517 };

const cards = document.getElementById("cards");
const listaFavoritos = document.getElementById("listaFavoritos");

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// ===== Ubicación del usuario (con permiso); respaldo: centro de Esmeraldas =====
let posicionUsuario = null;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        pos => { posicionUsuario = { lat: pos.coords.latitude, lng: pos.coords.longitude }; },
        () => { posicionUsuario = null; },
        { timeout: 8000 }
    );
}

function origenActual() {
    return posicionUsuario || CENTRO_ESMERALDAS;
}

function etiquetaOrigen() {
    return posicionUsuario ? "tu ubicación" : "el centro de Esmeraldas";
}

// Distancia en línea recta entre dos coordenadas (fórmula de Haversine, en km)
function distanciaKm(a, b) {
    const R = 6371;
    const dLat = (b.lat - a.lat) * Math.PI / 180;
    const dLng = (b.lng - a.lng) * Math.PI / 180;
    const h = Math.sin(dLat / 2) ** 2 +
              Math.cos(a.lat * Math.PI / 180) * Math.cos(b.lat * Math.PI / 180) *
              Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

// Las comidas se consumen en el sitio; suman como valor, no como recorrido
function esConsumo(exp) {
    return exp.categoria === "Gastronomía";
}

function esFavorito(nombre) {
    return favoritos.includes(nombre);
}

function toggleFavorito(i) {
    const nombre = experiencias[i].nombre;
    if (esFavorito(nombre)) {
        favoritos = favoritos.filter(n => n !== nombre);
    } else {
        favoritos.push(nombre);
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    filtrar();
    mostrarFavoritos();
    document.getElementById("resultadoRuta").textContent = "";
}

function mostrarFavoritos() {
    const mensaje = document.getElementById("mensajeFavoritos");
    const favs = experiencias.filter(exp => esFavorito(exp.nombre));

    if (favs.length === 0) {
        mensaje.style.display = "block";
        listaFavoritos.innerHTML = "";
    } else {
        mensaje.style.display = "none";
        listaFavoritos.innerHTML = favs.map(crearCard).join("");
    }
}

function imagenCard(exp) {
    if (exp.imagen) {
        return `<img src="${exp.imagen}" alt="${exp.nombre}">`;
    }
    const emoji = EMOJI_CATEGORIA[exp.categoria] || "🌴";
    return `<div class="card-img-placeholder"><span>${emoji}</span><small>Imagen próximamente</small></div>`;
}

function crearCard(exp) {
    const i = experiencias.indexOf(exp);
    const fav = esFavorito(exp.nombre);
    return `
<div class="card">
<button class="fav-btn ${fav ? "activo" : ""}" onclick="toggleFavorito(${i})" title="${fav ? "Quitar de favoritos" : "Agregar a favoritos"}">${fav ? "❤️" : "🤍"}</button>
${imagenCard(exp)}
<div class="card-body">
<h3>${exp.nombre}</h3>
<p>${exp.descripcion}</p>
<p><strong>Categoría:</strong> ${exp.categoria}</p>
<p><strong>Precio:</strong> $${exp.precio}</p>
<p><strong>Estancia:</strong> ${textoEstancia(exp)}</p>
<button class="btn-detalle" onclick="detalle(${i})">Ver Detalles</button>
</div>
</div>
    `;
}

function mostrar(lista) {
    if (lista.length === 0) {
        cards.innerHTML = `<p class="sin-resultados">😕 No se encontraron experiencias con esos filtros. Intenta con otra búsqueda.</p>`;
        return;
    }
    cards.innerHTML = lista.map(crearCard).join("");
}

const modal = document.getElementById("modal");

function detalle(i) {
    const exp = experiencias[i];
    const dist = distanciaKm(origenActual(), exp.coordenadas);
    const mapsUrl = posicionUsuario
        ? `https://www.google.com/maps/dir/?api=1&origin=${posicionUsuario.lat},${posicionUsuario.lng}&destination=${exp.coordenadas.lat},${exp.coordenadas.lng}`
        : `https://www.google.com/maps/dir/?api=1&destination=${exp.coordenadas.lat},${exp.coordenadas.lng}`;

    document.getElementById("contenidoModal").innerHTML = `
${exp.imagen
    ? `<img src="${exp.imagen}" alt="${exp.nombre}" style="width:100%; height:220px; object-fit:cover; border-radius:8px; margin-bottom:15px;">`
    : `<div class="card-img-placeholder" style="border-radius:8px; margin-bottom:15px;"><span>${EMOJI_CATEGORIA[exp.categoria] || "🌴"}</span><small>Imagen próximamente</small></div>`}
<h2>${exp.nombre}</h2>
<p>${exp.descripcion}</p>
<p><strong>Ubicación:</strong> ${exp.ubicacion}</p>
<p><strong>Categoría:</strong> ${exp.categoria}</p>
<p><strong>Precio:</strong> $${exp.precio}</p>
<p><strong>Horario:</strong> ${exp.horario}</p>
<p><strong>Estancia estimada:</strong> ${textoEstancia(exp)}</p>
<p><strong>Recomendaciones:</strong> ${exp.recomendaciones}</p>
<div class="traslado-box">
<p><strong>📍 Distancia aproximada:</strong> ${dist.toFixed(1)} km desde ${etiquetaOrigen()} (línea recta)</p>
<p><strong>⏱️ Traslado estimado:</strong></p>
<p class="traslado-tiempos">
🚶 ${formatoTiempo(dist / VELOCIDADES.pie)} &nbsp;·&nbsp;
🚌 ${formatoTiempo(dist / VELOCIDADES.bus)} &nbsp;·&nbsp;
🏍️ ${formatoTiempo(dist / VELOCIDADES.moto)} &nbsp;·&nbsp;
🚗 ${formatoTiempo(dist / VELOCIDADES.auto)}
</p>
<a class="btn-maps" href="${mapsUrl}" target="_blank" rel="noopener">🗺️ Cómo llegar (Google Maps)</a>
</div>
<button class="btn-reservar" onclick="reservarDesdeModal(${i})">📅 Reservar esta experiencia</button>
    `;
    modal.style.display = "flex";
}

function cerrarModal() {
    modal.style.display = "none";
}

modal.addEventListener("click", function(e) {
    if (e.target === modal) cerrarModal();
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") cerrarModal();
});

function reservarDesdeModal(i) {
    const exp = experiencias[i];
    cerrarModal();
    document.getElementById("observaciones").value = "Quiero reservar: " + exp.nombre;
    document.getElementById("reserva").scrollIntoView({ behavior: "smooth" });
}

function calcularRuta() {
    const resultado = document.getElementById("resultadoRuta");
    const favs = experiencias.filter(exp => esFavorito(exp.nombre));
    const vehiculo = document.getElementById("vehiculo").value;

    if (favs.length === 0) {
        resultado.textContent = "⚠️ Agrega experiencias a favoritos (🤍) para armar tu ruta.";
        return;
    }

    let costoActividades = 0;
    let horasEstancia = 0;
    favs.forEach(exp => {
        costoActividades += exp.precio;
        horasEstancia += exp.duracion;
    });

    // Distancia total: recorrido secuencial desde el origen visitando cada favorito.
    // Las comidas (gastronomía) no cuentan como recorrido: se consumen en el sitio.
    let distTotal = 0;
    let puntoActual = origenActual();
    let lugaresRuta = 0;
    let comidasRuta = 0;
    favs.forEach(exp => {
        if (esConsumo(exp)) {
            comidasRuta++;
            return;
        }
        distTotal += distanciaKm(puntoActual, exp.coordenadas);
        puntoActual = exp.coordenadas;
        lugaresRuta++;
    });

    const horasTraslado = distTotal / VELOCIDADES[vehiculo];

    // Costo de transporte según el vehículo elegido
    let transporteMin = 0;
    let transporteMax = 0;
    let notaTransporte = "";

    if (vehiculo === "pie") {
        notaTransporte = "A pie no hay gasto de transporte.";
    } else if (vehiculo === "bus") {
        transporteMin = Math.max(distTotal * BUS_POR_KM.min, BUS_MINIMO);
        transporteMax = Math.max(distTotal * BUS_POR_KM.max, BUS_MINIMO);
        notaTransporte = "Pasajes de bus estimados según distancia.";
    } else {
        const galones = distTotal / RENDIMIENTO[vehiculo];
        transporteMin = galones * PRECIO_GALON.min;
        transporteMax = galones * PRECIO_GALON.max;
        notaTransporte = `Gasolina estimada (galón $${PRECIO_GALON.min.toFixed(2)} - $${PRECIO_GALON.max.toFixed(2)}).`;
    }

    const totalMin = costoActividades + transporteMin;
    const totalMax = costoActividades + transporteMax;
    const nombreVehiculo = { pie: "a pie 🚶", bus: "en bus 🚌", moto: "en moto 🏍️", auto: "en auto 🚗" }[vehiculo];
    const notaComidas = comidasRuta > 0
        ? ` Incluye ${comidasRuta} comida(s) que suman al costo pero no al recorrido.`
        : "";

    resultado.innerHTML = `
Tu ruta tiene ${favs.length} experiencia(s) ${nombreVehiculo}, midiendo desde ${etiquetaOrigen()}:<br>
🎟️ Actividades: $${costoActividades.toFixed(2)} &nbsp;·&nbsp; 🕒 Estancia total: ${formatoTiempo(horasEstancia)}<br>
📍 Recorrido aprox.: ${distTotal.toFixed(1)} km (${lugaresRuta} lugar(es)) &nbsp;·&nbsp; ⏱️ Traslado: ${formatoTiempo(horasTraslado)}<br>
⛽ Transporte: ${vehiculo === "pie" ? "$0.00" : `$${transporteMin.toFixed(2)} - $${transporteMax.toFixed(2)}`}<br>
💰 <strong>Total estimado: $${totalMin.toFixed(2)} - $${totalMax.toFixed(2)}</strong><br>
<small>${notaTransporte}${notaComidas} Distancias en línea recta; el recorrido real por carretera puede variar.</small>
    `;
}

document.getElementById("busqueda").addEventListener("input", filtrar);
document.getElementById("filtroCategoria").addEventListener("change", filtrar);
document.getElementById("filtroPrecio").addEventListener("change", filtrar);
document.getElementById("filtroDuracion").addEventListener("change", filtrar);

function filtrar() {
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

    mostrar(resultado);
}

function mostrarError(idInput, idError, mensaje) {
    const input = document.getElementById(idInput);
    const error = document.getElementById(idError);
    error.textContent = mensaje;
    if (mensaje) {
        input.classList.add("invalido");
    } else {
        input.classList.remove("invalido");
    }
}

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const fecha = document.getElementById("fecha").value;
    const mensajeReserva = document.getElementById("mensajeReserva");
    let valido = true;

    if (nombre === "") {
        mostrarError("nombre", "errorNombre", "El nombre es obligatorio.");
        valido = false;
    } else if (nombre.length < 3) {
        mostrarError("nombre", "errorNombre", "El nombre debe tener al menos 3 letras.");
        valido = false;
    } else {
        mostrarError("nombre", "errorNombre", "");
    }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo === "") {
        mostrarError("correo", "errorCorreo", "El correo es obligatorio.");
        valido = false;
    } else if (!formatoCorreo.test(correo)) {
        mostrarError("correo", "errorCorreo", "Escribe un correo válido (ejemplo@correo.com).");
        valido = false;
    } else {
        mostrarError("correo", "errorCorreo", "");
    }

    const hoy = new Date().toISOString().split("T")[0];
    if (fecha === "") {
        mostrarError("fecha", "errorFecha", "Selecciona una fecha para tu visita.");
        valido = false;
    } else if (fecha < hoy) {
        mostrarError("fecha", "errorFecha", "La fecha no puede ser anterior a hoy.");
        valido = false;
    } else {
        mostrarError("fecha", "errorFecha", "");
    }

    if (!valido) {
        mensajeReserva.textContent = "";
        return;
    }

    mensajeReserva.textContent = `✅ ¡Gracias ${nombre}! Tu reserva para el ${fecha} fue enviada correctamente.`;
    this.reset();
    setTimeout(() => { mensajeReserva.textContent = ""; }, 6000);
});

mostrar(experiencias);
mostrarFavoritos();
