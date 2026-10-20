/*
Ejercicio Práctico: "El Calculador de Entradas de Cine"
Imagina que estás programando el sistema de taquilla online para un complejo de cines. Tienes que crear una función llamada calcularPrecioEntrada que reciba tres parámetros:
edad (número): La edad del espectador.
diaSemana (string): El día de la función (por ejemplo: "lunes", "miercoles", "sabado", etc.).
esEstudiante (booleano - true o false): Indica si cuenta con credencial de estudiante vigente.

Las reglas que tu función debe aplicar paso a paso:
Precio Base:
#El valor general de la entrada es de $4,000.
#Descuentos por día u condición (Aplica el mayor o combínalos de forma lógica):
#Días de promoción: Si el diaSemana es "miercoles", la entrada tiene un 30% de descuento sobre el valor base.
Descuento por edad o estudiante:
#Si el espectador es menor de 12 años (edad < 12) o jubilado (edad > 65), tiene un 20% de descuento.
#Si es estudiante (esEstudiante === true) y no entra en la categoría de menor/jubilado, tiene un 15% de descuento.
#Si se cumplen varias condiciones, aplica el descuento que prefieras o el acumulativo, pero asegúrate de que al menos una de estas reglas modifique el precio si corresponde).
Restricción por horario/edad (Validación previa):
#Si la persona es menor de 13 años y el diaSemana es un día de fin de semana ("sabado" o "domingo"), se le regala un combo de palomitas chicas 

Resultado final:
La función debe retornar (return) el precio final de la entrada ya calculado. */

function calcularPrecioEntrada(edad, diaSemana, esEstudiante) {
  let valorEntrada = 4000; // Precio base de la entrada
  let esJubiladoEstudiante = false; // Variable para determinar si aplica descuento de jubilado o estudiante
  let finDeSemana = false; // Variable para determinar si es fin de semana

  if (diaSemana === "Miercoles") {
    console.log("Hoy es Miercoles, hay descuento del 30%");
    valorEntrada *= 0.7; // 30% de descuento los miércoles
  } else if (
    diaSemana === "Jueves" ||
    diaSemana === "Lunes" ||
    diaSemana === "Martes" ||
    diaSemana === "Viernes"
  ) {
    console.log("No hay descuento en este dia de la semana");
  } else if (diaSemana === "Sabado" || diaSemana === "Domingo") {
    finDeSemana = true;
    console.log(
      "Es fin de semana, no hay descuento pero tiene un combo de palomitas gratis si eres menor de 13 años ",
    );
  } else {
    console.log("Dia de la semana no valido");
    return null;
  }

  if (edad < 12 || edad > 65) {
    valorEntrada *= 0.8;
    let esJubiladoEstudiante = true; // 20% de descuento para menores de 12 años y mayores de 65
  }

  if (esEstudiante && !esJubiladoEstudiante) {
    valorEntrada *= 0.85;
  }

  if (finDeSemana && edad < 13) {
    console.log("Tienes un combo de palomitas gratis");
  } else {
    console.log(
      "No tienes combo de palomitas gratis debido a que no es fin de semana o no eres menor de 13 años",
    );
  }

  console.log("El precio final de la entrada es: " + valorEntrada);
}

console.log(calcularPrecioEntrada(20, "Miercoles", true));
