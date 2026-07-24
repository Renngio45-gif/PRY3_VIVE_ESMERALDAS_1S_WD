/* =========================================================
   VIVE ESMERALDAS - script.js
   Toda la lógica de la página en JavaScript.
   Técnicas usadas (vistas en clase):
   - Arrays de objetos (Clase 18)
   - forEach() y filter() para recorrer y filtrar (Clase 18)
   - Template literals e innerHTML para generar tarjetas (Clase 18)
   - getElementById() y addEventListener() (Clase 16)
   - Eventos input, change, click y submit (Clase 17 y 21)
   - Validación con if / else, trim(), preventDefault() (Clase 17)
   - localStorage para guardar favoritos (Clase 19)
   ========================================================= */

const experiencias = [
    { nombre: "Playa Las Palmas", categoria: "Playas", precio: 50, horario: "08:00 - 18:00", duracion: 4, franja: "mañana-tarde", recomendaciones: "Usar protector solar", imagen: "https://i.ytimg.com/vi/crYihKtMbGs/sddefault.jpg", descripcion: "Playa urbana ideal para turismo familiar.", ubicacion: "Esmeraldas" },
    { nombre: "Playa de Tonsupa", categoria: "Playas", precio: 30, horario: "08:00 - 18:00", duracion: 5, franja: "mañana-tarde", recomendaciones: "Disfrutar del atardecer", imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80", descripcion: "Playa urbana ideal para turismo familiar.", ubicacion: "Tonsupa" },
    { nombre: "Atacames", categoria: "Playas", precio: 20, horario: "09:00 - 20:00", duracion: 6, franja: "todo el día", recomendaciones: "Probar la comida típica a la orilla del mar", imagen: "https://i.ytimg.com/vi/AJEPcXjO64U/maxresdefault.jpg", descripcion: "Uno de los destinos más visitados del Ecuador.", ubicacion: "Atacames" },
    { nombre: "Festival Marimba", categoria: "Cultura", precio: 10, horario: "18:00 - 22:00", duracion: 3, franja: "noche", recomendaciones: "Asistir con ropa cómoda para bailar", imagen: "https://ec.viajandox.com/uploads/Festival%20Internacional%20de%20M%C3%BAsica%20y%20Danza_4.jpg", descripcion: "Música tradicional afroesmeraldeña.", ubicacion: "Esmeraldas" },
    { nombre: "Ruta Gastronómica", categoria: "Gastronomía", precio: 25, horario: "12:00 - 16:00", duracion: 3, franja: "tarde", recomendaciones: "Probar el encocado de camarón", imagen: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80", descripcion: "Recorrido por la gastronomía local.", ubicacion: "Centro" },
    { nombre: "Reserva Mache Chindul", categoria: "Naturaleza", precio: 40, horario: "07:00 - 16:00", duracion: 8, franja: "mañana-tarde", recomendaciones: "Llevar zapatos adecuados para montaña", imagen: "https://pbs.twimg.com/media/FZu7eRrXEAMRECx.jpg", descripcion: "Bosque tropical y biodiversidad.", ubicacion: "Muisne" },
    { nombre: "Tour Histórico", categoria: "Recorridos", precio: 15, horario: "09:00 - 12:00", duracion: 2, franja: "mañana", recomendaciones: "Tomar nota de los datos históricos", imagen: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/48/ed/d0.jpg", descripcion: "Historia y patrimonio.", ubicacion: "Esmeraldas" },
    { nombre: "Mompiche", categoria: "Playas", precio: 18, horario: "08:00 - 18:00", duracion: 6, franja: "mañana-tarde", recomendaciones: "Llevar tabla de surf si lo practicas", imagen: "https://velturtravel.com/wp-content/uploads/DECAMERON-MOMPICHE2-1.jpg", descripcion: "Surf y naturaleza.", ubicacion: "Mompiche" },
    { nombre: "Parque Familiar", categoria: "Familia", precio: 8, horario: "09:00 - 17:00", duracion: 2, franja: "mañana-tarde", recomendaciones: "Ideal para ir con niños", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80", descripcion: "Actividades para toda la familia.", ubicacion: "Esmeraldas" },
    { nombre: "Festival Cultural", categoria: "Eventos", precio: 5, horario: "17:00 - 22:00", duracion: 4, franja: "noche", recomendaciones: "Llegar temprano para conseguir buen puesto", imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80", descripcion: "Presentaciones artísticas.", ubicacion: "Malecón" },
    { nombre: "Escuela de Marimba", categoria: "Música y Danza", precio: 12, horario: "15:00 - 17:00", duracion: 2, franja: "tarde", recomendaciones: "Participar en las dinámicas de clase", imagen: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80", descripcion: "Aprendizaje musical.", ubicacion: "Esmeraldas" },
    { nombre: "Same", categoria: "Playas", precio: 22, horario: "08:00 - 18:00", duracion: 5, franja: "mañana-tarde", recomendaciones: "Disfrutar del ambiente exclusivo", imagen: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=900&q=80", descripcion: "Destino turístico premium.", ubicacion: "Same" },
    { nombre: "Feria Gastronómica", categoria: "Eventos", precio: 10, horario: "10:00 - 15:00", duracion: 3, franja: "mañana-tarde", recomendaciones: "Probar los dulces tradicionales", imagen: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80", descripcion: "Comida típica esmeraldeña.", ubicacion: "Esmeraldas" },
    { nombre: "Ruta del Spondylus (tramo Esmeraldas)", categoria: "Recorridos", precio: 30, horario: "08:00 - 17:00", duracion: 8, franja: "todo el día", recomendaciones: "Ideal en vehículo propio, con paradas libres", imagen: null, descripcion: "Recorrido costero por la vía E15 entre las playas emblemáticas.", ubicacion: "Costa de Esmeraldas" },
    { nombre: "Avistamiento de Ballenas Jorobadas", categoria: "Recorridos", precio: 40, horario: "09:00 - 12:00", duracion: 3, franja: "mañana", recomendaciones: "Temporada: junio a septiembre", imagen: null, descripcion: "Salida en lancha desde Súa para observar ballenas jorobadas.", ubicacion: "Súa" },
    { nombre: "Manglares de Valdez (Limones)", categoria: "Recorridos", precio: 25, horario: "08:00 - 12:00", duracion: 4, franja: "mañana", recomendaciones: "Llevar repelente y gorra", imagen: null, descripcion: "Recorrido fluvial entre manglares en el norte de la provincia.", ubicacion: "Valdez, Eloy Alfaro" },
    { nombre: "Ruta Cultural Chachi", categoria: "Recorridos", precio: 35, horario: "08:00 - 14:00", duracion: 6, franja: "mañana-tarde", recomendaciones: "Respetar las costumbres de la comunidad", imagen: null, descripcion: "Inmersión cultural con la nacionalidad Chachi en el río Canandé.", ubicacion: "Río Canandé, Quinindé" },
    { nombre: "Playa Escondida", categoria: "Naturaleza", precio: 15, horario: "08:00 - 17:00", duracion: 5, franja: "mañana-tarde", recomendaciones: "Llevar agua y snacks, zona poco comercial", imagen: null, descripcion: "Refugio ecológico de playa rústica y tranquila.", ubicacion: "Tonchigüe - Punta Galera" },
    { nombre: "Laguna de Cube", categoria: "Naturaleza", precio: 12, horario: "08:00 - 16:00", duracion: 4, franja: "mañana-tarde", recomendaciones: "Ideal para observación de aves", imagen: null, descripcion: "Humedal de importancia internacional en la zona de Quinindé.", ubicacion: "Quinindé" },
    { nombre: "Reserva Manglares Cayapas-Mataje", categoria: "Naturaleza", precio: 20, horario: "07:00 - 15:00", duracion: 5, franja: "mañana-tarde", recomendaciones: "Hogar de los manglares más altos del mundo", imagen: null, descripcion: "Reserva ecológica de manglares en San Lorenzo.", ubicacion: "San Lorenzo" },
    { nombre: "Reserva Marina Galera-San Francisco", categoria: "Naturaleza", precio: 18, horario: "08:00 - 16:00", duracion: 4, franja: "mañana-tarde", recomendaciones: "Apta para snorkel y buceo con guía", imagen: null, descripcion: "Área marina protegida con arrecifes y vida submarina.", ubicacion: "Punta Galera, Muisne" },
    { nombre: "Encocao de Mariscos", categoria: "Gastronomía", precio: 8, horario: "12:00 - 15:00", duracion: 0.5, franja: null, recomendaciones: "El plato insignia de la provincia", imagen: null, descripcion: "Degustación del tradicional encocao con leche de coco.", ubicacion: "Malecón de Esmeraldas" },
    { nombre: "Tapao Arrecho", categoria: "Gastronomía", precio: 7, horario: "12:00 - 15:00", duracion: 0.5, franja: null, recomendaciones: "Receta ancestral esmeraldeña", imagen: null, descripcion: "Degustación del contundente plato de pescado y plátano.", ubicacion: "Centro de Esmeraldas" },
    { nombre: "Ceviche de Concha", categoria: "Gastronomía", precio: 6, horario: "10:00 - 14:00", duracion: 0.5, franja: null, recomendaciones: "Acompañar con chifles y limón", imagen: null, descripcion: "Degustación del ceviche típico de concha prieta.", ubicacion: "Las Palmas" },
    { nombre: "Cocadas Tradicionales", categoria: "Gastronomía", precio: 3, horario: "09:00 - 18:00", duracion: 0.5, franja: null, recomendaciones: "Probar la blanca y la negra", imagen: null, descripcion: "Dulce artesanal de coco, herencia afroesmeraldeña.", ubicacion: "Malecón Las Palmas" },
    { nombre: "Fiestas de Independencia de Esmeraldas", categoria: "Eventos", precio: 5, horario: "18:00 - 23:00", duracion: 5, franja: "noche", recomendaciones: "Agosto, mes de la independencia", imagen: null, descripcion: "Desfiles, música y celebración cívica de la provincia.", ubicacion: "Esmeraldas" },
    { nombre: "Aqua Park Atacames", categoria: "Familia", precio: 15, horario: "10:00 - 17:00", duracion: 4, franja: "mañana-tarde", recomendaciones: "Piscinas y toboganes para los pequeños", imagen: null, descripcion: "Centro de diversión acuática para toda la familia.", ubicacion: "Atacames" }
];

const EMOJI_CATEGORIA = {
    "Playas": "🏖️", "Cultura": "🎭", "Música y Danza": "🎵", "Gastronomía": "🍤",
    "Recorridos": "🚶", "Naturaleza": "🌿", "Eventos": "🎉", "Familia": "👨‍👩‍👧‍👦"
};

const cards = document.getElementById("cards");                 // Contenedor del catálogo
const listaFavoritos = document.getElementById("listaFavoritos"); // Contenedor de favoritos
const modal = document.getElementById("modal");                 // Ventana de detalles

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function formatoTiempo(horas) {
    if (horas < 1) {
        return Math.round(horas * 60) + " min";   // Menos de 1 hora: mostramos minutos
    }
    return horas + " h";                            // 1 hora o más: mostramos horas
}

function textoEstancia(exp) {
    if (exp.franja) {
        return formatoTiempo(exp.duracion) + " (" + exp.franja + ")";
    }
    return formatoTiempo(exp.duracion);
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
        mensaje.style.display = "block";   // Mostramos el mensaje "aún no tienes favoritos"
        listaFavoritos.innerHTML = "";     // Vaciamos el contenedor
    } else {
        mensaje.style.display = "none";    // Ocultamos el mensaje
        listaFavoritos.innerHTML = "";
        favs.forEach(exp => {
            listaFavoritos.innerHTML += crearCard(exp);
        });
    }
}

function imagenCard(exp) {
    if (exp.imagen) {
        return '<img src="' + exp.imagen + '" alt="' + exp.nombre + '">';
    }
    const emoji = EMOJI_CATEGORIA[exp.categoria];
    return '<div class="card-img-placeholder"><span>' + emoji + '</span><small>Imagen próximamente</small></div>';
}

function crearCard(exp) {
    const i = experiencias.indexOf(exp);   // Posición de la experiencia en el arreglo
    const fav = esFavorito(exp.nombre);    // ¿Es favorita? (para pintar el corazón)
    const emoji = EMOJI_CATEGORIA[exp.categoria];

    return `
    <div class="card">
        <button class="fav-btn" onclick="toggleFavorito(${i})" title="Agregar o quitar de favoritos">${fav ? "❤️" : "🤍"}</button>
        <span class="etiqueta-categoria">${emoji} ${exp.categoria}</span>
        ${imagenCard(exp)}
        <div class="card-body">
            <h3>${exp.nombre}</h3>
            <p>${exp.descripcion}</p>
            <div class="card-datos">
                <span>💵 $${exp.precio}</span>
                <span>🕒 ${textoEstancia(exp)}</span>
            </div>
            <button class="btn-detalle" onclick="detalle(${i})">Ver Detalles</button>
        </div>
    </div>`;
}

function mostrar(lista) {
    if (lista.length === 0) {
        cards.innerHTML = '<p class="sin-resultados">😕 No se encontraron experiencias con esos filtros.</p>';
        return;
    }
    cards.innerHTML = "";
    lista.forEach(exp => {
        cards.innerHTML += crearCard(exp);
    });
}

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

    mostrar(resultado);   // Mostramos el resultado del filtro
}

function filtrarPorCategoria(categoria) {
    document.getElementById("filtroCategoria").value = categoria;  // Ponemos el filtro
    filtrar();                                                     // Aplicamos el filtro
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("busqueda").addEventListener("input", filtrar);
document.getElementById("filtroCategoria").addEventListener("change", filtrar);
document.getElementById("filtroPrecio").addEventListener("change", filtrar);
document.getElementById("filtroDuracion").addEventListener("change", filtrar);

function detalle(i) {
    const exp = experiencias[i];

    document.getElementById("contenidoModal").innerHTML = `
        ${exp.imagen
            ? `<img src="${exp.imagen}" alt="${exp.nombre}" class="modal-img">`
            : `<div class="card-img-placeholder modal-img"><span>${EMOJI_CATEGORIA[exp.categoria]}</span><small>Imagen próximamente</small></div>`}
        <h2>${exp.nombre}</h2>
        <p>${exp.descripcion}</p>
        <p><strong>Ubicación:</strong> ${exp.ubicacion}</p>
        <p><strong>Categoría:</strong> ${exp.categoria}</p>
        <p><strong>Precio:</strong> $${exp.precio}</p>
        <p><strong>Horario:</strong> ${exp.horario}</p>
        <p><strong>Estancia estimada:</strong> ${textoEstancia(exp)}</p>
        <p><strong>Recomendaciones:</strong> ${exp.recomendaciones}</p>
        <button class="btn-reservar" onclick="reservarDesdeModal(${i})">📅 Reservar esta experiencia</button>`;

    modal.style.display = "flex";   // Hacemos visible el modal
}

function cerrarModal() {
    modal.style.display = "none";
}

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        cerrarModal();
    }
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

    if (favs.length === 0) {
        resultado.textContent = "⚠️ Agrega experiencias a favoritos (🤍) para armar tu ruta.";
        return;
    }

    let costoTotal = 0;
    let tiempoTotal = 0;
    favs.forEach(exp => {
        costoTotal += exp.precio;
        tiempoTotal += exp.duracion;
    });

    resultado.textContent = "Tu ruta tiene " + favs.length +
        " experiencia(s): costo total de $" + costoTotal +
        " y tiempo total de " + formatoTiempo(tiempoTotal) + ".";
}

function mostrarError(idInput, idError, mensaje) {
    const input = document.getElementById(idInput);
    const error = document.getElementById(idError);
    error.textContent = mensaje;
    if (mensaje) {
        input.classList.add("invalido");     // Pinta el campo de rojo
    } else {
        input.classList.remove("invalido");  // Quita el rojo
    }
}

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();   // Evitamos que la página se recargue (Clase 17)

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const fecha = document.getElementById("fecha").value;
    const mensajeReserva = document.getElementById("mensajeReserva");
    let valido = true;   // Suponemos que todo está bien hasta que falle algo

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

    mensajeReserva.textContent = "✅ ¡Gracias " + nombre + "! Tu reserva para el " + fecha + " fue enviada correctamente.";
    this.reset();
});

mostrar(experiencias);    // Dibujamos el catálogo completo
mostrarFavoritos();       // Dibujamos los favoritos guardados
