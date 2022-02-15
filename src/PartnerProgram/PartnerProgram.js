import React, { Component } from "react";
import { useState, useEffect } from 'react';
import './PartnerProgram.scss';

function PartnerProgram(props) {
  const [levels, setLevels] = useState([]);
  //const [currency, setCurrency] = useState([]);

  useEffect(() => {
    fetch("nimble.json")
      .then(res => res.json())
      .then(
        (result) => {
          setLevels(result.partnerProgram);
          //setCurrency(result.tokenConditions);
        }
      );
  }, []);

  function genegateBarColor(param) {
    switch (param) {
      case '15%':
        return 'linear-gradient(105.56deg, #E2F685 18.43%, #8AF9AD 89.58%)';
      case '7%':
        return 'linear-gradient(139.33deg, #CAEE39 -14.59%, #E99A3D 99.86%)';
      case '5%':
        return 'linear-gradient(139.33deg, #EED139 -14.59%, #E9713D 99.86%)';
      case '3%':
        return 'linear-gradient(139.33deg, #EE6439 -14.59%, #E9713D 99.86%)';
      default:
        return null;
    }
  }
  function genegateColor(param) {
    switch (param) {
      case '15%':
        return '#E2F685';
      case '7%':
        return '#CAEE39';
      case '5%':
        return '#EED139';
      case '3%':
        return '#EE6439';
      default:
        return null;
    }
  }
  function generateBarWidth(param) {
    switch (param) {
      case '15%':
        return '100%';
      case '7%':
        return '50%';
      case '5%':
        return '33%';
      case '3%':
        return '25%';
      default:
        return null;
    }
  }
  return (
    <section className="partner-program">
      <div className="container">
        <div className="partner-program__inner">
          <div className="partner-program__image">
            <img src="img/partner-program.jpg" alt="мобильное приложение" />
          </div>
          <div className="partner-program__content">
            <div className="partner-program__content-main">
              <div className="title partner-program__title">{props.title}</div>
              <ol className="partner-program__levels levels">
                {levels.map((level, i) => (
                  <li className="levels__item level">
                    <div className="level__num">Уровень {i + 1}</div>
                    <span className="level__divider" style={{ background: genegateBarColor(level.percent) }}></span>
                    <div className="level__descr" style={{ color: genegateColor(level.percent) }}>
                      {i == 0 ? "личная покупка" : "оборот"} от {level.from}
                    </div>
                    <div className="level__bar">
                      <span style={{
                        background: genegateBarColor(level.percent),
                        width: generateBarWidth(level.percent)
                      }}>
                      </span>
                    </div>
                    <div className="level__percent" style={{ color: genegateColor(level.percent) }}>{level.percent}</div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="partner-program__info">
              <img className="partner-program__info-icon" src="img/icons/info.svg" alt="info-icon" />
              <div className="partner-program__info-text">
                Участник Tokensale имеет возможность
                получать вознаграждение за продажу
                Nimble Token в своей структуре на 7 уровнях
                Уровни структуры, с которых доступен этот бонус,
                открываются в зависимости от общего оборота в
                структуре, включая собственные покупки участника.
                Вознаграждение выплачивается в той валюте, в
                которой произошла покупка Nimble Token в
                структуре – TRX, USDT, LTC, DTC, DOGE.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default PartnerProgram;