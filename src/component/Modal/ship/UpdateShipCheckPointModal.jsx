import React from "react";

const UpdateShipCheckPointModal = ({
  modalData,
  handleInputChange,
  handleUpdate,
  setIsModalOpen,
  modalEntity,
  statuses
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default behavior
          if (e.target.checkValidity()) {
            handleUpdate(modalEntity, modalData, "ship_chek_point");
          } else {
            console.warn("Form validation failed");
          }
        }}
        className="bg-white p-6 rounded-lg shadow-lg w-[1000px] mx-3"
      >
        <h2 className="text-xl font-bold mb-4">Add New Item</h2>
        <div className="grid gap-4">
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium mb-2">
              Landing Point
            </label>
            <input
              required
              type="text"
              name="ship_chek_point_land_point"
              value={modalData.ship_chek_point_land_point || ""}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 bg-slate-50"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium mb-2">Note</label>
            <select
              required
              name="ship_chek_point_note"
              value={modalData.ship_chek_point_note || ""}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 bg-slate-50"
            >
              <option value="" disabled>
                Select a status
              </option>
              {statuses.map((status) => {
                const isUsed =
                  modalData &&
                  modalData.ship_chek_point &&
                  modalData.ship_chek_point.some((note) => {
                    if (typeof note === "object" && note !== null) {
                      // Assume the status string is stored in note.ship_chek_point_note
                      return (
                        note.ship_chek_point_note &&
                        String(note.ship_chek_point_note).includes(status.value)
                      );
                    }
                    // If note is a primitive (e.g., string)
                    return String(note).includes(status.value);
                  });
                return (
                  <option
                    key={status.value}
                    value={status.value}
                    disabled={isUsed}
                    style={{ color: isUsed ? "green" : "black" }}
                  >
                    {isUsed ? "✓ " : ""}
                    {status.label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            type="button"
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update Chek Point
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateShipCheckPointModal;
