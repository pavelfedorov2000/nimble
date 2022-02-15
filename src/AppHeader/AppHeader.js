import React, {
  Component
} from "react";
import { useState } from 'react';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './AppHeader.scss';

function AppHeader() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <header className="header">
      <BurgerMenu click={closeMenu} className={isMenuOpen ? 'burger-menu active' : 'burger-menu'} isOpen={isMenuOpen} />
      <div className="container" >
        <div className="header__inner">
          <Logo />
          <NavMenu />
          <button className="btn header__btn" type="button">Регистрация</button>
          <button className="btn header__btn btn--border" type="button">Войти</button>
          <button className="sign-in-btn header__sign-in" type="button">
            <img src="img/icons/sign-in.svg" alt="иконка входа" />
          </button>
          <button className="burger-btn" onClick={openMenu}>
            <img src="img/icons/burger.svg" alt="иконка бургер-меню" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;