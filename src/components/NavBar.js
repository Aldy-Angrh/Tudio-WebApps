import { useState, useEffect } from "react";
import { Navbar, Nav, Container, InputGroup, Badge } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import LogoTudio from "../assets/img/tudio_logo.png";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import {
  BadgeAr,
  Bell,
  BellFill,
  BellSlash,
  EnvelopePlus,
  Plus,
  PlusCircle,
  PlusLg,
  Search,
  SearchHeartFill,
  ThreeDotsVertical,
} from "react-bootstrap-icons";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <div className="Wrapper-navbar">
        <div className="Brand">
          <img src={LogoTudio} className="Logo" />
        </div>
        <div className="Navbar">
          <div className="SearchBar">
            <input
              placeholder="Cari Campaign Apa?"
              style={{ border: "none", width: "90%" }}
            />
            <div className="IconSearch">
              <Search size={12} style={{ alignSelf: "center" }} />
            </div>
          </div>

          <div className="Menu-bar">
            <div className="BorderPlus">
              <PlusLg color="darkcyan" size={26} />
            </div>
            <div className="Notif">
              <Bell size={27} />
              <Badge pill bg="danger">
                3
              </Badge>
            </div>
            <div>
              <ThreeDotsVertical size={27} />
            </div>
          </div>
          <div className="Profile"></div>
        </div>
      </div>
    </Router>
  );
};
