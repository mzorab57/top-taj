import React from "react";

const AddShipModal = ({
  modalData,
  handleInputChange,
  handleSubmit,
  setIsModalOpen
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-xl font-bold mb-4">Add New Ship</h2>
        <div className="mb-4">
          {/* admin ID (Dropdown) */}
          <div>
            <label className="block text-sm font-medium mb-2">Ship Code</label>
            <input
              required
              type="text"
              name="ship_code"
              value={modalData.ship_code || ""}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Loading Area</label>
          <input
            required
            type="text"
            name="ship_londing_area"
            value={modalData.ship_londing_area || ""}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Destination</label>
          <input
            required
            type="text"
            name="ship_destination"
            value={modalData.ship_destination || ""}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Start Date & Time
          </label>
          <input
            required
            type="datetime-local"
            name="ship_start_date"
            value={modalData.ship_start_date || ""}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            End Date & Time
          </label>
          <input
            required
            type="datetime-local"
            name="ship_end_date"
            value={modalData.ship_end_date || ""}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="flex justify-end space-x-4">
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
            Add Ship
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddShipModal;
