import React, { useState } from "react";

const statuses = [
  { value: "Created", label: "Created" },
  { value: "Collected", label: "Collected" },
  { value: "Departed", label: "Departed" },
  { value: "In transit", label: "In transit" },
  { value: "Arrived at destination", label: "Arrived at destination" },
  { value: "Out for delivery", label: "Out for delivery" },
  { value: "Delivered", label: "Delivered" },
];

const ShipCheckPointForm = ({
  title,
  modalData,
  dataShip,
  onChange,
  onAddChekPoint,
}) => {
  // Store the selected ship as an object rather than an array.
  const [selectedShip, setSelectedShip] = useState(null);

  // Handler for when a ship code is selected.
  // It updates the form data and then retrieves the full data for the selected ship.
  const handleShipCodeChange = (e) => {
    onChange(e); // Update modalData in the parent component
    const selectedShipId = e.target.value;
    // Find the selected ship in the dataShip array
    const ship = dataShip.find(
      (ship) => String(ship.ship_id) === selectedShipId
    );
    console.log("Selected ship data:", ship);
    setSelectedShip(ship);
  };

  return (
    <>
      {title === "ship_chek_point" && (
        <form
          onSubmit={onAddChekPoint}
          className="lg:flex-row flex flex-col justify-center items-center w-full gap-5 p-5"
        >
          {/* Ship Code Selection */}
          <FormGroup label="Ship Code">
            <select
              required
              name="ship_id"
              value={modalData.ship_id || ""}
              onChange={handleShipCodeChange}
              className="w-full border rounded px-3 py-2 bg-slate-50"
            >
              <option value="">Select Ship</option>
              {dataShip &&
                dataShip.map((ship) => (
                  <option key={ship.ship_id} value={ship.ship_id}>
                    {ship.ship_code}
                  </option>
                ))}
            </select>
          </FormGroup>

          {/* Landing Point Input */}
          <FormGroup label="Landing Point">
            <input
              required
              type="text"
              name="ship_chek_point_land_point"
              value={modalData.ship_chek_point_land_point || ""}
              onChange={onChange}
              className="w-full border rounded px-3 py-2 bg-slate-50"
            />
          </FormGroup>

          {/* Ship Status Selection */}
          <FormGroup label="Ship Status">
            <select
              required
              name="ship_chek_point_note"
              value={modalData.ship_chek_point_note || ""}
              onChange={onChange}
              className="w-full border rounded px-3 py-2 bg-slate-50"
            >
              <option value="" disabled>
                Select a status
              </option>
              {statuses.map((status) => {
                const isUsed =
                  selectedShip &&
                  selectedShip.ship_chek_point &&
                  selectedShip.ship_chek_point.some((note) => {
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
          </FormGroup>

          {/* Date & Time Input */}
          <FormGroup label="Date & Time">
            <input
              required
              type="datetime-local"
              name="ship_check_point_date"
              value={modalData.ship_check_point_date || ""}
              onChange={onChange}
              className="w-full border rounded px-3 py-2 bg-slate-50"
            />
          </FormGroup>

          {/* Submit Button */}
          <div className="place-self-center w-full mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 w-full lg:w-fit rounded hover:bg-blue-600"
            >
              Add Landing Point
            </button>
          </div>
        </form>
      )}
    </>
  );
};

const FormGroup = ({ label, children }) => (
  <div className="mb-4 w-full">
    <label className="block text-sm font-medium mb-2">{label}</label>
    {children}
  </div>
);

export default ShipCheckPointForm;
