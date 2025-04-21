export default function DynamicTable({
  rows,
  cols,
  generated,
  referencias,
  setReferencias,
  resultado,
  onCalcular,
  tablaCalculada
}) {
  if (!generated || rows <= 0 || cols <= 0) return null;

  return (
    <div className="overflow-x-auto max-w-full">
      <table className="table-fixed min-w-full shadow-lg border border-black text-black text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="w-28 border border-gray-800 px-2 py-2 bg-black text-white text-sm"></th>
            {[...Array(rows)].map((_, colIdx) => (
              <th key={colIdx} className="w-28 border border-gray-800 px-2 py-2 text-sm bg-white text-black">
                <input
                  type="text"
                  value={referencias[colIdx] || ""}
                  onChange={(e) => setReferencias(colIdx, e.target.value)}
                  placeholder={`Ref ${colIdx + 1}`}
                  className="w-full text-center px-1 py-1 border border-gray-300 rounded text-sm"
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(cols)].map((_, rowIdx) => (
            <tr key={rowIdx} className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="w-28 border border-gray-800 px-2 py-2 bg-black text-white text-center font-bold text-sm">
                Marco {rowIdx + 1}
              </td>
              {[...Array(rows)].map((_, colIdx) => (
                <td
                  key={`${rowIdx}-${colIdx}`}
                  className="w-28 border border-gray-800 px-2 py-2 text-center font-mono"
                >
                  {tablaCalculada ? resultado.tabla[colIdx]?.[rowIdx] || "" : ""}
                </td>
              ))}
            </tr>
          ))}

          <tr className="bg-red-200">
            <td className="w-28 border border-gray-800 px-2 py-2 bg-black text-white text-center font-bold text-sm">
              Fallas
            </td>
            {[...Array(rows)].map((_, idx) => (
              <td key={`falla-${idx}`} className="w-28 border border-gray-800 px-2 py-2 text-center font-mono">
                {tablaCalculada ? resultado.fallos[idx] : ""}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {generated && (
        <div className="flex flex-col items-center mt-6">
          <button
            className="py-2 px-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded"
            onClick={onCalcular}
          >
            Calcular
          </button>

          {tablaCalculada && (
            <div className="mt-6">
              <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white shadow-lg rounded-2xl p-4 w-fit mx-auto animate-fade-in-up">
                <div className="bg-black px-4 py-4 rounded-xl shadow-inner text-center">
                  <p className="text-lg font-bold">❌ Total de Fallos:</p>
                  <p className="text-2xl font-extrabold mt-2">
                    {resultado.fallos.filter((f) => f === "F").length}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}





/*
export default function DynamicTable({
  rows,
  cols,
  generated,
  referencias,
  setReferencias,
  resultado,
  onCalcular,
  tablaCalculada
}) {
  if (!generated || rows <= 0 || cols <= 0) return null;

  return (
    <div className="overflow-x-auto max-w-full">
      <table className="table-fixed min-w-full shadow-lg border border-black text-black text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="w-28 border border-gray-800 px-2 py-2 bg-black text-white text-sm"></th>
            {[...Array(rows)].map((_, colIdx) => (
              <th key={colIdx} className="w-28 border border-gray-800 px-2 py-2 text-sm bg-white text-black">
                <input
                  type="text"
                  value={referencias[colIdx] || ""}
                  onChange={(e) => setReferencias(colIdx, e.target.value)}
                  placeholder={`Ref ${colIdx + 1}`}
                  className="w-full text-center px-1 py-1 border border-gray-300 rounded text-sm"
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(cols)].map((_, rowIdx) => (
            <tr key={rowIdx} className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="w-28 border border-gray-800 px-2 py-2 bg-black text-white text-center font-bold text-sm">
                Marco {rowIdx + 1}
              </td>
              {[...Array(rows)].map((_, colIdx) => (
                <td
                  key={`${rowIdx}-${colIdx}`}
                  className="w-28 border border-gray-800 px-2 py-2 text-center font-mono"
                >
                  {tablaCalculada ? resultado.tabla[colIdx]?.[rowIdx] || "" : ""}
                </td>
              ))}
            </tr>
          ))}

          <tr className="bg-red-200">
            <td className="w-28 border border-gray-800 px-2 py-2 bg-black text-white text-center font-bold text-sm">
              Fallas
            </td>
            {[...Array(rows)].map((_, idx) => (
              <td key={`falla-${idx}`} className="w-28 border border-gray-800 px-2 py-2 text-center font-mono">
                {tablaCalculada ? resultado.fallos[idx] : ""}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {generated && (
        <div className="flex justify-center mt-6">
          <button
            className="py-2 px-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded"
            onClick={onCalcular}
          >
            Calcular
          </button>
        </div>
      )}
    </div>
  );
}
*/



