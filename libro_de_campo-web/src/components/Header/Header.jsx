import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Platanera.png";

import "./Header.css";

import { AiOutlineFileAdd } from "react-icons/ai";
import { BsFillDoorOpenFill, BsDoorOpen, BsSunFill, BsSun  } from "react-icons/bs";
import { IoIosWater, IoWaterOutline } from "react-icons/io";


const Header = () => {

    const navigate = useNavigate()

  return (
    <header className="header">
      <div className="img-container">
        <img className="logo" src={logo} />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="">
              Crear
              <i>
                <AiOutlineFileAdd />
              </i>
            </a>
            <span></span>
          </li>
          <li>
            <a href="">
              Riego
              <i>
                <IoIosWater />
              </i>
            </a>
            <span></span>
          </li>
          <li>
            <a href="">
              Nuevo mes
              <i>
                <AiOutlineFileAdd />
              </i>
            </a>
            <span></span>
          </li>
        </ul>
      </nav>
      <div className="buttons-container">
        <i className="door">
          <BsFillDoorOpenFill onClick={() => navigate('/')} />
        </i>
        <i className="mode">
            <BsSunFill />
        </i>
      </div>
    </header>
  );
};

export default Header;
