import { useState } from "react";
import logo from "./images/logo.png";

const Navbar = () => {
  // State to handle sidebar visibility on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="w-full bg-white px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src={logo} alt="Zeropad Logo" className="h-10" />
      </a>

      {/* Hamburger Icon for mobile */}
      <button
        className="md:hidden text-black focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-black no-underline hover:text-gray-700">Home</a>
          </li>
          <li>
            <a href="/about" className="text-black no-underline hover:text-gray-700">About</a>
          </li>
          <li>
            <a href="/products" className="text-black no-underline hover:text-gray-700">Products</a>
          </li>
          <li>
            <a href="/community" className="text-black no-underline hover:text-gray-700">Community</a>
          </li>
          <li>
            <a href="/corporate" className="text-black no-underline hover:text-gray-700">Corporate</a>
          </li>
          <li>
            <a href="/contact" className="text-black no-underline hover:text-gray-700">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-gray-700 bg-opacity-50 z-40 md:hidden transition-opacity ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar} // Close sidebar when clicking outside
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-black focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col space-y-6 p-6">
          <li>
            <a href="/" className="text-black no-underline hover:text-gray-700" onClick={toggleSidebar}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-black no-underline hover:text-gray-700" onClick={toggleSidebar}>
              About
            </a>
          </li>
          <li>
            <a href="/products" className="text-black no-underline hover:text-gray-700" onClick={toggleSidebar}>
              Products
            </a>
          </li>
          <li>
            <a href="/community" className="text-black no-underline hover:text-gray-700" onClick={toggleSidebar}>
              Community
            </a>
          </li>
          <li>
            <a href="/corporate" className="text-black no-underline hover:text-gray-700" onClick={toggleSidebar}>
              Corporate
            </a>
          </li>
          <li>
            <a href="/contact" className="text-black no-underline hover:text-gray-700" onClick={toggleSidebar}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
