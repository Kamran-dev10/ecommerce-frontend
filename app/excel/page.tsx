"use client";

import { useState } from "react";
import * as XLSX from "xlsx";

export default function ExcelReader() {
  const [data, setData] = useState<any[]>([]);

  const handleFile = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryStr = event.target?.result;

      const workbook = XLSX.read(
        binaryStr,
        {
          type: "binary",
        }
      );

      const sheetName =
        workbook.SheetNames[0];

      const sheet =
        workbook.Sheets[sheetName];

      const jsonData =
        XLSX.utils.sheet_to_json(sheet);

      setData(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div className="p-8">

      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFile}
        className="mb-6"
      />

      {data.length > 0 && (
        <div className="overflow-x-auto">

          <table className="w-full border">

            {/* Header */}
            <thead>
              <tr>
                {Object.keys(data[0]).map(
                  (key) => (
                    <th
                      key={key}
                      className="
                        border
                        p-3
                        bg-gray-200
                      "
                    >
                      {key}
                    </th>
                  )
                )}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className="
                    hover:bg-gray-100
                  "
                >
                  {Object.values(row).map(
                    (
                      value: any,
                      i
                    ) => (
                      <td
                        key={i}
                        className="
                          border
                          p-3
                        "
                      >
                        {String(value)}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}