const experiencias = [
    {
        nombre: "Playa Las Palmas",
        categoria: "Playas",
        precio: 50,
        horario: "08:00 - 18:00",
        duracion: 4,
        recomendaciones: "Usar protector solar",
        imagen: "https://i.ytimg.com/vi/crYihKtMbGs/sddefault.jpg",
        descripcion: "Playa urbana ideal para turismo familiar.",
        ubicacion: "Esmeraldas"
    },
    {
        nombre: "Playa de Tonsupa",
        categoria: "Playas",
        precio: 30,
        horario: "08:00 - 18:00",
        duracion: 5,
        recomendaciones: "Disfrutar del atardecer",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
        descripcion: "Playa urbana ideal para turismo familiar.",
        ubicacion: "Tonsupa"
    },
    {
        nombre: "Atacames",
        categoria: "Playas",
        precio: 20,
        horario: "09:00 - 20:00",
        duracion: 6,
        recomendaciones: "Probar la comida típica a la orilla del mar",
        imagen: "https://i.ytimg.com/vi/AJEPcXjO64U/maxresdefault.jpg",
        descripcion: "Uno de los destinos más visitados del Ecuador.",
        ubicacion: "Atacames"
    },
    {
        nombre: "Festival Marimba",
        categoria: "Cultura",
        precio: 10,
        horario: "18:00 - 22:00",
        duracion: 3,
        recomendaciones: "Asistir con ropa cómoda para bailar",
        imagen: "https://ec.viajandox.com/uploads/Festival%20Internacional%20de%20M%C3%BAsica%20y%20Danza_4.jpg",
        descripcion: "Música tradicional afroesmeraldeña.",
        ubicacion: "Esmeraldas"
    },
    {
        nombre: "Ruta Gastronómica",
        categoria: "Gastronomía",
        precio: 25,
        horario: "12:00 - 16:00",
        duracion: 3,
        recomendaciones: "Probar el encocado de camarón",
        imagen: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
        descripcion: "Recorrido por la gastronomía local.",
        ubicacion: "Centro"
    },
    {
        nombre: "Reserva Mache Chindul",
        categoria: "Naturaleza",
        precio: 40,
        horario: "07:00 - 16:00",
        duracion: 8,
        recomendaciones: "Llevar zapatos adecuados para montaña",
        imagen: "https://pbs.twimg.com/media/FZu7eRrXEAMRECx.jpg",
        descripcion: "Bosque tropical y biodiversidad.",
        ubicacion: "Muisne"
    },
    {
        nombre: "Tour Histórico",
        categoria: "Recorridos",
        precio: 15,
        horario: "09:00 - 12:00",
        duracion: 2,
        recomendaciones: "Tomar nota de los datos históricos",
        imagen: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/48/ed/d0.jpg",
        descripcion: "Historia y patrimonio.",
        ubicacion: "Esmeraldas"
    },
    {
        nombre: "Mompiche",
        categoria: "Playas",
        precio: 18,
        horario: "08:00 - 18:00",
        duracion: 6,
        recomendaciones: "Llevar tabla de surf si lo practicas",
        imagen: "https://velturtravel.com/wp-content/uploads/DECAMERON-MOMPICHE2-1.jpg",
        descripcion: "Surf y naturaleza.",
        ubicacion: "Mompiche"
    },
    {
        nombre: "Parque Familiar",
        categoria: "Familia",
        precio: 8,
        horario: "09:00 - 17:00",
        duracion: 2,
        recomendaciones: "Ideal para ir con niños",
        imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
        descripcion: "Actividades para toda la familia.",
        ubicacion: "Esmeraldas"
    },
    {
        nombre: "Festival Cultural",
        categoria: "Eventos",
        precio: 5,
        horario: "17:00 - 22:00",
        duracion: 4,
        recomendaciones: "Llegar temprano para conseguir buen puesto",
        imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
        descripcion: "Presentaciones artísticas.",
        ubicacion: "Malecón"
    },
    {
        nombre: "Escuela de Marimba",
        categoria: "Música y Danza",
        precio: 12,
        horario: "15:00 - 17:00",
        duracion: 2,
        recomendaciones: "Participar en las dinámicas de clase",
        imagen: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",
        descripcion: "Aprendizaje musical.",
        ubicacion: "Esmeraldas"
    },
    {
        nombre: "Same",
        categoria: "Playas",
        precio: 22,
        horario: "08:00 - 18:00",
        duracion: 5,
        recomendaciones: "Disfrutar del ambiente exclusivo",
        imagen: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=900&q=80",
        descripcion: "Destino turístico premium.",
        ubicacion: "Same"
    },
    {
        nombre: "Feria Gastronómica",
        categoria: "Eventos",
        precio: 10,
        horario: "10:00 - 15:00",
        duracion: 3,
        recomendaciones: "Probar los dulces tradicionales",
        imagen: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
        descripcion: "Comida típica esmeraldeña.",
        ubicacion: "Esmeraldas"
    }
];

const cards = document.getElementById("cards");
const listaFavoritos = document.getElementById("listaFavoritos");

// ===== Favoritos (se guardan en el navegador) =====
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

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

// ===== Catálogo =====
function crearCard(exp) {
    const i = experiencias.indexOf(exp);
    const fav = esFavorito(exp.nombre);
    return `
<div class="card">
<button class="fav-btn ${fav ? "activo" : ""}" onclick="toggleFavorito(${i})" title="${fav ? "Quitar de favoritos" : "Agregar a favoritos"}">${fav ? "❤️" : "🤍"}</button>
<img src="${exp.imagen}" alt="${exp.nombre}">
<div class="card-body">
<h3>${exp.nombre}</h3>
<p>${exp.descripcion}</p>
<p><strong>Categoría:</strong> ${exp.categoria}</p>
<p><strong>Precio:</strong> $${exp.precio}</p>
<p><strong>Duración:</strong> ${exp.duracion} horas</p>
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

// ===== Modal de detalles =====
const modal = document.getElementById("modal");

function detalle(i) {
    const exp = experiencias[i];
    document.getElementById("contenidoModal").innerHTML = `
<img src="${exp.imagen}" alt="${exp.nombre}" style="width:100%; height:220px; object-fit:cover; border-radius:8px; margin-bottom:15px;">
<h2>${exp.nombre}</h2>
<p>${exp.descripcion}</p>
<p><strong>Ubicación:</strong> ${exp.ubicacion}</p>
<p><strong>Categoría:</strong> ${exp.categoria}</p>
<p><strong>Precio:</strong> $${exp.precio}</p>
<p><strong>Horario:</strong> ${exp.horario}</p>
<p><strong>Duración:</strong> ${exp.duracion} horas</p>
<p><strong>Recomendaciones:</strong> ${exp.recomendaciones}</p>
<button class="btn-reservar" onclick="reservarDesdeModal(${i})">📅 Reservar esta experiencia</button>
    `;
    modal.style.display = "flex";
}

function cerrarModal() {
    modal.style.display = "none";
}

// Cerrar el modal haciendo clic fuera o con la tecla Escape
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

// ===== Calculadora de ruta (suma los favoritos) =====
function calcularRuta() {
    const resultado = document.getElementById("resultadoRuta");
    const favs = experiencias.filter(exp => esFavorito(exp.nombre));

    if (favs.length === 0) {
        resultado.textContent = "⚠️ Agrega experiencias a favoritos (🤍) para armar tu ruta.";
        return;
    }

    let total = 0;
    let horas = 0;
    favs.forEach(exp => {
        total += exp.precio;
        horas += exp.duracion;
    });
    resultado.textContent = `Tu ruta tiene ${favs.length} experiencia(s): costo estimado $${total} y duración total de ${horas} horas.`;
}

// ===== Búsqueda y filtros =====
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

// ===== Validación del formulario de reserva =====
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

    // Validar nombre
    if (nombre === "") {
        mostrarError("nombre", "errorNombre", "El nombre es obligatorio.");
        valido = false;
    } else if (nombre.length < 3) {
        mostrarError("nombre", "errorNombre", "El nombre debe tener al menos 3 letras.");
        valido = false;
    } else {
        mostrarError("nombre", "errorNombre", "");
    }

    // Validar correo
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

    // Validar fecha (no puede ser anterior a hoy)
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

// ===== Inicio =====
mostrar(experiencias);
mostrarFavoritos();
