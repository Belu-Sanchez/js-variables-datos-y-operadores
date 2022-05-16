// codigo en CLASE

// alert("BELU")

// var name = "Belu";

// console.log(name);

//  es peligroso que se asigue la misma variable dos veces
// var nombreCompleto = 'Belen Sanchez';
// console.log(nombreCompleto);

// var nombreCompleto = "Nadia Medina";

// document.write ('hola' + 'bienvendia')






// Ejercicios
// Cuando la consigna pida ingresar algo hacerlo mediante un prompt, 
// y cuando pida mostrar un mensaje hacerlo mediante alert. 
// Usar const, let y template strings.

// Ejercicio 1 Saludo
// Crear un programa que pida al usuario ingresar un nombre y 
// apellido por separado, y luego muestre un mensaje que diga,
//  "Hola {nombre} {apellido}, bienvenida a Ada".

// const nombre = prompt ('ingresar nombre');
// const apellido = prompt ('ingresar apellido');
// alert (`"Hola ${nombre} ${apellido},bienvenida a Ada"`);

// ejercicio 2 heladeria
// Crear un programa que pida al usuario ingresar, 
// por separado, tres gustos de helado, y luego muestre un mensaje 
// que diga, por ejemplo, "Aquí tiene su helado de chocolate, 
// dulce de leche y menta granizada".

// const gustoUno = prompt ('primer gusto');
// const gustoDos = prompt ('segundo gusto');
// const gustoTres = prompt ('tercer gusto');
// alert (`"Aqui tiene su helado de ${gustoUno}, ${gustoDos} y ${gustoTres}."`);

// ejercicio 3 datos personales
// Crear un programa que pida al usuario ingresar,
//  por separado, nombre, apellido, edad, nacionalidad, 
//  documento, y muestre luego un mensaje que diga: 
//  "Nuevo usuario agregado al sistema:" y liste 
//  todos los datos juntos

// const nombre = prompt ('ingresar nombre');
// const apellido = prompt ('ingresar apellido');
// const edad = prompt ('ingresar edad');
// const nacionalidad = prompt ('ingresar nacionalidad');
// const documento = prompt ('ingresar documento');
// alert (`"Nueva usuario agregado al sistema:"
// -nombre: ${nombre}
// -apellido: ${apellido}
// -edad: ${edad}
// -nacionalidad: ${nacionalidad}
// -documento: ${documento}`);

// ejercicio 4 Lista de reproduccion
// Crear un programa que pida al usuario ingresar, 
// por separado, el nombre de una playlist y el título de tres 
// canciones, y al finalizar se muestre un mensaje que diga,
//  p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las 
//  canciones 'Africa', 'Maniac', 'Final Countdown'".

// const nombrePlaylist = prompt ('ingrese nombre de Playlist');
// const tituloPrimeraCancion = prompt ('ingrese título de la primera canción');
// const tituloSegundaCancion = prompt ('ingrese el título de la segunda canción');
// const tituloTerceraCancion = prompt ('ingrese el título de la tercera canción');
// alert (`"Se ha creado la playlist ${nombrePlaylist} con las canciones ${tituloPrimeraCancion}, ${tituloSegundaCancion}, ${tituloTerceraCancion}"`);


// Ejercicio 5 Dirección completa
// Crear un programa que pida al usuario ingresar, 
// por separado, la calle, el número, el departamento, 
// el código postal, la ciudad y el país, y muestre un 
// mensaje con toda la dirección completa, p.ej.: 
// "La dirección que ha ingresado es: Calle Falsa 123 3C, 
// 1414, CABA, Argentina"

// const calle = prompt ('ingrese nombre de la calle');
// const numeroDeCasa = prompt ('ingrese número de de casa');
// const numeroDePiso = prompt ('ingrese número de piso');
// const numeroPostal = prompt ('ingrese número de código postal');
// const ciudad = prompt ('ingrese ciudad');
// const pais = prompt ('ingrese pais');
// alert (`"La dirección que ha ingresado es: calle ${calle} ${numeroDeCasa} ${numeroDePiso}, ${numeroPostal}, ${ciudad}, ${pais}"`);

// Ejercicio 6 Años perro
// Crear un programa que pida ingresar una edad y devuelva el equivalente 
// de esas edad en años perro.

// const edad = prompt ('ingresar edad');
// alert (Number (edad) * (7));

// Ejercicio 7 Minutos a segundos
// Crear un programa que pida ingresar una cantidad en minutos mediante un 
// y muestre un mensaje con el resultado de la conversión en segundos.

// const minutos =  prompt ('ingresar minutos:')
// alert (Number (minutos) * (60));

// Ejercicio 8 Días a segundos
// Crear un programa que pida ingresar una cantidad de días y 
// muestre un mensaje con el resultado de la conversión en segundos.

// const dias = prompt ('ingrese una cantidad de dias:');
// alert (Number (dias) * (86400));

// Ejercicio 9 Kilómetros a millas
// Crear un programa que pida ingresar una cantidad de kilómetros y 
// muestre un mensaje con el resultado de la conversión en millas.

// const kilometro = prompt ('ingrese una cantidad de kilómetros:');
// alert (Number (kilometro) * (0.621371));

// Ejercicio 10 Área de un triangulo
// Crear un programa que pida al usuario ingresar el valor de la base y 
// el valor de la altura de un triangulo, calcular su área y mostrarlo 
// en un mensaje.

// const valorDeBase = prompt ('ingrese el valor de base:');
// const valorDeAltura = prompt ('ingrese el valor de altura:');
// alert (Number (valorDeBase) * (valorDeAltura) / 2);


// Ejercicio 11 Perímetro de un rectángulo
// Crear un programa que pida al usuario ingresar el valor de la altura 
// y el valor del ancho de un rectángulo, calcular su perímetro y 
// mostrarlo en un mensaje.

// const valorDeAltura = prompt ('ingrese valor de altura:');
// const valorDeAncho = prompt ('ingrese valor de Ancho');
// alert (Number(valorDeAltura) * 2 + Number (valorDeAncho)* 2);


// Ejercicio 12 Porcentaje
// Crear un programa que pida al usuario ingresar un número, y
// luego el porcentaje que se desea obtener del mismo. Devolver 
// un mensaje muestre el porcentaje de dicho número.

// const numero = prompt ('ingrese un numero:');
// const porcentaje = prompt ('ingrese el porcentaje que desea obtener:')
// alert(Number(numero) * Number(porcentaje) / 100);

// Ejercicio 13 Tiempo de viaje
// Crear un programa que pida al usuario la distancia de su recorrido y
// mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido 
// en distintos medios de transporte, definiendo de antemano distintas velocidades 
// para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).

const distanciaDelRecorrido = prompt ('ingresar la distancia del recorrido:');
const distanciaApie = 20;
const distanciaEnBici = 15;
const distanciaEnAuto = 10;
const distanciaEnBus = 15;
alert (`Uster tradarda en hacer el recorrido a pie ${(Number(distanciaApie))}`)



// Ejercicio 14 Duración de vuelo 
// const primerEscala = prompt('cual es tu primer destino?');
// const escala1 = Number(prompt('cuanto tiempo se trada en la escala uno?'));

// const segundaEscala = prompt ('cual es tu segundo destino?');
// const escala2 = Number(prompt('cuanto tiempo se trada en la escala dos?'));

// const tercerEscala = prompt ('cuan es tu tercer destino?');
// const escala3 = Number(prompt('cuanto tiempo se trada en la escala tres?'));

// const horasTotales = escala1 + escala2 + escala3;

// const mensaje = `tienes tres escalas programas:

// primer escala:${primerEscala} y su duración es de: ${escala1} hrs
// segunda escala:${segundaEscala} y su duración es de: ${escala2} hrs
// tercera escala:${tercerEscala} y su duración es de: ${escala3} hrs

// El tiempo total de tu vuela será de ${horasTotales} hrs
// `

// alert(mensaje)
