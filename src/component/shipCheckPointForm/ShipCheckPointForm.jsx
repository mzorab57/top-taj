import React from "react";

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
  usedStatuses = [], // Array of statuses already used for the selected ship
  onChange,
  onAddChekPoint,
}) => {
  // When a ship code is selected, the parent component should update the usedStatuses accordingly.
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
              onChange={onChange}
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
                const isUsed = usedStatuses.includes(status.value);
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
