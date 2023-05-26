import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { useLoaderData, useParams } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import Recipes from "./Recipes";
import LazyLoad from "react-lazy-load";

const Chef = () => {
  const { id } = useParams();
  const [chefData, setChefData] = useState([]);
  useEffect(() => {
    fetch(`https://server-mdnishath.vercel.app/chefs/${id}`)
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);
  const {
    chef_name,
    chef_picture,
    short_bio,
    likes,
    years_of_experience,
    num_recipes,
    recipe_id,
  } = chefData || {};

  return (
    <div>
      <div>
        <Container>
          <div className="my-20 flex flex-col items-center md:flex-row gap-5">
            <div className="md:w-1/2">
              <h1 className=" text-center text-3xl font-bold md:text-left md:text-6xl">
                {chef_name}
              </h1>
              <p className="mt-5 text-center text-lg md:text-left">
                {short_bio}
              </p>

              <div className="flex gap-4 mt-5 items-center ">
                <h3 className="text-xl font-semibold border px-4 py-2 rounded-lg border-primary">
                  Experience: {years_of_experience} years
                </h3>
                <h3 className="text-xl font-semibold border px-4 py-2 rounded-lg border-primary">
                  Recipes: {num_recipes}
                </h3>
                <div className="flex items-center gap-2 text-xl border px-4 py-2 rounded-lg border-primary">
                  <AiFillLike className="text-primary" />
                  <span className="text-xl font-semibold">{likes}</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <LazyLoad>
                <img
                  className="w-full rounded-lg"
                  src={chef_picture}
                  alt={chef_name}
                />
              </LazyLoad>
            </div>
          </div>
        </Container>
      </div>
      {recipe_id && <Recipes recipe_id={recipe_id} />}
    </div>
  );
};

export default Chef;
