import React, { useReducer, useContext, createContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CgArrowRight } from "react-icons/cg";

// API host URL
const API_HOST = "https://toptaj.net/api/";

// Initial state for the reducer
const initialState = {
  item: null,
  loading: false,
  error: null,
};

// Reducer to manage state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, item: action.payload, loading: false, error: null };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
};

// Create a context for state management
const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

// Context provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (id) => {
    dispatch({ type: "LOADING" });
    try {
      const url = `${API_HOST}item/read.php?item_mark=${id}`;
     
  
      const response = await axios.get(url);
     
  
      const data = response.data.data || [];
      
      // Filter items by item_mark
      const filteredData = data.filter((item) => item.item_mark === id);
  
      if (filteredData.length === 0) {
       
        dispatch({ type: "FETCH_SUCCESS", payload: [] });
      } else {
        
        dispatch({ type: "FETCH_SUCCESS", payload: filteredData[0] });
      }
    } catch (error) {
      console.error("Fetch error:", error.response?.data || error.message);
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };
  
  

  const value = { state, fetchData };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// ShipmentTracker Component
const ShipmentTracker = () => {
  const { id } = useParams(); // Get `id` from the URL
  const { state, fetchData } = useAppContext();

 

  // Fetch shipment data on mount
  useEffect(() => {
    fetchData(id); // Fetch shipment data by ID
  }, [id]);

  // Loading and error states
  if (state.loading) return <div className="h-screen w-full flex justify-center items-center m-auto font-Bedug text-2xl">Loading...</div>;
  if (state.error) return <div>Error: {state.error}</div>;
  if (!state.item || state.item.item_state !== "active") return <div className="h-screen w-full flex justify-center items-center m-auto font-Bedug text-2xl">No shipment data found for ID: {id}</div>;

  const statusMap = {
    Created: "Created",
    Collected: "Collected",
    Departed: "Departed",
    "In transit": "In transit",
    "Arrived at destination": "Arrived at destination",
    "Out for delivery": "Out for delivery",
     Delivered: "Delivered",
  };

  const steps = [
    { label: "Created", completed: false },
    { label: "Collected", completed: false },
    { label: "Departed", completed: false },
    { label: "In transit", completed: false },
    { label: "Arrived at destination", completed: false },
    { label: "Out for delivery", completed: false },
    { label: "Delivered", completed: false },
  ];
  // state.item.ship_chek_point_land_point

  // Update steps based on the shipment data
  if (state.item && state.item.ship_chek_point) {
    state.item.ship_chek_point.forEach((checkPoint) => {
      const stepLabel = statusMap[checkPoint.ship_chek_point_note];
  
      if (stepLabel) {
        const stepIndex = steps.findIndex((step) => step.label === stepLabel);
        if (stepIndex !== -1) {
          steps[stepIndex].completed = true;
          steps[stepIndex].landPoint = checkPoint.ship_chek_point_land_point; // Add land point to the step
          steps[stepIndex].landPointDate = checkPoint.ship_check_point_date; // Add date point to the step
        }
      }
    });
  } else {
    console.log("ship or ship_chek_point is undefined");
  }
  

  return (
    <div className="max-w-md mx-auto  font-jost bg-white  rounded-lg shadow-md overflow-hidden h-screen mt-32 px-9 flex justify-center items-center ">
      <div className="mx-4">
       

        {/* text */}
        <div className="mb-4 ">
          <h2 className="text-lg px-3 font-Bedug">Latest Update</h2>
          <p className="text-lg px-3 font-Bedug text-gray-500">
            The shipment is currently in: <span className={`${state.item.ship_state === 'created'? 'text-yellow-500 tracking-wider': 'text-green-500 tracking-wider'} `}>{state.item.ship_state || "Unknown"}</span>
          </p>
          <p className="text-sm text-gray-400 px-3">{state.item.ship_end_date}</p>
        </div>

        {/* pointakan */}
        <div className="flex items-start  ">
          <div className="flex flex-col items-center ">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center ">
                <div
                  className={`w-6 h-6  flex items-center justify-center rounded-full z-[1] ${
                    step.completed ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  {step.completed && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <div
                  className={`w-1 -ml-3.5  ${
                    step.completed ? "bg-green-500" : "bg-gray-300"
                  } ${index < steps.length ? "h-[80px]" : "h-0"}`}
                />
              </div>
            ))}
          </div>
          <div className="ml-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`text-sm flex items-center py-[30px] font-medium ${
                  step.completed ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {step.label} <CgArrowRight size={17} className="mx-1" />
                {step.landPoint && (<div className="relative">
                  <span className="block text-sm text-blue-500/50">
                    ({step.landPoint})
                  </span>
                  <span className="absolute w-20 text-sm text-gray-500/50">
                    {step.landPointDate}
                  </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* text swr */}
          <div className="flex flex-col gap-y-[27rem] ml-10  mt-6 text-sm text-gray-500">
            <div>
              <p className="font-medium">Origin</p>
              <p className="font-medium text-red-500">
                {state.item.ship_londing_area}
              </p>
            </div>
            <div>
              <p className="font-medium">Destination</p>
              <p className="font-medium text-red-500">
                {state.item.ship_destination}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Wrapper
const Tracking = () => (
  <AppProvider>
    <ShipmentTracker />
  </AppProvider>
);

export default Tracking;
