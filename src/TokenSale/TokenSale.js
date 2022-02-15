import React, { Component } from "react";
import ReactDOM from 'react-dom';
import TokenSaleList from '../TokenSaleList/TokenSaleList';
import TokenSaleSlider from '../TokenSaleSlider/TokenSaleSlider';
import TokenSaleConditions from '../TokenSaleConditions/TokenSaleConditions';
import './TokenSale.scss';

function TokenSale(props) {
  return (
    <section className="token-sale">
      <div className="container">
        <h2 className="section-title token-sale__title">{props.title}</h2>
        <div className="token-sale__inner">
          <TokenSaleList />
          <TokenSaleSlider />
          <TokenSaleConditions title="Условия" />
          <a className="btn token-sale__btn" href="#">{props.button}</a>
        </div>
      </div>
    </section>
  );
}

export default TokenSale;
