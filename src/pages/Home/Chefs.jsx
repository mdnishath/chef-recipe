import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { ThreeDots } from "react-loader-spinner";
import LazyLoad from "react-lazy-load";

const Chefs = () => {
  const [data, setData] = useState([]);
  const { loading } = useAuth();
  useEffect(() => {
    fetch(`https://server-mdnishath.vercel.app/chefs/`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(loading);
  return loading ? (
    <div className="w-full h-screen flex justify-center items-center">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  ) : (
    <div className="bg-slate-50 py-10 md:px-0 px-2">
      <Container>
        <h3 className="my-10 text-center text-4xl font-bold">Our Chef's</h3>

        <div
          className={`${
            data.length > 0
              ? "grid md:grid-cols-3 gap-6"
              : "grid grid-cols-1 gap-6"
          }`}
        >
          {data.length > 0 ? (
            data.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <div className="h-[300px] w-full">
                  <LazyLoad height={300}>
                    <img
                      className="h-full w-full object-cover"
                      src={item.chef_picture}
                      alt="item.chef_name"
                    />
                  </LazyLoad>
                </div>
                <div className="px-4 py-4">
                  <h4 className="text-2xl font-semibold">
                    Name: {item.chef_name}
                  </h4>
                  <h3 className="text-xl font-semibold">
                    Experience: {item.years_of_experience} years
                  </h3>
                  <h3 className="text-xl font-semibold">
                    Recipes: {item.num_recipes}
                  </h3>

                  <div className="mt-3 flex justify-between">
                    <Link
                      to={`/chef/${item.id}`}
                      className="btn border-0 bg-primary"
                    >
                      View Recipes
                    </Link>
                    <div className="flex items-center gap-2 text-xl">
                      <AiFillLike className="text-primary" />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-2xl w-full text-red-400 text-center">
              No Chef found
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Chefs;
