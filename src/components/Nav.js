import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

function Nav() {

  const menus = [
    { name: "모두보기", path: "/" },
    { name: "메인요리", path: "/maindish" },
    { name: "밑반찬", path: "/sidedish" },
    { name: "간식", path: "/sidedish" },
    { name: "간단요리", path: "/simple" },
    { name: "초대요리", path: "/welcome" },
    { name: "채식", path: "/vege" },
    { name: "한식", path: "/korean" },
    { name: "양식", path: "/weston" },
    { name: "별식", path: "/special" },
    { name: "중식", path: "/chinese" },
    { name: "퓨전", path: "/mix" },
    { name: "분식", path: "/flour" },
    { name: "안주", path: "/relish" },
    { name: "베이킹", path: "/baking" },
    { name: "다이어트", path: "/diet" },
    { name: "도시락", path: "/box" }
  ];

  return (
    <div className="nav">
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} className="link" key={index}>
            <NavItem
              menu={menu}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Nav;