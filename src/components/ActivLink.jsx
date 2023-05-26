import React from "react";
import { NavLink } from "react-router-dom";

const ActivLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-black" : "text-white")}
    >
      {children}
    </NavLink>
  );
};

export default ActivLink;
