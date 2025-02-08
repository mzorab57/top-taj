import React from 'react';

const ShipCheckPointForm = ({ title, modalData, dataShip, onChange, onAddChekPoint }) => {
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
              <option value="" disabled>Select a status</option>
              <option value="Created">Created</option>
              <option value="Collected">Collected</option>
              <option value="Departed">Departed</option>
              <option value="In transit">In transit</option>
              <option value="Arrived at destination">Arrived at destination</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </FormGroup>

          {/* Date Input */}
          <FormGroup label="Date">
            <input
              required
              type="date"
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
