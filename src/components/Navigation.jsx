import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import useAuth from "../hooks/useAuth";
import ActivLink from "./ActivLink";

const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="bg-primary shadow-lg">
      <Container>
        <div className="navbar text-white">
          <div className="md:w-[350px]">
            <Link
              to={"/"}
              className="md:text-2xl font-extrabold uppercase block"
            >
              Italian Delights
            </Link>
          </div>
          <div className="flex flex-grow md:static fixed bottom-0 left-0 bg-primary w-full px-4 md:px-0">
            <div className="flex flex-grow md:justify-center">
              <div className="navbar-center  lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                  <li>
                    <ActivLink to={"/"}>Home</ActivLink>
                  </li>
                  <li>
                    <ActivLink to={"/blog"}>Blog</ActivLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="flex items-center space-x-5 text-lg font-semibold">
                {user ? (
                  <>
                    <div
                      className="tooltip tooltip-close tooltip-left"
                      data-tip={user?.displayName}
                    >
                      <img
                        className="w-[40px] h-[40px] rounded-full border-white border-2"
                        src={user?.photoURL}
                        alt=""
                      />
                    </div>

                    <AiOutlineLogout
                      onClick={logOut}
                      className="text-3xl cursor-pointer"
                    />
                  </>
                ) : (
                  <>
                    <ActivLink to="/login">Login</ActivLink>
                    <ActivLink to="/signup">Signup</ActivLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
