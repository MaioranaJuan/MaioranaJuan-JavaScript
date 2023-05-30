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
// let cupos = 3;
// let cantTurnos = 0;

// for (let turno = 1; turno < 10; turno++) {
//     let nombre = prompt("Ingrerse su nombre");
//     if (nombre == "Juan") {
//         alert("tomatela");
//         continue;
//     }
//     if (cupos < 1) {
//         alert("Lo sentimos, ya no hay turnos disponibles");
//         break;
//     }
//     alert(nombre + " tienes el turno N°" + turno);
//     cantTurnos = cantTurnos + 1;
//     cupos--;
// }

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
//         default:
//             alert("este comando no existe");
//             break;
//     }
// }

// ---------------------------CLASE 4(FUNCIONES)-----------------------------

// function saludo(){
//     alert("Hola");
// }

// saludo();

function seguir() {
    let continuar = parseInt(prompt("Desea realizar otra operacion? \n 1)Si \n 2)No"));
    if (continuar == 1) {
        calculadora();
    } else if (continuar == 2) {
        alert("Cerrando programa....");
    } else {
        alert("opcion invalida");
        seguir();
    }
}

function suma(val1, val2) {
    let resultado = val1 + val2;
    alert("La suma es:\n" + val1 + "+" + val2 + " = " + resultado);
}

function resta(val1, val2) {
    let resultado = val1 - val2;
    alert("La resta es:\n" + val1 + "-" + val2 + "=" + resultado);
}

function multiplicar(val1, val2) {
    let resultado = val1 * val2;
    alert("La multiplicacion es:\n" + val1 + "x" + val2 + "=" + resultado);
}

function dividir(val1, val2) {
    let resultado = val1 / val2;
    alert("La division es:\n" + val1 + "/" + val2 + "=" + resultado);
}

function calculadora() {
    let val1 = parseInt(prompt("Ingrese el primer valor"));
    let val2 = parseInt(prompt("Ingrese el segundo valor"));

    comando = parseInt(prompt("Ingrese la operacion: \n 1) Suma\n 2) Resta \n 3)Multiplicacion \n 4)Division"));

    switch (comando) {
        case 1:
            suma(val1, val2);
            seguir();
            break;
        case 2:
            resta(val1, val2);
            seguir();
            break;
        case 3:
            multiplicar(val1, val2);
            seguir();
            break;
        case 4:
            dividir(val1, val2);
            seguir();
            break;
        default:
            alert("ERROR");
            break;
    }
}

// --------------------------------------1RA PREENTREGA--------------------------------------

function PreEntrega1() {

    let comando2 = 0;
    let carrito = 0;
    let remeras = 0;
    let pantalones = 0;
    let accesorios = 0;

    while (comando2 != "Salir") {

        comando2 = parseInt(prompt("1) Productos\n 2) Metodos de pago \n 3)Carrito \n 4) Salir"));

        switch (comando2) {

            // PRODUCTOS
            case 1:
                let list2 = parseInt(prompt("Agregar producto al carrito: \n 1)Remeras \n 2)Pantalones \n 3)Accesorios"));

                if (list2 == 1) {
                    let eleccion = parseInt(prompt("Desea agregar 'Remeras' al carrito? \n 1)Si \n 2)No"));
                    if (eleccion == 1) {
                        alert("Producto agregado al carrito....");
                        carrito = carrito + 1;
                        remeras = remeras + 1;
                        continue;
                    } else if (eleccion == 2) {
                        alert("Volviendo al principio....");
                        continue;
                    } else {
                        alert("error");
                        continue;
                    }
                } else if (list2 == 2) {
                    let eleccion = parseInt(prompt("Desea agregar 'Pantalones' al carrito? \n 1)Si \n 2)No"));
                    if (eleccion == 1) {
                        alert("Producto agregado al carrito....");
                        carrito = carrito + 1;
                        pantalones = pantalones + 1;
                        continue;
                    } else if (eleccion == 2) {
                        alert("Volviendo al principio....");
                        continue;
                    } else {
                        alert("error");
                        continue;
                    }
                } else if (list2 == 3) {
                    let eleccion = parseInt(prompt("Desea agregar 'Accesoios' al carrito? \n 1)Si \n 2)No"));
                    if (eleccion == 1) {
                        alert("Producto agregado al carrito....");
                        carrito = carrito + 1;
                        accesorios = accesorios + 1;
                        continue;
                    } else if (eleccion == 2) {
                        alert("Volviendo al principio....");
                        continue;
                    } else {
                        alert("error");
                        continue;
                    }
                }

            // METODOS DE PAGO
            case 2:
                let metodos = prompt("Elija el metodo de pago:\n 1)Credito \n 2)Debito \n 3)Efectivo");
                if (metodos == 1) {
                    alert("Con tarjetas de credito tenes hasta 12 cuotas sin interes.")
                } else if (metodos == 2) {
                    alert("Con tarjetas de debito tenes hasta 3 cuotas en los productos de indumentaria.");
                } else if (metodos == 3) {
                    alert("Las compras en efectivo son de pago unico y en mano.");
                } else {
                    alert("ERROR");
                }
                break;

            // CARRITO
            case 3:
                if (carrito == 0) {
                    alert("Sin productos en el carrito");
                } else {
                    alert("Productos agregados al carrito: \n" + remeras + " Remeras \n" + pantalones + " Pantalones \n" + accesorios + " Accesorios");
                }
                break;

            // SALIR
            case 4:
                comando2 = "Salir";
                break;

            default:
                alert("este comando no existe");
                break;

        }
    }
}