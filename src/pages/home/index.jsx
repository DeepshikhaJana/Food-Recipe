import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

function Home() {
  const { recipeList, loading, searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl font-semibold text-rose-800 animate-pulse">
          Loading... Please wait!
        </div>
      </div>
    );

  return (
    <div className="min-h-[90vh] flex flex-col">
      {recipeList && recipeList.length > 0 ? (
        <div className="py-8 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10 px-6 lg:px-0">
          {recipeList.map((item) => (
            <RecipeItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between container mx-auto px-6 lg:px-12 py-10 lg:py-0 relative">
          {/* Decorative background for the whole section */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4E982] rounded-l-[100px] lg:rounded-l-[300px] -z-20 opacity-30 hidden lg:block"></div>

          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-4 lg:space-y-6 z-10 animate-fadeIn text-center lg:text-left items-center lg:items-start">
            <h4 className="text-orange-600 font-bold tracking-widest uppercase text-xs lg:text-sm">
              Foods With Recipes
            </h4>
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black text-gray-900 leading-[1.1]">
              GOOD 😋 TASTE. <br />
              GOOD 🤔 SENSE.
            </h1>
            <p className="text-gray-600 text-base lg:text-xl max-w-lg leading-relaxed">
              Browse over 5 million recipes and foods that make your health
              better and healthier. Love for raw materials and service.
              Creativity and professionalism are the elements that characterize
              our company.
            </p>

            {/* Search Bar - hidden on mobile in landing page because navbar has one */}
            <form
              onSubmit={handleSubmit}
              className="relative w-full max-w-lg mt-8 lg:mt-12 group"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search 5m+ recipes & foods"
                  value={searchParam}
                  onChange={(e) => setSearchParam(e.target.value)}
                  className="w-full bg-white py-4 lg:py-6 pl-8 lg:pl-10 pr-32 lg:pr-40 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] outline-none text-gray-700 placeholder-gray-400 focus:ring-4 focus:ring-orange-100 transition-all text-sm lg:text-lg"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-6 lg:px-10 py-3 lg:py-4 rounded-full font-bold text-xs lg:text-sm hover:bg-gray-800 transition-all active:scale-95 uppercase tracking-wider"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Right Content - Image with decorative background */}
          <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0 flex justify-center items-center">
            {/* Curved Lime Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] sm:w-[140%] sm:h-[140%] bg-[#D4E982] rounded-full -z-10 scale-90 opacity-60"></div>

            {/* Food Bowl Image */}
            <div className="relative z-0 max-w-[300px] sm:max-w-[450px] lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000"
                alt="Healthy food bowl"
                className="w-full lg:w-[700px] drop-shadow-[0_30px_30px_rgba(0,0,0,0.3)] lg:drop-shadow-[0_50px_50px_rgba(0,0,0,0.3)] hover:rotate-6 transition-all duration-700 cursor-pointer"
              />

              {/* Decorative elements around the bowl - hidden or smaller on mobile */}
              <span className="absolute -top-6 lg:-top-10 left-6 lg:left-10 text-2xl lg:text-4xl animate-bounce duration-1000">
                🌿
              </span>
              <span className="absolute top-10 lg:top-20 -right-6 lg:-right-10 text-2xl lg:text-4xl animate-pulse">
                🍅
              </span>
              <span className="absolute bottom-6 lg:bottom-10 -left-6 lg:-left-10 text-2xl lg:text-4xl animate-bounce">
                🥑
              </span>
              <span className="absolute -bottom-6 lg:-bottom-10 right-10 lg:right-20 text-2xl lg:text-4xl animate-pulse">
                🍄
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
