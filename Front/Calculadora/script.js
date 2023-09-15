// Función para agregar números en la pantalla
const agregarNumero = (numero) => {
    const pantalla = document.getElementById('pantalla');
    pantalla.value += numero;
}

// Función para agregar operadores en la pantalla
const agregarOperador = (operador) => {
    const pantalla = document.getElementById('pantalla');
    pantalla.value += operador;
}


// Función para calcular el resultado
const calcularResultado = () => {
    const pantalla = document.getElementById('pantalla');
    if (pantalla.value === '') {
        return;
    }
    const resultado = eval(pantalla.value);
    pantalla.value = resultado;
}

// Función para limpiar la pantalla
const limpiarPantalla = () => {
    const pantalla = document.getElementById('pantalla');
    pantalla.value = '';
}

// Función para borrar de a un caracter de la pantalla
const borrarPantalla = () => {
    const pantalla = document.getElementById('pantalla');
    pantalla.value = pantalla.value.slice(0, -1);
}

//Usar teclado
// Agregar controladores de eventos para las pulsaciones de teclas
document.addEventListener('keydown', (event) => {
    const tecla = event.key;

    // Llamar a la función correspondiente según la tecla presionada
    switch (tecla) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            agregarNumero(tecla);
            break;
        case '+':
        case '-':
        case '*':
        case '/':
        case '(':
        case ')':
            agregarOperador(tecla);
            break;
        case 'Enter':
            calcularResultado();
            break;
        case 'Escape': 
            limpiarPantalla();
            break;
        case 'Backspace':
            borrarPantalla();
            break;
        default:
            // No hacer nada para otras teclas
            break;
    }
});