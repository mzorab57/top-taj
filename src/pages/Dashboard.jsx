import React, { useReducer, useContext, createContext } from "react";
import axios from "axios";

const API_HOST = "https://azure-echidna-419544.hostingersite.com/api/";

// State Management with useReducer
const initialState = {
  admins: [],
  ships: [],
  items: [],
  checkpoints: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        [action.payload.entity]: action.payload.data,
        loading: false,
      };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
};

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (entity, endpoint) => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(`${API_HOST}${endpoint}`);
      const data = response.data.data || [];
      dispatch({ type: "FETCH_SUCCESS", payload: { entity, data } });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  // delete entity bo naw api pashan binera bo naw useAppContext la AdminDashBorad
  const deleteEntity = async (entity, endpoint, idKey, idValue) => {
    try {
      const response = await axios.post(`${API_HOST}${endpoint}`, {
        [idKey]: idValue,
      });
      return response; // Return response for further handling
    } catch (error) {
      console.error("Error deleting entity:", error);
      throw error; // Throw error for upstream handling
    }
  };

  //   add entity bo naw api pashan binera bo naw useAppContext la AdminDashBorad
  const addEntity = async (entity, endpoint, data) => {
    console.log(endpoint + " addEntiti");

    try {
      const response = await axios.post(`${API_HOST}${endpoint}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response; // Return the response for further use
    } catch (error) {
      console.error("Error adding entity:", error);
      throw error; // Throw the error for upstream handling
    }
  };

  //  update
  const updateEntity = async (entity, endpoint, data) => {
    try {
      const response = await axios.post(`${API_HOST}${endpoint}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(`${entity} updated successfully!`, response.data);
      return response; // Return response for further handling
    } catch (error) {
      console.error("Error updating entity:", error);
      throw error; // Propagate error for upstream handling
    }
  };

  const value = {
    state,
    dispatch,
    fetchData,
    addEntity,
    deleteEntity,
    updateEntity,
  };
  console.log(state);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const AdminDashboard = () => {
  // lera function kan zia akai bo global krdn
  const { state, fetchData, addEntity, deleteEntity, updateEntity } =
    useAppContext();
  const [activeSection, setActiveSection] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({});
  const [modalEntity, setModalEntity] = React.useState("");

  React.useEffect(() => {
    fetchData("admin", "admin/read.php");
    fetchData("ship", "ship/read.php");
    fetchData("item", "item/read.php");
    fetchData("checkpoint", "ship_chek_point/read.php");
  }, []);

  // handel card
  const handleCardClick = (section) => {
    setActiveSection(section);
  };

  // handel modal
  // 1. Modify handleModalOpen to handle editing an admin.
const handleModalOpen = (entity, data) => {
  setModalEntity(entity);

  if (entity === "admin") {
    setModalData({
      admin_name: "",
      admin_password: "",
      admin_phone: "",
      admin_role: "user",
    });
  } else if (entity === "updateAdmin") {
    setModalData({
      admin_name: data.admin_name,
      admin_password: data.admin_password,
      admin_phone: data.admin_phone,
      admin_role: data.admin_role,
      admin_id: data.admin_id, // Pass the ID of the admin for the update
    });
  }
  else if (entity === "ship") {
    setModalData({
      ship_code: "",
      ship_londing_area: "",
      ship_destination: "",
      admin_id: 1
    });
  }
  else if (entity === "updateShip") {
    setModalData({
      ship_code: data.ship_code,
      ship_londing_area: data.ship_londing_area,
      ship_destination: data.ship_destination,
      ship_id: data.ship_id,
      admin_id: 1
    });
  }
   else if (entity === "item") {
    setModalData({
      ship_id: "",
      item_mark: "",
      item_cartonsumber: "",
      item_cbm: "",
      item_name: "",
      item_wieghtumber: "",
      item_owner_name: "",
      item_owner_phone: "",
    });
  }
  setIsModalOpen(true);
};

// 2. Modify the onClick of update button in the admin section to open the modal with data.
const handleUpdateClick = (title, data) => {
  if (title === "admin") {
    handleModalOpen("updateAdmin", data)
  } 
  else if(title === "ship"){
    handleModalOpen("updateShip", data)
  }
  else if(title === "item"){
    handleModalOpen("updateItem", data)
  }
};

  //  hendel input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handel Submit
  const handleSubmit = async () => {
    try {
      const endpoint = `${modalEntity}/create.php`;
  
      // Call addEntity to create a new record
      const res = await addEntity(modalEntity, endpoint, modalData);
  
      console.log(`${modalEntity} added successfully:`, res.data);
  
      // Close the modal
      setIsModalOpen(false);
      setModalData({}); // Reset modal data
  
      // Refresh the data for the active entity
      fetchData(modalEntity, `${modalEntity}/read.php`);
    } catch (error) {
      console.error(`Failed to add ${modalEntity}:`, error);
    }
  };
  
  

  // handl delete
  const handleDelete = async (item) => {
    try {
      const entityEndpoint = `${activeSection}/delete.php`; // Construct endpoint
      const idKey = `${activeSection}_id`; // Determine the ID key dynamically
      await deleteEntity(activeSection, entityEndpoint, idKey, item[idKey]);
      console.log(`${activeSection} deleted successfully!`);

      // Refresh data
      fetchData(activeSection, `${activeSection}/read.php`);
    } catch (error) {
      console.error(`Failed to delete ${activeSection}:`, error);
    }
  };

  // handel update
  const handleUpdate = async (modalEntity, data, entity) => {
    // modalEntity: bo awai bzanm kam modal update bkretawa kala handelClick diyari akam, 
    // data: record datakaia, 
    // entity: bo api kaia ka update la aw endpoint bka
    console.log(`modal entity: ${modalEntity} - modaldata: ${data} - point ${entity}`);
    console.log(data);
    
    
    try {
      if (modalEntity === "updateAdmin") {
        const dataUpdate = {
          admin_name: data.admin_name,
          admin_password: data.admin_password,
          admin_phone: data.admin_phone,
          admin_role: data.admin_role,
          admin_id: data.admin_id,
        };
        const endpoint = `${entity}/update.php`;
      await updateEntity(entity, endpoint, dataUpdate);
      console.log("Admin updated successfully!");
      
      }
      else if (modalEntity === "updateShip") {
        const dataUpdate = {
          ship_code: data.ship_code,
          ship_londing_area: data.ship_londing_area,
          ship_destination: data.ship_destination,
          ship_id: data.ship_id,
          admin_id: 1,
        };
        const endpoint = `${entity}/update.php`;
      await updateEntity(entity, endpoint, dataUpdate);
      console.log("Admin updated successfully!");
      }
     

          // Close the modal
     setIsModalOpen(false);
      // Refresh data after update
      fetchData(entity, `${entity}/read.php`);
        
      
    } catch (error) {
      console.error("Failed to update admin:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
        Admin Dashboard
      </h1>
      {state.loading ? (
        <p className="text-center text-lg text-gray-500">Loading...</p>
      ) : state.error ? (
        <p className="text-center text-lg text-red-500">Error: {state.error}</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card title="Admins" onClick={() => handleCardClick("admin")} />
            <Card title="Ships" onClick={() => handleCardClick("ship")} />
            <Card title="Items" onClick={() => handleCardClick("item")} />
            <Card
              title="Checkpoints"
              onClick={() => handleCardClick("checkpoints")}
            />
          </div>
          {activeSection && (
            <Section
              title={activeSection}
              data={state[activeSection]}
              onAddClick={() => handleModalOpen(activeSection)}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              handleUpdateClick={handleUpdateClick}
            />
          )}
        </div>
      )}

      {/* Modal for adding new admin */}
      {isModalOpen && modalEntity === "admin" && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Admin</h2>
            {/* Input for admin_name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Admin Name
              </label>
              <input
                type="text"
                name="admin_name"
                value={modalData.admin_name || ""}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            {/* Input for admin_password */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Admin Password
              </label>
              <input
                type="password"
                name="admin_password"
                value={modalData.admin_password || ""}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            {/* Input for admin_phone */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Admin Phone
              </label>
              <input
                type="text"
                name="admin_phone"
                value={modalData.admin_phone || ""}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            {/* Select for admin_role */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Admin Role
              </label>
              <select
                name="admin_role"
                value={modalData.admin_role || "user"}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Add Admin
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Modal update admin */}
      {isModalOpen && modalEntity === "updateAdmin" && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-bold mb-4">Update Admin</h2>
      {/* Input for admin_name */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Admin Name</label>
        <input
          type="text"
          name="admin_name"
          value={modalData.admin_name || ""}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      {/* Input for admin_password */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Admin Password</label>
        <input
          type="password"
          name="admin_password"
          value={modalData.admin_password || ""}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      {/* Input for admin_phone */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Admin Phone</label>
        <input
          type="text"
          name="admin_phone"
          value={modalData.admin_phone || ""}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      {/* Select for admin_role */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Admin Role</label>
        <select
          name="admin_role"
          value={modalData.admin_role || ""}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={()=> handleUpdate(modalEntity,modalData, "admin")} // Use the same submit function to either add or update
        >
          Update Admin
        </button>
      </div>
    </div>
  </div>
      )}

      {/* modal for adding new ship */}
      {isModalOpen && modalEntity === "ship" && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Ship</h2>
            <div className="mb-4">
              {/* admin ID (Dropdown) */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Ship Code
                </label>
                <input
                  type="text"
                  name="ship_code"
                  value={modalData.ship_code || ""}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Loading Area
              </label>
              <input
                type="text"
                name="ship_londing_area"
                value={modalData.ship_londing_area || ""}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Destination
              </label>
              <input
                type="text"
                name="ship_destination"
                value={modalData.ship_destination || ""}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            {/* <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Admin Name</label>
              <select
                name="admin_id"
                value={modalData.admin_id || ""}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select Admin</option>
                {state.admin &&
                  state.admin.map((admin) => (
                    <option key={admin.admin_id} value={admin.admin_id}>
                      {admin.admin_name}
                    </option>
                  ))}
              </select>
            </div> */}
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Add Ship
              </button>
            </div>
          </div>
        </div>
      )}
      {/* modal for adding new ship */}
      {isModalOpen && modalEntity === "updateShip" && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Ship</h2>
            <div className="mb-4">
              {/* admin ID (Dropdown) */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Ship Code
                </label>
                <input
                  type="text"
                  name="ship_code"
                  value={modalData.ship_code || ""}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Loading Area
              </label>
              <input
                type="text"
                name="ship_londing_area"
                value={modalData.ship_londing_area || ""}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Destination
              </label>
              <input
                type="text"
                name="ship_destination"
                value={modalData.ship_destination || ""}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            {/* <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Ship Code</label>
              <select
                name="ship_id"
                value={modalData.ship_id || ""}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select ship</option>
                {state.ship &&
                  state.ship.map((ship) => (
                    <option key={ship.ship_id} value={ship.ship_id}>
                      {ship.ship_code}
                    </option>
                  ))}
              </select>
            </div> */}
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={()=> handleUpdate(modalEntity, modalData, "ship")}
              >
                Update Ship
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal for adding new items */}
      {isModalOpen && modalEntity === "item" && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[1000px] mx-3">
            <h2 className="text-xl font-bold mb-4">Add New Item</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Ship ID (Dropdown) */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Ship Code
                </label>
                <select
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
                  Item Mark
                </label>
                <input
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
                  type="text"
                  name="item_cbm"
                  value={modalData.item_cbm || ""}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              {/* Item Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Item Name
                </label>
                <input
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
                  type="number"
                  name="item_wieght"
                  value={modalData.item_wieght || ""}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              {/* Owner Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Owner Name
                </label>
                <input
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
                  type="text"
                  name="item_owner_phone"
                  value={modalData.item_owner_phone || ""}
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
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

// pashan dani table kan
const Section = ({ title, data, onAddClick, onDelete, handleUpdateClick }) => {
  if (!Array.isArray(data)) {
    return (
      <div className="text-red-500">
        <p>{title}: Data is not an array!</p>
      </div>
    );
  }

  // Define excluded fields dynamically for the table headers and data
  const excludedFields = (() => {
    switch (title) {
      case "admin":
        return ["admin_id", "admin_state"];
      case "ship":
        return [
          "admin_id",
          "admin_name",
          "admin_phone",
          "ship_item",
          "ship_chek_point",
          "ship_id",
        ];
      case "item":
        return [
          "item_id",
          "item_owner_name",
          "item_owner_phone",
          "item_wieght",
          "ship_id",
          "item_cartons",
          "item_name",
          "item_state",
        ];
      default:
        return [];
    }
  })();

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">
        {title}
      </h2>
      {/* Button to open the modal */}
      <button
        onClick={onAddClick}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
      >
        Add New {title}
      </button>
      <div className="overflow-auto">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              {data.length > 0 &&
                Object.keys(data[0])
                  .filter((key) => !excludedFields.includes(key))
                  .map((key) => (
                    <th
                      key={key}
                      className="border-b px-4 py-2 text-sm text-gray-600"
                    >
                      {key}
                    </th>
                  ))}
              <th className="border-b px-4 py-2 text-sm text-gray-600 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                {Object.entries(item)
                  .filter(([key]) => !excludedFields.includes(key)) // Exclude unwanted fields
                  .map(([key, value], i) => (
                    <td
                      key={i}
                      className="border-b px-4 py-2 text-sm text-gray-800"
                    >
                      {value}
                    </td>
                  ))}
                <td className="border-b px-4 py-2 text-center">
                  <button
                    onClick={() => handleUpdateClick(title, item)} // Pass the item for update
                    className="text-blue-500 hover:underline"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => onDelete(item)}
                    className="text-red-500 hover:underline ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// card knani sarawa
const Card = ({ title, onClick }) => (
  <div
    className="bg-white shadow-lg rounded-lg p-6 text-center cursor-pointer hover:shadow-xl"
    onClick={onClick}
  >
    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
  </div>
);

const Dashboard = () => (
  <AppProvider>
    <AdminDashboard />
  </AppProvider>
);

export default Dashboard;
