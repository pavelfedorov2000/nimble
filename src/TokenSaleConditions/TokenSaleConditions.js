import React, { Component } from "react";
import { useState, useEffect } from 'react';
import './TokenSaleConditions.scss';

function TokenSaleConditions() {
    const [conditions, setConditions] = useState([]);

    useEffect(() => {
        fetch("nimble.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setConditions(Object.entries(result.tokenConditions));
                }
            );
    }, []);
    return (
        <div className="token-sale-conditions">
            <div className="token-sale-conditions__top">
                <h3 className="token-sale-conditions__title">Условия</h3>
                <img className="token-sale-conditions__logo" src="img/logo.svg" alt="nimble logo" />
            </div>
            <dl className="token-sale-conditions__list">
                {conditions.map(condition => (
                    <div className="token-sale-conditions__list-item">
                        <dt>{condition[0]}:</dt>
                        <dd>{(typeof condition === 'string') ? condition[1] : condition[1].join(', ')}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

export default TokenSaleConditions;