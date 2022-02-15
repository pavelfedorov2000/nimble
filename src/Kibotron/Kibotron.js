import React, { Component } from "react";
import { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import './Kibotron.scss';

function Kibotron() {
    const [kibotrons, setKibotrons] = useState([]);

    useEffect(() => {
        fetch("nimble.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setKibotrons(result.kibotron);
                }
            );
    }, []);
    return (
        <section className="kibotron">
            <div className="container">
                <div className="kibotron__inner">
                    <div className="kibotron__decor">
                        <img src="img/k.svg" alt="img" />
                    </div>
                    <div className="kibotron__content">
                        <div className="kibotron__title">
                            <img className="kibotron__logo" src="img/icons/kibotron.svg" alt="kibotron" />
                            Kibotron
                        </div>
                        <div className="kibotron__items">
                            {kibotrons.map(kibotron => (
                                <div className="kibotron__item">
                                    <div className="kibotron__item-title">{kibotron.title}</div>
                                    <div className="kibotron__item-text">{kibotron.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="kibotron__bottom">
                    <div className="kibotron__text">
                        MVP-версия игровой платформы KiboTron c действующими
                        лотереями и количеством пользователей 6000 +
                    </div>
                    <a className="btn kibotron__btn btn--blue" href="#">Перейти</a>
                </div>
            </div>
        </section>
    );
}

export default Kibotron;