// frontend/src/components/footer.tsx

import React from "react";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#3E4766] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Kontainer utama untuk Brand (Kiri) dan Links (Kanan) */}
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          
          {/* Logo & Brand Name (Kiri) - DENGAN LOGO */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="flex items-center space-x-3">
              {/* Logo ditambahkan kembali di sebelah judul */}
              <img src="/Logo_Story_Canvas.svg" alt="Logo" className="w-8 h-8" /> 
              <h2 className="text-3xl font-semibold">StoryCanvas</h2>
            </div>
          </div>
          
          {/* Navigasi Links (Kanan - 4 Kolom) */}
          {/* Menggunakan grid 4 kolom untuk layout samping-menyamping */}
          <nav className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">
            
            {/* Kolom 1 */}
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-sm opacity-80 hover:opacity-100 transition">
                  Home
                </NavLink>
              </li>
            </ul>

            {/* Kolom 2 */}
            <ul className="space-y-3">
              <li>
                <NavLink to="/about" className="text-sm opacity-80 hover:opacity-100 transition">
                  About
                </NavLink>
              </li>
            </ul>

            {/* Kolom 3 */}
            <ul className="space-y-3">
              <li>
                <NavLink to="/chat" className="text-sm opacity-80 hover:opacity-100 transition">
                  Chat
                </NavLink>
              </li>
            </ul>

            {/* Kolom 4 */}
            <ul className="space-y-3">
              <li>
                <NavLink to="/history" className="text-sm opacity-80 hover:opacity-100 transition">
                  History
                </NavLink>
              </li>
            </ul>

          </nav>
        </div>

        {/* Copyright (Kiri Bawah) */}
        <div className="pt-4 mt-8 border-t border-white/10">
          <p className="text-xs opacity-70">
            StoryCanvas © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}