"use client";
import React, { useState } from "react";

// import Link from 'next/link';
import { Link } from "react-scroll";
// import { TiSocialFacebookCircular } from "react-icons/ti";
// import { TiSocialTwitterCircular } from "react-icons/ti";
// import { TiSocialInstagram } from "react-icons/ti";
// import { TiSocialLinkedinCircular } from "react-icons/ti";
// import { BiLogoGithub } from "react-icons/bi";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav>
      <div className="bg-[white] h-[15vh] z-[400] sticky top-0 flex flex-row  justify-between w-full items-center  p-10">
        <div className="logo h-20  text-3xl mt-10 ">
          <h2 className=" z-[1000] text-[black]">
            Freelance<span className="text-[#3BD442]">HQ</span>
          </h2>
        </div>
        <div className="md:block hidden">
          <ul className=" flex flex-row  gap-8 items-center  ">
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              className=" cursor-pointer"
              duration={500}
            >
              <li>Home</li>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              className=" cursor-pointer"
              duration={500}
            >
              <li>About</li>
            </Link>
            <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-70}
              className=" cursor-pointer"
              duration={500}
            >
              <li>How it works</li>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              className=" cursor-pointer"
              duration={500}
            >
              <li>Pricing</li>
            </Link>
          
              <button class="inline-flex text-white bg-[#3BD442] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <a href="https://my-cv-cpx3.vercel.app/">Login</a>
              </button>
          </ul>
        </div>
       
        <button
          onClick={toggleMenu}
          className={`lg:hidden z-[500] ${menu ? "toggle open" : "toggle"}`}
        >
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
        </button>
      </div>
      <div className="w-full">
        <div
          className={`flex  z-[500]  w-[250px]  transition-[all,3s,ease-linear] ${
            menu ? "ml-0" : " ml-[-550px]"
          } flex-col px-5 bg-white md:hidden fixed top-0 left-0 bottom-0 items-start gap-4`}
        >
          <ul className=" flex flex-col pt-32 gap-8 items-start  ">
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              className=" cursor-pointer"
              duration={500}
            >
              <li>Home</li>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              className=" cursor-pointer"
              duration={500}
            >
              <li>About</li>
            </Link>
            <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-70}
              className=" cursor-pointer"
              duration={500}
            >
              <li>Services</li>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              className=" cursor-pointer"
              duration={500}
            >
              <li>Contact</li>
            </Link>
            <Link
              activeClass="active"
              to="cv"
              spy={true}
              smooth={true}
              offset={-70}
              className=" cursor-pointer"
              duration={500}
            >
              <a href="/mycv" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                cv
              </a>
            </Link>
          </ul>
          {/* <div className="social grid grid-cols-3 md:flex md:flex-row flex-col gap-3">
          <a href="https://www.facebook.com/hardeshina.harlmubarak?mibextid=ZbWKwL">
            <TiSocialFacebookCircular
              style={{ width: "100%", fontSize: "30px" }}
            />
          </a>
          <a href="">
            <TiSocialTwitterCircular
              style={{ width: "100%", fontSize: "30px" }}
            />
          </a>
          <a href="https://instagram.com/adeshina_mubaraq?igshid=MzNlNGNkZWQ4Mg==">
            <TiSocialInstagram style={{ width: "100%", fontSize: "30px" }} />
          </a>
          <a href="https://www.linkedin.com/in/mubking">
            <TiSocialLinkedinCircular
              style={{ width: "100%", fontSize: "30px" }}
            />
          </a>
          <a href="https://github.com/mubking" className="me">
            <BiLogoGithub style={{ width: "100%", fontSize: "30px" }} />
            <h3>Github</h3>
          </a>
        </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;