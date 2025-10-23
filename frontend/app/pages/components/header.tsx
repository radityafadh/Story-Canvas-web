// frontend/src/components/header.tsx

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo_Story_Canvas.svg";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Change this based on actual auth state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userName = "Betari Safira";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const authLinks = [
    { name: "SignIn", path: "/Signin" },  // capital S
    { name: "SignUp", path: "/Signup" },  // capital S
  ];

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMenuOpen(false);
    setDropdownOpen(false);
    // Add your logout logic here (clear tokens, etc.)
  };

  return (
    <header className="bg-gradient-to-r from-[#5F3D89] via-[#5561AA] to-[#4699DF] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-semibold">StoryCanvas</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Common Links */}
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "opacity-100 border-b-2 border-white"
                    : "opacity-80 hover:opacity-100"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Chat Link - Accessible to all users */}
          <NavLink
            to="/chat"
            end
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "opacity-100 border-b-2 border-white"
                  : "opacity-80 hover:opacity-100"
              }`
            }
          >
            Chat
          </NavLink>

          {/* History Link - Only show when logged in */}
          {isLoggedIn && (
            <NavLink
              to="/history"
              end
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "opacity-100 border-b-2 border-white"
                    : "opacity-80 hover:opacity-100"
                }`
              }
            >
              History
            </NavLink>
          )}

          {/* Authentication Section */}
          {!isLoggedIn ? (
            // Show Sign In/Sign Up buttons when not logged in
            <div className="flex items-center space-x-4">
              {authLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="bg-white text-[#4699DF] px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          ) : (
            // Show user dropdown when logged in
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 hover:opacity-80 transition"
              >
                {/* Phosphor User Icon */}
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"/>
                </svg>
                <span>{userName}</span>
                {/* Dropdown Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100 transition rounded-lg"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-[#5561AA] px-6 py-4 space-y-3">
          {/* Common Links */}
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end
              onClick={() => setMenuOpen(false)}
              className="block hover:opacity-90 transition py-2"
            >
              {link.name}
            </NavLink>
          ))}

          {/* Chat Link - Accessible to all users */}
          <NavLink
            to="/chat"
            end
            onClick={() => setMenuOpen(false)}
            className="block hover:opacity-90 transition py-2"
          >
            Chat
          </NavLink>

          {/* History Link - Only show when logged in */}
          {isLoggedIn && (
            <NavLink
              to="/history"
              end
              onClick={() => setMenuOpen(false)}
              className="block hover:opacity-90 transition py-2"
            >
              History
            </NavLink>
          )}

          {/* Authentication Section */}
          {!isLoggedIn ? (
            // Show Sign In/Sign Up buttons when not logged in
            <div className="pt-3 border-t border-white/30 space-y-3">
              {authLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="block bg-white text-[#4699DF] px-4 py-2 rounded-lg font-medium text-center hover:bg-opacity-90 transition"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          ) : (
            // Show user menu when logged in
            <div className="pt-3 border-t border-white/30">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-2">
                  {/* Phosphor User Icon for Mobile */}
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 256 256"
                    fill="currentColor"
                  >
                    <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"/>
                  </svg>
                  <span className="font-medium">{userName}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-sm bg-white text-[#4699DF] px-3 py-1 rounded-lg font-medium hover:bg-opacity-90 transition"
                >
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}