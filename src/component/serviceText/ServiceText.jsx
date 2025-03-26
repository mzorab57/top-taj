import React from "react";
import { FiBox, FiMapPin, FiUser } from "react-icons/fi";

const ServiceText = () => {
  return (
    <div className="relative font-Jost">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 via-white to-orange-50 opacity-50" />

      <div className="relative text-container max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
          Our Services
        </h2>

        <div className="space-y-8">
          <p className="leading-relaxed text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Serving thousands of monthly shipments across the Middle East
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100">
            <h3 className="font-bold text-2xl mb-6 text-yellow-500 flex items-center gap-2">
              <FiMapPin className="w-6 h-6" />
              Special Services
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Direct shipping from China to Middle East",
                "Door-to-Door delivery service",
                "Air cargo and sea shipping solutions",
                "Fastest transportation routes",
                "Competitive pricing packages",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700 bg-orange-50 p-3 rounded-lg"
                >
                  <FiBox className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-8 rounded-2xl text-white">
            <FiUser className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <p className="leading-relaxed text-center text-lg font-medium">
              As the pioneer in direct China-Iran shipping, we pride ourselves
              on offering the most cost-effective and efficient door-to-door
              delivery services. Our commitment to excellence ensures your cargo
              reaches its destination safely and on time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceText;
