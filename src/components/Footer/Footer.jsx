import React from "react";
import FooterBlock from "./FooterBlock/FooterBlock";
import Title from "./FooterBlock/Title";
import Info from "./FooterBlock/Info";
import { ReactComponent as Facebook } from "./FooterIcons/facebook.svg";
import { ReactComponent as Instagram } from "./FooterIcons/instagram.svg";
import { ReactComponent as Twitter } from "./FooterIcons/twitter.svg";
// import Facebook from "./FooterIcons/facebook.svg?react";
// import Instagram from "./FooterIcons/instagram.svg?react";
// import Twitter from "./FooterIcons/twitter.svg?react";
import { Link } from "react-router-dom";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__box">
        <FooterBlock>
          <Title text="Need Help" />
          <Info text="Contact Us" />
          <Info text="Track Order" />
          <Info text="Returns & Refunds" />
          <Info text="FAQ's" />
          <Info text="Career" />
        </FooterBlock>
        <FooterBlock>
          <Title text="Company" />
          <Info text="About Us" />
          <Info text="Euphoria Blog" />
          <Info text="Euphoriastan" />
          <Info text="Collaboration" />
          <Info text="Media" />
        </FooterBlock>
        <FooterBlock>
          <Title text="More Info" />
          <Info text="Term and Conditions" />
          <Info text="Privacy Policy" />
          <Info text="Shipping Policy" />
          <Info text="Sitemap" />
        </FooterBlock>
        <FooterBlock>
          <Title text="Location" />
          <Info text="support@euphoria.in" />
          <Info text="Eklingpura Chouraha, Ahmedabad Main Road" />
          <Info text="(NH 8- Near Mahadev Hotel) Udaipur, India- 313002" />
        </FooterBlock>
      </div>
      <div className="footer__box__icon">
        <Link to="/">
          <Facebook />
        </Link>
        <Link to="/">
          <Instagram />
        </Link>
        <Link to="/">
          <Twitter />
        </Link>

        <Link className="icon__svg" to="/">
          in
        </Link>
      </div>
      <p className="footer__text">
        Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
      </p>
    </div>
  );
};
export default Footer;
