export function ejecutarAlgoritmoFIFO(referencias, numMarcos) {
    const tabla = [];
    const fallos = Array(referencias.length).fill("");
  
    const marcos = [];
    let indice = 0;
  
    for (let i = 0; i < referencias.length; i++) {
      const ref = referencias[i];
  
      if (!marcos.includes(ref)) {
        fallos[i] = "F";
  
        if (marcos.length < numMarcos) {
          marcos.push(ref);
        } else {
          marcos[indice] = ref;
          indice = (indice + 1) % numMarcos;
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
  