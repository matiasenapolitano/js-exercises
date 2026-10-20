function evaluarPrestamo(sueldoMensual, historialCrediticio, edad) {
  let aprobado = false;
  if (edad < 18 || edad > 70) {
    console.log(
      "Préstamo rechazado: No cumple con la edad permitida (18-70 años)",
    );
    return;
  } else {
    if (sueldoMensual < 400000) {
      console.log("Préstamo rechazado: Ingresos insuficientes");
      return;
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
  }
}

evaluarPrestamo(350000, true, 25);
