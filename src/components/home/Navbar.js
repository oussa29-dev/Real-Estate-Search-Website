import React from 'react';
import logo from "../../assets/home/logo.png";
import { Link } from "react-router-dom";
import toggle from "../../assets/home/toggle.png";
import secondlogo from "../../assets/home/secondlogo.png";

const Navbar = ({ menuOpen, handleToggle }) => {
  return (

    <div className="font-body md:pt-5 ">

      <div className={`relative flex justify-between items-center${menuOpen ? 'blur-sm' : ''}`}>
      <div className="hidden md:block">
        <img src={logo} alt="Logo" className="w-24 max-h-24" />
        </div>
        <div className="md:hidden">
        <img src={secondlogo} alt="secondlogo"/>
      </div>
      <div className=" cursor-pointer md:hidden pb-8" onClick={handleToggle}>
        <img src={toggle}  alt="toggle" className="w-8" />
      </div>
      <div className="hidden text-xl lg:text-2xl font-bold md:flex gap-6 items-start  text-fourth-100">
        <Link className="border-b-4 border-fourth-100">Accueil</Link>
        <Link className="">A propos de nous</Link>
        <Link className="">Contact</Link>
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
