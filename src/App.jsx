import { useState } from "react";
import Header from "./components/Header";
import TableForm from "./components/TableForm";
import DynamicTable from "./components/DynamicTable";

import { ejecutarAlgoritmoFIFO } from "./alg/AlgoritmoFIFO";
import { ejecutarAlgoritmoFIFOPlus } from "./alg/AlgoritmoFIFOPlus";
import { ejecutarAlgoritmoLRU } from "./alg/AlgoritmoLRU";
import { ejecutarAlgoritmoOptimo } from "./alg/AlgoritmoOptimo";

export default function App() {
  const [rows, setRows] = useState(0); // Referencias
  const [cols, setCols] = useState(0); // Marcos
  const [referencias, setReferencias] = useState([]);
  const [algoritmo, setAlgoritmo] = useState("");
  const [resultado, setResultado] = useState({ tabla: [], fallos: [] });
  const [generated, setGenerated] = useState(false);
  const [tablaCalculada, setTablaCalculada] = useState(false);

  const handleGenerate = () => {
    if (rows <= 0 || cols <= 0) {
      alert("Por favor define las dimensiones primero.");
      return;
    }
    setGenerated(true);
    setTablaCalculada(false);
  };

  const handleCalcular = () => {
    if (!algoritmo || referencias.length !== rows) {
      alert("Por favor selecciona un algoritmo y llena las referencias.");
      return;
    }

    let resultado;
    switch (algoritmo) {
      case "fifo":
        resultado = ejecutarAlgoritmoFIFO(referencias, cols);
        break;
      case "fifo+":
        resultado = ejecutarAlgoritmoFIFOPlus(referencias, cols);
        break;
      case "lru":
        resultado = ejecutarAlgoritmoLRU(referencias, cols);
        break;
      case "optimo":
        resultado = ejecutarAlgoritmoOptimo(referencias, cols);
        break;
      default:
        resultado = { tabla: [], fallos: [] };
    }

    setResultado(resultado);
    setTablaCalculada(true);
  };

  const handleSelectChange = (value) => {
    setAlgoritmo(value);
  };

  const handleRefChange = (index, value) => {
    const nuevasReferencias = [...referencias];
    nuevasReferencias[index] = value;
    setReferencias(nuevasReferencias);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 sm:px-6 lg:px-16">
      <Header />
      <TableForm
        rows={rows}
        cols={cols}
        setRows={(value) => {
          setRows(value);
          setReferencias(Array(value).fill(""));
        }}
        setCols={setCols}
        onGenerate={handleGenerate}
        handleSelectChange={handleSelectChange}
      />
      <DynamicTable
        rows={rows}
        cols={cols}
        generated={generated}
        referencias={referencias}
        setReferencias={handleRefChange}
        resultado={resultado}
        onCalcular={handleCalcular}
        tablaCalculada={tablaCalculada}
      />
    </div>
  );
}





