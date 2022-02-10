import React, { Component } from "react";
import './NavMenu.scss';

function NavMenu() {
    const navLinks = ['Dashboard', 'Message', 'Help'];
    let [activeLink, ...rest] = navLinks;
    return (
        <nav className="nav-menu header__nav">
            <ul className="nav-menu__list">
                <li className="nav-menu__item">
                    <a href="#" className="nav-menu__link nav-menu__link--active">{activeLink}</a>
                </li>
                {
                    rest.map(navLink =>
                        <li className="nav-menu__item">
                            <a href="#" className="nav-menu__link">{navLink}</a>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
}

export default NavMenu;