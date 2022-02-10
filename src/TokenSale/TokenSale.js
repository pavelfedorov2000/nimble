import React, { Component } from "react";
import ReactDOM from 'react-dom';
import TokenSaleList from '../TokenSaleList/TokenSaleList';

function TokenSale() {
  return (
    <section className="token-sale">
      <h2 className="token-sale__title">Token Sale</h2>
      <div className="container">
        <div className="token-sale__inner">
          <TokenSaleList />
        </div>
      </div>
    </section>
  );
}

export default TokenSale;
