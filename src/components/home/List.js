import React from 'react';
import bluecall from "../../assets/home/bluecall.png";
import bluemail from "../../assets/home/bluemail.png";
import { Link } from "react-router-dom";

const List = ({ cardRef }) => {
  return (
    <div ref={cardRef} className="absolute top-8 right-0 z-50 bg-custom-m-gradient flex-col w-72 h-72 bg-white">
      <div className="shadow-accueil-shadow flex justify-center items-center bg-seventh-100 h-16 font-bold leading-6 text-left text-fourth-100">
        <Link>Accueil</Link>
      </div>
      <div className="shadow-accueil-shadow text-eighth-100 bg-fourth-100 h-16 text-base font-bold leading-6 flex justify-center items-center">
        <Link>A propos de nous</Link>
      </div>
      <div className="shadow-accueil-shadow bg-third-100 h-40 flex flex-col justify-evenly items-center">
        <h3 className="text-eighth-100 text-base font-bold leading-6 text-left">Contact</h3>
        <div className="flex gap-5">
          <div>
            <img src={bluemail} alt="mail" />
          </div>
          <Link
            href="mailto:IGL_team@gmail.com"
            className="text-[16px] font-semibold leading-[19.36px] text-left text-seventh-100 underline"
          >
            IGL_team@gmail.com
          </Link>
        </div>
        <div className="flex gap-5">
          <div>
            <img src={bluecall} alt="call" />
          </div>
          <span className="text-base font-semibold leading-5 text-left text-seventh-100">
            +213 541 663 212
          </span>
        </div>
      </div>
    </div>
  );
};

export default List;
