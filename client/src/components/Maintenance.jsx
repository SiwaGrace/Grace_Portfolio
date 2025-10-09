import React from "react";

const Maintenance = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🚧 Under Maintenance
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          We’re working hard to improve our website. Please check back later.
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
