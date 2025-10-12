class Calculadora {
    constructor(display) {
        this.display = display;   // "Pantalla" de la calculadora
        this.num1 = "";           // Primer número
        this.num2 = "";           // Segundo número
        this.operador = "";       // Operador (+, -, *, /)
    }

    // Método para inicializar eventos
    init() {
        // Botón de regresar
        const btnRegresar = document.querySelector(".flecha_boton");
        if (btnRegresar) {
            btnRegresar.addEventListener("click", () => {
                window.location.href = "trabajos.html";
            });
        }

        // Input valor
        const valorInput = this.display;
        valorInput.addEventListener("input", () => this.calcular());

        // Selects (si los tienes)
        ["moneda_origen","moneda_destino","unidad_origen","unidad_destino"]
            .forEach(id => {
                const el = document.getElementById(id);
                if(el) el.addEventListener("change", () => this.calcular());
            });
    }

    // Método para escribir números
    escribirNumero(valor) {
        if (this.operador === "") {
            this.num1 += valor;
            this.mostrar(this.num1);
        } else {
            this.num2 += valor;
            this.mostrar(this.num1 + this.operador + this.num2);
        }
    }

    // Método para elegir operador
    elegirOperador(op) {
        if (this.num1 === "") return; // Evitar operador sin número
        this.operador = op;
        this.mostrar(this.num1 + this.operador);
    }

    // Método para calcular
    calcular() {
        if (this.num1 === "" || this.num2 === "" || this.operador === "") return;

        let resultado = 0;
        if (this.operador === "+") {
            resultado = parseFloat(this.num1) + parseFloat(this.num2);
        } else if (this.operador === "-") {
            resultado = parseFloat(this.num1) - parseFloat(this.num2);
        } else if (this.operador === "*") {
            resultado = parseFloat(this.num1) * parseFloat(this.num2);
        } else if (this.operador === "/") {
            resultado = parseFloat(this.num1) / parseFloat(this.num2);
        }

        this.mostrar(resultado);
        this.num1 = resultado.toString();
        this.num2 = "";
        this.operador = "";
    }

    // Método para limpiar
    limpiar() {
        this.num1 = "";
        this.num2 = "";
        this.operador = "";
        this.mostrar("");
    }

    // Método para mostrar en pantalla
    mostrar(valor) {
        this.display.value = valor;
    }
}

// === Uso ===
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("valor");
    const botones = document.querySelectorAll("button");

    const calc = new Calculadora(input);
    calc.init(); // Inicializamos los eventos, incluyendo el botón regresar

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const valor = boton.textContent;

            if (!isNaN(valor) || valor === ".") { // Números y punto
                calc.escribirNumero(valor);
            } else if (["+", "-", "*", "/"].includes(valor)) { // Operadores
                calc.elegirOperador(valor);
            } else if (valor === "=") { // Igual
                calc.calcular();
            } else if (boton.id === "borrar") { // Botón borrar por ID
                calc.limpiar();
            }
        });
    });
});
