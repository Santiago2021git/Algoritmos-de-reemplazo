export function ejecutarAlgoritmoFIFOPlus(referencias, numMarcos) {
  const tabla = [];
  const fallos = Array(referencias.length).fill("");

  const marcos = Array(numMarcos).fill(null); // páginas en marcos
  const bits = Array(numMarcos).fill(0); // bits de referencia
  let puntero = 0;

  for (let i = 0; i < referencias.length; i++) {
    const ref = referencias[i];
    let hit = false;
    let marcoUsado = -1;

    // Revisar si la página ya está en memoria
    for (let j = 0; j < numMarcos; j++) {
      if (marcos[j] === ref) {
        hit = true;
        marcoUsado = j;
        break;
      }
    }

    if (hit) {
      // Asignar bit solo a ese marco
      bits.fill(0);
      bits[marcoUsado] = 1;
    } else {
      fallos[i] = "F";

      // Reemplazar usando política Clock + bit
      while (true) {
        if (bits[puntero] === 0) {
          marcos[puntero] = ref;
          bits.fill(0);
          bits[puntero] = 1;
          puntero = (puntero + 1) % numMarcos;
          break;
        } else {
          bits[puntero] = 0;
          puntero = (puntero + 1) % numMarcos;
        }
      }
    }

    // Guardar el estado de los marcos
    const estadoActual = marcos.map((p, idx) =>
      p !== null ? `${p}${bits[idx] === 1 ? "🩷" : ""}` : ""
    );
    tabla.push(estadoActual);
  }

  return { tabla, fallos };
}
