import React from "react";
import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
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
    const [isMenuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(!isMenuOpen);
    }
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
                        links.map((link, index) =>
                            <li className="nav-menu__item">
                                <Link className="nav-menu__link"
                                    to={`section-${index + 1}`}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={props.click}
                                >{link}</Link>
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