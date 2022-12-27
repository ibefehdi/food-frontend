import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoStarOutline } from "react-icons/io5";
import { AiOutlineCoffee } from "react-icons/ai";
import { GrIceCream } from "react-icons/gr";
import { GiBread } from "react-icons/gi";
import { FaStroopwafel } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";
import { HiOutlineFilter } from "react-icons/hi";

import MenuList from "./MenuList";

function Dashboard() {
  const [activeLink, setActiveLink] = useState("Signature");
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const menuItems = [
    { name: "Signature", href: "#signature", icon: <IoStarOutline /> },
    { name: "Croissant", href: "#croissant", icon: <GiBread /> },
    { name: "Waffle", href: "#waffle", icon: <FaStroopwafel /> },
    { name: "Coffee", href: "#coffee", icon: <AiOutlineCoffee /> },
    { name: "Ice Cream", href: "#icecream", icon: <GrIceCream /> },
  ];
  const location = useLocation();

  return (
    <div className="dashboard">
      <div className="main__dashboard">
        <div className="heading">
          <div className="introduction">
            <h1 className="welcome__message">Welcome, Gorry</h1>
            <span className="welcome__text">
              Discover whatever you need easily
            </span>
          </div>
          <div className="searchArea">
            <SlMagnifier className="searchIcon" />
            <input
              type="search"
              placeholder="Search Product..."
              className="search"
            />
            <HiOutlineFilter className="filterIcon" />
          </div>
        </div>
        <div className="selection">
          {menuItems.map((item, index) => (
            <NavLink
              to={item.href}
              key={index}
              activeclassName="active__tab"
              className={activeLink === item.name ? "active__tab tab" : "tab"}
              onClick={() => onUpdateActiveLink(item.name)}
            >
              <span className="tab__icon">{item.icon}</span>
              <p className="item__name">{item.name}</p>
            </NavLink>
          ))}
        </div>
        <div className="menulist__dashboard">
          <MenuList menuName={location.hash} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
