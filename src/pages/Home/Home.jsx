import React from "react";
import Container from "../../components/Container";
import Hero from "./Hero";
import { useLoaderData } from "react-router-dom";
import Chefs from "./Chefs";
import useAuth from "../../hooks/useAuth";
import AllRecipes from "./AllRecipes";
import Testomonial from "./Testomonial";

const Home = () => {
  const authInfo = useAuth();

  console.log(authInfo);
  return (
    <div>
      <Hero />

      <Chefs />
      <AllRecipes />
      <Testomonial />
    </div>
  );
};

export default Home;
