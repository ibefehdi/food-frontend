import React from "react";


import {
  IoLogOutOutline,
  IoSettingsOutline,
  IoBookmarkOutline,
  IoPieChartOutline,
  IoHomeOutline,
  IoGridOutline,
} from "react-icons/io5";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
function Sidebar({ children }) {
  const topmenuItems = [
    {
      name: "home",
      link: "/",
      icon: <IoHomeOutline />,
    },
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <IoGridOutline />,
    },
    {
      name: "Reviews",
      link: "/reviews",
      icon: <IoPieChartOutline />,
    },
    {
      name: "Bookmark",
      link: "/bookmark",
      icon: <IoBookmarkOutline />,
    },
  ];
  const bottommenuItems = [
    { name: "Settings", link: "/settings", icon: <IoSettingsOutline /> },
    {
      name: "logout",
      link: "/signout",
      icon: <IoLogOutOutline />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top__section">
          <img src={logo} className="logo" alt="sitelogo" />
        </div>
        <div className="link__list">
          {topmenuItems.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
            </NavLink>
          ))}
        </div>

        <div className="bottom__section">
          {bottommenuItems.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              className="link"
              activeClassName="active"
            >
              <div className="icon">{item.icon}</div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
