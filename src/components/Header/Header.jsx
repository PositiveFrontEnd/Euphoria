import React from "react";
import "./Header.scss";
import Nav from "./Nav/Nav";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import BookingBox from "./Search/BookingBox/BookingBox";
const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Nav />
      <Search />
      <BookingBox />
    </header>
  );
};

export default Header;
