import React, { Component } from "react";
import ReactDOM from 'react-dom';
import TokenSaleList from '../TokenSaleList/TokenSaleList';
import TokenSaleConditions from '../TokenSaleConditions/TokenSaleConditions';
import './TokenSale.scss';

function TokenSale() {
    return (
        <section className="token-sale">
            <div className="container">
                <h2 className="section-title token-sale__title">Token Sale</h2>
                <div className="token-sale__inner">
                    <TokenSaleList />
                    <TokenSaleConditions />
                    <a className="btn token-sale__btn" href="#">Принять участие</a>
                </div>
            </div>
        </section>
    );
}

export default TokenSale;
