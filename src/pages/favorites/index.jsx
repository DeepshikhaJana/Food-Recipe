import React from 'react';
import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

function Favorites() {
  const { favoritesList } = useContext(GlobalContext);
  return (
    <div className="py-8 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10 px-6 lg:px-0">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center min-h-[50vh] space-y-4">
          <p className="lg:text-4xl text-2xl text-center text-rose-800 font-black">
            Nothing is added in favorites.
          </p>
          <p className="text-gray-500 text-lg">Go search and add some delicious recipes!</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;