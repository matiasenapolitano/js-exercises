/*
Ejercicio Práctico: "El Sistema de Tarifas Logísticas"
Imagina que estás programando el módulo de cálculo de costos para una empresa de envíos y logística. Tienes que crear una función llamada calcularCostoEnvio que reciba cuatro parámetros:
1. pesoKg (número): El peso del paquete en kilogramos.
2. zonaDestino (string): La zona de entrega, que puede ser "local", "nacional" o "internacional".
3. esUrgente (booleano - true o false): Indica si el cliente seleccionó envío exprés/urgente.
4. esClienteFrecuente (booleano - true o false): Indica si el destinatario pertenece al programa de fidelización.

Las reglas que tu función debe aplicar paso a paso y en orden:
1. Validación inicial (Guardia):
- Si el pesoKg es menor o igual a 0, la función debe mostrar un mensaje de error por consola y retornar null de inmediato.
- Si la zonaDestino no es ninguna de las tres válidas ("local", "nacional", "internacional"), también debe mostrar un error y retornar null.

2. Cálculo de la Tarifa Base por Zona y Peso:
- "local": Cuesta $1,000 por cada kilo (pesoKg * 1000).
- "nacional": Cuesta $2,500 por cada kilo (pesoKg * 2500).
- "internacional": Cuesta $6,000 por cada kilo (pesoKg * 6000).

3. Recargo por Envío Urgente:
- Si esUrgente es true, al valor parcial obtenido se le aplica un 30% de recargo (* 1.30).

4. Descuento por Cliente Frecuente:
- Si esClienteFrecuente es true, se le otorga un 15% de descuento sobre el valor actual (* 0.85).

5. Seguro Obligatorio por Alto Valor:
- Una vez aplicado el descuento de cliente frecuente, evalúa el costo parcial: si supera los $100,000, se le debe sumar un seguro obligatorio fijo de $8,000.

Resultado final:
La función debe retornar el costo final total del envío, imprimiendo un resumen claro en la consola de cada paso aplicado.
*/

function calcularCostoEnvio(
  pesoKg,
  zonaDestino,
  esUrgente,
  esClienteFrecuente,
) {
  let precioEnvio = 0;
  if (pesoKg <= 0) {
    console.log("ERROR: El peso no puede ser 0 o menor");
    return null;
  }

  switch (zonaDestino) {
    case "local": {
      precioEnvio = pesoKg * 1000;
      break;
    }
    case "nacional": {
      precioEnvio = pesoKg * 2500;
      break;
    }
    case "internacional": {
      precioEnvio = pesoKg * 6000;
      break;
    }
    default: {
      console.log("ERROR: Destino ingresado invalido.");
      return null;
    }
  }
  console.log(
    "El envio fue etiquetado como " +
      zonaDestino +
      " y tiene un peso de " +
      pesoKg +
      "kg. por lo tanto su valor es de $" +
      precioEnvio,
  );

  if (esUrgente) {
    precioEnvio *= 1.3;
    console.log(
      "El envio fue etiquetado como urgente por lo que tendra un incremento del 30%.",
    );
  }

  if (esClienteFrecuente) {
    precioEnvio *= 0.85;
    console.log(
      "Pero debido a que es un cliente frecuente recibe un descuento del 15% al valor con el incremento aplicado.",
    );
  }

  if (precioEnvio > 100000) {
    precioEnvio = precioEnvio + 8000;
    console.log(
      "El monto de envio supera los $100.000, se aplicara un seguro OBLIGATORIO de $8.000",
    );
  }

  console.log("El precio final de envio es de: $" + precioEnvio);
  return precioEnvio;
}

console.log(calcularCostoEnvio(15, "nacional", true, true));
