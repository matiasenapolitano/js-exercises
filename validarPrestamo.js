/*
Ejercicio Práctico: "El Validador de Préstamos Bancarios"
Imagina que estás programando el sistema automatizado de un banco para evaluar si se le puede aprobar un préstamo a un cliente. Tienes que crear una función llamada evaluarPrestamo que reciba tres parámetros:
1. sueldoMensual (número): El ingreso mensual del cliente en pesos.
2. historialCrediticio (booleano - true o false): Indica si el cliente tiene un buen historial financiero (true = bueno, false = malo).
3. edad (número): La edad del solicitante.

Las reglas que tu función debe aplicar paso a paso:
Filtro por edad:
- El solicitante debe tener entre 18 y 70 años (inclusive). 
- Si la edad es menor a 18 o mayor a 70, la función debe retornar de inmediato un mensaje que diga: "Préstamo rechazado: No cumple con la edad permitida (18-70 años)".

Filtro por ingresos mínimos:
- El sueldo mínimo requerido para calificar a cualquier préstamo es de $400,000. Si gana menos de ese valor, el préstamo se rechaza ("Préstamo rechazado: Ingresos insuficientes").

Evaluación de riesgo (Combinación de sueldo e historial):
- Si el cliente gana más de $800,000, el préstamo se aprueba automáticamente sin importar su historial crediticio.
- Si el cliente gana entre $400,000 y $800,000, el préstamo solo se aprueba si su historialCrediticio es true. Si es false, se rechaza por mal historial.

Resultado final:
La función debe retornar un texto con el veredicto final o imprimir el motivo del rechazo en consola.
*/

function evaluarPrestamo(sueldoMensual, historialCrediticio, edad) {
  let aprobado = false;
  if (edad < 18 || edad > 70) {
    console.log(
      "Préstamo rechazado: No cumple con la edad permitida (18-70 años)",
    );
  } else {
    if (sueldoMensual < 400000) {
      console.log("Préstamo rechazado: Ingresos insuficientes");
    } else if (sueldoMensual >= 800000) {
      aprobado = true;
      console.log("Préstamo aprobado: Sueldo mayor a $800,000");
    } else if (sueldoMensual >= 400000 && sueldoMensual < 800000) {
      if (historialCrediticio) {
        aprobado = true;
        console.log("Préstamo aprobado: Historial crediticio bueno");
      } else {
        console.log(
          "Préstamo rechazado: Historial crediticio no satisfactorio",
        );
      }
    }
    return aprobado;
  }
}

console.log(evaluarPrestamo(350000, true, 25));
