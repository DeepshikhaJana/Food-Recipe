import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

function navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="sticky top-0 z-50 py-4 lg:py-6 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6">
        <h2 className="text-2xl lg:text-3xl font-black text-gray-900 tracking-tighter">
          <NavLink to={"/"}>
            Food<span className="text-rose-600">Recipe</span>
          </NavLink>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full md:flex-1 max-w-md md:mx-8 order-3 md:order-2"
        >
          <input
            type="text"
            name="search"
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            placeholder="Quick search..."
            className="w-full bg-gray-100 p-3 px-6 rounded-full outline-none focus:ring-2 focus:ring-rose-200 transition-all text-sm shadow-sm"
          />
        </form>

        <ul className="flex items-center space-x-6 lg:space-x-8 order-2 md:order-3">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `text-xs lg:text-sm font-bold uppercase tracking-widest transition-colors ${
                  isActive
                    ? "text-rose-600"
                    : "text-gray-500 hover:text-rose-600"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className={({ isActive }) =>
                `text-xs lg:text-sm font-bold uppercase tracking-widest transition-colors ${
                  isActive
                    ? "text-rose-600"
                    : "text-gray-500 hover:text-rose-600"
                }`
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar;
