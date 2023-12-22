import React from "react";
import NavList from "./NavList";
import ListItem from "./LIstItem";
import "./Nav.scss";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <NavList>
        <Link>
          <ListItem text="Shop" />
        </Link>
        <Link>
          <ListItem text="Men" />
        </Link>
        <Link>
          <ListItem text="Women" />
        </Link>
        <Link>
          <ListItem text="Combos" />
        </Link>
        <Link>
          <ListItem text="Joggers" />
        </Link>
      </NavList>
    </div>
  );
};

export default Nav;
