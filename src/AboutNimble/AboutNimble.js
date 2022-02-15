import React from 'react';
import './AboutNimble.scss';

function AboutNimble(props) {
    return (
        <section className="about-nimble">
            <div className="container">
                <div className="about-nimble__inner">
                    <div className="about-nimble__img">
                        <img src="img/nimble-token.png" alt="nimble token" />
                    </div>
                    <div className="about-nimble__content">
                        <h2 className="title about-nimble__title">{props.title}</h2>
                        <div className="about-nimble__text">
                            <p>
                                Nimble Token – это utility-токен игровой платформы KiboTron,
                                построенной на смарт-контрактах Tron. Применение технологии
                                блокчейн обеспечивает 100% честность игры и распределения средств,
                                мгновенные выплаты бонусов и призовых, и абсолютную анонимность.
                            </p>

                            <p>
                                Nimble, в переводе с английского – шустрый токен. Это энергия
                                платформы, двигатель, создающий постоянную динамику, приток
                                средств, активность игроков, и поддержание интереса к платформе.
                            </p>

                            <p>
                                Многообразие вариантов применения Nimble Token, его токеномика,
                                механизмы распределения и майнинга обеспечивают устойчивый рост
                                стоимости токена в перспективе.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutNimble;