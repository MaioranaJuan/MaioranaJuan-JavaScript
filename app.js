// //---------Aplicacion que calcula la edad de una persona------------

// declaracion de variables
// let nombre = prompt("Ingresar nombre:");
// let anioNacimiento = prompt("Año de nacimiento:");
// const ANIO = 2023;
// // calculo de edad
// let edad = ANIO - anioNacimiento;

// alert(nombre + " tiene " + edad + " años de edad. ");


// // --------------------CLASE 2--------------------

// let anioNacimiento = prompt("Cual es tu año de nacimiento?");
// let edad = 2023 - anioNacimiento;
// let mayorEdad;

// if (edad >= 18) {
//     mayorEdad = true;
// } else {
//     mayorEdad = false;
// }

// if (mayorEdad == true) {
//     alert("acceso concedido");
// } else {
//     let respuesta = prompt("Acceso denegado");
//     if (respuesta == "anda gato") {
//         alert("comeme un huevo");
//     }
// }

// // -----------------CLASE 3--------------------

// // TABLA DE MULTIPLICAR
// let tabla = prompt("Ingrese la tabla");

// for (let i = 1; i < 11; i++) {
//     let resultado = tabla * i;
//     alert(tabla + "x" + i + "=" + resultado);
// }

// // -----------------SISTEMA DE TURNOS-------------------
let cupos = 3;
let cantTurnos = 0;

for (let turno = 1; turno < 10; turno++) {
    let nombre = prompt("Ingrerse su nombre");
    if (nombre == "Juan") {
        alert("tomatela");
        continue;
    }
    if (cupos < 1) {
        alert("Lo sentimos, ya no hay turnos disponibles");
        break;
    }
    alert(nombre + " tienes el turno N°" + turno);
    cantTurnos = cantTurnos + 1;
    cupos--;
}

// // --------------WHILE----------




// // --------------SWITCH-------------
// let comando = 0;

// while (comando != "Salir"); {
//     comando = prompt("1) Enviar mensaje:\n 2) Salir \n 3)Hack")

//     switch (comando) {
//         case 1:
//             let destinatario = prompt("Ingrese el destinatario");
//             let mensaje = prompt("Ingrese su ensaje:");
//             alert("Mensaje " + mensaje + "enviado a" + destinatario);
//             break;

//         case 2:
//             for (let i = 1; i <= 3; i++) {
//                 alert("producto N°" + i);
//             }
//             break;

//         case 3:
//             alert("Conectandose a la IP de la NASA... Aguarde un momento por favor.");
//             let clave = promp("Ingrese la clave por favor:");
//             if (clave == 1234) {
//                 alert("Conectado con la base de datos de la NASA. Obteniendo informacion EXTRATERRESTRE")
//                 window.location = "";
//                 comando = "Salir";
//                 break;
//             }
//     }
// }