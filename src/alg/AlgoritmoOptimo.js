export function ejecutarAlgoritmoOptimo(referencias, numMarcos) {
    const tabla = [];
    const fallos = Array(referencias.length).fill("");
  
    const marcos = [];
  
    for (let i = 0; i < referencias.length; i++) {
      const ref = referencias[i];
      const idx = marcos.indexOf(ref);
  
      if (idx === -1) {
        fallos[i] = "F";
  
        if (marcos.length < numMarcos) {
          marcos.push(ref);
        } else {
          const futuros = referencias.slice(i + 1);
          const usos = marcos.map((p) => futuros.indexOf(p));
          const idxReemplazo =
            usos.includes(-1) ? usos.indexOf(-1) : usos.indexOf(Math.max(...usos));
          marcos[idxReemplazo] = ref;
        }
      }
  
      const estadoActual = Array(numMarcos).fill("");
      for (let j = 0; j < marcos.length; j++) {
        estadoActual[j] = marcos[j];
      }
  
      tabla.push(estadoActual);
    }
  
    return { tabla, fallos };
  }
  