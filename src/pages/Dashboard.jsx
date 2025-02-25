import React, { useReducer, useContext, createContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TableWithSearch from "../component/ui/TableWithSearch";
import ShipDetailsTable from "../component/shipDetailTable/ShipDetailsTable";
import ShipCheckPointForm from "../component/shipCheckPointForm/ShipCheckPointForm";
import AddAdminModal from "../component/Modal/admin/AddAdminModal";
import UpdateAdminModal from "../component/Modal/admin/UpdateAdminModal";
import AddShipModal from "../component/Modal/ship/AddShipModal";
import UpdateShipModal from "../component/Modal/ship/UpdateShipModal";
import AddItemModal from "../component/Modal/item/AddItemModal";
import UpdateItemModal from "../component/Modal/item/UpdateItemModal";
import UpdateShipCheckPointModal from "../component/Modal/ship/UpdateShipCheckPointModal";

const API_HOST = "https://toptaj.net/api/";

// State Management with useReducer
const initialState = {
  admin: [],
  ship: [],
  items: [],
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
    console.log(`fech entity ${entity} endpoint ${endpoint}`);

    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(`${API_HOST}${endpoint}`)
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

  //  updateStateEntity
  const updateStateEntity = async (endpoint, data) => {
    try {
      const response = await axios.post(`${API_HOST}${endpoint}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(`state updated successfully!`, response.data);
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
    updateStateEntity,
  };
  console.log(state);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const AdminDashboard = () => {
  // lera function kan zia akai bo global krdn
  const {
    state,
    fetchData,
    addEntity,
    deleteEntity,
    updateEntity,
    updateStateEntity,
  } = useAppContext();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({});
  const [shipDetailData, setShipDetailData] = React.useState({});
  const [modalEntity, setModalEntity] = React.useState("");
  const storedAdminData = localStorage.getItem("adminData");
  const adminData = JSON.parse(storedAdminData);

  useEffect(() => {
    fetchData("admin", "admin/read.php");
    fetchData("ship", "ship/read.php");
    fetchData("item", "item/read.php");
  }, []);

  // handel card
  const handleCardClick = (section, data) => {
    // katek click lasar card check point akai tanha dw click man haia chun button add+subbmit kai bayakawaya boia abe rastaw xo bi nery bo sar aw function awani tr ba 3 click submit akren boian pewistian ba if ina
    if (section === "ship_chek_point") {
      handleModalOpen(section);
    }
    // dyary krdni krdnaway kam section awanai xwarawa table kan
    setActiveSection(section);
    // tanha datay naw detal ship tiaya
    setShipDetailData(data);
  };

  // handel modal
  // 1. Modify handleModalOpen to handle editing katek click la sae update akai yan add akai lera datakan la modalData da anret ka dway ai nery bo add+update api.
  const handleModalOpen = (entity, data) => {
    setModalEntity(entity);
    console.log("entity");
    console.log(activeSection);

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
    } else if (entity === "ship") {
      setModalData({
        ship_code: "",
        ship_londing_area: "",
        ship_destination: "",
        ship_start_date: "",
        ship_end_date: "",
        admin_id: adminData.admin_id,
      });
    } else if (entity === "updateShip") {
      setModalData({
        ship_code: data.ship_code,
        ship_londing_area: data.ship_londing_area,
        ship_destination: data.ship_destination,
        ship_id: data.ship_id,
        admin_id: adminData.admin_id,
      });
    } else if (entity === "item") {
      setModalData({
        ship_id: "",
        item_mark: "",
        item_cartonsumber: "",
        item_cbm: "",
        item_name: "",
        item_wieghtumber: "",
        item_owner_name: "",
        item_owner_phone: "",
        item_date: "",
      });
    } else if (entity === "updateItem") {
      setModalData({
        ship_id: data.ship_id,
        item_mark: data.item_mark,
        item_cartons: data.item_cartons,
        item_cbm: data.item_cbm,
        item_name: data.item_name,
        item_wieght: data.item_wieght,
        item_owner_name: data.item_owner_name,
        item_owner_phone: data.item_owner_phone,
        item_id: data.item_id,
      });
    } else if (entity === "ship_chek_point") {
      console.log("ship_chek_point");
      setModalData({
        admin_id: adminData.admin_id,
        ship_id: "",
        ship_chek_point_land_point: "",
        ship_chek_point_note: "",
        ship_check_point_date: "",
      });
    } else if (entity === "updateship_chek_point") {
      console.log(" update ship_chek_point");
      setModalData({
        admin_id: adminData.admin_id,
        ship_id: data.ship_id,
        ship_chek_point_land_point: data.ship_chek_point_land_point,
        ship_chek_point_note: data.ship_chek_point_note,
        ship_chek_point_id: data.ship_chek_point_id,
      });
    }
    setIsModalOpen(true);
  };

  // 2. Modify the onClick of update button bo krdnaway modal aw table ka click la sar update krdwa
  const handleUpdateClick = (title, data) => {
    if (title === "admin") {
      handleModalOpen("updateAdmin", data);
    } else if (title === "item") {
      handleModalOpen("updateItem", data);
    } else if (title === "ship") {
      handleModalOpen("updateShip", data);
    } else if (title === "shipDetail") {
      handleModalOpen("updateship_chek_point", data);
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
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default behavior

    try {
      const endpoint = `${modalEntity}/create.php`;

      // Call addEntity to create a new record
      await addEntity(modalEntity, endpoint, modalData);

      // Close the modal
      setIsModalOpen(false);
      setModalData({}); // Reset modal data

      // Refresh the data for the active entity + ship_chek_point read nia bo ya aw marjam danawa
      {
        modalEntity === "ship_chek_point"
          ? fetchData("ship", `ship/read.php`)
          : fetchData(modalEntity, `${modalEntity}/read.php`);
      }
    } catch (error) {
      console.error(`Failed to add ${modalEntity}:`, error);
    }
  };

  // handel changen state
  const handelChangeState = async (data) => {
    try {
      const dataUpdate = {
        ship_id: data.ship_id,
        ship_state: data.ship_state,
      };
      const endpoint = `ship/change_ship_state.php`;
      await updateStateEntity(endpoint, dataUpdate);
      console.log("change state updated successfully!");

      // Refresh data
      fetchData(activeSection, `${activeSection}/read.php`);
    } catch (error) {
      console.error(`Failed to chanhe state ${activeSection}:`, error);
    }
  };

  // handl delete
  const handleDelete = async (item) => {
    try {
      if (activeSection === "shipDetail") {
        const entityEndpoint = `ship_chek_point/delete.php`; // Construct endpoint
        const idKey = `ship_chek_point_id`; // Determine the ID key dynamically
        await deleteEntity(
          "ship_chek_point",
          entityEndpoint,
          idKey,
          item[idKey]
        );
        console.log(`${"ship_chek_point"} deleted successfully!`);

        // Refresh data
        fetchData("item", `item/read.php`);
        fetchData("ship", `ship/read.php`);
      } else {
        const entityEndpoint = `${activeSection}/delete.php`; // Construct endpoint
        const idKey = `${activeSection}_id`; // Determine the ID key dynamically
        await deleteEntity(activeSection, entityEndpoint, idKey, item[idKey]);
        console.log(`${activeSection} deleted successfully!`);

        // Refresh data
        fetchData(activeSection, `${activeSection}/read.php`);
      }
    } catch (error) {
      console.error(`Failed to delete ${activeSection}:`, error);
    }
  };

  // handel update
  const handleUpdate = async (modalEntity, data, entity) => {
    // modalEntity: bo awai bzanm kam modal update bkretawa kala handelClick diyari akam,
    // data: record datakaia,
    // entity: bo api kaia ka update la aw endpoint bka
    console.log(
      `modal entity: ${modalEntity} - modaldata: ${data} - point ${entity}`
    );
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
      } else if (modalEntity === "updateShip") {
        const dataUpdate = {
          ship_code: data.ship_code,
          ship_londing_area: data.ship_londing_area,
          ship_destination: data.ship_destination,
          ship_id: data.ship_id,
          admin_id: adminData.admin_id,
        };
        const endpoint = `${entity}/update.php`;
        await updateEntity(entity, endpoint, dataUpdate);
        console.log("ship updated successfully!");
      } else if (modalEntity === "updateItem") {
        console.log("data update");
        console.log(data);

        const dataUpdate = {
          ship_id: data.ship_id,
          item_mark: data.item_mark,
          item_cartons: data.item_cartons,
          item_cbm: data.item_cbm,
          item_name: data.item_name,
          item_wieght: data.item_wieght,
          item_owner_name: data.item_owner_name,
          item_owner_phone: data.item_owner_phone,
          item_id: data.item_id,
        };
        const endpoint = `${entity}/update.php`;
        await updateEntity(entity, endpoint, dataUpdate);
        console.log("item updated successfully!");
      } else if (modalEntity === "updateship_chek_point") {
        console.log(" update ship_chek_point");
        const dataUpdate = {
          admin_id: adminData.admin_id,
          ship_id: data.ship_id,
          ship_chek_point_land_point: data.ship_chek_point_land_point,
          ship_chek_point_note: data.ship_chek_point_note,
          ship_chek_point_id: data.ship_chek_point_id,
        };
        const endpoint = `${entity}/update.php`;
        await updateEntity(entity, endpoint, dataUpdate);
        console.log("ship chek point updated successfully!");
      }

      // Close the modal
      setIsModalOpen(false);
      // Refresh data after update
      fetchData(entity, `${entity}/read.php`);
    } catch (error) {
      console.error("Failed to update admin:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminData");
    navigate("/login");
  };

  const statuses = [
    { value: "Created", label: "Created" },
    { value: "Collected", label: "Collected" },
    { value: "Departed", label: "Departed" },
    { value: "In transit", label: "In transit" },
    { value: "Arrived at destination", label: "Arrived at destination" },
    { value: "Out for delivery", label: "Out for delivery" },
    { value: "Delivered", label: "Delivered" },
  ];

  //  pahsn dani dashbord
  return (
    <>
      <div
        className={`container mx-auto p-4 bg-gray-100 max-w-[1700px] min-h-screen pt-60 relative `}
      >
        <div className="w-full mb-6 flex justify-end">
          <button
            onClick={handleLogout}
            className="text-red-400   px-2  text-lg rounded   hover:bg-red-400 duration-300  hover:text-white "
          >
            Logout
          </button>
        </div>
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
          Admin Dashboard
        </h1>
        {state.loading ? (
          <p className="text-center text-lg text-gray-500">Loading...</p>
        ) : state.error ? (
          <p className="text-center text-lg text-red-500">
            Error: {state.error}
          </p>
        ) : (
          <div>
            <div
              className={`grid grid-cols-1 md:grid-cols-2  gap-6 mb-8 ${
                adminData.admin_role === "admin"
                  ? "lg:grid-cols-4"
                  : "lg:grid-cols-3"
              }`}
            >
              {adminData.admin_role === "admin" ? (
                <Card title="Admins" onClick={() => handleCardClick("admin")} />
              ) : (
                ""
              )}
              <Card title="Ships" onClick={() => handleCardClick("ship")} />
              <Card title="Items" onClick={() => handleCardClick("item")} />
              <Card
                title="Checkpoints"
                onClick={() => handleCardClick("ship_chek_point")}
              />
            </div>
            {activeSection && (
              <Section
                title={activeSection}
                // bo nardni datay aw acticv card ka to click le krdwa
                data={state[activeSection]}
                // la naw handel modal open setModalEntity ba karde wa modalEntity ba kar de bo krdnaway modala kan ka add u update tia akre
                onAddClick={() => handleModalOpen(activeSection)}
                onDelete={handleDelete}
                // bo away bzani kam modal bkaytawa am function
                handleUpdateClick={handleUpdateClick}
                onShipClick={handleCardClick}
                // bo change state la table ship
                onChangeState={handelChangeState}
                onAddChekPoint={handleSubmit}
                // tanha datay aw gashta lasary da anre ka click la sar akai
                shipDetailData={shipDetailData}
                // bas bo control dataya la naw value
                modalData={modalData}
                // bo handel input ba pey naem u chnage
                onChange={handleInputChange}
                // bo bashi ship chek point input bo hall pzhardni code gashtaka
                dataShip={state["ship"]}
                
              />
            )}
          </div>
        )}

        {/* modal for adding new admin */}
        {isModalOpen && modalEntity === "admin" && (
          <AddAdminModal
            modalData={modalData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        {/* Modal update admin */}
        {isModalOpen && modalEntity === "updateAdmin" && (
          <UpdateAdminModal
            modalData={modalData}
            handleInputChange={handleInputChange}
            handleUpdate={handleUpdate}
            setIsModalOpen={setIsModalOpen}
            modalEntity={modalEntity}
          />
        )}

        {/* modal for adding new ship */}
        {isModalOpen && modalEntity === "ship" && (
          <AddShipModal
            modalData={modalData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        {/* modal for adding update ship */}
        {isModalOpen && modalEntity === "updateShip" && (
          <UpdateShipModal
            modalData={modalData}
            handleInputChange={handleInputChange}
            handleUpdate={handleUpdate}
            setIsModalOpen={setIsModalOpen}
            modalEntity={modalEntity}
          />
        )}

        {/* Modal for adding new items */}
        {isModalOpen && modalEntity === "item" && (
          <AddItemModal
            modalData={modalData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            setIsModalOpen={setIsModalOpen}
            state={state}
          />
        )}
        {/* Modal for adding update items */}
        {isModalOpen && modalEntity === "updateItem" && (
          <UpdateItemModal
            modalData={modalData}
            handleInputChange={handleInputChange}
            handleUpdate={handleUpdate}
            setIsModalOpen={setIsModalOpen}
            modalEntity={modalEntity}
            state={state}
          />
        )}

        {/* Modal for adding update items */}
        {isModalOpen && modalEntity === "updateship_chek_point" && (
          <UpdateShipCheckPointModal
            modalData={modalData}
            handleInputChange={handleInputChange}
            handleUpdate={handleUpdate}
            setIsModalOpen={setIsModalOpen}
            modalEntity={modalEntity}
            statuses={statuses}
          />
        )}
      </div>
    </>
  );
};

// pashan dani table kan
const Section = ({
  title,
  data,
  onAddClick,
  onDelete,
  onShipClick,
  onChangeState,
  onAddChekPoint,
  modalData,
  shipDetailData,
  onChange,
  dataShip,
  handleUpdateClick,
}) => {
  // har katek array datan naw + click la sar card chek point nakrabw + click la sar detail hich kashtiak nakrabw aw text swtra pshan dre
  if (!Array.isArray(data) && title !== "ship_chek_point" && !shipDetailData) {
    return (
      <div className="text-red-500">
        <p>{title}: Data is not an array!</p>
      </div>
    );
  }

  // Define excluded fields dynamically for the table headers and data bo header table kan ka ch column pshan bdre
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
          "ship_id",
          "ship_londing_area",
          "ship_destination",
          "ship_start_date",
          "ship_end_date",
          "item_owner_name",
          "item_owner_phone",
          "item_wieght",
          "ship_chek_point",
          // "item_cartons",
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

      {/* Add ship chek point */}
      {title === "ship_chek_point" ? (
        <ShipCheckPointForm
          title={title}
          modalData={modalData}
          dataShip={dataShip}
          onChange={onChange}
          onAddChekPoint={onAddChekPoint}
        />
      ) : (
        <>
          {title !== "shipDetail" ? (
            <TableWithSearch
              title={title}
              data={data}
              excludedFields={excludedFields}
              onShipClick={onShipClick}
              handleUpdateClick={handleUpdateClick}
              onDelete={onDelete}
              onChangeState={onChangeState}
              onAddClick={onAddClick}
             
            />
          ) : (
            
            <ShipDetailsTable
              shipDetailData={shipDetailData}
              handleUpdateClick={handleUpdateClick}
              onDelete={onDelete}
              title={title}
           
              
            />
          )}
        </>
      )}
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
