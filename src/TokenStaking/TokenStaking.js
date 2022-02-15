import React, { Component } from "react";
import { useState, useEffect } from 'react';
import './TokenStaking.scss';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation";

function TokenStaking(props) {
  const [stakings, setStaking] = useState([]);
  //const [legend, setLegend] = useState([]);

  useEffect(() => {
    fetch("nimble.json")
      .then(res => res.json())
      .then(
        (result) => {
          setStaking(result.staking);
          //let legends = Object.keys(result.staking[0]).slice(-1, 1);
          //console.log(legends);
          //setLegend(Object.keys(result.staking));
        }
      );
  }, []);

  const params = {
    spaceBetween: 15,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };

  return (
    <section className="token-staking">
      <div className="container token-staking__container">
        <div className="token-staking__top">
          <h2 className="section-title token-staking__title section-title--accent">{props.title}</h2>
          <div className="token-staking__revenue">{props.revenue}</div>
        </div>
        <div className="token-staking__chart">
          <ul className="token-staking__legend">
            <li className="token-staking__legend-item">Без ускорителя</li>
            <li className="token-staking__legend-item">С ускорителем</li>
          </ul>
          <div className="token-staking__chart-row">
            {stakings.map((item, i) => (
              <div className="staking-chart">
                <div className="staking-chart__bar">
                  <img src={`img/bars/bar-${i + 1}.svg`} alt="" />
                </div>
                <div className="staking-chart__interval">{item.interval}</div>
              </div>
            ))}
          </div>
          <Swiper className="token-staking__slider">
            {stakings.map((item, i) => (
              <SwiperSlide {...params} className="staking-chart">
                <div className="staking-chart__bar">
                  <img src={`img/bars/bar-${i + 1}.svg`} alt="" />
                </div>
                <div className="staking-chart__interval">{item.interval}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="token-staking__text">
          <p>
            Держатель Nimble Token имеет возможность
            получать вознаграждение за хранение токенов
            на балансе. Процент стейкинга зависит от текущего
            количества Nimble Token на балансе.
          </p>

          <p>
            Стейкинг Nimble Token включается с момента
            размещения токенов на балансе.
          </p>

          <p>
            Ускоритель – коэффициент 1.5 к базовому проценту
            стейкинга. Применяется для держателей токенов KBT
            с количеством от 3000 KBT.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TokenStaking;