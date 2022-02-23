import React, { Component } from "react";
import { useState, useEffect } from 'react';
import './TokenFeatures.scss';

function TokenFeatures(props) {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch("nimble.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setFeatures(Object.entries(result.features));
                }
            );
    }, []);
    return (
        <section className="token-features">
            <div className="container">
                <h2 className="title token-features__title mob-visible">{props.title}</h2>
                <div className="token-features__inner">
                    <div className="token-features__pie-box token-pie">
                        <div className="token-pie__img">
                            <div className="token-pie__descr token-pie__descr--1">Маркетинг</div>
                            <div className="token-pie__descr token-pie__descr--2">Airdrop</div>
                            <div className="token-pie__descr token-pie__descr--3">Токенсейл</div>
                            <img src="img/pie.svg" alt="pie" />
                        </div>
                        <div className="token-pie__info">
                            <div className="token-pie__info-title">
                                Максимальное количество токенов
                            </div>
                            <div className="token-pie__info-num">
                                1 000 000 000
                            </div>
                        </div>
                    </div>
                    <div className="token-features__content">
                        <h2 className="title token-features__title mob-hidden">{props.title}</h2>
                        <dl className="token-features__list">
                            {features.map(feature => (
                                <div className="token-features__list-item">
                                    <dt>{feature[0]}:</dt>
                                    <dd>{feature[1]}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TokenFeatures;