import React, { Component } from "react";
import { useState, useEffect } from 'react';
import './NavMenu.scss';

function NavMenu() {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    fetch("nimble.json")
      .then(res => res.json())
      .then(
        (result) => {
          setLinks(result.nav);
        }
      );
  }, []);
  //let [dropLink, ...rest] = navLinks;
  return (
    <nav className="nav-menu header__nav">
      <ul className="nav-menu__list">
        {
          links.map(link =>
            <li className="nav-menu__item">
              <a href="#" className="nav-menu__link">{link}</a>
            </li>
          )
        }
      </ul>
    </nav>
  );
}

export default NavMenu;