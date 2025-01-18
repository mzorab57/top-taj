import React, { useReducer, useContext, createContext, useEffect } from "react";
import axios from "axios";
import topTajLogo from "/assets/img/toptajLogo.jpg";
const API_HOST = "https://azure-echidna-419544.hostingersite.com/api/";

// Initial state for the reducer
const initialState = {
  ship: null, // Updated to match API response structure
  loading: false,
  error: null,
};

// Reducer to manage state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        [action.payload.entity]: action.payload.data,
        loading: false,
        error: null,
      };
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

  const fetchData = async (entity, endpoint) => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(`${API_HOST}${endpoint}`);
      console.log("API Response:", response.data.data[0]); // Log the API response
      const data = response.data.data[0] || {};
      dispatch({ type: "FETCH_SUCCESS", payload: { entity, data } });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  const value = { state, dispatch, fetchData };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// ShipmentTracker Component
const ShipmentTracker = () => {
  const { state, fetchData } = useAppContext();
  console.log("log");
  console.log(state.ship);

  // Fetch shipment data on mount
  useEffect(() => {
    fetchData("ship", "ship/read.php");
  }, []);

  // Loading and error states
  if (state.loading) return <div>Loading...</div>;
  if (state.error) return <div>Error: {state.error}</div>;
  if (!state.ship || !state.ship.ship_chek_point)
    return <div>No shipment data available</div>;

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

  // Update steps based on the shipment data
  state.ship.ship_chek_point.forEach((checkPoint) => {
    const stepLabel = statusMap[checkPoint.ship_chek_point_note];
    console.log("stepLabel");
    console.log(stepLabel);

    if (stepLabel) {
      const stepIndex = steps.findIndex((step) => step.label === stepLabel);
      if (stepIndex !== -1) {
        steps[stepIndex].completed = true;
      }
    }
  });

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md h-screen ">
      <img src={topTajLogo} alt="Footer Logo" className="mb-6" />
      <div className="mb-4">
        <h2 className="text-lg font-bold">Latest Update</h2>
        <p className="text-sm text-gray-500">
          The shipment is currently in: {state.ship.ship_state || "Unknown"}
        </p>
        <p className="text-sm text-gray-400">{state.ship.ship_end_date}</p>
      </div>
      <div className="flex items-start">
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full z-[1] ${
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
                className={`w-1 -ml-3 ${
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
              className={`text-sm py-[30px] font-medium ${
                step.completed ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.label}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-6 text-sm text-gray-500">
        <div>
          <p>Origin</p>
          <p className="font-medium text-red-500">
            {state.ship.ship_londing_area}
          </p>
        </div>
        <div>
          <p>Destination</p>
          <p className="font-medium text-red-500">
            {state.ship.ship_destination}
          </p>
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
