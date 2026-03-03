import React from 'react';
import {useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import {GlobalContext} from "../../context";

function Details() {
  const {id} = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data = await response.json();

      console.log(data);
      if(data?.data){
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  }, []);
  console.log(recipeDetailsData, "recipeDetailsData");

  return (
    <div className="container mx-auto py-10 px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="lg:sticky lg:top-32 h-fit">
        <div className="h-64 sm:h-96 overflow-hidden rounded-3xl shadow-2xl group border-8 border-white">
          <img
            src={recipeDetailsData?.recipe.image_url}
            alt={recipeDetailsData?.recipe?.title}
            className="w-full h-full object-cover block group-hover:scale-110 duration-500"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-rose-600 font-bold uppercase tracking-widest">
            {recipeDetailsData?.recipe?.publisher}
          </span>
          <h3 className="font-black text-3xl lg:text-4xl text-gray-900 leading-tight">
            {recipeDetailsData?.recipe?.title}
          </h3>
          <div>
            <button
              onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
              className="p-4 px-10 rounded-2xl text-xs uppercase font-black tracking-widest mt-4 inline-block shadow-xl bg-black text-white hover:bg-gray-800 transition-all active:scale-95"
            >
              {favoritesList &&
              favoritesList.length > 0 &&
              favoritesList.findIndex(
                (item) => item.id === recipeDetailsData?.recipe?.id
              ) !== -1
                ? "Remove from favorites"
                : "Add to favorites"}
            </button>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
          <span className="text-2xl font-black text-gray-900 mb-6 block uppercase tracking-tighter">
            Ingredients:
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index} className="flex flex-col p-4 bg-white rounded-2xl shadow-sm border border-gray-50">
                <span className="text-lg font-black text-rose-600">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-gray-600 font-medium">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details