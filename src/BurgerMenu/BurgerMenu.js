import React from "react";
import { useState, useEffect } from 'react';
import './BurgerMenu.scss';

function BurgerMenu(props) {
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
  return (
    <div className={`${props.className}`}>
      <div className="burger-menu__top">
        <a href="#" className="logo">
          <img className="logo__img" src="img/logo.svg" alt="logo" />
        </a>
        <button className="burger-menu__close" onClick={props.click}>&times;</button>
      </div>
      <nav className="nav-menu burger-menu__nav">
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
      <div className="burger-menu__buttons">
        <button className="btn burger-menu__btn" type="button">Регистрация</button>
        <button className="btn burger-menu__btn btn--border" type="button">Войти</button>
      </div>
    </div >
  );
}

export default BurgerMenu;