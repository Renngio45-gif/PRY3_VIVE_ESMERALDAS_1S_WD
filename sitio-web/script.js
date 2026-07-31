
const experiencias = [
    
    { 
        nombre: "Playa Las Palmas", 
        categoria: "Playas", 
        precio: 30, 
        horario: "10:00 - 17:00", 
        duracion: 4, 
        franja: "Mañana-Tarde", 
        recomendaciones: "Usar protector solar", 
        imagen: "https://i.ytimg.com/vi/crYihKtMbGs/sddefault.jpg", 
        descripcion: "Playa urbana ideal para turismo familiar.", 
        ubicacion: "Esmeraldas" 
    },
    { 
        nombre: "Playa de Tonsupa", 
        categoria: "Playas", 
        precio: 30, 
        horario: "10:00 - 17:00", 
        duracion: 5, 
        franja: "Mañana-Tarde", 
        recomendaciones: "Disfrutar del atardecer", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxXrVSlcls5J3e6aGa7-ODDG3XOs_yMee19Aju91ZKdGDk6LkY3nSFAU&s=10", 
        descripcion: "Playa urbana ideal para turismo familiar.", 
        ubicacion: "Tonsupa" 
    },
    { 
        nombre: "Atacames", 
        categoria: "Playas", 
        precio: 30, 
        horario: "10:00 - 17:00", 
        duracion: 6, 
        franja: "Mañana-Tarde", 
        recomendaciones: "Probar la comida típica a la orilla del mar", 
        imagen: "https://i.ytimg.com/vi/AJEPcXjO64U/maxresdefault.jpg", 
        descripcion: "Uno de los destinos más visitados del Ecuador.", 
        ubicacion: "Atacames" 
    },
    { 
        nombre: "Mompiche", 
        categoria: "Playas", 
        precio: 30, 
        horario: "10:00 - 17:00", 
        duracion: 6, 
        franja: "Mañana-Tarde", 
        recomendaciones: "Llevar tabla de surf si lo practicas", 
        imagen: "https://velturtravel.com/wp-content/uploads/DECAMERON-MOMPICHE2-1.jpg", 
        descripcion: "Surf y naturaleza.", 
        ubicacion: "Mompiche" 
    },
    { 
        nombre: "Same", 
        categoria: "Playas", 
        precio: 30, 
        horario: "10:00 - 17:00", 
        duracion: 5, 
        franja: "Mañana-Tarde", 
        recomendaciones: "Disfrutar del ambiente exclusivo", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbe-0EoEHkg2GFPLwiXPTqmbXZzejJEBTiENZBfMfNTPqMePMJD3_ImizF&s=10", 
        descripcion: "Destino turístico premium.", 
        ubicacion: "Same" 
    },

    
    { 
        nombre: "Festival Marimba", 
        categoria: "Cultura", 
        precio: 10, 
        horario: " 20:00", 
        duracion: 3, 
        franja: "Noche", 
        recomendaciones: "Asistir con ropa cómoda para bailar", 
        imagen: "https://ec.viajandox.com/uploads/Festival%20Internacional%20de%20M%C3%BAsica%20y%20Danza_4.jpg", 
        descripcion: "Música tradicional afroesmeraldeña.", 
        ubicacion: "Esmeraldas" 
    },

  
    { 
        nombre: "Fiesta Esmeraldeñas", 
        categoria: "Eventos", 
        precio: 5, 
        horario: "20:00", 
        duracion: 4, 
        franja: "Noche", 
        recomendaciones: "Consumo moderado de licor", 
        imagen: "https://www.eluniverso.com/resizer/v2/KIBU274UDFAQHACOMNCWDWNSUM.jpg?auth=990808483995d1d199861b9f68bec742079cdfe23a24e8cf576a702a13a8a80e&width=1005&height=670&quality=75&smart=true", 
        descripcion: "Presentaciones artísticas.", 
        ubicacion: "Malecón" 
    },
    { 
        nombre: "Feria Gastronómica", 
        categoria: "Eventos", 
        precio: 10, 
        horario: "10:00 - 15:00", 
        duracion: 3, 
        franja: "Mañana-Tarde", 
        recomendaciones: "Probar los dulces tradicionales", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLgCWdPIZeLoeb5_u866SFUbgTvwlMgHItOob8F3f8g&s=10",
        descripcion: "Comida típica esmeraldeña.", 
        ubicacion: "Esmeraldas" 
    },
    { 
        nombre: "Fiestas de Independencia de Esmeraldas", 
        categoria: "Eventos", 
        precio: 5, 
        horario: "18:00 - 23:00", 
        duracion: 5, 
        franja: "Noche", 
        recomendaciones: "Agosto, mes de la independencia", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXT1Ax2FEQZvHfxM4vtuvPQWLAxuDDK7JLVYPLcUNrW3i1zsoOfAs1UU&s=10", 
        descripcion: "Desfiles, música y celebración cívica de la provincia.", 
        ubicacion: "Esmeraldas" 
    },

   
    { 
        nombre: "Parque de las Palmas", 
        categoria: "Familia", 
        precio: 10, 
        horario: "17:00 - 23:00", 
        duracion: 2, 
        franja: "Mañana-Tarde", 
        recomendaciones: "Ideal para ir con niños", 
        imagen: "https://i.ytimg.com/vi/nbT0ELRrsQ0/hqdefault.jpg?v=63292957", 
        descripcion: "Actividades para toda la familia.", 
        ubicacion: "Esmeraldas" 
    },
    { 
        nombre: "Aqua Park Atacames", 
        categoria: "Familia", 
        precio: 25, 
        horario: "10:00 - 17:00", 
        duracion: 4, 
        franja: "Mañana-Tarde", 
        recomendaciones: "Piscinas y toboganes para los pequeños", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVybq81Pm-G8CCbqHcJpPcUMxR1c240Fe6PYLY0T6oA&s=10", 
        descripcion: "Centro de diversión acuática para toda la familia.", 
        ubicacion: "Atacames" 
    },

    
    { 
        nombre: "Encocao de Mariscos", 
        categoria: "Gastronomía", 
        precio: 8, 
        horario: "12:00 - 15:00", 
        duracion: 0.5, 
        franja: null, 
        recomendaciones: "El plato insignia de la provincia", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2T3YcwIf5PkLJuZY1p8PAvKaQ9zwufeLlbif2fDVxaXg1i4psU2b6B5O&s=10", 
        descripcion: "Degustación del tradicional encocao con leche de coco.", 
        ubicacion: "Malecón de Esmeraldas" 
    },
    { 
        nombre: "Tapao Arrecho", 
        categoria: "Gastronomía", 
        precio: 7, 
        horario: "12:00 - 15:00", 
        duracion: 0.5, 
        franja: null, 
        recomendaciones: "Receta ancestral esmeraldeña", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwEEJclKr5wcZS-lmwDCDK6wRVVdoPQn6G5mG52n0eCZroRJIAOw32oF0&s=10", 
        descripcion: "Degustación del contundente plato de pescado y plátano.", 
        ubicacion: "Centro de Esmeraldas" 
    },
    { 
        nombre: "Ceviche de Concha", 
        categoria: "Gastronomía", 
        precio: 6, 
        horario: "10:00 - 14:00", 
        duracion: 0.5, 
        franja: null, 
        recomendaciones: "Acompañar con chifles y limón", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nJxjLJUVxw3Y7vWV5IZNdAirPyzvClROjbWy8DcaSw&s=10", 
        descripcion: "Degustación del ceviche típico de concha prieta.", 
        ubicacion: "Las Palmas" 
    },
    { 
        nombre: "Cocadas Tradicionales", 
        categoria: "Gastronomía", 
        precio: 3, 
        horario: "09:00 - 18:00", 
        duracion: 0.5, 
        franja: null, 
        recomendaciones: "Probar la blanca y la negra", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrdtnfvaGlrhfDxtOGrydAsMOjSiCiljpggIyREvOZsGXuBYgipXpRyLsS&s=10", 
        descripcion: "Dulce artesanal de coco, herencia afroesmeraldeña.", 
        ubicacion: "Malecón Las Palmas" 
    },

    { 
        nombre: "Escuela de Marimba", 
        categoria: "Música y Danza", 
        precio: 12, 
        horario: "15:00 - 17:00", 
        duracion: 2, 
        franja: "Tarde", 
        recomendaciones: "Participar en las dinámicas de clase", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFN66D82vPyb7kJPRjjJGMuuZedEWAogPk2Yc_6aj7qxhwy5oAQ6od834&s=10", 
        descripcion: "Aprendizaje musical.", 
        ubicacion: "Esmeraldas" 
    },

  
    { 
        nombre: "Reserva Mache Chindul", 
        categoria: "Naturaleza", 
        precio: 40, 
        horario: "07:00 - 16:00", 
        duracion: 8, 
        franja: "Mañana-Tarde", 
        recomendaciones: "Llevar zapatos adecuados para montaña", 
        imagen: "https://pbs.twimg.com/media/FZu7eRrXEAMRECx.jpg", 
        descripcion: "Bosque tropical y biodiversidad.", 
        ubicacion: "Muisne" 
    },
    { 
        nombre: "Playa Escondida", 
        categoria: "Naturaleza", 
        precio: 15, 
        horario: "08:00 - 17:00", 
        duracion: 5, 
        franja: "Mañana-Tarde", 
        recomendaciones: "Llevar agua y snacks, zona poco comercial", 
        imagen: "https://images.mnstatic.com/20/dd/20dd39f07283b90e45a247bf91c78ce5.jpg", 
        descripcion: "Refugio ecológico de playa rústica y tranquila.", 
        ubicacion: "Tonchigüe - Punta Galera" 
    },
    { 
        nombre: "Laguna de Cube", 
        categoria: "Naturaleza", 
        precio: 12, 
        horario: "08:00 - 16:00", 
        duracion: 4, 
        franja: "Mañana-Tarde", 
        recomendaciones: "Ideal para observación de aves", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSll2CkFjPwAFFBrLu6MbAuZ6S-AQS3HdUc9_e0llaNdYAG3U-ImscVsFnX&s=10", 
        descripcion: "Humedal de importancia internacional en la zona de Quinindé.", 
        ubicacion: "Quinindé" 
    },
    { 
        nombre: "Reserva Manglares Cayapas-Mataje", 
        categoria: "Naturaleza", 
        precio: 20, 
        horario: "07:00 - 15:00", 
        duracion: 5, 
        franja: "Mañana-Tarde", 
        recomendaciones: "Hogar de los manglares más altos del mundo", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Mangroves_near_Mompiche_-_Ecuador.jpg", 
        descripcion: "Reserva ecológica de manglares en San Lorenzo.", 
        ubicacion: "San Lorenzo" 
    },
    { 
        nombre: "Reserva Marina Galera-San Francisco", 
        categoria: "Naturaleza", 
        precio: 18, 
        horario: "08:00 - 16:00", 
        duracion: 4, 
        franja: "Mañana-Tarde", 
        recomendaciones: "Apta para snorkel y buceo con guía", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-Q4E3mOYwEvHU6wzTGaQU5IqpBFXQdmkGsQl5rxcuA&s=10", 
        descripcion: "Área marina protegida con arrecifes y vida submarina.", 
        ubicacion: "Punta Galera, Muisne" 
    },

  
    { 
        nombre: "Museo y Centro Cultural Esmeraldas", 
        categoria: "Recorridos", 
        precio: 7, 
        horario: "09:00 - 12:00", 
        duracion: 2, 
        franja: "Mañana", 
        recomendaciones: "prestar atencion a los hallazgos del museo", 
        imagen: "https://www.ibermuseos.org/wp-content/uploads/2019/04/museo-esmeraldas.jpg", 
        descripcion: "Historia, patrimonio y cultura de Esmeraldas.", 
        ubicacion: "Esmeraldas" 
    },
    { 
        nombre: "Peñon del suicida", 
        categoria: "Recorridos", 
        precio: 15, 
        horario: "08:00 - 17:00", 
        duracion: 8, 
        franja: "Todo el día", 
        recomendaciones: "Llevar bloqueador solar, gafas , gorras ", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnwlwlfzHiSqzHcVPvr-NPhkpA_D0evc7wBIK36lcwT1qKow76HgW8OA&s=10", 
        descripcion: "El Peñón del Suicida es una formación rocosa que se encuentra ubicada entre las parroquias Súa y Atacames del cantón Atacames, en la provincia de Esmeraldas.", 
        ubicacion: "Esmeraldas - Atacames" 
    },
    { 
        nombre: "Avistamiento de Ballenas Jorobadas", 
        categoria: "Recorridos", 
        precio: 40, 
        horario: "09:00 - 12:00", 
        duracion: 3, 
        franja: "Mañana", 
        recomendaciones: "Temporada: junio a septiembre", 
        imagen: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=900&q=80", 
        descripcion: "Salida en lancha desde Súa para observar ballenas jorobadas.", 
        ubicacion: "Súa" 
    },
    { 
        nombre: "Manglares de Valdez (Limones)", 
        categoria: "Recorridos", 
        precio: 25, 
        horario: "08:00 - 12:00", 
        duracion: 4, 
        franja: "Mañana", 
        recomendaciones: "Llevar repelente y gorra", 
        imagen: "https://ec.viajandox.com/uploads/Reserva%20Cayapas%20-%20Mataje_1.jpg", 
        descripcion: "Recorrido fluvial entre manglares en el norte de la provincia.", 
        ubicacion: "Valdez, Eloy Alfaro" 
    },
    { 
        nombre: "Ruta Cultural Chachi", 
        categoria: "Recorridos", 
        precio: 35, 
        horario: "08:00 - 14:00", 
        duracion: 6, 
        franja: "Mañana-Tarde", 
        recomendaciones: "Respetar las costumbres de la comunidad", 
        imagen: "https://hablemosdeculturas.com/wp-content/uploads/2019/02/CHACHI2.jpg", 
        descripcion: "Inmersión cultural con la nacionalidad Chachi en el río Canandé.", 
        ubicacion: "Río Canandé, Quinindé" 
    }
];

const EMOJI_CATEGORIA = {
    "Playas": "🏖️",
    "Cultura": "🎭",
    "Música y Danza": "🎵",
    "Gastronomía": "🍤",
    "Recorridos": "🚶",
    "Naturaleza": "🌿",
    "Eventos": "🎉",
    "Familia": "👨‍👩‍👧‍👦"
};



const cards = document.getElementById("cards");
const listaFavoritos = document.getElementById("listaFavoritos");
const modal = document.getElementById("modal");

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];




function formatoTiempo(horas) {
    if (horas < 1) {
        return Math.round(horas * 60) + " min"; 
    }
    return horas + " h";
}

function textoEstancia(exp) {
    if (exp.franja) {
        return formatoTiempo(exp.duracion) + " (" + exp.franja + ")";
    }
    return formatoTiempo(exp.duracion);
}

function imagenCard(exp) {
    if (exp.imagen) {
        return '<img src="' + exp.imagen + '" alt="' + exp.nombre + '">';
    }
    const emoji = EMOJI_CATEGORIA[exp.categoria];
    return '<div class="card-img-placeholder"><span>' + emoji + '</span><small>Imagen próximamente</small></div>';
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
        return;
    }

    mensaje.style.display = "none";
    listaFavoritos.innerHTML = "";
    favs.forEach(exp => {
        listaFavoritos.innerHTML += crearCard(exp);
    });
}




function crearCard(exp) {
    const i = experiencias.indexOf(exp);
    const fav = esFavorito(exp.nombre);
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

    mostrar(resultado);
}

function filtrarPorCategoria(categoria) {
    document.getElementById("filtroCategoria").value = categoria;
    filtrar();
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

    modal.style.display = "flex";
}

function cerrarModal() {
    modal.style.display = "none";
}

modal.addEventListener("click", function (e) {
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
        input.classList.add("invalido");
    } else {
        input.classList.remove("invalido");
    }
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitamos que la página se recargue

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

    mensajeReserva.textContent = "✅ ¡Gracias " + nombre + "! Tu reserva para el " + fecha + " fue enviada correctamente.";
    this.reset();
});


mostrar(experiencias);
mostrarFavoritos();