import React, { Component } from "react";
import { useState, useEffect } from 'react';
import './TokenBenefits.scss';
// import Swiper core and required modules
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
//import 'swiper/modules/effect-fade/effect-fade';
import "swiper/modules/navigation/navigation";
//import "swiper/modules/pagination/pagination";
//import 'swiper/swiper.min.css';
//import 'swiper/css';
//import 'swiper/css/navigation';

function TokenBenefits() {
    const [benefits, setBenefits] = useState([]);

    useEffect(() => {
        fetch("nimble.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setBenefits(result.benefits);
                }
            );
    }, []);

    return (
        <div className="token-benefits">
            <div className="container">
                <div className="token-benefits__items">
                    {benefits.map(benefit => (
                        <div className="token-benefit token-benefits__item">
                            <div className="token-benefit__top">
                                <div className="token-benefit__img">
                                    <img src={`img/icons/${benefit.item}.svg`} alt="img" />
                                </div>
                                <div className="token-benefit__title">{benefit.item}</div>
                            </div>
                            <div className="token-benefit__descr">{benefit.text}</div>
                        </div>
                    ))}
                </div>
                <Swiper className="token-benefits__slider"
                    modules={[Navigation]}
                    spaceBetween={36}
                    slidesPerView={'auto'}
                    navigation
                >
                    {benefits.map(benefit => (
                        <SwiperSlide className="token-benefit token-benefits__item">
                            <div className="token-benefit__top">
                                <div className="token-benefit__img">
                                    <img src={`img/icons/${benefit.item}.svg`} alt="img" />
                                </div>
                                <div className="token-benefit__title">{benefit.item}</div>
                            </div>
                            <div className="token-benefit__descr">{benefit.text}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default TokenBenefits;