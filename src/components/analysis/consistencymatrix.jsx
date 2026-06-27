import { useDocuments } from "../../context/DocumentContext";

export default function ConsistencyMatrix() {

  const { analysisData } = useDocuments();

  const comparison = analysisData.comparison || {};

  // Get all uploaded document types dynamically
  const documentTypes = [
    ...new Set(
      Object.values(comparison).flatMap((field) =>
        Object.keys(field)
      )
    ),
  ];

  // Build comparison rows
  const rows = Object.entries(comparison).map(
    ([field, values]) => {

      const extractedValues = Object.values(values).filter(
        (v) => v && String(v).trim() !== ""
      );

      const uniqueValues = [...new Set(extractedValues)];

      return {
        field,
        values,
        status:
          uniqueValues.length <= 1
            ? "Match"
            : "Mismatch",
      };
    }
  );

  const badge = (status) => {

    if (status === "Match") {
      return (
        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-400">
          Match
        </span>
      );
    }

    return (
      <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-400">
        Mismatch
      </span>
    );

  };

  return (

    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Cross-Document Consistency Matrix
          </h2>

          <p className="mt-2 text-slate-400">
            TruthLens AI compares every extracted field across all uploaded documents.
          </p>

        </div>

        <div className="flex gap-4">

          <div className="rounded-xl bg-slate-950 p-4">

            <p className="text-sm text-slate-400">
              Fields
            </p>

            <h3 className="text-2xl font-bold text-white">
              {rows.length}
            </h3>

          </div>

          <div className="rounded-xl bg-slate-950 p-4">

            <p className="text-sm text-slate-400">
              AI Confidence
            </p>

            <h3 className="text-2xl font-bold text-emerald-400">
              {analysisData.financial?.aiConfidence || 0}%
            </h3>

          </div>

        </div>

      </div>

      <div className="mt-8 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700 text-left text-slate-400">

              <th className="pb-4">
                Field
              </th>

              {documentTypes.map((doc) => (

                <th
                  key={doc}
                  className="pb-4"
                >
                  {doc}
                </th>

              ))}

              <th className="pb-4">
                Result
              </th>

            </tr>

          </thead>

          <tbody>

            {rows.map((row) => (

              <tr
                key={row.field}
                className="border-b border-slate-800"
              >

                <td className="py-4 font-semibold capitalize text-white">
                  {row.field}
                </td>

                {documentTypes.map((doc) => (

                  <td
                    key={doc}
                    className="text-slate-300"
                  >
                    {row.values[doc] || "-"}
                  </td>

                ))}

                <td>

                  {badge(row.status)}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}