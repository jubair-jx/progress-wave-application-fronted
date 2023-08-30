import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav class="py-4 border-b animate-text sticky top-0 right-0 z-30 bg-gradient-to-r from-violet-900 via-[#b326a5d4] to-[#8f2b94db]">
      <div class="navbar-container">
        <div class="logo text-white flex justify-center items-center gap-3 cursor-pointer">
          <svg
            className="w-8 text-teal-accent-400 hover:text-teal-500 duration-300"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
            <rect x="14" y="1" width="7" height="6" />
            <rect x="14" y="11" width="7" height="12" />
          </svg>
          <Link
            className="text-xl font-bold hover:text-gray-100"
            style={{ fontFamily: "monospace" }}
            to={"/"}
          >
            Progress Wave
          </Link>
        </div>
        <div class="auth-buttons">
          <div class="relative inline-flex  group">
            <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px  bg-gradient-to-r from-[#246186] via-[#FF44EC] to-[#FF675E] rounded-xl blur-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="#"
              title="Get quote now"
              class="relative inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white hover:text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Sign in
            </a>
          </div>
          <div class="flex max-w-sm rounded-xl bg-gradient-to-tr from-red-400 to-indigo-600 p-0.5 shadow-lg">
            <button class="flex-1 font-bold text-sm bg-gradient-to-r from-gray-200 via-[#f7f7f7] to-[#ddd7d6] px-7 py-3 rounded-xl">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
