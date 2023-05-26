import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { Rating } from "@smastrom/react-rating";
import LazyLoad from "react-lazy-load";

import { addToDb, getFromDb } from "../../utils/helpers";

const Recipes = ({ recipe_id }) => {
  const [recipes, setRecipes] = useState([]);
  const [favorite, setFavorite] = useState([]);

  //fetch recipes
  useEffect(() => {
    fetch("https://server-mdnishath.vercel.app/recipes")
      .then((response) => response.json())
      .then((data) => {
        const filtredRecipes = data.filter((item) =>
          recipe_id.includes(item.id)
        );
        setRecipes(filtredRecipes);
      });
  }, []);

  // Save to favorite
  const handleFavorite = (id) => {
    addToDb(id);
    const strodedList = getFromDb();
    setFavorite(strodedList);
  };
  useEffect(() => {
    const strodedList = getFromDb();
    setFavorite(strodedList);
  }, []);
  console.log(favorite);
  return (
    <div className="py-10 bg-slate-100">
      <Container>
        <div className="grid grid-cols-1 gap-5">
          {recipes &&
            recipes.length > 0 &&
            recipes.map((recipe) => (
              <div
                key={recipe.id}
                className=" shadow-lg rounded-lg overflow-hidden "
              >
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-4 bg-primary h-full flex flex-col items-center justify-center px-4">
                    <LazyLoad height={300}>
                      <img
                        className="w-[250px] h-[250px] rounded-full shadow-lg"
                        src={recipe?.image}
                        alt={recipe.recipe_name}
                      />
                    </LazyLoad>
                    <h3 className="font-bold text-lg text-center mt-5">
                      {recipe.recipe_name}
                    </h3>
                  </div>
                  <div className=" col-span-8 bg-white px-10">
                    <div className="flex gap-5 justify-end mt-4">
                      <Rating
                        style={{ maxWidth: 120 }}
                        readOnly
                        value={recipe.rating}
                        key={recipe.rating}
                        className="text-primary"
                      />
                      <button
                        disabled={favorite.some(
                          (item) => item.id === recipe.id
                        )}
                        onClick={() => handleFavorite(recipe.id)}
                        className="flex items-center px-4 py-2 rounded-lg text-white font-semibold bg-primary space-x-2 border-0"
                      >
                        {favorite.some((item) => item.id === recipe.id) ? (
                          <MdFavorite className="text-2xl text-white" />
                        ) : (
                          <MdOutlineFavoriteBorder className="text-2xl text-white " />
                        )}

                        <span>Favorite</span>
                      </button>
                    </div>
                    <div className="px-4 py-4">
                      <div className="">
                        <h4 className="font-bold text-xl">Ingredients:</h4>
                        <ul className="divide-y">
                          {recipe.ingredients.map((item, index) => (
                            <li key={index} className="py-2 text-lg">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <h4 className="font-bold text-xl">Cooking method:</h4>
                      <p>{recipe.cooking_method}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Recipes;
