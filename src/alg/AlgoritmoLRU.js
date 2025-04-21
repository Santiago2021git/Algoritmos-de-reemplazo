export function ejecutarAlgoritmoLRU(referencias, numMarcos) {
    const tabla = [];
    const fallos = Array(referencias.length).fill("");
  
    const marcos = [];
    const usoReciente = new Map();
  
    for (let i = 0; i < referencias.length; i++) {
      const ref = referencias[i];
  
      if (!marcos.includes(ref)) {
        fallos[i] = "F";
  
        if (marcos.length < numMarcos) {
          marcos.push(ref);
        } else {
          let menosReciente = referencias.length;
          let paginaReemplazo;
  
          for (const p of marcos) {
            const ultimaVez = usoReciente.get(p) ?? -1;
            if (ultimaVez < menosReciente) {
              menosReciente = ultimaVez;
              paginaReemplazo = p;
            }
          }
  
          const idx = marcos.indexOf(paginaReemplazo);
          marcos[idx] = ref;
        }
      }
  
      usoReciente.set(ref, i);
  
      const estadoActual = Array(numMarcos).fill("");
      for (let j = 0; j < marcos.length; j++) {
        estadoActual[j] = marcos[j];
      }
  
      tabla.push(estadoActual);
    }
  
    return { tabla, fallos };
  }
  