import React, { useState } from "react";

const TableWithSearch = ({ title, data, excludedFields, onShipClick, handleUpdateClick, onDelete, onChangeState, onAddClick }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter data based on the search query
  const filteredData = data.filter((item) =>
    Object.entries(item)
      .filter(([key]) => !excludedFields.includes(key)) // Exclude unwanted fields
      .some(([key, value]) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <>
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder={`Search by ${title === "ship" ? "Ship Code" : "Item Mark"}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <button
        onClick={onAddClick}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
      >
        Add New {title}
      </button>

      <div className="overflow-auto ">
        <table className="table-auto w-full text-left border-collapse cursor-pointer  mb-5">
          <thead>
            <tr className="bg-gray-200">
              {data.length > 0 &&
                Object.keys(data[0])
                  .filter((key) => !excludedFields.includes(key))
                  .map((key) => (
                    <th key={key} className="border-b px-4 py-2 text-sm text-gray-600">
                      {key}
                    </th>
                  ))}
              {data.length > 0 && (
                <th className="border-b px-4 py-2 text-sm text-gray-600 text-center">
                  Actions
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                {Object.entries(item)
                  .filter(([key]) => !excludedFields.includes(key))
                  .map(([key, value], i) => (
                    <td
                      onClick={() =>
                        title === "ship"
                          ? onShipClick("shipDetail", item)
                          : ""
                      }
                      key={i}
                      className="border-b px-4 py-2 text-sm text-gray-800"
                    >
                      {value}
                    </td>
                  ))}
                <td className="border-b px-4 py-2 text-center">
                  <button
                    onClick={() => handleUpdateClick(title, item)}
                    className="text-blue-500 hover:underline border-blue-400 border rounded px-1"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => onDelete(item)}
                    className="text-red-500 my-3 hover:underline ml-2 border-red-400 border rounded px-1"
                  >
                    Delete
                  </button>
                  {title === "ship" ? (
                    <button
                      onClick={() => onChangeState(item)}
                      className="text-green-500 hover:underline ml-2 border-green-400 border rounded px-1"
                    >
                      State
                    </button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableWithSearch;
