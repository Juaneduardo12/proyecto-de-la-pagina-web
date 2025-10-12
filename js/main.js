const loginSistema = {
    // Usuario válido 
    usuarioValido: {
        nombre: "juan",
        contrasena: "elprodix12"
    },

    // Inicialización
    init: function() {
        this.agregarEventos();
    },

    // Escuchar evento del formulario
    agregarEventos: function() {
        const formulario = document.getElementById("loginForm");

        formulario.addEventListener("submit", (e) => {
            e.preventDefault();

            const usuario = document.getElementById("usuario").value.trim();
            const contrasena = document.getElementById("contrasena").value.trim();

            this.validarLogin(usuario, contrasena);
        });
    },

    // Validación de datos
    validarLogin: function(usuario, contrasena) {
        const mensaje = document.getElementById("mensaje");

        if (usuario === this.usuarioValido.nombre && contrasena === this.usuarioValido.contrasena) {
            mensaje.textContent = "✅ Acceso concedido. Redirigiendo...";
            mensaje.style.color = "green";

            // Redirige a perfil.html después de 1.5 segundos
            setTimeout(() => {
                window.location.href = "perfil.html";
            }, 1500);
        } else {
            mensaje.textContent = "❌ Usuario o contraseña incorrectos.";
            mensaje.style.color = "red";
        }
    }
};

// Ejecutar al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    loginSistema.init();
});
