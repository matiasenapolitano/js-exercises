/*
Ejercicio Práctico: "El Simulador de Créditos Hipotecarios"
Imagina que estás programando el módulo de evaluación de riesgo y cálculo de cuotas para el sistema de préstamos hipotecarios de un banco. Tienes que crear una función llamada evaluarCreditoHipotecario que reciba cuatro parámetros:
1. montoSolicitado (número): El dinero que el cliente quiere pedir prestado en pesos.
2. sueldoMensual (número): Los ingresos mensuales netos del solicitante.
3. edad (número): La edad actual del solicitante.
4. zonaInmueble (string): La ubicación de la propiedad, que puede ser "caba", "interior" o "patagonia".

Las reglas que tu función debe aplicar paso a paso y en orden:
1. Validaciones de Guardia (Filtros de Rechazo Inmediato):
- Edad: El solicitante debe tener al menos 18 años y la edad sumada al plazo del crédito no puede superar los 75 años (asumiendo un plazo fijo de 20 años / 240 meses). Si edad + 20 > 75 o edad < 18, retorna null.
- Monto: El monto solicitado no puede ser menor a $5,000,000 ni mayor a $100,000,000. Si está fuera de ese rango, retorna null.

2. Validación de Capacidad de Pago (Ratio Cuota-Ingreso):
- Calcula una cuota mensual base dividiendo el montoSolicitado entre 240 meses.
- La cuota mensual no puede superar el 30% del sueldoMensual. Si lo supera, retorna null (ingresos insuficientes).

3. Tasa de Interés según Zona y Monto (Lógica por Escalas):
- "caba": Tasa base del 1.5% mensual sobre la cuota base. Si el monto supera los $50,000,000, se le suma un 0.5% extra (total 2%).
- "interior": Tasa base del 1.2% mensual. Si el monto supera los $50,000,000, se le suma un 0.3% extra (total 1.5%).
- "patagonia": Tasa base del 1.0% mensual. No tiene recargo por monto alto.

4. Bonificación por Ingresos Altos:
- Si el sueldoMensual supera los $2,500,000, se le aplica un descuento del 10% sobre el valor final de la cuota calculada con intereses.

Resultado final:
La función debe retornar el valor final de la cuota mensual con intereses (y bonificaciones si aplican), imprimiendo un resumen detallado en la consola de cada paso del análisis.
*/

function evaluarCreditoHipotecario(
  montoSolicitado,
  sueldoMensual,
  edad,
  zonaInmueble,
  plazoEnMeses,
) {
  let cuotaMensual = montoSolicitado / plazoEnMeses;
  let plazoEnAños = plazoEnMeses / 12;
  let esAlto = montoSolicitado > 50000000;

  if (montoSolicitado < 5000000 || montoSolicitado > 100000000) {
    console.log(
      "PRESTAMO RECHAZADO - CAUSA: El monto solicitado es menor a $5.000.000 o mayor a 100.000.000",
    );

    return null;
  }

  if (edad < 18) {
    console.log(
      "PRESTAMO RECHAZADO - CAUSA: El solicitante es menor de 18 años",
    );

    return null;
  }

  if (edad + plazoEnAños > 75) {
    console.log(
      "PRESTAMO RECHAZADO - CAUSA: La edad sumada al plazo del crédito no puede superar los 75 años",
    );

    return null;
  }

  if (sueldoMensual * 0.3 < cuotaMensual) {
    console.log(
      "PRESTAMO RECHAZADO - CAUSA: La cuota del prestamo supera el 30% del sueldo.",
    );

    return null;
  }

  switch (zonaInmueble) {
    case "caba": {
      if (esAlto) {
        cuotaMensual = cuotaMensual + cuotaMensual * 0.02;
      } else {
        cuotaMensual = cuotaMensual + cuotaMensual * 0.015;
      }
      break;
    }
    case "interior": {
      if (esAlto) {
        cuotaMensual = cuotaMensual + cuotaMensual * 0.015;
      } else {
        cuotaMensual = cuotaMensual + cuotaMensual * 0.012;
      }
      break;
    }
    case "patagonia": {
      cuotaMensual = cuotaMensual + cuotaMensual * 0.01;
      break;
    }
    default: {
      console.log("ERROR: Zona del inmueble invalida");
      return null;
    }
  }

  if (sueldoMensual > 2500000) {
    cuotaMensual *= 0.9;
  }

  console.log(
    "PRESTAMO ACEPTADO: El monto solicitado es $" +
      montoSolicitado +
      " en la zona de " +
      zonaInmueble +
      " ,tiene una cuota asignada de $" +
      cuotaMensual,
  );

  return cuotaMensual;
}

console.log(evaluarCreditoHipotecario(50000000, 145000, 25, "caba", 240));
