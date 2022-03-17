import React, { Component } from "react";
import { useState, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation";

function TokenSaleSlider(props) {
    const [tokens, setTokens] = useState([]);

    useEffect(() => {
        fetch("nimble.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setTokens(result.tokenSale);
                }
            );
    }, []);

    return (
        <Swiper className="token-sale__slider"
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={'auto'}
            navigation
        >
            {tokens.map((token, index) => (
                <SwiperSlide className="token-sale__list-item token-sale-card" key={`token-${index}`}>
                    <div className="token-sale-card__title">Раунд {index + 1}</div>
                    <div className="token-sale-card__content">
                        <div className="token-sale-card__price">{token}</div>
                        <div className="token-sale-card__num">3 000 000</div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default TokenSaleSlider;