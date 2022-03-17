import React from "react";
import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
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

    return (
        <nav className="nav-menu header__nav">
            <ul className="nav-menu__list">
                {
                    links.map((link, index) =>
                        <li className="nav-menu__item" key={`nav-link-${index}`}>
                            <Link className="nav-menu__link"
                                to={`section-${index + 1}`}
                                spy={true}
                                smooth={true}
                                duration={500}
                            >{link}</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
}

export default NavMenu;