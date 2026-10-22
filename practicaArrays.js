/* 
- numbers.length // Cuenta la cantidad de elementos que tiene
- numbers.length = 2 // deja solo los 2 primeros elementos
- numbers.push(elemento) // agrega 1 elemento al array y devuelve la longitud
- numbers.pop() // elimina el ultimo elemento del array y lo devuelve
- numbers.shift() // elimina el primer elemento del array y lo devuelve
- numbers.unshift(elemento) // pone un elemento primero
- numbers.indexOf(elemento) // devuelve la posicion del elemento
- numbers.includes(elemento) // devuelve T o F si existe o no el elemento en el array
- numbers.concat(otroarray) // une 2 arrays en 1 
  const nuevoArray = [...array1, ...array2] // une x cantidad de arrays
- numbers.reverse() // invierte el orden de los elementos
- numbers.join(separador) // convierte  en 1 string separados con el separador indicado
- numbers.splice(y, x, z1, z2, z3 ) // elimina X cantidad de lementos desde Y indice, agregar Z elementos. Se puede solo agregar o solo eliminar o ambas.
- numbers.slice(x,y) // crea una copia del array desde el indice x hasta el y-1
- Array.isArray(numbers) // T o F si es un array (typeoff devuelve object)
- numbers[posicion] // te devuelve el elemento de esa posicion
- numbers.at(-1) // te devuelve el elemento en esa posicion empezando desde atras
- numbers.some((numero) => numero + condicional) // devuelve T o F segun si algun elemento del array cumple el condicional
- numbers.every((numero) => numero + condicional) // devuelve T o F si todos los elementos cumplen la condicional
- number.find((numer) => numero + condicional) // devuelve el primer elemento que cumple con la condicion si no hay muestra undefined
- number.findIndex((numero) => numero + condiconal) // devuelve el indice del primer elemento que cumple con la condicion si no hay retorna -1

En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:
El primer elemento lo sacamos del array, ya que es el nombre del cliente.
Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
Después añadimos al final del array el nombre del usuario que sacamos antes.*/

const numerosA = ["primero", "segundo", "tercero", "cuarto", "quinto"];
const numerosB = [1, 3, 5, 7, 9];
const nombreLargo = numerosA.some((numero) => numero.length > 3);
const algunoEsPar = numerosB.some((numero) => numero % 2 == 0);
const todosImpar = numerosB.every((number) => number % 2 != 0);
const primerImpar = numerosB.find((numero) => numero % 2 != 0);
const primerIndiceImpar = numerosB.findIndex((numero) => numero % 2 != 0);

console.log("Algun nombre LARGO:", nombreLargo);
console.log("Alguno es PAR:", algunoEsPar);
console.log("Todos IMPAR:", todosImpar);
console.log("El primer IMPAR:", primerImpar, "INDICE:", primerIndiceImpar);

numerosA.forEach(function (number, index) {
  console.log(index, number);
});

let contadorTotalLetras = 0;

numerosA.forEach((number, index) => {
  let contadorIndividual = number.length;
  let resultado = number.length + index;
  contadorTotalLetras += contadorIndividual;
  console.log("Tiene", number.length, "silabas.", "Su indice es:", index);
  console.log("La sumatoria de eso es:", resultado);
});

console.log("Sumatoria de silabas totales:", contadorTotalLetras);

function procesarPedido(pedidos) {
  nombreCliente = pedidos[0];
  pedidos.shift();
  pedidos.unshift("bebida");
  pedidos.push(nombreCliente);
  return pedidos;
}
const pedidoMatias = ["Matias", "Pizza", "Papas fritas"];
console.log(procesarPedido(pedidoMatias));

/*


  =========================================
  DESAFÍO 1: "El Carrito de Compras Inteligente"
  =========================================
  Crea una función llamada `gestionarCarrito` que reciba un array de productos 
  y el nombre de un producto que se quiere eliminar.

  Instrucciones:
  1. Comprueba si el producto existe en el array.
  2. Si existe, busca su posición e elimínalo del array sin dejar huecos.
  3. Si no existe, devuelve el string: "Producto no encontrado".
  4. Si se eliminó correctamente, devuelve el array modificado.

*/
function gestionarCarrito(carrito, producto) {
  let productoNoencontrado = "Producto no encontrado en el carrito";
  if (carrito.includes(producto)) {
    carrito.splice(carrito.indexOf(producto), 1);
    return "El carrito es el siguiente: " + carrito;
  }
  return productoNoencontrado;
}

console.log(gestionarCarrito(["pan", "leche", "huevos"], "leche"));
console.log(gestionarCarrito(["pan", "leche"], "carne"));

/*
  =========================================
  DESAFÍO 2: "La Fila del Cine VIP"
  =========================================
  Crea una función llamada `organizarFila` que reciba un array con los nombres 
  de las personas en la fila y un string con el nombre de un cliente VIP.

  Instrucciones:
  1. La primera persona de la fila (índice 0) sale de la fila porque ya entró al cine.
  2. El cliente VIP debe ser ubicado EXACTAMENTE en la segunda posición (índice 1) 
     de la fila actual (sin borrar a nadie).
  3. Devuelve el array modificado.

  Ejemplo de uso esperado:
  console.log(organizarFila(["Ana", "Carlos", "Sofia", "Diego"], "LucasVIP"));
  // Devuelve: ["Carlos", "LucasVIP", "Sofia", "Diego"]
*/

function organizarFila(nombres, vips) {
  nombres.shift();
  nombres.splice(1, 0, vips);
  return nombres;
}

console.log(organizarFila(["Ana", "Carlos", "Sofia", "Diego"], "LucasVIP"));

function sumarPares(numeros) {
  let suma = 0;
  numeros.forEach((number) => {
    number % 2 == 0 ? (suma = +number) : console.log(number, "es IMPAR");
  });
  return suma;
}
