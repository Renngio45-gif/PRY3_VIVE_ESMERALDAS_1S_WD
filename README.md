# 🌴 Vive Esmeraldas — Turismo y Cultura

Sitio web de catálogo de **experiencias turísticas, culturales y recreativas** de la provincia de Esmeraldas (Ecuador). Proyecto final de la asignatura de Desarrollo Web — 1er semestre.

---

## 📌 El problema que queremos resolver

Esmeraldas es una de las provincias con mayor riqueza natural y cultural del Ecuador: playas como Atacames, Tonsupa, Same y Mompiche; la cultura afroesmeraldeña con su marimba, arrullos y danza tradicional; y una gastronomía única (encocado, tapao, ceviches). Sin embargo, enfrenta una dificultad concreta:

- **La información turística está dispersa.** Quien quiere visitar la provincia debe buscar en redes sociales, blogs sueltos o el boca a boca; no existe un lugar único donde comparar opciones, precios y duraciones.
- **Muchas experiencias locales son invisibles.** Los grandes destinos de playa se conocen, pero los recorridos históricos, los festivales, las reservas ecológicas y las actividades familiares casi no tienen difusión.
- **Planificar una visita es complicado.** Sin información organizada, el visitante no puede estimar cuánto le costará su ruta ni armar un itinerario a su medida.

**Vive Esmeraldas** responde a eso: un catálogo web centralizado donde el visitante explora las experiencias por categoría, filtra por precio y duración, guarda sus favoritas, calcula el costo estimado de su ruta y deja su solicitud de reserva — todo en un solo lugar.

## 🤝 Cómo ayudaría a la población de Esmeraldas

- **Impulso a la economía local.** Al dar vitrina a las experiencias turísticas, más visitantes llegan y consumen: hospedaje, gastronomía, guías, transporte y artesanía se benefician en cadena.
- **Visibilidad para la cultura afroesmeraldeña.** La marimba (Patrimonio Cultural Inmaterial de la Humanidad), los arrullos y las tradiciones dejan de ser un dato de enciclopedia y se convierten en experiencias que se pueden vivir y reservar.
- **Oportunidad para emprendimientos pequeños.** Un recorrido histórico o un taller gastronómico familiar aparece en el catálogo junto a los destinos grandes, compitiendo en igualdad de condiciones.
- **Turismo más allá de la playa.** Al organizar la oferta en 8 categorías (no solo playas), se reparte el flujo de visitantes hacia naturaleza, eventos, recorridos y actividades familiares, diversificando el ingreso.

## ✨ Funcionalidades

| Funcionalidad | Descripción |
|---|---|
| 🗂️ **Catálogo de experiencias** | Tarjetas con imagen, categoría, precio y duración de cada experiencia. |
| 🔍 **Búsqueda y filtros** | Búsqueda por texto y filtros combinables por categoría, precio máximo y duración. |
| ⭐ **Favoritos persistentes** | Marca experiencias con ❤️ y quedan guardadas en el navegador (`localStorage`), incluso al cerrar la página. |
| 🧮 **Calculadora de ruta** | Suma el costo total estimado de las experiencias marcadas como favoritas. |
| 🖼️ **Detalle en modal** | Ventana emergente con la información ampliada de cada experiencia. |
| 📝 **Formulario de reserva validado** | Valida nombre, correo y fecha con mensajes de error claros antes de confirmar. |
| 📱 **Diseño adaptable** | La página se ajusta a computadora, tablet y celular. |

## 🗂️ Estructura del repositorio

```
PRY3_VIVE_ESMERALDAS_1S_WD/
├── sitio-web/                      ← la página web
│   ├── index.html                  ← estructura de la página
│   ├── styles.css                  ← estilos y diseño
│   └── script.js                   ← catálogo, filtros, favoritos y validaciones
├── documentacion/
│   ├── Proyecto-final (1).pdf      ← requisitos del proyecto
│   └── Respaldo (con comentarios)/ ← copia del código con comentarios explicativos
└── README.md
```

## 🚀 Cómo ver la página

1. Descarga o clona este repositorio:
   ```bash
   git clone https://github.com/Renngio45-gif/PRY3_VIVE_ESMERALDAS_1S_WD.git
   ```
2. Entra a la carpeta `sitio-web/`.
3. Abre `index.html` con doble clic (se abre en tu navegador). No necesita instalación ni servidor.

## 🛠️ Tecnologías

- **HTML5** — estructura semántica del sitio.
- **CSS3** — diseño responsivo con Grid y Flexbox.
- **JavaScript (vanilla)** — lógica del catálogo, filtros, favoritos con `localStorage`, modal y validación de formulario. Sin frameworks ni librerías externas.

## 👤 Autor

**Daniel Farías** — Proyecto final de Desarrollo Web, 1er semestre.

> ⚠️ Nota académica: este es un proyecto educativo. Las experiencias, precios y reservas del catálogo son datos de demostración.
