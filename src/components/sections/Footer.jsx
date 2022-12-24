import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import footerimage from "../../assets/image/Frame 5 (1) 1 2.png";

export default function Footer() {
  return (
    <footer className=" mt-24 md:mt-16 py-6  bg-[#131E37] rounded-md text-slate-500 md:grid md:grid-cols-2 font-poppins lg:grid-cols-3">
      <div>
        <img className="w-[150px] h-auto mx-auto" src={footerimage} alt="" />
        <div className="flex justify-center gap-x-6 my-3">
          <FaFacebook className="text-[1.4rem] sm:text-[2rem] hover:text-blue" />
          <AiFillTwitterCircle className="text-[1.6rem] sm:text-[2.2rem] hover:text-blue" />
          <FaLinkedinIn className="text-[1.6rem] sm:text-[2.1rem] hover:text-blue" />
          <AiFillGithub className="text-[1.6rem] sm:text-[2.2rem] hover:text-blue" />
        </div>
        <h3 className=" text-xl  text-center  sm:text-2xl text-slate-400">
          Developed by Shipon islam
        </h3>
        <h3 className="mt-1 text-xl  text-center  sm:text-2xl text-slate-400">
          {" "}
          © 2022 All right reserved
        </h3>
      </div>
      <div className="hidden md:block md:justify-self-center">
        <h4 className="text-2xl text-slate-400 capitalize border-b border-blue py-1">
          navigation
        </h4>
        <ul>
          <li className="text-xl capitalize pl-1 mt-2">
            <Link className="hover:text-blue" to="/">
              home
            </Link>
          </li>
          <li className="text-xl capitalize pl-1 mt-2">
            <Link className="hover:text-blue" to="/about">
              about me
            </Link>
          </li>
          <li className="text-xl capitalize pl-1 mt-2">
            <Link className="hover:text-blue" to="/services">
              services
            </Link>
          </li>
          <li className="text-xl capitalize pl-1 mt-2">
            <Link className="hover:text-blue" to="/reviews">
              clients review
            </Link>
          </li>
          <li className="text-xl capitalize pl-1 mt-2">
            <Link className="hover:text-blue" to="/contact">
              contact me
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block md:justify-self-center">
        <h4 className="text-2xl text-slate-400 capitalize border-b border-blue py-1">
          featurre
        </h4>
        <ul>
          <li className="text-xl capitalize pl-1 mt-2 hover:text-blue cursor-pointer">
            ui design
          </li>
          <li className="text-xl capitalize pl-1 mt-2 hover:text-blue cursor-pointer">
            fontend dev
          </li>
          <li className="text-xl capitalize pl-1 mt-2 hover:text-blue cursor-pointer">
            backend dev
          </li>
          <li className="text-xl capitalize pl-1 mt-2 hover:text-blue cursor-pointer">
            experience
          </li>
          <li className="text-xl capitalize pl-1 mt-2 hover:text-blue cursor-pointer">
            <a
              className="hover:text-blue"
              href="./My Resume.pdf"
              download={true}
            >
              download resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
