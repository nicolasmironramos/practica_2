// Función para actualizar el contenido del elemento h2 con id "info"
function rellenar_info() {
    const input = document.getElementById("input");
    const info = document.getElementById("info");
    const resultado = parseFloat(input.value);
    if (resultado < 100) {
        info.textContent = "Info: El resultado es menor que 100";
    } else if (resultado >= 100 && resultado <= 200) {
        info.textContent = "Info: El resultado está entre 100 y 200";
    } else {
        info.textContent = "Info: El resultado es superior a 200";
    }
}

// Función para calcular el módulo del número X introducido en el input
function mod() {
    const input = document.getElementById("input");
    const resultado = parseFloat(input.value);
    input.value = resultado < 0 ? -resultado : resultado;
}

// Función para calcular el factorial del número X introducido en el input
function fact() {
    const input = document.getElementById("input");
    const numero = parseInt(input.value);
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    input.value = resultado;
}

// Variables globales para guardar el número tecleado en el input y el operador pulsado
let operando1 = null;
let operador = null;

// Función para guardar el número tecleado en el input y el operador pulsado (en este caso, suma)
function add() {
    const input = document.getElementById("input");
    operando1 = parseFloat(input.value);
    operador = "+";
    input.value = "";
}

// Función para guardar el número tecleado en el input y el operador pulsado (en este caso, multiplicación)
function mul() {
    const input = document.getElementById("input");
    operando1 = parseFloat(input.value);
    operador = "*";
    input.value = "";
}

// Función para calcular el resultado de la operación indicada por el operador guardado en las variables globales y mostrar el resultado en el input
function eq() {
    const input = document.getElementById("input");
    const operando2 = parseFloat(input.value);
    let resultado;
    switch (operador) {
        case "+":
            resultado = operando1 + operando2;
            break;
        case "*":
            resultado = operando1 * operando2;
            break;
        default:
            resultado = 0;
    }
    input.value = resultado;
    operando1 = null;
    operador = null;
}

// Función para calcular la suma de los elementos introducidos en el input en formato CSV
function sumatorio() {
    const input = document.getElementById("input");
    const numeros = input.value.split(",");
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
        resultado += parseFloat(numeros[i]);
    }
    input.value = resultado;
}

// Función para ordenar los elementos introducidos en el input en formato CSV en orden ascendente
function ordenar() {
    const input = document.getElementById("input");
    const numeros = input.value.split(",");
    numeros.sort(function (a, b) {
        return parseFloat(a) - parseFloat(b);
    });
    input.value = numeros.join(",");
}

// Función para invertir el orden de los elementos introducidos en el input en formato CSV
function revertir() {
    const input = document.getElementById("input");
    const numeros = input.value.split(",");
    numeros.reverse();
    input.value = numeros.join(",");
}

// Función para quitar el último número y la coma de los introducidos en el input en formato CSV
function quitar() {
    const input = document.getElementById("input");
    const numeros = input.value.split(",");
    numeros.pop();
    input.value = numeros.join(",");
}

// Función para validar la entrada del usuario antes de hacer cualquier operación y mostrar "Error" en el input si no es algo soportado por la calculadora
function validar() {
    const input = document.getElementById("input");
    const valor = input.value;
    if (
        !(
            /^-?\d*\.?\d+$/.test(valor) ||
            /^-?\d*\.?\d+(,-?\d*\.?\d+)*$/.test(valor)
        )
    ) {
        input.value = "Error";
    }
}

// Event listeners para los botones de la calculadora
document.getElementById("cuadrado").addEventListener("click", function () {
    const input = document.getElementById("input");
    const resultado = parseFloat(input.value) ** 2;
    input.value = resultado;
    rellenar_info();
});

document.getElementById("modulo").addEventListener("click", function () {
    mod();
    rellenar_info();
});

document.getElementById("factorial").addEventListener("click", function () {
    fact();
    rellenar_info();
});

document.getElementById("suma").addEventListener("click", function () {
    add();
    rellenar_info();
});

document.getElementById("resta").addEventListener("click", function () {
    const input = document.getElementById("input");
    operando1 = parseFloat(input.value);
    operador = "-";
    input.value = "";
    rellenar_info();
});

document.getElementById("multiplicacion").addEventListener("click", function () {
    mul();
    rellenar_info();
});

document.getElementById("division").addEventListener("click", function () {
    const input = document.getElementById("input");
    operando1 = parseFloat(input.value);
    operador = "/";
    input.value = "";
    rellenar_info();
});

document.getElementById("potencia").addEventListener("click", function () {
    const input = document.getElementById("input");
    operando1 = parseFloat(input.value);
    operador = "^";
    input.value = "";
    rellenar_info();
});

document.getElementById("resto").addEventListener("click", function () {
    const input = document.getElementById("input");
    operando1 = parseFloat(input.value);
    operador = "%";
    input.value = "";
    rellenar_info();
});

document.getElementById("igual").addEventListener("click", function () {
    eq();
    rellenar_info();
});

document.getElementById("sumatorio").addEventListener("click", function () {
    sumatorio();
    rellenar_info();
});

document.getElementById("ordenar").addEventListener("click", function () {
    ordenar();
    rellenar_info();
});

document.getElementById("revertir").addEventListener("click", function () {
    revertir();
    rellenar_info();
});

document.getElementById("quitar").addEventListener("click", function () {
    quitar();
    rellenar_info();
});

// Event listener para validar la entrada del usuario antes de hacer cualquier operación
document.getElementById("input").addEventListener("blur", function () {
    validar();
});
