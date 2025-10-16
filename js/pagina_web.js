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

    // --- Información extendida ---
    info_extra_html: {
        titulo: "HTML: Lenguaje de etiquetas de hipertexto",
        parrafo1: "HTML (HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web.",
        parrafo2: "Hipertexto hace referencia a los enlaces que conectan páginas entre sí, permitiendo la navegación entre documentos relacionados.",
        parrafo3: "HTML utiliza etiquetas o 'marcas' para estructurar texto, imágenes, enlaces, tablas y otros elementos visuales.",
        parrafo4: "El estándar HTML5, lanzado en 2014, añadió compatibilidad con video, audio y gráficos sin necesidad de plugins externos.",
        parrafo5: "Actualmente, HTML es mantenido por el W3C y WHATWG, garantizando su evolución y compatibilidad con los navegadores modernos.",
        img: "img/img_html.jpg"
    },

    info_extra_css: {
        titulo: "CSS: Hojas de Estilo en Cascada",
        parrafo1: "CSS (Cascading Style Sheets) es el lenguaje que se usa para describir la presentación de documentos HTML o XML.",
        parrafo2: "Permite separar el contenido de la presentación, haciendo que el diseño web sea más flexible y mantenible.",
        parrafo3: "Las hojas de estilo pueden aplicarse directamente en un documento, enlazarse desde un archivo externo o definirse en línea.",
        parrafo4: "Desde CSS3, el lenguaje se divide en módulos que incluyen características avanzadas como animaciones, gradientes y diseño flexible (Flexbox, Grid).",
        parrafo5: "CSS es esencial para el diseño moderno de interfaces, ya que define colores, fuentes, tamaños y la disposición visual del contenido.",
        img: "img/img_css.png"
    },

    info_extra_js: {
        titulo: "JavaScript: El lenguaje de la Web",
        parrafo1: "JavaScript (JS) es un lenguaje de programación ligero, interpretado y de alto nivel, fundamental en el desarrollo web.",
        parrafo2: "Fue creado en 1995 por Brendan Eich en solo 10 días mientras trabajaba para Netscape, con el objetivo de hacer las páginas más interactivas.",
        parrafo3: "Permite manipular el contenido de las páginas (DOM), validar formularios, crear animaciones y comunicarse con servidores (AJAX).",
        parrafo4: "Hoy en día, JavaScript también se usa del lado del servidor (Node.js), en aplicaciones móviles y hasta en inteligencia artificial.",
        parrafo5: "Es un lenguaje que evoluciona constantemente, impulsado por la comunidad y los estándares ECMAScript.",
        img: "img/img_js.png"
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
        // --- HTML ---
        document.getElementById("nombre_html").textContent = `Nombre: ${this.infoHtml.nombre}`;
        document.getElementById("año_creacion_html").textContent = `Año: ${this.infoHtml.año_creacion}`;
        document.getElementById("num_trabajo_html").textContent = `Trabajo: ${this.infoHtml.num_trabajo}`;
        document.getElementById("profesor_html").textContent = `Profesor: ${this.infoHtml.profesor}`;
        document.getElementById("actividad_html").textContent = `Actividad: ${this.infoHtml.actividad}`;
        document.getElementById("informacion_html").innerHTML = `
            <h2>${this.info_extra_html.titulo}</h2>
            <p>${this.info_extra_html.parrafo1}</p>
            <p>${this.info_extra_html.parrafo2}</p>
            <p>${this.info_extra_html.parrafo3}</p>
            <p>${this.info_extra_html.parrafo4}</p>
            <p>${this.info_extra_html.parrafo5}</p>
            <img src="${this.info_extra_html.img}" alt="Logo HTML">
        `;

        // --- CSS ---
        document.getElementById("nombre_css").textContent = `Nombre: ${this.infoCss.nombre}`;
        document.getElementById("año_creacion_css").textContent = `Año: ${this.infoCss.año_creacion}`;
        document.getElementById("num_trabajo_css").textContent = `Trabajo: ${this.infoCss.num_trabajo}`;
        document.getElementById("profesor_css").textContent = `Profesor: ${this.infoCss.profesor}`;
        document.getElementById("actividad_css").textContent = `Actividad: ${this.infoCss.actividad}`;
        document.getElementById("informacion_css").innerHTML = `
            <h2>${this.info_extra_css.titulo}</h2>
            <p>${this.info_extra_css.parrafo1}</p>
            <p>${this.info_extra_css.parrafo2}</p>
            <p>${this.info_extra_css.parrafo3}</p>
            <p>${this.info_extra_css.parrafo4}</p>
            <p>${this.info_extra_css.parrafo5}</p>
            <img src="${this.info_extra_css.img}" alt="Logo CSS">
        `;

        // --- JS ---
        document.getElementById("nombre_js").textContent = `Nombre: ${this.infoJs.nombre}`;
        document.getElementById("año_creacion_js").textContent = `Año: ${this.infoJs.año_creacion}`;
        document.getElementById("num_trabajo_js").textContent = `Trabajo: ${this.infoJs.num_trabajo}`;
        document.getElementById("profesor_js").textContent = `Profesor: ${this.infoJs.profesor}`;
        document.getElementById("actividad_js").textContent = `Actividad: ${this.infoJs.actividad}`;
        document.getElementById("informacion_js").innerHTML = `
            <h2>${this.info_extra_js.titulo}</h2>
            <p>${this.info_extra_js.parrafo1}</p>
            <p>${this.info_extra_js.parrafo2}</p>
            <p>${this.info_extra_js.parrafo3}</p>
            <p>${this.info_extra_js.parrafo4}</p>
            <p>${this.info_extra_js.parrafo5}</p>
            <img src="${this.info_extra_js.img}" alt="Logo JavaScript">
        `;
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
