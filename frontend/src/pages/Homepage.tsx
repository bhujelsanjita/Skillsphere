import React from "react";
import Navbar from "../components/Navbar";

const HomePage: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to SkillSphere</h1>
      <p className="text-lg text-gray-700 mb-6">Your ultimate platform for learning and growth.</p>
      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
    </div>
    </>
  );
};

export default HomePage;
