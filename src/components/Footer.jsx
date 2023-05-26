import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-primary px-3 py-8 text-white md:px-0">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <Link to={"/"} className="text-2xl font-extrabold uppercase">
              Italian Delights
            </Link>
            <p className="mt-5">
              Whether you're a seasoned cook or a beginner, we have recipes that
              will suit your taste and level of expertise.{" "}
            </p>
          </div>
          <div>
            <h4 className="mb-5 text-2xl font-bold text-white">Quick Links</h4>
            <ul className="text-lg font-semibold">
              <li>
                <Link to={"/home"}>Home</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-2xl font-bold text-white">Find us</h4>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt />
              <p className="text-lg font-semibold">
                Via dei Montecatini, 12, 00186 Roma RM, Italy
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <BsFillTelephoneFill />
              <p className="text-lg font-semibold">+390648913153</p>
            </div>
            <div className="flex items-center space-x-4">
              <MdEmail />
              <p className="text-lg font-semibold">info@italiandelights.com</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
