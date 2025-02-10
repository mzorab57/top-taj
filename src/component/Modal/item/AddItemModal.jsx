import React from "react";

const AddItemModal = ({
  modalData,
  handleInputChange,
  handleSubmit,
  setIsModalOpen,
  state,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white p-6 rounded-lg shadow-lg w-[1000px] mx-3"
      >
        <h2 className="text-xl font-bold mb-4">Add New Item</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Ship ID (Dropdown) */}
          <div>
            <label className="block text-sm font-medium mb-2">Ship Code</label>
            <select
              required
              name="ship_id"
              value={modalData.ship_id || ""}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select Ship</option>
              {state.ship &&
                state.ship.map((ship) => (
                  <option key={ship.ship_id} value={ship.ship_id}>
                    {ship.ship_code}
                  </option>
                ))}
            </select>
          </div>
          {/* Item Mark */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Sipping Mark
            </label>
            <input
              required
              type="text"
              name="item_mark"
              value={modalData.item_mark || ""}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          {/* Cartons Number */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Cartons Number
            </label>
            <input
              required
              type="number"
              name="item_cartons"
              value={modalData.item_cartons || ""}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          {/* CBM */}
          <div>
            <label className="block text-sm font-medium mb-2">CBM</label>
            <input
              required
              type="text"
              name="item_cbm"
              value={modalData.item_cbm || ""}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          {/* Item Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Item Name</label>
            <input
              required
              type="text"
              name="item_name"
              value={modalData.item_name || ""}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          {/* Weight */}
          <div>
            <label className="block text-sm font-medium mb-2">Weight</label>
            <input
              required
              type="number"
              name="item_wieght"
              value={modalData.item_wieght || ""}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          {/* Owner Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Owner Name</label>
            <input
              required
              type="text"
              name="item_owner_name"
              value={modalData.item_owner_name || ""}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          {/* Owner Phone */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Owner Phone
            </label>
            <input
              required
              type="number"
              name="item_owner_phone"
              value={modalData.item_owner_phone || ""}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Date & Time
            </label>
            <input
              required
              type="datetime-local"
              name="item_date"
              value={modalData.item_date || ""}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItemModal;
