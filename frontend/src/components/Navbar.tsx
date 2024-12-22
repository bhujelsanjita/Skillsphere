import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-100 shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-500">
       SkillSphere
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-blue-500 hover:text-blue-700 transition duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/courses" className="text-blue-500 hover:text-blue-700 transition duration-200">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-500 hover:text-blue-700 transition duration-200">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-blue-500 hover:text-blue-700 transition duration-200">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
