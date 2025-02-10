import React from "react";

const UpdateShipModal = ({
  modalData,
  handleInputChange,
  handleUpdate,
  setIsModalOpen,
  modalEntity,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default behavior
          if (e.target.checkValidity()) {
            handleUpdate(modalEntity, modalData, "ship");
          } else {
            console.warn("Form validation failed");
          }
        }}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-xl font-bold mb-4">Add New Ship</h2>
        <div className="mb-4">
          {/* ship ID (Dropdown) */}
          <div className="mb-4">
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
            Update Ship
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateShipModal;
