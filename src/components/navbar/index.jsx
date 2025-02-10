import React from 'react'
import { NavLink } from "react-router-dom";

function navbar() {
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80"'>
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold text-white">Food Recipe 🍜</div>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Enter Items..."
            className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-gray-600 focus:shadow-red-100"
          />
        </form>
        <ul className="flex justify-center space-x-4">
          <li>
            <NavLink
              to={"/"}
              className="text-white hover:text-red-500 duration-200"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className="text-white hover:text-red-500 duration-200"
            >
              favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar