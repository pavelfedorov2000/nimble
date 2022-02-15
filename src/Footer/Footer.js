import React, { Component } from "react";
import { useState, useEffect } from 'react';
import './Footer.scss';

function Footer(props) {
    const [socials, setSocials] = useState([]);

    useEffect(() => {
        fetch("nimble.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setSocials(result.social);
                }
            );
    }, []);
    return (
        <footer className="footer">
            <div className="container">
                <div className="cooperation footer__cooperation">
                    <div className="cooperation__title">По вопросам сотрудничества:</div>
                    <a className="cooperation__link" href={`mailto:${props.email}`}>{props.email}</a>
                </div>
                <ul className="social">
                    {socials.map((social, i) => (
                        <li className="social__item">
                            <a className="social__link" href="#">
                                <img className="social__img" src={(i == 0 || i == 1) ? "img/icons/telegram.svg" : `img/icons/${social}.svg`} alt={(i == 0 || i == 1) ? "telegram" : social} />
                                <span className="social__descr">{social}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;