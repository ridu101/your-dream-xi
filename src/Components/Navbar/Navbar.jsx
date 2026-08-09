// import React from "react";
import navImg from "../../assets/logo.png";
import dollerImg from "../../assets/dollar 1.png";
const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <img
                src={navImg}
                alt="Cricket Logo"
                className="w-14 md:w-16 object-contain"
              />
            </div>

            {/* Desktop Menu + Coin */}
            <div className="hidden md:flex items-center gap-8">
              {/* Menu */}
              <div className="flex items-center gap-8 text-sm text-gray-600">
                <a href="#home" className="hover:text-black transition-colors">
                  Home
                </a>

                <a
                  href="#fixture"
                  className="hover:text-black transition-colors"
                >
                  Fixture
                </a>

                <a href="#teams" className="hover:text-black transition-colors">
                  Teams
                </a>

                <a
                  href="#schedules"
                  className="hover:text-black transition-colors"
                >
                  Schedules
                </a>
              </div>

              {/* Coin Button */}
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2 bg-white">
                <span className="text-sm font-semibold text-gray-900">
                  6000000000 Coin
                </span>

                <img
                  src={dollerImg}
                  alt="Coin"
                  className="w-5 h-5 object-contain"
                />
              </div>
            </div>

            {/* Mobile Coin */}
            <div className="md:hidden flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2">
              <span className="text-sm font-semibold text-gray-900">
                0 Coin
              </span>

              <img
                src={dollerImg}
                alt="Coin"
                className="w-5 h-5 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
