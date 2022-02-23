import React from 'react';
import { useState } from 'react';
import './AboutNimble.scss';

function AboutNimble(props) {

    const [visibleText, setVisibleText] = useState(false);

    const toggleText = () => {
        setVisibleText(!visibleText);
    }

    return (
        <section id="section-1" className="about-nimble">
            <div className="container">
                <div className="about-nimble__inner">
                    <div className="about-nimble__content">
                        <h2 className="title about-nimble__title">{props.title}</h2>
                        <div className="about-nimble__text">
                            <p>
                                Nimble Token – это utility-токен игровой платформы KiboTron,
                                построенной на смарт-контрактах Tron. Применение технологии
                                блокчейн обеспечивает 100% честность игры и распределения средств,
                                мгновенные выплаты бонусов и призовых, и абсолютную анонимность.
                            </p>

                            <p className={visibleText ? '' : 'hidden'}>
                                Nimble, в переводе с английского – шустрый токен. Это энергия
                                платформы, двигатель, создающий постоянную динамику, приток
                                средств, активность игроков, и поддержание интереса к платформе.
                            </p>

                            <p className={visibleText ? '' : 'hidden'}>
                                Многообразие вариантов применения Nimble Token, его токеномика,
                                механизмы распределения и майнинга обеспечивают устойчивый рост
                                стоимости токена в перспективе.
                            </p>
                        </div>
                        <button className={visibleText ? 'toggle-text active' : 'toggle-text'} type="button" onClick={toggleText}>
                            {visibleText ? "Скрыть" : "Раскрыть"}
                        </button>
                    </div>
                    <div className="about-nimble__img">
                        <img src="img/nimble-token.png" alt="nimble token" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutNimble;