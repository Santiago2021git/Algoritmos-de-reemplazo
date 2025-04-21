export default function TableForm({ rows, cols, setRows, setCols, onGenerate, handleSelectChange }) {
  return (
    <div className="bg-black p-6 rounded-lg border border-purple-500 mb-8 max-w-3xl mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
        {/* Input de Referencias (columnas) - AHORA PRIMERO */}
        <div className="w-full md:w-1/2">
          <label className="text-white text-center mb-1 block">Números de Referencias</label>
          <input
            type="number"
            className="p-2 rounded-md w-full text-black"
            value={rows}
            onChange={(e) => setRows(parseInt(e.target.value))}
            min="1"
          />
        </div>

        {/* Input de Marcos (filas) - AHORA SEGUNDO */}
        <div className="w-full md:w-1/2">
          <label className="text-white text-center mb-1 block">Número de Marcos</label>
          <input
            type="number"
            className="p-2 rounded-md w-full text-black"
            value={cols}
            onChange={(e) => setCols(parseInt(e.target.value))}
            min="1"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-full sm:w-52 mb-6">
          <select
            className="block w-full p-2 pr-8 text-black border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => handleSelectChange(e.target.value)}
          >
            <option disabled selected value="">Selecciona una opción</option>
            <option value="optimo">Algoritmo Óptimo</option>
            <option value="fifo">Algoritmo FIFO</option>
            <option value="lru">Algoritmo LRU</option>
            <option value="fifo+">Algoritmos FIFO +</option>

          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-600">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <button
        className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded"
        onClick={onGenerate}
      >
        Generate Table
      </button>
    </div>
  );
}
