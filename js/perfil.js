const miperfil = {
  mis_datos: {
    nombre: "Juan Eduardo Ocampo Castillo",
    celular: "777 504 1214",
    gmail: "juaneduardoocampocastillo5@gmail.com",
    objetivos: "Seguir desarrollando mis habilidades como ingeniero en sistemas computacionales, aprendiendo nuevas tecnologías y contribuyendo en proyectos que impacten positivamente.",
    experiencia_profesional: "Prácticas en desarrollo web, conocimientos en HTML, CSS, JavaScript, PHP, Python y MySQL. Enfocado en la creación de sistemas funcionales y bien estructurados.",
    preparacion_academica: "Estudiante de Ingeniería en Sistemas Computacionales con excelente promedio y pasión por la programación, la innovación y la tecnología."
    
  },

  init: function() {
    this.agregarDatos();
    this.eventos();
    this.mostrartarjetas();
  },

  agregarDatos: function() {
    const contenedorFoto = document.querySelector(".foto h1");
    if (contenedorFoto) contenedorFoto.textContent = this.mis_datos.nombre;
  },

  eventos: function() {
    const foto = document.querySelector(".foto");
    const datos = document.querySelector(".datos");
    const infoH1 = document.querySelector(".datos .info h1");
    const btnRegresar = document.querySelector(".flecha_boton");
    const btncarpeta = document.querySelector(".carpeta");
    const btnface = document.querySelector(".btnface");
    const btnticktok = document.querySelector(".btnticktok");
    const btnlinkedin = document.querySelector(".btnlinkedin");
    

    if (!foto || !datos || !infoH1) return;

    const mostrar = () => {
      infoH1.innerHTML = `${this.mis_datos.celular}<br>${this.mis_datos.gmail}`;
      datos.classList.add("mostrar");
    };

    const ocultar = () => {
      infoH1.textContent = "";
      datos.classList.remove("mostrar");
    };

    foto.addEventListener("mouseenter", mostrar);
    foto.addEventListener("mouseleave", ocultar);

     // 👇 Evento del botón regresar
    if (btnRegresar) {
      btnRegresar.addEventListener("click", () => {
        window.location.href = "index.html"; 
      });
    }

    if (btncarpeta) {
      btncarpeta.addEventListener("click", () => {
        window.location.href = "trabajos.html"; 
      });
    }

    if (btnface) {
      btnface.addEventListener("click", () => {
        window.location.href = "https://www.facebook.com/share/17g5ACQVRn/"; 
      });
    }

    if (btnticktok) {
      btnticktok.addEventListener("click", () => {
        window.location.href = "https://www.tiktok.com/@eduardocastillo3609?_t=ZS-90Tivom83sd&_r=1"; 
      });
    }
    if (btnlinkedin) {
      btnlinkedin.addEventListener("click", () => {
        window.location.href = "https://www.linkedin.com/in/juan-eduardo-ocampo-castillo-11845930b/"; 
      });
    }

    
  },

  // 🔹 Nueva función que imprime tu objetivo
  mostrartarjetas: function() {
    const objetivoElemento = document.querySelector(".info_objetivo p");
    if (objetivoElemento) {
      objetivoElemento.textContent = this.mis_datos.objetivos;
    }

    const experienciaElemento = document.querySelector(".info_experiencia p");
    if (experienciaElemento) {
      experienciaElemento.textContent = this.mis_datos.experiencia_profesional;
    }

    const preparacionElemento = document.querySelector(".info_preparacion p");
    if (preparacionElemento) {
      preparacionElemento.textContent = this.mis_datos.preparacion_academica;
    }
  },




};

document.addEventListener("DOMContentLoaded", () => miperfil.init());
