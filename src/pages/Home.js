import React, { useState, useRef, useEffect } from "react";
import Navbar from "/home/oussama/Documents/trouve/src/components/home/Navbar.js";
import Description from "/home/oussama/Documents/trouve/src/components/home/Description";
import Details from "/home/oussama/Documents/trouve/src/components/home/Details";
import Team from "/home/oussama/Documents/trouve/src/components/home/Team";
import Contact from "/home/oussama/Documents/trouve/src/components/home/Contact.js";
import backgroundImage from "/home/oussama/Documents/trouve/src/assets/home/img1.jpg";
import List from "../components/home/List";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cardRef = useRef();

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="relative">
      <div className="bg-custom-m-gradient ">
        <div
          className={`w-[1440px] h-[1134px] bg-cover bg-no-repeat bg-center shadow-custom max-w-full clip-path-custom-curve  overflow-hidden${
            menuOpen ? "blur-sm" : ""
          }  `}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            clipPath: "url(#myClip)",
          }}
        >
          <div className="contain">
            <Navbar menuOpen={menuOpen} handleToggle={handleToggle} />
            <Description />
            <svg
          style={{
            position: "absolute",
            width: 0,
            height: 0,
            overflow: "hidden",
          }}
        >
          <defs>
            <clipPath id="myClip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 H 1 V 0.8 Q 0.5 0.95 0 0.8 Z" />
            </clipPath>
          </defs>
        </svg>
          </div>
        </div>
        {/* Conditionally render the List component and pass the ref */}
      
        {menuOpen && <List cardRef={cardRef} />}
        <div className={`contain ${menuOpen ? "blur-sm" : ""}`}>
          <Details />
          <Team />
        </div>
        <div className="bg-sisth-100">
          <div className="contain">
            <Contact />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
