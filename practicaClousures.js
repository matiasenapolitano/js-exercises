/*Crea una función llamada crearLoggeador que reciba un string con un nivel de advertencia (por ejemplo: "INFO", "WARNING", "ERROR").
Esta función debe retornar una función que reciba un mensaje de texto y devuelva el mensaje formateado combinando el nivel guardado y el mensaje recibido, tal como se muestra en este ejemplo de uso: */

function crearLoggeador(level) {
  return function mostrarMensaje(mensaje) {
    return level + mensaje;
  };
}

const registrarError = crearLoggeador("[ERROR]");
console.log(registrarError(" - Fallo en base de datos"));

/*
  "Validador de longitud mínima"
  Crea una función llamada `crearValidadorLongitud` que reciba un número entero `minimo` 
  (que representa la cantidad mínima de caracteres obligatoria).
  Esta función debe retornar una función que reciba un texto (string) y devuelva `true` 
  si la longitud del texto es mayor o igual a `minimo`, o `false` en caso contrario.

  Ejemplo de uso esperado:
  const validarPassword = crearValidadorLongitud(8);
  console.log(validarPassword("abc")); // false
  console.log(validarPassword("12345678")); // true
*/

function crearValidadorLongitud(minimo) {
  return function ingresarTexto(texto) {
    return texto.length >= minimo;
  };
}

const validarPassword = crearValidadorLongitud(8);
console.log(validarPassword("abc")); // false
console.log(validarPassword("12345678")); // true

/*
  Ejercicio 2: "El Potenciador Fijo"
  Crea una función llamada `crearPotenciador` que reciba un número que actuará 
  como el exponente fijo de la operación.
  Esta función debe retornar una función que reciba una base (un número) y devuelva 
  el resultado de elevar esa base al exponente que quedó guardado en el closure.

  Ejemplo de uso esperado:
  const alCubo = crearPotenciador(3);
  const alCuadrado = crearPotenciador(2);

  console.log(alCubo(2));    // 8  (2 elevado a la 3)
  console.log(alCuadrado(5));  // 25 (5 elevado a la 2)
*/

function crearPotenciador(exponente) {
  return function (base) {
    return base ** exponente;
  };
}

const alCubo = crearPotenciador(3);
const alCuadrado = crearPotenciador(2);

console.log(alCubo(2)); // 8  (2 elevado a la 3)
console.log(alCuadrado(5)); // 25 (5 elevado a la 2)

/*
  Ejercicio 3: "Control de acceso por edad"
  Crea una función llamada `crearFiltroEdad` que reciba un número que represente 
  la edad mínima requerida para un evento o acceso.
  Esta función debe retornar una función que reciba la edad de una persona y devuelva 
  `true` si la persona cumple o supera la edad mínima, y `false` si no la alcanza.

  Ejemplo de uso esperado:
  const esMayorDeEdad = crearFiltroEdad(18);
  const accesoRestringido = crearFiltroEdad(21);

  console.log(esMayorDeEdad(20)); // true
  console.log(esMayorDeEdad(16)); // false
  console.log(accesoRestringido(19)); // false
*/

function crearFiltroEdad(edadMinima) {
  return function (edadParticipante) {
    return edadParticipante >= edadMinima;
  };
}
const esMayorDeEdad = crearFiltroEdad(18);
const accesoRestringido = crearFiltroEdad(21);

console.log(esMayorDeEdad(20)); // true
console.log(esMayorDeEdad(16)); // false
console.log(accesoRestringido(19)); // false

/*
  Ejercicio Avanzado: "Billetera Virtual con Saldo Acumulado"
  Crea una función llamada `crearBilletera` que reciba un `saldoInicial` (un número).
  Esta función debe retornar un objeto que contenga dos funciones (métodos) que comparten 
  el acceso a ese saldo mediante un closure:

  1. `depositar(monto)`: Debe sumar el monto ingresado al saldo actual y devolver el nuevo saldo total.
  2. `retirar(monto)`: Debe restar el monto al saldo actual *siempre y cuando* haya suficiente dinero. 
     - Si hay fondos suficientes, descuenta el dinero y devuelve el nuevo saldo.
     - Si el monto a retirar es mayor al saldo actual, debe devolver el texto: "Fondos insuficientes".

  Ejemplo de uso esperado:
  const miBilletera = crearBilletera(1000);

  console.log(miBilletera.depositar(500));  // 1500
  console.log(miBilletera.retirar(200));   // 1300
  console.log(miBilletera.retirar(2000));  // "Fondos insuficientes"
  console.log(miBilletera.retirar(300));   // 1000
*/

function crearBilletera(saldoInicial) {
  let saldo = saldoInicial;
  return {
    depositar: function (monto) {
      saldo = saldo + monto;
      return saldo;
    },
    retirar: function (monto) {
      if (monto > saldo) {
        return "Fondos insuficientes";
      }
      saldo = saldo - monto;
      return saldo;
    },
  };
}

const miBilletera = crearBilletera(1000);

console.log(miBilletera.depositar(500)); // 1500
console.log(miBilletera.retirar(200)); // 1300
console.log(miBilletera.retirar(2000)); // "Fondos insuficientes"
console.log(miBilletera.retirar(300)); // 1000

/*
  Ejercicio Avanzado: "El Contador con Memoria y Límites"
  Crea una función llamada `crearContador` que reciba un número inicial `valorInicial` 
  y un número máximo `limite`.
  Esta función debe retornar un objeto con dos métodos (funciones) que comparten 
  el acceso a ese estado mediante un closure:

  1. `incrementar()`: Debe sumar 1 al valor actual, pero con una condición: 
     - Si al sumar se pasa del `limite`, no debe sumar nada y debe devolver el texto: "Límite alcanzado".
     - Si está por debajo o llega exactamente al límite, actualiza el valor y devuelve el valor actual.
  2. `decrementar()`: Debe restar 1 al valor actual, con la condición de que **nunca** 
     puede bajar de 0. Si llega a 0, se queda en 0 y devuelve ese valor.

  Ejemplo de uso esperado:
  const contador = crearContador(3, 5); // Inicia en 3, límite máximo 5

  console.log(contador.incrementar()); // 4  (3 + 1)
  console.log(contador.incrementar()); // 5  (4 + 1)
  console.log(contador.incrementar()); // "Límite alcanzado" (intentó pasar a 6, pero el límite es 5)
  console.log(contador.decrementar()); // 4  (5 - 1)
  console.log(contador.decrementar()); // 3
*/

function crearContador(valorInicial, limite) {
  let valorActual = valorInicial;
  return {
    incrementar: function () {
      return valorActual >= limite
        ? "Limite alcanzado"
        : (valorActual = valorActual + 1);
    },
    decrementar: function () {
      return valorActual <= 0 ? valorActual : (valorActual = valorActual - 1);
    },
  };
}

const contador = crearContador(3, 5); // Inicia en 3, límite máximo 5

console.log(contador.incrementar()); // 4  (3 + 1)
console.log(contador.incrementar()); // 5  (4 + 1)
console.log(contador.incrementar()); // "Límite alcanzado" (intentó pasar a 6, pero el límite es 5)
console.log(contador.decrementar()); // 4  (5 - 1)
console.log(contador.decrementar()); // 3
