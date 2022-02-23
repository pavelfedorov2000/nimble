import React from "react";
import { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import './Kibotron.scss';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation";

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

    const params = {
        spaceBetween: 33,
        slidesPerView: 'auto',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    };

    return (
        <section id="section-5" className="kibotron">
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
                        <Swiper {...params} className="kibotron__slider">
                            {kibotrons.map(kibotron => (
                                <SwiperSlide className="kibotron__item">
                                    <div className="kibotron__item-title">{kibotron.title}</div>
                                    <div className="kibotron__item-text">{kibotron.text}</div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
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