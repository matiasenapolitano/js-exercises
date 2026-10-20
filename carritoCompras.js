/*
Ejercicio Práctico: "El Motor de Descuentos y Cupones"
Vas a crear una función llamada calcularPrecioFinal que reciba cuatro parámetros:
1. precioBase (número): El valor inicial del producto.
2. categoria (string): La categoría del producto, que puede ser "electronica", "ropa" o "alimentos".
3. codigoCupon (string): Un código de descuento que introduce el usuario (por ejemplo: "DESC10", "SUPER_AHORRO", o "" si no usa cupón).
4. esSocio (booleano - true o false): Indica si el cliente pertenece al club de socios.

Las reglas que tu función debe aplicar paso a paso y en orden:
1. Modificador por Categoría:
- Si la categoría es "electronica", se le suma un 5% de impuesto al precio base.
- Si la categoría es "ropa", tiene un 10% de descuento.
- Si la categoría es "alimentos", el precio queda exactamente igual.
- Validación: Si escriben una categoría inválida, muestra un error y retorna null.

2. Descuento por Membresía (Socio):
- Si esSocio es true, se le aplica un 10% de descuento adicional sobre el valor parcial.

3. Aplicación de Cupones:
- Si el cupón es "DESC10", se descuenta un 10% más.
- Si el cupón es "SUPER_AHORRO", se descuenta un 20% más.
- Si está vacío (""), no se aplica cupón. Si es inválido, retorna null.

4. Costo de Envío Fijo:
- Al valor final ya descontado, se le suma un envío de $2,500. 
- Excepción: Si el precio del producto antes del envío superaba los $50,000, el envío es bonificado a $0.

Resultado final:
La función debe retornar el precio final total a pagar, imprimiendo un resumen en consola.
*/

function calcularPrecioFinal(precioBase, categoria, codigoCupon, esSocio) {
  let precioEnvio = 2500;
  if (precioBase > 50000) {
    precioEnvio = 0;
  }
  switch (categoria) {
    case "electronica": {
      precioBase *= 1.05;
      console.log("5% De impuestos aplicados a la categoria de Electronica");
      break;
    }
    case "ropa": {
      precioBase *= 0.9;
      console.log("10% De descuento aplicado a la categoria Ropa");
      break;
    }
    case "alimentos": {
      console.log(
        "No se aplican descuentos ni impuestos en la categoria Alimentos",
      );
      break;
    }
    default: {
      console.log("La categoria ingresada no es valida");
      return null;
    }
  }

  if (esSocio) {
    console.log("Descuento del 10% por ser socio aplicado");
    precioBase *= 0.9;
  }

  switch (codigoCupon) {
    case "DESC10": {
      precioBase *= 0.9;
      console.log("Cupon del 10% de descuento aplicado");
      break;
    }
    case "SUPER_AHORRO": {
      precioBase *= 0.8;
      console.log("Cupon del 20% de descuento aplicado");
      break;
    }
    case "": {
      console.log("No se aplico ningun cupon de descuento");
      break;
    }
    default: {
      console.log("No se ingreso un cupon de descuento valido");
      return null;
    }
  }

  let precioFinal = precioBase + precioEnvio;
  console.log(
    "El precio final es: " +
      precioFinal +
      " ,el costo de envio es: " +
      precioEnvio,
  );
  return precioFinal;
}

console.log(calcularPrecioFinal(60000, "ropa", "DESC10", true));
