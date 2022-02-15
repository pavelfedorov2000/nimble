import React, { Component } from "react";
import { useState, useEffect } from 'react';
import './TokenSaleList.scss';

function TokenSaleList() {
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

    //{ tokenSaleItems }
    return (
        <ol className="token-sale__list">
            {tokens.map((token, index) => (
                <li className="token-sale__list-item token-sale-card" key={`token-${index + 1}`}>
                    <div className="token-sale-card__title">Раунд {index + 1}</div>
                    <div className="token-sale-card__content">
                        <div className="token-sale-card__price">{token}</div>
                        <div className="token-sale-card__num">3 000 000</div>
                    </div>
                </li>
            ))}
        </ol>
    );
}

export default TokenSaleList;