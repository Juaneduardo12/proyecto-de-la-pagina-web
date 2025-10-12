const informacion = {
    infoHtml: {
        nombre: "Tim Berners-Lee",
        año_creacion: 1990,
        num_trabajo: 3,
        profesor: "Geovanni",
        actividad: "Trabajo"
    },
    infoCss: {
        nombre: "Håkon Wium Lie",
        año_creacion: 1994,
        num_trabajo: 3,
        profesor: "Geovanni",
        actividad: "Trabajo"
    },
    infoJs: {
        nombre: "Brendan Eich",
        año_creacion: 1995,
        num_trabajo: 3,
        profesor: "Geovanni",
        actividad: "Trabajo"
    },
    info_extra_html: {
        titulo: "HTML: Lenguaje de etiquetas de hipertexto",
        parrafo1: "HTML es el componente más básico de la Web...",
        parrafo2: "Hipertexto hace referencia a los enlaces...",
        parrafo3: "HTML utiliza marcas para etiquetar texto..."
    },
    info_extra_css: {
        titulo: "CSS: Hojas de Estilo en Cascada",
        parrafo1: "CSS describe la presentación de documentos HTML...",
        parrafo2: "CSS es uno de los lenguajes base de la Open Web...",
        parrafo3: "Desde CSS3, el alcance de las especificaciones..."
    },
    info_extra_js: {
        titulo: "JavaScript",
        parrafo1: "JavaScript (JS) es un lenguaje de programación ligero...",
        parrafo2: "Esta sección está dedicada al lenguaje JavaScript...",
        parrafo3: "No confundas JavaScript con Java..."
    },

    init: function() {
        this.cargarInfo();
        this.agregarEventos();
        this.eventos();

    },

    eventos: function() {
        const btnRegresar = document.querySelector(".flecha_boton");

        if (btnRegresar) {
            btnRegresar.addEventListener("click", () => {
            window.location.href = "trabajos.html"; 
            });
        }
        
    },

    cargarInfo: function() {
        // HTML
        document.getElementById("nombre_html").textContent = `Nombre: ${this.infoHtml.nombre}`;
        document.getElementById("año_creacion_html").textContent = `Año: ${this.infoHtml.año_creacion}`;
        document.getElementById("num_trabajo_html").textContent = `Trabajo: ${this.infoHtml.num_trabajo}`;
        document.getElementById("profesor_html").textContent = `Profesor: ${this.infoHtml.profesor}`;
        document.getElementById("actividad_html").textContent = `Actividad: ${this.infoHtml.actividad}`;
        document.getElementById("informacion_html").innerHTML = `
            <h2>${this.info_extra_html.titulo}</h2>
            <p>${this.info_extra_html.parrafo1}</p>
            <p>${this.info_extra_html.parrafo2}</p>
            <p>${this.info_extra_html.parrafo3}</p>`;

        // CSS
        document.getElementById("nombre_css").textContent = `Nombre: ${this.infoCss.nombre}`;
        document.getElementById("año_creacion_css").textContent = `Año: ${this.infoCss.año_creacion}`;
        document.getElementById("num_trabajo_css").textContent = `Trabajo: ${this.infoCss.num_trabajo}`;
        document.getElementById("profesor_css").textContent = `Profesor: ${this.infoCss.profesor}`;
        document.getElementById("actividad_css").textContent = `Actividad: ${this.infoCss.actividad}`;
        document.getElementById("informacion_css").innerHTML = `
            <h2>${this.info_extra_css.titulo}</h2>
            <p>${this.info_extra_css.parrafo1}</p>
            <p>${this.info_extra_css.parrafo2}</p>
            <p>${this.info_extra_css.parrafo3}</p>`;

        // JS
        document.getElementById("nombre_js").textContent = `Nombre: ${this.infoJs.nombre}`;
        document.getElementById("año_creacion_js").textContent = `Año: ${this.infoJs.año_creacion}`;
        document.getElementById("num_trabajo_js").textContent = `Trabajo: ${this.infoJs.num_trabajo}`;
        document.getElementById("profesor_js").textContent = `Profesor: ${this.infoJs.profesor}`;
        document.getElementById("actividad_js").textContent = `Actividad: ${this.infoJs.actividad}`;
        document.getElementById("informacion_js").innerHTML = `
            <h2>${this.info_extra_js.titulo}</h2>
            <p>${this.info_extra_js.parrafo1}</p>
            <p>${this.info_extra_js.parrafo2}</p>
            <p>${this.info_extra_js.parrafo3}</p>`;
    },

    agregarEventos: function() {
        const tarjetas = [
            { id: "card_html", info: "informacion_html" },
            { id: "card_css", info: "informacion_css" },
            { id: "card_js", info: "informacion_js" }
        ];

        tarjetas.forEach(t => {
            const tarjeta = document.getElementById(t.id);
            const infoExtra = document.getElementById(t.info);

            tarjeta.addEventListener("click", () => {
                infoExtra.classList.toggle("mostrar");
            });
        });
    }
};

document.addEventListener("DOMContentLoaded", () => {
    informacion.init();
});
