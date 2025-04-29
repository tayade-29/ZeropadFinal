import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="max-w-md bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-blue-600">
        Welcome to My Page
      </h1>
      <p className="text-gray-700 text-center mt-2">
        This is a simple page built with React and Tailwind CSS.
      </p>
      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
          Click Me
        </button>
      </div>
    </div>
  </div>
  );
};

export default Home;
