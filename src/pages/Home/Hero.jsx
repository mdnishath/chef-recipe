import React from "react";
import Container from "../../components/Container";
import LazyLoad from "react-lazy-load";

const Hero = () => {
  return (
    <div>
      <Container>
        <div className="my-20 flex flex-col items-center md:flex-row ">
          <div className="md:w-1/2">
            <h1 className=" text-center text-3xl font-bold md:text-left md:text-6xl">
              Discover the authentic taste of Italy.
            </h1>
            <p className="mt-5 text-center text-2xl md:text-left">
              Welcome to Italian Delights, your ultimate destination for
              authentic Italian recipes! Savor the rich and flavorful dishes
              that have made Italy famous for its cuisine.
            </p>
            <div className="mt-5 flex justify-center md:justify-start">
              <button className="btn border-0 bg-primary text-xl">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <LazyLoad height={762}>
              <img className="w-full" src="./assets/hero.png" alt="" />
            </LazyLoad>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
