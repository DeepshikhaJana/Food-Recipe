import React from 'react'
import { Link } from "react-router-dom";

function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-full overflow-hidden p-4 lg:p-6 bg-white shadow-2xl gap-5 rounded-3xl group hover:shadow-rose-100 transition-all duration-300 border border-gray-100">
      <div className="h-40 lg:h-48 flex justify-center overflow-hidden items-center rounded-2xl relative">
        <img
          src={item?.image_url}
          alt="recipe item"
          className="block w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-800 shadow-sm">
          {item?.publisher}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-black text-xl text-gray-900 line-clamp-1 group-hover:text-rose-600 transition-colors">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-xs p-4 mt-2 px-8 rounded-2xl uppercase font-black tracking-[0.2em] inline-block shadow-lg bg-black text-white hover:bg-gray-800 transition-all text-center active:scale-95"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}

export default RecipeItem;