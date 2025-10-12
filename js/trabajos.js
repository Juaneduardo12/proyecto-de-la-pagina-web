const trabajos = {
  contenido: {
    titulo: " Trabajos"
  },

  init: function() {
    this.agregarTitulo();
    this.eventos();
  },

  // Animar el título letra por letra
  agregarTitulo: function() {
    const h1 = document.querySelector(".mis_trabajos");
    if (!h1) return;

    h1.innerHTML = ""; // Limpia el contenido original

    // Crea un <span> para cada letra
    this.contenido.titulo.split("").forEach(letra => {
      const span = document.createElement("span");
      span.textContent = letra;
      h1.appendChild(span);
    });
  },

  // Asigna eventos a todos los botones
  eventos: function() {
    const botones = {
      ".flecha_boton": "perfil.html",
      ".boton_conversiones": "conversiones.html",
      ".boton_calculadora": "calculadora.html",
      ".boton_pagina": "pagina_web.html"
    };

    // Recorre los botones y asigna evento a cada uno
    for (let clase in botones) {
      const btn = document.querySelector(clase);
      if (btn) {
        btn.addEventListener("click", () => {
          window.location.href = botones[clase];
        });
      } else {
        console.warn(`⚠️ No se encontró el botón ${clase}`);
      }
    }
  }
};

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", () => trabajos.init());
