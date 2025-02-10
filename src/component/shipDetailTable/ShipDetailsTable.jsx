import React from "react";

const ShipDetailsTable = ({ shipDetailData, handleUpdateClick, onDelete, title }) => {

  // fetchData("ship", "ship/read.php");
  return (
    <div className="overflow-x-auto">
      {/* Ship Check Points Table */}
      <h1 className="font-inter text-3xl">Ship Land Point</h1>
      <table className="w-full text-left border-collapse my-7">
        <thead>
          <tr className="bg-gray-200">
            <th className="border-b px-4 py-2 text-sm text-gray-600 text-center">Ship Code</th>
            <th className="border-b px-4 py-2 text-sm text-gray-600 text-center">Ship Check Point Land Point</th>
            <th className="border-b px-4 py-2 text-sm text-gray-600 text-center">Check Point Date</th>
            <th className="border-b px-4 py-2 text-sm text-gray-600 text-center">Check Point Note</th>
            <th className="border-b px-4 py-2 text-sm text-gray-600 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {shipDetailData.ship_chek_point?.map((item, index) => (
            <tr key={index} className="border-b text-black hover:bg-gray-100 ">
              <td className="px-4 py-2 text-center">{item.ship_code}</td>
              <td className="px-4 py-2 text-center">{item.ship_chek_point_land_point}</td>
              <td className="px-4 py-2 text-center">{item.ship_check_point_date}</td>
              <td className="px-4 py-2 text-center">{item.ship_chek_point_note}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleUpdateClick(title,item)}
                  className="text-blue-500 hover:underline border-blue-400 border rounded px-1"
                >
                  Update
                </button>
                <button
                  onClick={() => onDelete(item)}
                  className="text-red-500 hover:underline ml-2 my-2 border-red-400 border rounded px-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Ship Items Table */}
      <h1 className="font-inter text-3xl my-3 whitespace-nowrap">Ship Item</h1>
      <table className="w-full text-left border-collapse mb-3">
        <thead>
          <tr className="border-b bg-gray-200">
            <th className="px-4 py-2 text-sm text-gray-600 text-center whitespace-nowrap">Shipping Mark</th>
            <th className="px-4 py-2 text-sm text-gray-600 text-center">Cartons</th>
            <th className="px-4 py-2 text-sm text-gray-600 text-center whitespace-nowrap">CBM</th>
            <th className="px-4 py-2 text-sm text-gray-600 text-center whitespace-nowrap">Item Name</th>
            <th className="px-4 py-2 text-sm text-gray-600 text-center whitespace-nowrap">Weight</th>
            <th className="px-4 py-2 text-sm text-gray-600 text-center whitespace-nowrap">Customer Name</th>
            <th className="px-4 py-2 text-sm text-gray-600 text-center whitespace-nowrap">Customer Contact Number</th>
            <th className="px-4 py-2 text-sm text-gray-600 text-center whitespace-nowrap">Date</th>
          </tr>
        </thead>
        <tbody>
          {shipDetailData.ship_item?.map((item, index) => (
            <tr key={index} className="border-b text-black hover:bg-gray-100 ">
              <td className="px-4 py-2 text-center">{item.item_mark}</td>
              <td className="px-4 py-2 text-center">{item.item_cartons}</td>
              <td className="px-4 py-2 text-center relative">{item.item_cbm}</td>
              <td className="px-4 py-2 text-center">{item.item_name}</td>
              <td className="px-4 py-2 text-center">{item.item_wieght} kg</td>
              <td className="px-4 py-2 text-center">{item.item_owner_name}</td>
              <td className="px-4 py-2 text-center">{item.item_owner_phone}</td>
              <td className="px-4 py-2 text-center">{item.item_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipDetailsTable;
