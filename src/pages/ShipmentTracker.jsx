import React from 'react';

const ShipmentTracker = () => {
  const steps = [
    { label: 'Created', completed: true },
    { label: 'Collected', completed: true },
    { label: 'Departed', completed: true },
    { label: 'In transit', completed: true },
    { label: 'Arrived at destination', completed: true },
    { label: 'Out for delivery', completed: false },
    { label: 'Delivered', completed: true },
  ];

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md h-screen mt-40">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Latest Update</h2>
        <p className="text-sm text-gray-500">The shipment has been delivered</p>
        <p className="text-sm text-gray-400">24 Nov 24 14:53</p>
      </div>
      <div className="flex items-start">
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-6 absolute  h-6 flex items-center justify-center rounded-full ${
                  step.completed ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                {step.completed ? (
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
                ) : null}
              </div>
              <div
                className={`w-1 ml-2 ${
                  step.completed ? 'bg-green-500' : 'bg-gray-300'
                } ${index < steps.length - 1 ? 'h-20' : 'h-0'}`}
              />
            </div>
          ))}
        </div>
        <div className="ml-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-sm py-6 font-medium ${
                step.completed ? 'text-gray-800' : 'text-gray-400'
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
          <p className="font-medium text-red-500">Istanbul</p>
          <p className="font-bold">Turkey</p>
        </div>
        <div>
          <p>Destination</p>
          <p className="font-medium text-red-500">Amman</p>
          <p className="font-bold">Jordan</p>
        </div>
      </div>
    </div>
  );
};

export default ShipmentTracker;
