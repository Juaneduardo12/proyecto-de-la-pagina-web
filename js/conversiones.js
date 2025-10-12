const conversorApp = {
  tipo: "",
  valor: 0,
  origen: "",
  destino: "",

  // --- Inicialización y eventos ---
  init: function() {
    // Botón de regresar
    const btnRegresar = document.querySelector(".flecha_boton");
    if (btnRegresar) {
      btnRegresar.addEventListener("click", () => {
        window.location.href = "trabajos.html";
      });
    }

    // Input valor
    const valorInput = document.getElementById("valor");
    valorInput.addEventListener("input", () => this.calcular());

    // Selects
    ["moneda_origen","moneda_destino","unidad_origen","unidad_destino"]
      .forEach(id => document.getElementById(id).addEventListener("change", () => this.calcular()));
  },

  seleccionarOpcion(opcion) {
    this.tipo = opcion;

    const valorInput = document.getElementById("valor");
    const resultado = document.getElementById("resultado");

    // Limpiar campos
    valorInput.value = "";
    resultado.value = "";
    valorInput.disabled = true;

    // Habilitar selects según opción
    document.getElementById("moneda_origen").disabled = (opcion !== "divisas");
    document.getElementById("moneda_destino").disabled = (opcion !== "divisas");
    document.getElementById("unidad_origen").disabled = (opcion !== "unidades");
    document.getElementById("unidad_destino").disabled = (opcion !== "unidades");

    if (opcion === "decimal_a_binario") valorInput.disabled = false;
  },

  calcular() {
    const valorInput = document.getElementById("valor");
    const resultado = document.getElementById("resultado");
    const valor = parseFloat(valorInput.value);
    this.valor = valor;

    if (this.tipo === "divisas") {
      const origen = document.getElementById("moneda_origen").value;
      const destino = document.getElementById("moneda_destino").value;
      this.origen = origen;
      this.destino = destino;

      if (!origen || !destino) {
        valorInput.disabled = true;
        resultado.value = "Selecciona monedas";
        return;
      }

      valorInput.disabled = false;

      if (!isNaN(valor)) {
        const tasas = {
          euro: { euro: 1, dolar: 1.1, peso: 19 },
          dolar: { euro: 0.9, dolar: 1, peso: 18 },
          peso: { euro: 0.05, dolar: 0.055, peso: 1 }
        };
        resultado.value = (valor * tasas[origen][destino]).toFixed(2);
      }

    } else if (this.tipo === "unidades") {
      const origen = document.getElementById("unidad_origen").value;
      const destino = document.getElementById("unidad_destino").value;
      this.origen = origen;
      this.destino = destino;

      if (!origen || !destino) {
        valorInput.disabled = true;
        resultado.value = "Selecciona unidades";
        return;
      }

      valorInput.disabled = false;

      if (!isNaN(valor)) {
        const base = { centimetro: 0.01, metros: 1, kilometro: 1000 };
        const enMetros = valor * base[origen];
        resultado.value = (enMetros / base[destino]).toFixed(4);
      }

    } else if (this.tipo === "decimal_a_binario") {
      valorInput.disabled = false;
      if (!isNaN(valor)) {
        if (!Number.isInteger(valor)) resultado.value = "Solo enteros";
        else resultado.value = valor.toString(2);
      }
    }
  },

  mostrarDatos() {
    document.getElementById("info-box").innerHTML = `
      <strong>Nombre:</strong> Juan Eduardo Ocampo Castillo <br>
      <strong>Edad:</strong> 21 años <br>
      <strong>Carrera:</strong> Ing. en Sistemas Computacionales <br>
      <strong>Cuatrimestre:</strong> 7
    `;
  },

  ocultarDatos() {
    document.getElementById("info-box").innerHTML = "";
  }
};

// Inicializar app cuando carga la página
document.addEventListener("DOMContentLoaded", () => conversorApp.init());

// Radios
document.querySelectorAll('input[name="opcion"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    conversorApp.seleccionarOpcion(e.target.value);
  });
});
